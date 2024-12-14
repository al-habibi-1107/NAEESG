import { useState,useEffect } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import {allProducts} from '../../models/product';
import { allCategories } from "../../models/category";
import { allBrands } from "../../models/brand";
import ProductCard from "../../components/productCard";
import SearchBarWithFilters from "../../components/SearchBarWithFilters";
import NoProductsMsg from "../../components/NoProductsMsg";





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
    md: "180px 19% 20px 19%",   // For larger screens
  }}>
  {/* Title and Brands Slider */}
  <Box display="flex" alignItems="center" gap="10px" flexDirection={{ base: "column", md: "row" }}>
    {/* Title */}
    <Heading className="title" mb={6} textAlign="left" lineHeight="50px">
      OUR BRANDS
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
  
  {/* Products */}
  {isSearchActive ? (
        <Box>
          <Heading size="md" className="card-title">
            Search Results : {filteredProducts.length}
          </Heading>
          {filteredProducts.length>0?
          
        
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="20px">
            { 
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onLearnMore={()=>handleLearnMore(product.id)}/>
              ))
            } 
          </SimpleGrid>
          :
          <NoProductsMsg/>
          }
        </Box>
      ) : (
        allCategories.map((category) => {
          const categoryProducts = filteredProducts.filter(
            (product) => product.categoryId === category.id
          );

          if (categoryProducts.length === 0) return null;

          return (
            <Box key={category.id} mb={8}>
              <Heading size="md" className="sub-title">{category.title}</Heading>
              <Box
               overflowX={{ base: "scroll", md: "unset" }} 
               whiteSpace={{ base: "nowrap", md: "normal" }} 
              >
                <SimpleGrid 
                columns={{ base: 1, md: 2, lg: 3 }}
                gap="20px"
                display={{ base: "inline-flex", md: "grid" }}
                >
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onLearnMore={()=>handleLearnMore(product.id)}/>
                  ))}
                </SimpleGrid>
              </Box>
            </Box>
          );
        })
      )}
    </Box>
    </>);
}

export default ProductsPage;