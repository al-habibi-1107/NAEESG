import QuickContactSectionChakra from "@/components/QuickContactSectionChakra";
import { Box } from "@chakra-ui/react";

const ContactPage = ()=>{


    return(<>
    <Box
    p={{
        base: "180px 8% 10px 8%", // For smaller screens
        md: "180px 19% 50px 19%",   // For larger screens
      }}
    >
        <QuickContactSectionChakra/>

    </Box>
    
    </>)
}


export default ContactPage;