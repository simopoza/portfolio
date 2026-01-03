import {
  Box,
  Container,
  SimpleGrid,
  HStack,
  VStack,
  Text,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import LogoCube from "./LogoCube";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box bg="#0B1220" color="white" mt={20} as="footer">
      <Container maxW="1200px" py="60px">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="60px">
          {/* Left Section */}
          <HStack align="flex-start" spacing="12px">
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
          <VStack align="flex-start" spacing="10px">
            <Text fontWeight="bold">Quick Links</Text>

            <Link href="/" color="gray.300" _hover={{ color: "white" }}>
              Home
            </Link>
            <Link href="/projects" color="gray.300" _hover={{ color: "white" }}>
              Projects
            </Link>
            <Link href="/about" color="gray.300" _hover={{ color: "white" }}>
              About
            </Link>
            <Link href="/contact" color="gray.300" _hover={{ color: "white" }}>
              Contact
            </Link>
          </VStack>

          {/* Connect */}
          <VStack align="flex-start" spacing="14px">
            <Text fontWeight="bold">Connect</Text>

            <HStack spacing="10px">
                <Link href="https://github.com/simopoza" isExternal>
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
                </Link>

              <Link href="https://www.linkedin.com/in/mohammed-annahri/" isExternal>
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
              </Link>

              <Link href="mailto:annahrimohammed@gmail.com">
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
              </Link>
            </HStack>
          </VStack>
        </SimpleGrid>

        {/* Copyright */}
        <Text textAlign="center" color="gray.500" fontSize="14px" mt="40px">
          © {currentYear} Mohammed Annahri. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}
