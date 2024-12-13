
import React from "react";
import { Button } from "@chakra-ui/react";

interface NAEOutlineButtonProps {
  label: string; // Text displayed on the button
  onClick: () => void; // Callback function triggered on click
}

const NAEOutlineButton: React.FC<NAEOutlineButtonProps> = ({ label, onClick }) => {
  return (
    <Button
      bg="var(--backgroundColor)" // Matches the provided CSS
      color="var(--primaryColor)"
      border="1px solid var(--primaryColor)"
      padding="0.75rem 1.5rem"
      borderRadius="2px"
      fontSize="1rem"
      cursor="pointer"
      width="100%"
      _hover={{
        bg: "var(--primaryColor)", // Hover effect
        color: "var(--backgroundColor)",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
      transition="background-color 0.3s ease" // Smooth transition
      onClick={onClick} // Trigger the passed onClick function
    >
      {label}
    </Button>
  );
};

export default NAEOutlineButton;