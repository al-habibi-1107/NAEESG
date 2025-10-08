import { Box, Text, Heading, SimpleGrid,Image } from "@chakra-ui/react";

import TeamMemberCard from "../../components/OwnerCard";
import BrandsSectionChakra from "../../components/BrandsSectionChakra";
import QuickContactCardSection from "../../components/QuickContactCards";


const AboutPage : React.FC = () => {
    return (<>
     <Box 
     p={{
        base: "190px 8% 10px 8%", // For smaller screens
        md: "190px 19% 50px 19%",   // For larger screens
      }}
      textAlign="center"
     position="relative"
  overflow="hidden"
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
           position="relative" // Ensure blurry circles are relative to this box
           zIndex={1}
        >

{/* Neumorphic Oval: Right */}
{/* <Box
  position="absolute"
  top="80px" // Fixed distance from the top
  right={{base:"-25%",md:"-50%"}} // Stick to the right edge
  width={{ base: "20vw", md: "20vw" }} // Dynamically adjust width
  height={{ base: "30vh", md: "10vh" }} // Dynamically adjust height
  borderRadius="90%" // Maintain the oval shape
  bg="blue.400" // Primary background color for the oval
  boxShadow="
    -12px -12px 20px rgba(255, 255, 255, 0.7), 
    12px 12px 20px rgba(0, 0, 0, 0.15)" 
  filter="blur(100px)" 
  zIndex={0}
/> */}

{/* Neumorphic Oval: Left */}
{/* <Box
  position="absolute"
  top="80px" // Fixed distance from the top
  left={{base:"-25%",md:"-50%"}}  // Stick to the left edge
  width={{ base: "30vw", md: "20vw" }} // Dynamically adjust width
  height={{ base: "30vh", md: "10vh" }} // Dynamically adjust height
  borderRadius="90%" // Maintain the oval shape
  bg="blue.400" // Slightly lighter shade for variation
  boxShadow="
    -12px -12px 20px rgba(255, 255, 255, 0.7), 
    12px 12px 20px rgba(0, 0, 0, 0.15)" 
  filter="blur(100px)" // Add blur for artistic softness
  zIndex={0}
/> */}
        <Text fontSize={{ md: "md", base: "md" }} fontWeight="600" color="gray.800">
        About NAE Electro Switchgear Pvt Ltd
        </Text>
        <Heading
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="bold"
        my={4}
        color="var(--primaryColor)"
        >
        Wired with Quality, Powered by Trust
        </Heading>
        <Text fontSize={{base:"0.9em",md:"1.1em"}} color="gray.700" maxW="550px">
        Serving <strong>100+ Vendors</strong> in <strong>Jharkhand</strong> with high quality Electrical Appliances & Wires and Cables
        </Text>
    </Box>
  {/* VISION MISSION SECTION */}
  
    <Box 
    p={{
        base: "20px 8%", // For smaller screens
        md: "40px 4%",   // For larger screens
    }}
    display="flex"
    flexDirection={{ base: "column", md: "row" }}
    alignItems="center"
    gap={8}
    backgroundColor="var(--backgroundColor)"
    h="max-content"
    zIndex={2}

    >
    
  {/* Image Section */}
  <Box flex="1" w="300px" p={2} alignSelf="center">
    <Image
      src="/About/vision_mission.jpg"
      alt="Our Vision and Mission"
      borderRadius="lg"
      shadow="md"
      objectFit="cover"
      width="100%"
      loading="lazy"
    />
               
    </Box>

    {/* Text Section */}
        <Box flex="1">
            <Heading 
            fontSize={{ base: "2xl", md: "3xl" }} 
            fontWeight="bold" 
            color="var(--primaryColor)" 
            borderRadius="8px"
            mb={4}
            >
            Our Vision & Mission
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={6} textAlign={{md:"start", base:"center"}}>
            <strong>Vision:</strong> To be a leading and trusted name in the electrical switchgear industry, 
            delivering innovation and excellence in every product and service we provide.
            </Text>
            <Text fontSize="lg" color="gray.600" mb={6} textAlign={{md:"start", base:"center"}}>
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
      <Box
        overflowX={{ base: "scroll", md: "unset" }} // Enable horizontal scroll for mobile
        whiteSpace={{ base: "nowrap", md: "normal" }} // Prevent wrapping for mobile
        pb={{ base: 4, md: 0 }} // Add padding at the bottom for mobile
      >
        <SimpleGrid 
          columns={{ base: 1, md: 3 }} 
          gap={{ base: 6, md: 8 }}
          mb={12} 
          mt={5}
          display={{ base: "inline-flex", md: "grid" }} // Inline-flex for mobile, grid for desktop
        >
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
            imageSrc="/Team/person_2.jpeg"
            name="Mr.Saquib Javed"
            designation="Managing Director"
          />
          {/* <TeamMemberCard
            imageSrc="/Team/person_3.jpeg"
            name="Mr.Sadique Javed"
            designation="Managing Director"
          /> */}
        </SimpleGrid>
      </Box>
      {/*Brands Section*/}
    <BrandsSectionChakra/>
      {/* Cards Section */}
    <QuickContactCardSection/>
      
    </Box>
    </>)
}


export default AboutPage;