import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

const BrandsSectionChakra: React.FC = () => {
  return (
    <Box 
      as="section" 
      textAlign="center" 
      p={8} 
     bg="var(--backgroundColor)" 
            borderRadius="8px"

      mt={10}
    >
      {/* Section Title */}
      <Box mb={8}>
        <Text fontSize="1.5em" fontWeight="medium" color="var(--primaryColor)">
          OUR
        </Text>
        <Heading fontSize={{ base: "2em", md: "2em" }} color="var(--primaryColor)" fontWeight="bold">
          BRANDS
        </Heading>
      </Box>

      {/* Brands and Products Showcase */}
      <Box
        overflowX={{ base: "scroll", md: "unset" }} // Enable horizontal scroll for mobile
        whiteSpace={{ base: "nowrap", md: "normal" }} // Prevent wrapping for mobile
        pb={{ base: 4, md: 0 }} // Add padding at the bottom for mobile
      >
       <SimpleGrid 
          columns={{ base: 1, md: 2 }} 
          gap={{ base: 10, md: 10 }}
          mb={12} 
          mt={5}
          p="auto"
          justifyItems="center"
          display={{ base: "inline-flex", md: "grid" }} 
          // Inline-flex for mobile, grid for desktop
        >
                    {/* Siemens Brand */}
                    <Box
                        textAlign="center"
                        flex="0 0 auto" // Prevent shrinking for horizontal scroll
                        width={{ base: "100px", md: "200px" }}
                        mx={{ base: 2, md: 4 }}
                       
                    >
                        <Image
                        src="/siemens_logo.png"
                        alt="Siemens"
                        width="auto"
                        maxW={{ base: "100px", md: "180px" }}
                        height="auto"
                        mb={2}
                        loading="lazy"
                        />
                        <Text
                        fontSize="sm"
                        color="gray.600"
                        width={{ base: "100px", md: "180px" }}
                        whiteSpace="normal"
                     
                        >
                        Leading innovation in electrical appliances and solutions.
                        </Text>
                    </Box>
                    {/* Bonton Brand */}
                    <Box
                        textAlign="center"
                        flex="0 0 auto" // Prevent shrinking for horizontal scroll
                        width={{ base: "150px", md: "200px" }}
                        mx={{ base: 2, md: 4 }}
                    >
                        <Image
                        src="/bonton_logo.png"
                        alt="Bonton"
                        width="auto"
                        maxW={{ base: "100px", md: "180px" }}
                        height="auto"
                        mb={2}
                        loading="lazy"
                        />
                        <Text
                        fontSize="sm"
                        color="gray.600"
                         width={{ base: "100px", md: "180px" }}
                        whiteSpace="normal"
                        
                     
                        >
                        Excellence in wires, cables, and electrical materials.
                        </Text>
                    </Box>

        </SimpleGrid>

</Box>
      {/* Add Additional Callout or Highlight */}
      <Box mt={8} textAlign="center">
        <Text fontSize="lg" fontWeight="bold" color="gray.700" mb={1}>
          From Circuit Breakers to Wires & Cables
        </Text>
        <Text fontSize="sm" color="gray.600">
          Discover a comprehensive range of electrical solutions under one roof.
        </Text>
      </Box>
    </Box>
  );
};

export default BrandsSectionChakra;