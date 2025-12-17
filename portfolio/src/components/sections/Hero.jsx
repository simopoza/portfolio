import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      as="section"
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      bgGradient="linear(to-r, white, gray.50)"
      px={6}
    >
      <Heading as="h1" size="2xl" mb={4} color="brand.500">
        Hi, I'm Mohammed Annahri
      </Heading>
      <Text fontSize="xl" mb={6} color="gray.700">
        Fullstack Web Developer | Building modern, responsive, and real-world web applications
      </Text>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <Button
          colorScheme="brand"
          size="lg"
          as="a"
          href="#projects"
        >
          See My Work
        </Button>
        <Button
          colorScheme="gray"
          size="lg"
          as="a"
          href="https://github.com/simopoza"
          target="_blank"
        >
          GitHub
        </Button>
      </Stack>
    </Box>
  );
};

export default Hero;
