import { Box, Text, HStack, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      py={6}
      mt={20}
      borderTop="1px solid"
      borderColor="gray.200"
      textAlign="center"
    >
      <Text fontSize="sm" color="gray.600">
        © {new Date().getFullYear()} Mohammed Annahri. All rights reserved.
      </Text>

      <HStack spacing={4} justify="center" mt={2}>
        <Link
          href="https://github.com/simopoza"
          isExternal
          fontWeight="medium"
          color="brand.500"
          _hover={{ textDecoration: "underline", color: "brand.600" }}
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/mohammed-annahri/"
          isExternal
          fontWeight="medium"
          color="brand.500"
          _hover={{ textDecoration: "underline", color: "brand.600" }}
        >
          LinkedIn
        </Link>
      </HStack>
    </Box>
  );
};

export default Footer;
