import { Box,Text,Heading } from "@chakra-ui/react";


import QuickContactSectionChakra from "../../components/QuickContactSectionChakra";
import QuickContactCardSection from "../../components/QuickContactCards";

const ContactPage = ()=>{


    return(<>
    <Box
    p={{
        base: "180px 8% 10px 8%", // For smaller screens
        md: "180px 19% 0px 19%",   // For larger screens
      }}
      textAlign="center"
    >
        {/* Top Section */}
        <Box
           mb={8}
           h="300px"
           display="flex"
           flexDirection="column"
           justifyContent="center"
           alignItems="center"
           gap={2}
           p={8}
           position="relative" // Ensure blurry circles are relative to this box
           zIndex={1}
        >
        <Heading
        fontSize={{ base: "3xl", md: "2.5em" }}
        fontWeight="bold"
        my={3}
        color="var(--primaryColor)"
        lineHeight={1.2}
        >
        Trained Professionals & Exceptional Customer Support
        </Heading>
        <Text fontSize={{base:"0.9em",md:"1.1em"}} color="gray.700" maxW="550px">
        
        NAE Electro Switchgear always ready to assist with your electrical appliance and wiring needs.
        </Text>

        </Box>
        <QuickContactCardSection/>
        <QuickContactSectionChakra/>

    </Box>
    
    </>)
}


export default ContactPage;