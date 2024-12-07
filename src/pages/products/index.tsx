import { useState,useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";

import {allProducts} from '../../models/product';
import { allCategories } from "../../models/category";
import ProductCard from "../../components/productCard";




const ProductsPage: React.FC = ()=>{
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    const [currentIndex, setCurrentIndex] = useState(0);

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
  

     // Filtered Products
    const filteredProducts = allProducts.filter((product) => {
        const matchesCategory =
        selectedCategory === null || product.categoryId === selectedCategory;
        const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleLearnMore = (productId: number) => {
      alert(`Learn more about product ID: ${productId}`);
    };

    return(<>

<Box p={{
    base: "20vh 8%", // For smaller screens
    md: "20vh 19%",   // For larger screens
  }}>
    <Box display="flex" alignItems="center" gap="10px" flexDirection={{base:"column",md:"row"}} >
        {/* Title */}
        <Heading className="title"  mb={6} textAlign="left" lineHeight="50px">
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
      <Flex mb={6} justifyContent="space-between" alignItems="center" gap={4}>
        {/* <Select
          placeholder="Filter by Category"
          onChange={(e:React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedCategory(e.target.value ? Number(e.target.value) : null)
          }
          value={selectedCategory || ""}
        >
          {allCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </Select> */}
        <Input
          placeholder="Search by product name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={() => {
          setSearchTerm("");
          setSelectedCategory(null);
        }}>
          Reset Filters
        </Button>
      </Flex>

      {/* Products by Category */}
      {allCategories.map((category) => {
        const categoryProducts = filteredProducts.filter(
          (product) => product.categoryId === category.id
        );

        if (categoryProducts.length === 0) return null;

        return (
          <Box key={category.id} mb={8}>
            <Heading size="md"  className="sub-title">
              {category.title}
            </Heading>
            <Box 
            overflowX={{ base: "scroll", md: "unset" }} 
            whiteSpace={{ base: "nowrap", md: "normal" }} 
            >
              <SimpleGrid  columns={{ base: 1, md: 2, lg: 3 }}
                gap="20px"
                display={{ base: "inline-flex", md: "grid" }} >
                {categoryProducts.map((product) => (
                 <ProductCard key={product.id} product={product} onLearnMore={handleLearnMore}/>
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        );
      })}
    </Box>
    </>);
}

export default ProductsPage;