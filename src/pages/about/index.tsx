import { Box, Text, Heading, SimpleGrid,Image } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import InfoCard from "../../components/AboutCardComponent";
import TeamMemberCard from "../../components/OwnerCard";


const AboutPage : React.FC = () => {
    return (<>
     <Box 
     p={{
        base: "180px 8%", // For smaller screens
        md: "180px 19%",   // For larger screens
      }}
      textAlign="center"
     
     >
      {/* Top Section */}
        <Box
           mb={12}
           h="300px"
           display="flex"
           flexDirection="column"
           justifyContent="center"
           alignItems="center"
           gap={4}
           p={8}
        >

        <Text fontSize={{ md: "md", base: "md" }} fontWeight="600" color="gray.800">
        About NAE Electro Switchgear Pvt Ltd
        </Text>
        <Heading
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="bold"
        my={4}
        color="var(--primaryColor)"
        >
        Quality First, Customer Always
        </Heading>
        <Text fontSize="0.7em" color="gray.700">
        Visit our office or give us a call to know more
        </Text>
    </Box>
  {/* Add a semi-transparent overlay */}
    <Box 
    p={{
        base: "50px 8%", // For smaller screens
        md: "50px 8%",   // For larger screens
    }}
    display="flex"
    flexDirection={{ base: "column", md: "row" }}
    alignItems="center"
    gap={8}
    backgroundColor="var(--backgroundColor)"
    h="max-content"
    >
  {/* Image Section */}
  <Box flex="1" w="300px" textAlign="center">
    <Image
      src="/About/vision_mission.jpg"
      alt="Our Vision and Mission"
      borderRadius="lg"
      shadow="md"
      objectFit="cover"
      width="100%"
    />
  </Box>

    {/* Text Section */}
    <Box flex="1">
        <Heading 
        fontSize={{ base: "2xl", md: "3xl" }} 
        fontWeight="bold" 
        color="var(--primaryColor)" 
        mb={4}
        >
        Our Vision & Mission
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={6}>
        <strong>Vision:</strong> To be a leading and trusted name in the electrical switchgear industry, 
        delivering innovation and excellence in every product and service we provide.
        </Text>
        <Text fontSize="lg" color="gray.600" mb={6}>
        <strong>Mission:</strong> To ensure our clients success by offering top-notch, reliable, and energy-efficient 
        electrical solutions, while continuously striving for sustainability and growth.
        </Text>
    </Box>
    </Box>

      {/** OUR TEAM **/}
      <Heading
      fontSize={{ base: "2xl", md: "3xl" }}
      fontWeight="bold"
      m={8}
      color="var(--primaryColor)"
      >Meet Our Founders</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mb={12} mt={5}>
        <TeamMemberCard
          imageSrc="/Team/person_1.jpeg"
          name="Mr.Salik Jawaid"
          designation="Managing Director"
        />
        <TeamMemberCard
          imageSrc="/Team/person_2.jpeg"
          name="Mr.Sabit Jawaid"
          designation="Managing Director"
        />
        <TeamMemberCard
          imageSrc="/Team/person_3.jpeg"
          name="Mr.Sadique Javed"
          designation="Managing Director"
        />
      </SimpleGrid>
      {/* Map Section
      <Box mb={12} height="300px" bg="gray.200">
        <iframe
          title="NAE ELECTRO SWITCHGEAR"
          src={CONSTANTS.MAPS_LINK}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </Box> */}

      {/* Cards Section */}
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mb={12} mt={5}>
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
    </>)
}


export default AboutPage;