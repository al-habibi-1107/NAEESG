const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:8080/api/webshop';

export async function listProducts(params: Record<string, string>) {
  const qs = new URLSearchParams(params);
  const res = await fetch(`${API_BASE}/catalog/products?${qs.toString()}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load products');
  return res.json();
}

export async function getProduct(slug: string) {
  const res = await fetch(`${API_BASE}/catalog/products/${slug}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Not found');
  return res.json();
}

export async function getFacets(params: Record<string, string>) {
  const qs = new URLSearchParams(params);
  const res = await fetch(`${API_BASE}/facets?${qs.toString()}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load facets');
  return res.json();
}

interface CheckoutPayload {
  items: Array<{ productId: string; quantity: number }>;
  customer: { name: string; email: string; address: string };
  paymentMethod?: string;
  notes?: string;
}

export async function checkout(payload: CheckoutPayload) {
  const res = await fetch(`${API_BASE}/orders/checkout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
}