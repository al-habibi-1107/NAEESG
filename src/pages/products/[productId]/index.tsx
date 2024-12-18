import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import {
    Box,
    Heading,
    Text,
    Image,
    Button,
  } from "@chakra-ui/react";

import { allProducts } from "../../../models/product";
import { Product } from "../../../models/product";
import { ICategoryId } from "../../../models/category";
import DynamicTable from "../../../components/DynamicTable";
import { CONSTANTS } from "../../../constants/constants";


interface ProductPageProps {
  product: Product | null;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const router = useRouter();

  

  // If no product is found (fallback)
  if (!product) {
    return (
      <Box textAlign="center" p={8}>
        <Heading size="lg">Product not found</Heading>
        <Button mt={4} onClick={() => router.push("/products")}>
          Back to Products
        </Button>
      </Box>
    );
  }


  // Dynamically determine the columns to display

    const categoryColumns: Record<
    number,
    Array<{ key: string; label: string; isFromVariant: boolean }>
    > = {
    [ICategoryId.RCCB]: [
        { key: "poles", label: CONSTANTS.PRODUCT_DETAILS.NO_POLES, isFromVariant: true },
        { key: "residualCurrent", label: CONSTANTS.PRODUCT_DETAILS.RATED_RESIDUAL_CURRENT, isFromVariant: true },
        { key: "ratedCurrent", label: CONSTANTS.PRODUCT_DETAILS.RATED_CURRENT_IN, isFromVariant: true },
        { key: "mw", label: "MW", isFromVariant: true },
        { key: "referenceNumbers", label:  CONSTANTS.PRODUCT_DETAILS.REFERENCE_NO, isFromVariant: false },
    ],
    [ICategoryId.MCB]: [
        { key: "poles", label: CONSTANTS.PRODUCT_DETAILS.NO_POLES, isFromVariant: true },
        { key: "ratedCurrent", label: CONSTANTS.PRODUCT_DETAILS.IN, isFromVariant: true },
        { key: "residualCurrent", label: CONSTANTS.PRODUCT_DETAILS.REFERENCE_NO, isFromVariant: true },
        { key: "mw", label: "MW", isFromVariant: true },
    ],
    [ICategoryId.ACCL]: [
        { key: "ratedCurrent", label:  CONSTANTS.PRODUCT_DETAILS.RATED_CURRENT_IN, isFromVariant: true },
        { key: "mw", label: CONSTANTS.PRODUCT_DETAILS.MW, isFromVariant: true },
        { key: "residualCurrent", label: CONSTANTS.PRODUCT_DETAILS.REFERENCE_NO, isFromVariant: true },
    ],
    [ICategoryId.DB]: [
        { key: "poles", label: "Description", isFromVariant: true },
        { key: "residualCurrent", label: CONSTANTS.PRODUCT_DETAILS.MW, isFromVariant: true },
        { key: "referenceNumbers", label: CONSTANTS.PRODUCT_DETAILS.REFERENCE_NO, isFromVariant: false},
    ],
    
    [ICategoryId.ISOLATOR]: [
        { key: "poles", label: CONSTANTS.PRODUCT_DETAILS.NO_POLES, isFromVariant: true },
        { key: "ratedCurrent", label: CONSTANTS.PRODUCT_DETAILS.IN, isFromVariant: true },
        { key: "mw", label: "MW", isFromVariant: true },
        { key: "referenceNumbers", label: CONSTANTS.PRODUCT_DETAILS.REFERENCE_NO, isFromVariant: false},
    ],
    // Add more categories as needed
    };

      const columns = categoryColumns[product.categoryId] || [];
  return (
    <Box  p={{
        base: "180px 8%", // For smaller screens
        md: "180px 19%", 
       
      }}>
      {/* Product Details */}
      <Box 
      textAlign="center"
      mb={12}
      borderRadius="lg"
      bg="white"
      shadow="md"
      p={6}
      
      >
        <Image
          src={product.image}
          alt={product.name}
          objectFit="contain"
          maxW="300px"
          mx="auto"
          mb={4}
          loading="lazy"
        />
        <Heading size="lg" color="var(--primaryColor)" mb={2}>
          {product.name}
        </Heading>
        <Text 
         fontSize="md"
         color="gray.600"
         mb={4}
         px={{ base: "10px", md: "50px" }}
        >
          {product.description}
        </Text>
        <Text fontWeight="bold" fontSize="2xl" color="teal.500" mb={4}>
          Price: ${product.price.toFixed(2)}
        </Text>
        <Button
          mt={4}
          p={4}
          colorScheme="teal"
          bg="var(--primaryColor)"
          color="white"
          _hover={{ bg: "teal.600" }}
          onClick={() => router.push("/products")}
        >
          Back to Products
        </Button>
      </Box>

      {/* Product Variants */}
      
      <DynamicTable 
        columns ={columns} 
        variants = {product.variants}
        referenceNumbers = {product.referenceNumbers}
        title = "Product Variants"
        />
    </Box>
  );
};

export default ProductPage;

// Pre-render paths for all products
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allProducts.map((product) => ({
    params: { productId: product.id.toString() },
  }));

  return {
    paths,
    fallback: true, // Enable fallback for non-existent product IDs
  };
};

// Fetch product data for each route
export const getStaticProps: GetStaticProps = async (context) => {
    const { productId } = context.params!;
    const product = allProducts.find((p) => p.id.toString() === productId) || null;
  
    if (product) {
      // Convert Product instance to plain object
      const plainProduct = {
        ...product,
        variants: product.variants.map((variant) => ({
          ...variant,
          image: variant.image ?? null, 
        })),
      };
  
      return {
        props: {
          product: plainProduct, // Pass the plain object to the component
        },
      };
    }
  

    return {
      props: {
        product: null,
      },
    };
  };