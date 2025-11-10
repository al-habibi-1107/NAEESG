import { useState,useEffect } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Flex,
  HStack,
  Stack,
  Badge,
  Card,
  AspectRatio
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import {allProducts} from '../../models/product';
import { allCategories } from "../../models/category";
import { allBrands } from "../../models/brand";
import ProductCard from "../../components/productCard";
import SearchBarWithFilters from "../../components/SearchBarWithFilters";
import NoProductsMsg from "../../components/NoProductsMsg";

// --- UI helpers for new layout ---
const CircleCategory: React.FC<{ src: string; label: string; onClick?: () => void }> = ({ src, label, onClick }) => (
  <Stack
    align="center"
    spacing={3}
    onClick={onClick}
    cursor={onClick ? 'pointer' : 'default'}
    w={{ base: 24, md: 28, lg: 32 }}
    flexShrink={0}
  >
    <Flex
      w={{ base: 20, md: 24, lg: 28, xl: 28, '2xl': 32 }}
      h={{ base: 20, md: 24, lg: 28, xl: 28, '2xl': 32 }}
      borderRadius="full"
      borderWidth="2px"
      borderColor="black"
      align="center"
      justify="center"
      overflow="hidden"
      bg="white"
    >
      <Image
        src={src}
        alt={label}
        objectFit="contain"
        w="100%"
        h="100%"
      />
    </Flex>
    <Text
      fontWeight={600}
      fontSize={{ base: 'xs', md: 'sm' }}
      textAlign="center"
      noOfLines={2}
    >
      {label}
    </Text>
  </Stack>
);

const PosterCard: React.FC<{ src: string; title?: string; discount?: string; brand?: string }> = ({
  src,
  title,
  discount,
  brand,
}) => (
  <Box textAlign="center">
    {/* Image card */}
    <Box
      position="relative"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      bg="white"
    >
      {discount && (
        <Badge
          position="absolute"
          top={2}
          left={2}
          colorScheme="purple"
          fontSize="0.8rem"
          zIndex={1}
        >
          {discount}
        </Badge>
      )}
      <AspectRatio
        ratio={{ base: 1, md: 4 / 3 }}
        w="100%"
      >
        <Image
          src={src}
          alt={title || 'deal'}
          objectFit="cover"
        />
      </AspectRatio>
    </Box>

    {/* Brand + Title below (outside card) */}
    {(brand || title) && (
      <Box mt={3}>
        {brand && (
          <Image
            src={brand}
            alt="Brand"
            mx="auto"
            mb={1}
            h={{ base: 4, md: 6 }}
            objectFit="contain"
          />
        )}
        {title && (
          <Text fontWeight={700} fontSize={{ base: 'sm', md: 'md' }}>
            {title}
          </Text>
        )}
      </Box>
    )}
  </Box>
);

const FourUpCategoryCard: React.FC<{ title: string; images: ReadonlyArray<string> }> = ({ title, images }) => (
  <Box>
    <Text fontWeight={700} mb={3} fontSize={{ base: 'md', md: 'lg' }}>{title}</Text>
    <SimpleGrid columns={2} gap={3}>
      {images.slice(0, 4).map((img, i) => (
        <Box key={i} borderRadius="md" overflow="hidden" bg="white" boxShadow="sm">
          <Image src={img} alt={`${title}-${i + 1}`} w="100%" h={32} objectFit="cover" />
        </Box>
      ))}
    </SimpleGrid>
  </Box>
);

const OfferSlider: React.FC<{ images: string[] }> = ({ images }) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % images.length), 3000);
    return () => clearInterval(t);
  }, [images.length]);
  return (
    <Box position="relative" borderRadius="md" overflow="hidden" boxShadow="lg">
      <Image src={images[idx]} alt={`offer-${idx}`} w="100%" h={{ base: 40, md: 56 }} objectFit="cover" />
    </Box>
  );
};

// --- Reusable Section component ---
type Poster = { src: string; title?: string; discount?: string; brand?: string };
type Group = { title: string; images: ReadonlyArray<string> };
interface SectionProps {
  title: string;
  posters: ReadonlyArray<Poster>;
  groups: ReadonlyArray<Group>;
  wrapInCard?: boolean; // if true, wrap section body in <Card>
}

const SectionBlock: React.FC<SectionProps> = ({ title, posters, groups, wrapInCard }) => {
  const Body = (
    <>
      <Heading size="lg" mb={4}>{title}</Heading>
      {/* Posters row: scrollable on mobile, grid on md+ */}
      <SimpleGrid
        columns={{ base: posters.length, md: posters.length }}
        gap={4}
        mb={6}
        display={{ base: 'inline-flex', md: 'grid' }}
        overflowX={{ base: 'auto', md: 'visible' }}
        whiteSpace={{ base: 'nowrap', md: 'normal' }}
      >
        {posters.map((p, i) => (
          <Box
            key={i}
            flex={{ base: '0 0 80%', md: 'initial' }}
            minW={{ base: '80%', sm: '70%', md: 'auto' }}
          >
            <PosterCard
              src={p.src}
              title={p.title}
              discount={p.discount}
              brand={p.brand}
            />
          </Box>
        ))}
      </SimpleGrid>
      {/* Three category groups each with four images */}
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
        {groups.map((g) => (
          <FourUpCategoryCard key={g.title} title={g.title} images={g.images} />
        ))}
      </SimpleGrid>
    </>
  );

  return wrapInCard ? (
    <Card padding={8}>{Body}</Card>
  ) : (
    <Box>{Body}</Box>
  );
};

// --- Demo data (replace image paths with real assets in /public) ---
const roundCategories = [
  { src: "/CATEGORIES/MCB.png", label: "MCB - Miniature Circuit Breakers" },
  { src: "/CATEGORIES/MCCB.png", label: "MCCB - Moulded Case Circuit Breakers" },
  { src: "/CATEGORIES/RCCB.png", label: "RCCB - Residual Current Circuit Breakers" },
  { src: "/CATEGORIES/ACCL.png", label: "ACCL\n" },
  { src: "/CATEGORIES/CHANGEOVER-SWITCH.png", label: "Changeover Switches" },
  { src: "/CATEGORIES/DB-BOX.png", label: "DB Boxes\n" },
  { src: "/CATEGORIES/WIRES.png", label: "Wires & Cables\n" },
  { src: "/CATEGORIES/SWITCH.png", label: "Electric Switches\n" },
];

const panelBuilders = {
  title: "Panel Builder's - Exclusive Deals",
  posters: [
    { src: "/Panel_Section_1/5SJ-MCB.png", title: "5SJ MCB", discount: "71% Off *", brand: "/siemens_logo.png" },
    { src: "/Panel_Section_1/5TJ-MCB.png", title: "5TJ MCB", discount: "Best Deal", brand: "/siemens_logo.png" },
    { src: "/Panel_Section_1/ACCL.png", title: "ACCL", discount: "66% Off *", brand: "/siemens_logo.png" },
    { src: "/Panel_Section_1/RCCB.png", title: "RCCB", discount: "75% Off *", brand: "/siemens_logo.png" },
    { src: "/Panel_Section_1/MCCB.png", title: "MCCB", discount: "75% Off *", brand: "/siemens_logo.png" },
    { src: "/Panel_Section_1/DB-BOXES.png", title: "DB Box", discount: "75% Off *", brand: "/siemens_logo.png" },
    { src: "/Panel_Section_1/Changeover-Switch.png", title: "Changeover Switch", discount: "75% Off *", brand: "/siemens_logo.png" },
  ],
  groups: [
    { title: "MCB", images: ["/cat/mcb1.png", "/cat/mcb2.png", "/cat/mcb3.png", "/cat/mcb4.png"] },
    { title: "MCCB", images: ["/cat/mccb1.png", "/cat/mccb2.png", "/cat/mccb3.png", "/cat/mccb4.png"] },
    { title: "RCCB", images: ["/cat/rccb1.png", "/cat/rccb2.png", "/cat/rccb3.png", "/cat/rccb4.png"] },
  ],
} as const;

const oemDeals = {
  title: "OEM's - Best Deals",
  posters: [
    { src: "/posters/wire-50.png", title: "Cables", discount: "Up to 50% Off *", brand: "/brands/bonton.png" },
    { src: "/posters/switches-40.png", title: "Switches", discount: "Up to 40% Off *", brand: "/brands/bonton.png" },
    { src: "/posters/others-35.png", title: "Accessories", discount: "Up to 35% Off *", brand: "/brands/siemens.png" },
  ],
  groups: [
    { title: "Electric Wires & Cables", images: ["/cat/w1.png", "/cat/w2.png", "/cat/w3.png", "/cat/w4.png"] },
    { title: "Switches & Sockets", images: ["/cat/s1.png", "/cat/s2.png", "/cat/s3.png", "/cat/s4.png"] },
    { title: "Other Accessories", images: ["/cat/o1.png", "/cat/o2.png", "/cat/o3.png", "/cat/o4.png"] },
  ],
} as const;

const homeAppliances = {
  title: "Home electrical appliances - Trending Deals",
  posters: [
    { src: "/Home_Section_2/WIRES.png", title: "Wires & Cables", discount: "Up to 47% Off *", brand: "/bonton_logo.png" },
    { src: "/Home_Section_2/sockets.png", title: "Electric Sockets", discount: "Up to 62% Off *", brand: "/siemens_logo.png" },
    { src: "/Home_Section_2/Switches.png", title: "Mark Switches", discount: "Up to 62% Off *", brand: "/siemens_logo.png" },
    { src: "/Home_Section_2/Modular-Plate.png", title: "Modular Plate", discount: "Up to 62% Off *", brand: "/siemens_logo.png" },
    
  ],
  groups: [
    { title: "MPCB", images: ["/cat/mp1.png", "/cat/mp2.png", "/cat/mp3.png", "/cat/mp4.png"] },
    { title: "Push Buttons", images: ["/cat/pb1.png", "/cat/pb2.png", "/cat/pb3.png", "/cat/pb4.png"] },
    { title: "Indicating Lamps", images: ["/cat/il1.png", "/cat/il2.png", "/cat/il3.png", "/cat/il4.png"] },
  ],
} as const;

const offerSliderImages = [
  "/offers/offer-1.png",
  "/offers/offer-2.png",
  "/offers/offer-3.png",
  "/offers/offer-4.png",
];





const ProductsPage: React.FC = ()=>{

    const [filteredProducts, setFilteredProducts] = useState(allProducts);
    const [isSearchActive, setIsSearchActive] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);

    const router = useRouter();

    const sliderBrands = [
      "/bonton_logo.png",
      "/siemens_logo.png",

    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderBrands.length);
      }, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }, [sliderBrands.length]);
  
    


  // Handle search logic
  const handleSearch = (query: string) => {
    setIsSearchActive(query.length > 0); // Activate search results if query is not empty
    const filtered = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.referenceNumbers.some((ref) =>
      ref.toLowerCase().includes(query.toLowerCase())
    ) ||
    product.keywords.some((keyword) =>
      keyword.toLowerCase().includes(query.toLowerCase())
    )
    );
    setFilteredProducts(filtered);
  };

  // Handle filter changes
  const handleFilterChange = (filters: { categoryId?: number; brandId?: number }) => {
    const { categoryId, brandId } = filters;
    const filtered = allProducts.filter((product) => {
      return (
        (!categoryId || product.categoryId === categoryId) &&
        (!brandId || product.brandId === brandId)
      );
    });
    setFilteredProducts(filtered);
  };



  const handleLearnMore = (productId: number) => {
    
    console.log(`Navigating to product ID HANDEL: ${productId}`); 
    router.push(`/products/${productId}`);
  };


    return(<>

<Box p={{
    base: "180px 8% 10px 8%", // For smaller screens
    md: "180px 8% 20px 8%",   // For larger screens
  }}>
  {/* Title and Brands Slider */}
  <Box display="flex" alignItems="center" gap="10px" flexDirection={{ base: "column", md: "row" }}>
    {/* Title */}
    <Heading className="title" mb={6} textAlign="left" lineHeight="50px">
      OUR PRODUCTS
    </Heading>

    {/* Brands Slider */}
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mb={8}
      width="100%"
      overflow="hidden"
      borderRadius="md"
      boxShadow="md"
      backgroundColor="gray.100"
      p={4}
    >
      <Image
        src={sliderBrands[currentIndex]}
        alt="Brand Logo"
        width="100px"
        height="100px"
        objectFit="contain"
        transition="all 0.5s ease-in-out"
        
      />
    </Box>
  </Box>

  {/* Filters */}
  <SearchBarWithFilters
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        allCategories={allCategories}
        allBrands={allBrands}
      />
  
  {/* Content below stays conditional: search results OR our curated sections */}
  {isSearchActive ? (
    <Box>
      <Heading size="md" className="card-title">Search Results : {filteredProducts.length}</Heading>
      {filteredProducts.length > 0 ? (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="20px" mt={4}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onLearnMore={() => handleLearnMore(product.id)} />
          ))}
        </SimpleGrid>
      ) : (
        <NoProductsMsg />
      )}
    </Box>
  ) : (
    <Stack spacing={12} mt={8}>
      {/* Shop by Categories (round) */}
      <Box>
        <Heading size="lg" mb={6}>Shop by Categories</Heading>
        <HStack
          spacing={6}
          overflowX={{ base: 'auto', md: 'auto', xl: 'visible' }}
          flexWrap="nowrap"
          maxW="100%"
          pb={2}
          justify={{ xl: 'space-between' }}
        >
          {roundCategories.map((c) => (
            <Box
              key={c.label}
              flex={{ base: '0 0 auto', md: '0 0 auto', xl: '1 1 0' }}
              minW={{ base: 'auto', md: 'auto', xl: 0 }}
            >
              <CircleCategory src={c.src} label={c.label} />
            </Box>
          ))}
        </HStack>
      </Box>

      <SectionBlock wrapInCard title={panelBuilders.title} posters={panelBuilders.posters} groups={panelBuilders.groups} />

      <SectionBlock wrapInCard title={oemDeals.title} posters={oemDeals.posters} groups={oemDeals.groups} />

      <SectionBlock wrapInCard title={homeAppliances.title} posters={homeAppliances.posters} groups={homeAppliances.groups} />

      {/* Offer slider (3-4 images) */}
      <Box>
        <OfferSlider images={offerSliderImages} />
      </Box>
    </Stack>
  )}
    </Box>
    </>);
}

export default ProductsPage;