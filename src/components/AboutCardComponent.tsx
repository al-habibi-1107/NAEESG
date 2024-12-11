import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface CardProps {
  icon: IconType;
  title: string;
  description: string[];
  buttonText?: string;
  buttonAction?: () => void;
  buttonColor?: string;
}

const InfoCard: React.FC<CardProps> = ({
  icon: Icon,
  title,
  description,
  buttonText,
  buttonAction,
  buttonColor,
}) => {
  return (
    <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    width="100%"
    h="200px"
    border="solid 1px black"
    >
      <Icon size={30} color="var(--primaryColor)" />
      <Heading fontSize="lg" mt={2} color="var(--primaryColor)">
        {title}
      </Heading>
      {description.map((line, index) => (
        <Text key={index} fontSize="sm" color="gray.600" mt={1}>
          {line}
        </Text>
      ))}
      {buttonText && buttonAction && (
        <Button
        p={4}
          mt={4}
          size="sm"
          bg={buttonColor || "var(--primaryColor)"}
          color="white"
          _hover={{ bg: "teal.600" }}
          onClick={buttonAction}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  );
};

export default InfoCard;