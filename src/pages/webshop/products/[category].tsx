// src/pages/products/[category].tsx
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

// --- Types that match your API responses ---
interface ProductCard {
  id: number;
  name: string;
  slug: string;
  brand: string | null;
  thumbnailUrl: string | null;
  priceFrom: number | null;
}
interface ProductsResponse {
  items: ProductCard[];
  total: number;
  page: number;
  pageSize: number;
}

interface FacetValue { value: string; count: number }
interface FacetsResponse { facets: Record<string, FacetValue[]> }

interface PageProps {
  category: string;
  products: ProductsResponse | null;
  facets: FacetsResponse | null;
  error?: string | null;
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8080/api/webshop';

type Query = { [key: string]: string | string[] | number | undefined };

export default function CategoryPage({ category, products, facets, error }: PageProps) {
  const router = useRouter();
  const query = router.query as Query;

  const pageTitle = `${category} | Products`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="robots" content="index,follow" />
      </Head>

      <main style={{ maxWidth: 1200, margin: '24px auto', padding: '180px 4% 10px 4%' }}>
        <h1 style={{ marginBottom: 16 }}>{category}</h1>

        {error && (
          <div style={{ background: '#fee2e2', color: '#991b1b', padding: 12, borderRadius: 6, marginBottom: 16 }}>
            {error}
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 24 }}>
          {/* Facets sidebar */}
          <aside style={{ border: '1px solid #eee', borderRadius: 8, padding: 16 }}>
            <h3 style={{ marginTop: 0, marginBottom: 12 }}>Filters</h3>

            {/* Brand (simple input via query) */}
            <section style={{ marginBottom: 16 }}>
              <div style={{ fontWeight: 600, marginBottom: 8 }}>Brand</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {/* Two quick choices for now; you can render dynamically later */}
                {['Siemens', 'Bonton'].map((b) => {
                  const selected = String(query.brand ?? '') === b;
                  const href = {
                    pathname: router.pathname,
                    query: { ...query, brand: selected ? undefined : b },
                  };
                  return (
                    <Link key={b} href={href} scroll={false}>
                      <span
                        style={{
                          border: '1px solid #ddd',
                          padding: '4px 8px',
                          borderRadius: 16,
                          background: selected ? '#111' : '#fff',
                          color: selected ? '#fff' : '#111',
                          cursor: 'pointer',
                          fontSize: 13,
                        }}
                      >
                        {b}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* Dynamic facets from API (single-select per facet) */}
            {facets && facets.facets &&
              Object.entries(facets.facets).map(([code, values]) => (
                <section key={code} style={{ marginBottom: 16 }}>
                  <div style={{ fontWeight: 600, marginBottom: 8 }}>{code.toUpperCase()}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {values.map((fv) => {
                      const selected = String(query[code] ?? '') === fv.value;
                      const href = {
                        pathname: router.pathname,
                        query: JSON.parse(
                          JSON.stringify({
                            ...query,
                            [code]: selected ? undefined : fv.value,
                          })
                        ),
                      };
                      return (
                        <Link key={`${code}:${fv.value}`} href={href} scroll={false}>
                          <span
                            title={`${fv.value} (${fv.count})`}
                            style={{
                              border: '1px solid #ddd',
                              padding: '4px 8px',
                              borderRadius: 16,
                              background: selected ? '#111' : '#fff',
                              color: selected ? '#fff' : '#111',
                              cursor: 'pointer',
                              fontSize: 13,
                            }}
                          >
                            {fv.value} ({fv.count})
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              ))}
          </aside>

          {/* Product grid */}
          <section>
            {!products || !products.items?.length ? (
              <div style={{ padding: 24, border: '1px dashed #ccc', borderRadius: 8 }}>No products found.</div>
            ) : (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
                  {products.items.map((p) => (
                    <article key={p.id} style={{ border: '1px solid #eee', borderRadius: 8, padding: 12 }}>
                      <Link href={{ pathname: '/product/[slug]', query: { slug: p.slug } }}>
                        <div style={{ marginBottom: 8, aspectRatio: '1/1', background: '#fafafa', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {p.thumbnailUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={p.thumbnailUrl} alt={p.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                          ) : (
                            <span style={{ color: '#999' }}>No image</span>
                          )}
                        </div>
                        <h3 style={{ margin: '0 0 6px', fontSize: 16 }}>{p.name}</h3>
                        <div style={{ color: '#666', fontSize: 13 }}>{p.brand || ''}</div>
                        <div style={{ marginTop: 8, fontWeight: 600 }}>
                          {p.priceFrom != null ? `₹${Number(p.priceFrom).toFixed(2)}` : '—'}
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                <Pagination total={products.total} page={products.page} pageSize={products.pageSize} />
              </>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

function Pagination({ total, page, pageSize }: { total: number; page: number; pageSize: number }) {
  const router = useRouter();
  const q = router.query as Query;
  const pages = Math.max(1, Math.ceil(total / pageSize));
  if (pages <= 1) return null;

  const btn = (p: number, label?: string) => (
    <Link
      key={p}
      href={{ pathname: router.pathname, query: { ...q, page: String(p) } }}
      scroll={false}
      style={{
        padding: '6px 10px',
        border: '1px solid #ddd',
        borderRadius: 6,
        background: p === page ? '#111' : '#fff',
        color: p === page ? '#fff' : '#111',
        marginRight: 6,
      }}
    >
      {label ?? p}
    </Link>
  );

  return (
    <div style={{ marginTop: 16 }}>
      {btn(Math.max(1, page - 1), 'Prev')}
      {Array.from({ length: pages }, (_, i) => i + 1)
        .slice(Math.max(0, page - 3), Math.min(pages, page + 2))
        .map((p) => btn(p))}
      {btn(Math.min(pages, page + 1), 'Next')}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (ctx) => {
  const category = String(ctx.params?.category || '').toUpperCase();

  // Build query — keep only string values
  const queryEntries = Object.entries(ctx.query).filter(([, v]) => typeof v === 'string') as Array<[string, string]>;
  const q = new URLSearchParams(queryEntries);
  q.set('category', category);

  const base = API_BASE;

  try {
    const [prodRes, facetRes] = await Promise.all([
      fetch(`${base}/catalog/products?${q.toString()}`, { headers: { 'x-ssr': '1' } }),
      fetch(`${base}/facets?${q.toString()}`, { headers: { 'x-ssr': '1' } }),
    ]);

    if (!prodRes.ok || !facetRes.ok) {
      return {
        props: {
          category,
          products: prodRes.ok ? ((await prodRes.json()) as ProductsResponse) : null,
          facets: facetRes.ok ? ((await facetRes.json()) as FacetsResponse) : null,
          error: `Upstream API error (${prodRes.status}/${facetRes.status})`,
        },
      };
    }

    const [products, facets] = (await Promise.all([prodRes.json(), facetRes.json()])) as [ProductsResponse, FacetsResponse];

    return { props: { category, products, facets, error: null } };
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : typeof e === 'string' ? e : 'Failed to load';
    return { props: { category, products: null, facets: null, error: message } };
  }
};