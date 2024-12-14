import { SimpleGrid,Box,Heading } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import InfoCard from "./AboutCardComponent";

const QuickContactCardSection: React.FC = () => {
  return (
    <Box textAlign="center" mt={4} mb={2}>
        <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        m={8}
        color="var(--primaryColor)"
        >
        Quick Contact
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mb={12} mt={12}>
            <InfoCard
            icon={FaMapMarkerAlt}
            title="Head Office"
            description={["Mon-Sat 9am to 5pm.", "Ayesha Merlin Shop G15, Pardih Road, Mango, Jamshedpur 832110"]}
            />
            <InfoCard
            icon={FaPhoneAlt}
            title="Phone & Email"
            description={[
                "+91 72762 50850 | +91 62018 52332",
                "enterprisenae@gmail.com",
            ]}
            />
            <InfoCard
            icon={FaWhatsapp}
            title="Connect on WhatsApp"
            description={["+91 72762 50850"]}
            buttonText="Contact Us"
            buttonAction={() => alert("WhatsApp")}
            buttonColor="green.500"
            />
        </SimpleGrid>
    </Box>

  )}



  export default QuickContactCardSection