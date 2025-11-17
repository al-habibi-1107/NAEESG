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

type Poster = { src: string; title?: string; discount?: string; brand?: string };

type GroupItem = {
  src: string;
  title: string;            // headline (e.g. offer or product name)
  description?: string;     // small line under title (e.g. variant/feature)
  brand?: string;           // brand name text
};

type Group = {
  title: string;                    // section title e.g. "Miniature Circuit Breaker"
  items: ReadonlyArray<GroupItem>;  // up to four tiles
};

const FourUpCategoryCard: React.FC<{ title: string; items: ReadonlyArray<GroupItem> }> = ({ title, items }) => (
  <Card p={4} borderRadius="lg" boxShadow="md" h="100%">
    <Text fontWeight={700} mb={3} fontSize={{ base: 'md', md: 'lg' }}>{title}</Text>
    <SimpleGrid columns={2} gap={4}>
      {items.slice(0, 4).map((item, i) => (
        <Box key={i} borderRadius="md" overflow="hidden" bg="white" boxShadow="sm">
          <Image src={item.src} alt={item.title} w="100%" h={32} objectFit="cover" />
          <Box p={3} textAlign="left">
            <Text fontSize="sm" fontWeight={700} mb={1} noOfLines={2}>
              {item.title}
            </Text>
            {item.description && (
              <Text fontSize="sm" color="gray.700" mb={1} noOfLines={1}>
                {item.description}
              </Text>
            )}
            {item.brand && (
              <Text fontSize="sm" fontWeight={700} color="teal.700" noOfLines={1}>
                {item.brand}
              </Text>
            )}
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  </Card>
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
          <FourUpCategoryCard key={g.title} title={g.title} items={g.items} />
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
    {
      title: "Miniature Circuit Breaker",
      items: [
        { src: "/Panel_Section_1/MCB/MCB_1P.png", title: "Up to 71% Off*", description: "1 Pole", brand: "SIEMENS" },
        { src: "/Panel_Section_1/MCB/MCB_2P.png", title: "Up to 71% Off*", description: "2 Pole", brand: "SIEMENS" },
        { src: "/Panel_Section_1/MCB/MCB_3P.png", title: "Up to 71% Off*", description: "3 Pole", brand: "SIEMENS" },
        { src: "/Panel_Section_1/MCB/MCB_4P.png", title: "Up to 71% Off*", description: "4 Pole", brand: "SIEMENS" },
      ],
    },
    {
      title: "Moulded Case Circuit Breaker",
      items: [
        { src: "/Panel_Section_1/MCCB/MCCB_1P.png", title: "Up to 75% Off*", description: "MCCB Range", brand: "SIEMENS" },
        { src: "/Panel_Section_1/MCCB/MCCB_2P.png", title: "Up to 75% Off*", description: "MCCB Range", brand: "SIEMENS" },
        { src: "/Panel_Section_1/MCCB/MCCB_3P.png", title: "Up to 75% Off*", description: "MCCB Range", brand: "SIEMENS" },
        { src: "/Panel_Section_1/MCCB/MCCB_4P.png", title: "Up to 75% Off*", description: "MCCB Range", brand: "SIEMENS" },
      ],
    },
    {
      title: "Residual Current Breaker",
      items: [
        { src: "/Panel_Section_1/RCCB/RCCB_1P.png", title: "Up to 75% Off*", description: "RCCB Range", brand: "SIEMENS" },
        { src: "/Panel_Section_1/RCCB/RCCB_2P.png", title: "Up to 75% Off*", description: "RCCB Range", brand: "SIEMENS" },
        { src: "/Panel_Section_1/RCCB/RCCB_2P.png", title: "Up to 75% Off*", description: "RCCB Range", brand: "SIEMENS" },
        { src: "/Panel_Section_1/RCCB/RCCB_4P.png", title: "Up to 75% Off*", description: "RCCB Range", brand: "SIEMENS" },
      ],
    },
  ],
} as const;

// const oemDeals = {
//   title: "OEM's - Best Deals",
//   posters: [
//     { src: "/posters/wire-50.png", title: "Cables", discount: "Up to 50% Off *", brand: "/brands/bonton.png" },
//     { src: "/posters/switches-40.png", title: "Switches", discount: "Up to 40% Off *", brand: "/brands/bonton.png" },
//     { src: "/posters/others-35.png", title: "Accessories", discount: "Up to 35% Off *", brand: "/brands/siemens.png" },
//   ],
//   groups: [
//     {
//       title: "Electric Wires & Cables",
//       items: [
//         { src: "/cat/w1.png", title: "Up to 50% Off*", description: "Black", brand: "Bonton" },
//         { src: "/cat/w2.png", title: "Up to 50% Off*", description: "Blue", brand: "Bonton" },
//         { src: "/cat/w3.png", title: "Up to 50% Off*", description: "Red", brand: "Bonton" },
//         { src: "/cat/w4.png", title: "Up to 50% Off*", description: "Yellow", brand: "Bonton" },
//       ],
//     },
//     {
//       title: "Switches & Sockets",
//       items: [
//         { src: "/cat/s1.png", title: "Up to 62% Off*", description: "Switches", brand: "SIEMENS" },
//         { src: "/cat/s2.png", title: "Up to 62% Off*", description: "Sockets", brand: "SIEMENS" },
//         { src: "/cat/s3.png", title: "Up to 62% Off*", description: "Switches", brand: "SIEMENS" },
//         { src: "/cat/s4.png", title: "Up to 62% Off*", description: "Sockets", brand: "SIEMENS" },
//       ],
//     },
//     {
//       title: "Other Accessories",
//       items: [
//         { src: "/cat/o1.png", title: "Up to 35% Off*", description: "Accessories", brand: "SIEMENS" },
//         { src: "/cat/o2.png", title: "Up to 35% Off*", description: "Accessories", brand: "SIEMENS" },
//         { src: "/cat/o3.png", title: "Up to 35% Off*", description: "Accessories", brand: "SIEMENS" },
//         { src: "/cat/o4.png", title: "Up to 35% Off*", description: "Accessories", brand: "SIEMENS" },
//       ],
//     },
//   ],
// } as const;

const homeAppliances = {
  title: "Home electrical appliances - Trending Deals",
  posters: [
    { src: "/Home_Section_2/WIRES.png", title: "Wires & Cables", discount: "Up to 47% Off *", brand: "/bonton_logo.png" },
    { src: "/Home_Section_2/sockets.png", title: "Electric Sockets", discount: "Up to 62% Off *", brand: "/siemens_logo.png" },
    { src: "/Home_Section_2/Switches.png", title: "Mark Switches", discount: "Up to 62% Off *", brand: "/siemens_logo.png" },
    { src: "/Home_Section_2/Modular-Plate.png", title: "Modular Plate", discount: "Up to 62% Off *", brand: "/siemens_logo.png" },
    
  ],
  groups: [
    {
      title: "WIRES & CABLES",
      items: [
        { src: "/Home_Section_2/WIRES/CABLE_RED.png", title: "Up to 62% Off*", description: "Red", brand: "BONTON" },
        { src: "/Home_Section_2/WIRES/CABLE_YELLOW.png", title: "Up to 62% Off*", description: "Yellow", brand: "BONTON" },
        { src: "/Home_Section_2/WIRES/CABLE_BLUE.png", title: "Up to 58% Off*", description: "Blue", brand: "BONTON" },
        { src: "/Home_Section_2/WIRES/CABLE_BLACK.png", title: "Up to 62% Off*", description: "Black", brand: "BONTON" },
      ],
    },
    {
      title: "Switches & Sockets",
      items: [
        { src: "/Home_Section_2/Switch_Sockets/SOCKET.png", title: "Up to 62% Off*", description: "Electric Sockets", brand: "SIEMENS" },
        { src: "/Home_Section_2/Switch_Sockets/SWITCH.png", title: "Up to 62% Off*", description: "Mark Switches", brand: "SIEMENS" },
        { src: "/Home_Section_2/Switch_Sockets/MODULAR_PLATE.png", title: "Up to 47% Off*", description: "Modular Plate", brand: "SIEMENS" },
        { src: "/Home_Section_2/Switch_Sockets/SOCKET_2.png", title: "Up to 47% Off*", description: "Electric Sockets", brand: "SIEMENS" },
      ],
    },
    {
      title: "Indicating Lamps",
      items: [
        { src: "/Home_Section_2/IL/IL_RED.png", title: "Indicating Lamps", description: "Red", brand: "SIEMENS" },
        { src: "/Home_Section_2/IL/IL_GREEN.png", title: "Indicating Lamps", description: "Green", brand: "SIEMENS" },
        { src: "/Home_Section_2/IL/IL_YELLOW.png", title: "Indicating Lamps", description: "Yellow", brand: "SIEMENS" },
        { src: "/Home_Section_2/IL/IL_BLUE.png", title: "Indicating Lamps", description: "Blue", brand: "SIEMENS" },
      ],
    },
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

      {/* <SectionBlock wrapInCard title={oemDeals.title} posters={oemDeals.posters} groups={oemDeals.groups} /> */}

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