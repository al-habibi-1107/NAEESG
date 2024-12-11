import { Box, Image, Heading, Text } from "@chakra-ui/react";

interface TeamMemberProps {
  imageSrc: string;
  name: string;
  designation: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  imageSrc,
  name,
  designation,
}) => {
  return (
    <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    width="100%"
    h="max-content"
    p={8}
    gap={2}
    >
      <Image src={imageSrc} alt={name} borderRadius="md" mb={2} width="200px" height="200px"/>
      <Heading fontSize="md" color="var(--primaryColor)" fontWeight="bold">{name}</Heading>
      <Text fontSize="sm" color="gray.600" fontWeight="500">
        {designation}
      </Text>
    </Box>
  );
};

export default TeamMemberCard;