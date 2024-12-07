import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";

import {Product} from "../models/product"

interface ProductCardProps {
    product: Product; // Use the Product class as the type
    onLearnMore: (id: number) => void;
  }
  

  const ProductCard: React.FC<ProductCardProps> = ({ product, onLearnMore }) => {
  return (
<Box
   borderWidth="1px"
   borderRadius="lg"
   overflow="hidden"
   boxShadow="sm"
   _hover={{ boxShadow: "lg", transform: "translateY(-5px)" }}
   transition="all 0.3s"
   bg="white"
   p={4}
   w={{ base: "90%", md: "100%" }} // Full width on larger screens, compact on mobile
   maxW="300px"
   minH="380px" // Ensures consistent card height
   m="auto"
   position="relative" 
>
  {/* Image */}
  <Box mb={3}>
    <Image
    src={product.image}
    alt={product.name}
    objectFit="contain"
    w="100%"
    h={{ base: "150px", md: "200px" }}
    />
  </Box>

  {/* Product Name */}
  <Box mb={3}>
    <Heading
      size="sm"
      textAlign="center"
      color="gray.800"
      fontWeight="bold"
      lineHeight="1.4"
      whiteSpace="normal"
      wordBreak="break-word"
      fontSize={{ base: "sm", md: "md" }}
    >
      {product.name}
    </Heading>
  </Box>

  {/* Product Description */}
  <Box mb={2}>
    <Text
           fontSize={{ base: "xs", md: "sm" }}
           color="gray.500"
           textAlign="center"
           whiteSpace="normal"
           wordBreak="break-word"
           lineHeight="1.4"
           w={{base:"260px", md:"250px"}}
           m="auto"
    >
      {product.description}
    </Text>
  </Box>

  {/* Price */}
  <Box mb={3}>
    <Text fontWeight="bold" color="teal.500" fontSize="md" textAlign="center">
      Price: ${product.price.toFixed(2)}
    </Text>
  </Box>

  {/* CTA Button */}
  <Button
    size="md"
    variant="outline" 
    borderWidth="2px" // Outline button by default
    borderColor="var(--primaryColor)" // Border color for the outline
    color="var(--primaryColor)" // Default text color
    w="full"
    mt={4}
    _hover={{
    bg: "var(--primaryColor)", // Background changes on hover
    color: "white", // Text color changes on hover
    transform: "scale(1.05)", // Slight scale effect on hover
    borderColor: "var(--primaryColor)", // Border color matches background on hover
    }}
    transition="all 0.3s ease-in-out" // Smooth transition effect
    onClick={() => onLearnMore(product.id)}
  >
    Learn More
  </Button>

  {/* Brand Label */}
  <Box
    position="absolute"
    bottom={-2}
    right={-2}
    bg="teal.500"
    color="white"
    px={2}
    py={1}
    fontSize="xs"
    fontWeight="bold"
    m={2} // Add margin to keep it visually balanced
  >
    {product.brand}
  </Box>
</Box>
);
};

export default ProductCard;