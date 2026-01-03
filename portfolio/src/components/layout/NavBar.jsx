import {
  Box,
  Container,
  HStack,
  Link as ChakraLink,
  Text,
  Icon,
  IconButton,
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
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="whiteAlpha.800"
      backdropFilter="saturate(180%) blur(6px)"
      zIndex={50}
      py={3}
    >
      <Container maxW="7xl">
        <HStack justify="space-between">
          {/* Logo */}
          <ChakraLink as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
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
          <IconButton
            aria-label={isOpen ? "Close menu" : "Open menu"}
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            icon={isOpen ? <FiX /> : <FiMenu />}
            variant="ghost"
            size="md"
          />
        </HStack>
      </Container>

      {/* Mobile Navigation (fallback when Collapse isn't available) */}
      {isOpen && (
        <Box>
          <Container maxW="7xl">
            <VStack align="stretch" spacing={2} py={3}>
              {navLinks.map((link) => (
                <ChakraLink
                  key={link.path}
                  as={RouterLink}
                  to={link.path}
                  py={2}
                  px={3}
                  borderRadius="md"
                    _hover={{ bg: "gray.50", textDecoration: "none" }}
                    _focus={{ boxShadow: "none", outline: "none" }}
                    _focusVisible={{ boxShadow: "none", outline: "none" }}
                    _active={{ bg: "transparent", outline: "none" }}
                  onClick={() => {
                    if (isOpen) onToggle();
                  }}
                >
                  <Text color={location.pathname === link.path ? "blue.600" : "gray.700"} fontWeight="medium">
                    {link.name}
                  </Text>
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
