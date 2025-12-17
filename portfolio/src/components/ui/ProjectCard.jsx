import { Box, Heading, Text, Stack, Button, Badge, HStack } from "@chakra-ui/react";

const ProjectCard = ({ title, description, techStack, github, live }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      bg="white"
      shadow="md"
      _hover={{ shadow: "xl" }}
    >
      <Heading as="h3" size="md" mb={2} color="brand.500">
        {title}
      </Heading>
      <Text mb={4}>{description}</Text>

      <HStack spacing={2} mb={4} wrap="wrap">
        {techStack.map((tech, idx) => (
          <Badge key={idx} colorScheme="teal">
            {tech}
          </Badge>
        ))}
      </HStack>

      <Stack direction="row" spacing={4}>
        {github && (
          <Button size="sm" colorScheme="gray" as="a" href={github} target="_blank">
            GitHub
          </Button>
        )}
        {live && (
          <Button size="sm" colorScheme="brand" as="a" href={live} target="_blank">
            Live Demo
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default ProjectCard;
