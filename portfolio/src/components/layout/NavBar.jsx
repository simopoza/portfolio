import { Box, HStack, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "skills", "experience", "contact"];

const NavBar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      w="100%"
      bg="white"
      zIndex={10}
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <HStack spacing={6} px={8} py={4} justify="center">
        {sections.map((id) => (
          <Link
            key={id}
            href={`#${id}`}
            fontWeight={active === id ? "bold" : "normal"}
            color={active === id ? "brand.500" : "gray.600"}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </Link>
        ))}
      </HStack>
    </Box>
  );
};

export default NavBar;
