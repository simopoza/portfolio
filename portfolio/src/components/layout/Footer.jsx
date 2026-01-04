import {
  Box,
  Container,
  SimpleGrid,
  HStack,
  VStack,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import LogoCube from "./LogoCube";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box bg="#0B1220" color="white" mt={0} as="footer">
      <Container maxW="1200px" py="40px">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 12, md: 60 }}>
          {/* Left Section */}
          <HStack align="flex-start" spacing="12px" mb={{ base: 8, md: 0 }}>
            <LogoCube size="34px" radius="12px" from="#6366F1" to="#8B5CF6" />
            <VStack align="flex-start" spacing="8px">
              <Text fontWeight="bold">Mohammed Annahri</Text>
              <Text color="gray.400" maxW="280px" lineHeight="1.6">
                Full-Stack Developer based in Morocco, building scalable and user-friendly web
                applications.
              </Text>
            </VStack>
          </HStack>

          {/* Quick Links */}
          <VStack align="flex-start" spacing="10px" mb={{ base: 8, md: 0 }}>
            <Text fontWeight="bold">Quick Links</Text>

            <ChakraLink as={RouterLink} to="/" color="gray.300" _hover={{ color: "white" }} _focus={{ boxShadow: "none", outline: "none" }} _active={{ boxShadow: "none", outline: "none" }}>
              Home
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/projects" color="gray.300" _hover={{ color: "white" }} _focus={{ boxShadow: "none", outline: "none" }} _active={{ boxShadow: "none", outline: "none" }}>
              Projects
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/experience" color="gray.300" _hover={{ color: "white" }} _focus={{ boxShadow: "none", outline: "none" }} _active={{ boxShadow: "none", outline: "none" }}>
              Experience
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/about" color="gray.300" _hover={{ color: "white" }} _focus={{ boxShadow: "none", outline: "none" }} _active={{ boxShadow: "none", outline: "none" }}>
              About
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/contact" color="gray.300" _hover={{ color: "white" }} _focus={{ boxShadow: "none", outline: "none" }} _active={{ boxShadow: "none", outline: "none" }}>
              Contact
            </ChakraLink>
          </VStack>

          {/* Connect */}
          <VStack align="flex-start" spacing="14px" mb={{ base: 8, md: 0 }}>
            <Text fontWeight="bold">Connect</Text>

            <HStack spacing="10px">
                <ChakraLink href="https://github.com/simopoza" isExternal target="_blank" rel="noopener noreferrer">
                  <Box
                    as="span"
                    w="40px"
                    h="40px"
                    bg="#111A2E"
                    color="gray.300"
                    rounded="full"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    _hover={{ bg: "#1E293B", color: "white" }}
                  >
                    <FaGithub />
                  </Box>
                </ChakraLink>

                <ChakraLink href="https://www.linkedin.com/in/mohammed-annahri/" isExternal target="_blank" rel="noopener noreferrer">
                <Box
                  as="span"
                  w="40px"
                  h="40px"
                  bg="#111A2E"
                  color="gray.300"
                  rounded="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{ bg: "#1E293B", color: "white" }}
                >
                  <FaLinkedin />
                </Box>
              </ChakraLink>

              <ChakraLink href="mailto:annahrimohammed@gmail.com" isExternal target="_blank" rel="noopener noreferrer">
                <Box
                  as="span"
                  w="40px"
                  h="40px"
                  bg="#111A2E"
                  color="gray.300"
                  rounded="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{ bg: "#1E293B", color: "white" }}
                >
                  <FaEnvelope />
                </Box>
              </ChakraLink>
            </HStack>
          </VStack>
        </SimpleGrid>

        {/* Copyright */}
        <Text textAlign="center" color="gray.500" fontSize="14px" mt="24px">
          © {currentYear} Mohammed Annahri. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}
