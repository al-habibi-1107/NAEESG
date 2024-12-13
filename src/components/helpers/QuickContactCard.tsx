import { HStack, Box, Heading, Text } from "@chakra-ui/react";
import React from "react";


interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?:React.ReactNode
}

const QuickContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  description,
  link
}) => {
  return (
        <HStack
        gap={4}
        p="10px 20px"
        bg="var(--backgroundDefault)"
        borderRadius="2px"
        boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
    align="center"
    _hover={{
    transform: "scale(1.05)", // Hover effect
    transition: "transform 0.3s ease", // Smooth transition
    }}
    >
        <Box 
        bg="var(--primaryColor)" 
        p={3} 
        borderRadius="full" 
        color="white"
        justifyContent="center"
        alignItems="center"
        fontSize="1.2rem"
    >
        {icon}
        </Box>
        <Box>
        <Heading 
        fontSize= {{md:"1.2em",base:"1em"}}
        m= "0 0 0.5rem"
        color= "var(--primaryColor)"
        fontWeight="500"
        >
            {title}
        </Heading>
        {link && (
            <Box>{link}</Box>
        )}
        <Text
        fontSize= {{md:"1em",base:"0.8em"}}
        m= "0 0 0.5rem"
        color= "var(--primaryColor)"
        >{description}</Text>
        </Box>
    </HStack> 

  )}

export default QuickContactCard