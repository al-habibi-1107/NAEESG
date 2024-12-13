import { Box, VStack, HStack, Heading, Text, Icon, Input, Textarea, Button, Link } from "@chakra-ui/react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import QuickContactCard from "./helpers/QuickContactCard";
import NAEOutlineButton from "./helpers/NAEOutlineButton";

const QuickContactSectionChakra: React.FC = () => {
  return (
    <Box 
    bg="var(--backgroundColor)" 
    py={8} 
    px={{ base: 0, md: 12 }} 
    borderRadius="4px"
    mx={{md:"-36%" ,base:"-10px"}}
    >
      <HStack 
      gap={{ base: 6, md: 0 }}
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      >
       
        {/* Left Container */}
        <VStack
   
          gap={6}
          bg="var(--backgroundColor)"
          p={2}
          flex="1"
          w="80%"
        >
          <Heading fontSize="1.5rem" color="var(--primaryColor)" fontWeight="600" >
            CONTACT US
          </Heading>
         <VStack gap={4} align="stretch"> 
            {/* Contact Card */}
       
               
             
            <QuickContactCard 
            title="Enquiry Contact Number" 
            description="+91 72762 50850 | +91 93342 02265" 
            icon={  <FaPhoneAlt scale={6} /> }
            />
            {/* Email Card */}
            <QuickContactCard 
            title="Email" 
            description="enterprisenae@gmail.com" 
            icon={ <FaEnvelope scale={6} />}
            />
            
            {/* Address Card */}
            <QuickContactCard 
            title="Address" 
            description="" 
            icon= {<FaMapMarkerAlt scale={6} />}
            link={ 
                
                <Link
                    href="https://www.google.com/maps/place/48/579A,+Narayananasan+Rd,+Ponnurunni,+Vyttila,+Ernakulam"
                    fontWeight="500"
                    color="var(--secondaryColor)"
                  >View On Google Maps</Link>

            }/>
          </VStack>
        </VStack> 

        {/* Right Container */}
      <VStack
          
          gap={6}
          bg="var(--backgroundColor)"
          pt={6}
          flex="1"
          w="100%"
        >
          <Heading fontSize="1.5rem" color="var(--primaryColor)" fontWeight="600" >
            MAKE AN ENQUIRY
          </Heading>
          <VStack as="form" gap={4} w={{base:"80%",md:"60%"}}>
            <Input 
            placeholder="Name" 
            color="var(--primaryColor)" 
            backgroundColor="var(--backgroundDefault)" 
            border="1px solid var(--inputBorderColor)"
            p="0.75em"
            fontSize="1rem"
            />
            <Input 
            placeholder="Email" 
            color="var(--primaryColor)" 
            backgroundColor="var(--backgroundDefault)" 
            border="1px solid var(--inputBorderColor)"
            p="0.75em"
            fontSize="1rem" 
            type="email" />
            <Input 
            placeholder="Phone" 
            color="var(--primaryColor)" 
            backgroundColor="var(--backgroundDefault)" 
            border="1px solid var(--inputBorderColor)"
            p="0.75em"
            fontSize="1rem"
             />
            <Textarea 
            placeholder="Message" 
            color="var(--primaryColor)" 
            backgroundColor="var(--backgroundDefault)" 
            border="1px solid var(--inputBorderColor)"
            p="0.75em"
            fontSize="1rem"
            resize="none" />
            <NAEOutlineButton label="SEND" onClick={()=>{}}/>
          </VStack> 
        </VStack> 
      </HStack>
    </Box>
  );
};

export default QuickContactSectionChakra;