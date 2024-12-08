import { Box } from "@chakra-ui/react"


const NoProductsMsg:React.FC = ()=>{

    return     <Box
    textAlign="center"
    py={10}
    px={4}
    backgroundColor="gray.100"
    borderRadius="md"
    border="1px solid gray.300"
  >
    <Box
      as="p"
      fontSize="1.5rem"
      fontWeight="bold"
      color="gray.600"
      mb={2}
      style={{
        textAlign: "center",
        marginBottom: "1rem",
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#4A5568",
      }}
    >
      No products found
    </Box>
    <Box
      as="p"
      fontSize="1rem"
      color="gray.500"
      style={{
        textAlign: "center",
        fontSize: "1rem",
        color: "#A0AEC0",
      }}
    >
      Try adjusting your search or filters.
    </Box>
  </Box>
}

export default NoProductsMsg;