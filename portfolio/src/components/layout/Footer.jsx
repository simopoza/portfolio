import { Box, Container, HStack, Link as ChakraLink, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      py={6}
      borderTop="1px solid"
      borderColor="gray.200"
      bg="white"
    >
      <Container maxW="container.xl">
        <HStack justify="space-between" flexWrap="wrap" gap={4}>
          <Text fontSize="14px" color="gray.600">
            © {new Date().getFullYear()} Mohammed Annahri. All rights reserved.
          </Text>

          <HStack spacing={6}>
            <ChakraLink
              href="https://github.com/simopoza"
              isExternal
              fontSize="14px"
              fontWeight="medium"
              color="blue.600"
              _hover={{ color: "blue.700" }}
            >
              GitHub
            </ChakraLink>
            <ChakraLink
              href="https://www.linkedin.com/in/mohammed-annahri/"
              isExternal
              fontSize="14px"
              fontWeight="medium"
              color="blue.600"
              _hover={{ color: "blue.700" }}
            >
              LinkedIn
            </ChakraLink>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
