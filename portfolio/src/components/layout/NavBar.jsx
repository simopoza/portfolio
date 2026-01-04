import React, { useEffect } from "react";
import {
  Box,
  Container,
  HStack,
  Link as ChakraLink,
  Text,
  Icon,
  Button,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import LogoCube from "./LogoCube";

const NavBar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const { open, onToggle } = useDisclosure();

  useEffect(() => {
    // debug: log menu open state so user/devtools can verify clicks
    // eslint-disable-next-line no-console
    console.log("NavBar open:", open);
  }, [open]);

  return (
    <Box
      as="nav"
      data-menu-open={open}
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="whiteAlpha.800"
      backdropFilter="saturate(180%) blur(6px)"
      zIndex={50}
      py={3}
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
    >
      <Container maxW="7xl">
        <HStack justify="space-between">
          {/* Logo */}
          <ChakraLink
            as={RouterLink}
            to="/"
            _hover={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none", outline: "none" }}
            _focusVisible={{ boxShadow: "none", outline: "none" }}
            _active={{ boxShadow: "none", outline: "none" }}
          >
              <HStack spacing={3}>
                <LogoCube />
                <Text fontWeight="bold">
                  Mohammed Annahri
                </Text>
              </HStack>
          </ChakraLink>

          {/* Desktop Navigation */}
          <HStack spacing={{ base: 4, md: 8 }} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <ChakraLink
                key={link.path}
                as={RouterLink}
                to={link.path}
                fontSize="16px"
                fontWeight="medium"
                color={location.pathname === link.path ? "blue.600" : "gray.700"}
                position="relative"
                px={{ base: 2, md: 3 }}
                py={{ base: 1, md: 2 }}
                _hover={{ color: "blue.600", textDecoration: "none" }}
                _focus={{ boxShadow: "none", outline: "none" }}
                _focusVisible={{ boxShadow: "none", outline: "none" }}
                _active={{ bg: "transparent", outline: "none" }}
                _after={{
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  bg: "blue.600",
                  transform: location.pathname === link.path ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.25s cubic-bezier(.2,.9,.3,1)",
                }}
              >
                {link.name}
              </ChakraLink>
            ))}
          </HStack>

          {/* Mobile menu button */}
          <Button
            aria-label={open ? "Close menu" : "Open menu"}
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            variant="ghost"
            size="md"
            p={2}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </Button>
        </HStack>
      </Container>

      {/* Mobile Navigation */}
      {open && (
        <Box
          display={{ base: "block", md: "none" }}
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          height="100vh"
          bg="white"
          boxShadow="lg"
          zIndex={99999}
        >
          <Container maxW="7xl" pt={6}>
            <Button
              aria-label="Close menu"
              position="absolute"
              top={4}
              right={4}
              variant="ghost"
              size="md"
              onClick={onToggle}
              p={2}
            >
              <FiX size={24} />
            </Button>
            <VStack align="stretch" spacing={1} pt={12}>
              {navLinks.map((link) => (
                <ChakraLink
                  key={link.path}
                  as={RouterLink}
                  to={link.path}
                  py={4}
                  px={4}
                  borderRadius="md"
                  bg={location.pathname === link.path ? "blue.50" : "transparent"}
                  color={location.pathname === link.path ? "blue.600" : "gray.700"}
                  fontWeight="medium"
                  fontSize="lg"
                  _hover={{ bg: "gray.50", textDecoration: "none" }}
                  _focus={{ boxShadow: "none", outline: "none" }}
                  _focusVisible={{ boxShadow: "none", outline: "none" }}
                  _active={{ bg: "transparent", outline: "none" }}
                  onClick={onToggle}
                >
                  {link.name}
                </ChakraLink>
              ))}
            </VStack>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default NavBar;
