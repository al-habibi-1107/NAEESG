import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Select,
  Input,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import {Product,allProducts,allCategories,allBrands, ICategoryId} from '../../models/product'




const ProductsPage: React.FC = ()=>{
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

     // Filtered Products
    const filteredProducts = allProducts.filter((product) => {
        const matchesCategory =
        selectedCategory === null || product.categoryId === selectedCategory;
        const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });


    return(<>

<Box p="10px 19%">
      {/* Brands Slider */}
      <Heading size="lg" mb={4} textAlign="center" mt="90px" >
        Our Brands
      </Heading>
      <Flex gap={4} overflowX="auto" mb={6}>
        {["/bonton_logo.png", "/images/siemens_logo.png"].map(
          (src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Brand ${index}`}
              boxSize="100px"
              borderRadius="md"
              boxShadow="md"
            />
          )
        )}
      </Flex>

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
            <Heading size="md" mb={4}>
              {category.title}
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} >
              {categoryProducts.map((product) => (
                <Box
                  key={product.id}
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  p={4}
                  boxShadow="md"
                >
                  <Image src={product.image} alt={product.name} mb={4} />
                  <Heading size="sm" mb={2}>
                    {product.name}
                  </Heading>
                  <Text fontSize="sm" color="gray.500" mb={2}>
                    {product.description}
                  </Text>
                  <Text fontWeight="bold" color="teal.500" mb={2}>
                    Price: ${product.price.toFixed(2)}
                  </Text>
                  <Text fontSize="sm" color="gray.700" mb={1}>
                    Brand: {product.brand}
                  </Text>
                  <Box
                    height="1px"
                    bg="gray.300"
                    my={4}
                    />
                  <Heading size="xs" mb={2}>
                    Variants
                  </Heading>
                  {product.variants.map((variant, idx) => (
                    <Box key={idx} mb={2}>
                      <Text fontSize="sm" color="gray.600">
                        {variant.poles}, {variant.residualCurrent},{" "}
                        {variant.ratedCurrent}, {variant.mw} MW
                      </Text>
                    </Box>
                  ))}
                  <Box
                    height="1px"
                    bg="gray.300"
                    my={4}
                    />
                  <Heading size="xs" mb={2}>
                    Reference Numbers
                  </Heading>
                  {product.referenceNumbers.map((ref, idx) => (
                    <Text key={idx} fontSize="sm" color="gray.600">
                      {ref}
                    </Text>
                  ))}
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        );
      })}
    </Box>
    </>);
}

export default ProductsPage;