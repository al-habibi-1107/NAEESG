import { Box, Image, Button } from "@chakra-ui/react";


const ContactHomeSection: React.FC = () => {
  return (
    <Box position="relative" mb={12}>
        <Image
        src="/path/to/contact_image.jpg"
        alt="Contact Us"
        width="100%"
        height="auto"
        borderRadius="lg"
        objectFit="cover"
        />
        <Box
        position="absolute"
        bottom="-25px" // Offset the button slightly from the image
        left="50%"
        transform="translateX(-50%)"
        zIndex={1}
        >
            <Button
                size="lg"
                colorScheme="teal"
                bg="teal.500"
                color="white"
                px={8}
                py={4}
                borderRadius="full"
                _hover={{ bg: "teal.600" }}
                onClick={() => window.open("https://wa.me/917276250850", "_blank")}
            >
                Get in Touch Now
            </Button>
        </Box>
    </Box>
  );
}

export default ContactHomeSection;

