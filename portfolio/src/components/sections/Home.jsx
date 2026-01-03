import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  SimpleGrid,
  Badge,
  VStack,
  HStack,
  Image,
  Link as ChakraLink,
  Icon,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { SiReact, SiJavascript, SiChakraui, SiNodedotjs, SiNestjs, SiMysql } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import projects from "../../data/projects";

// Note: avoid deprecated motion(component) usage. Use Chakra `as={motion.div}` instead.

// helper to create SVG placeholder as data URI (avoids external network requests)
const makePlaceholder = (title) => {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='400' height='200'>
      <rect width='100%' height='100%' fill='%23E5E7EB' />
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%236B7280' font-family='Arial, Helvetica, sans-serif' font-size='18'>${title}</text>
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// Use Chakra `Box` as a motion component so Chakra style props are forwarded correctly

const Home = () => {
  const featuredProjects = projects.slice(0, 3);
console.log("HOME PAGE IS WORKING");

  const techStack = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Container
        maxW="container.xl"
        py={{ base: "80px", md: "110px" }}
      >
        <VStack
          as={motion.div}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          spacing={7}
          textAlign="center"
        >
          {/* Role Badge */}
          <Badge
            px={5}
            py={2}
            bg="blue.50"
            color="blue.600"
            borderRadius="full"
            fontSize="sm"
            fontWeight="medium"
          >
            Full-Stack Developer
          </Badge>

          {/* Main Heading */}
          <Heading
            as="h1"
            fontSize={{ base: "34px", md: "44px" }}
            lineHeight="1.3"
            fontWeight="semibold"
            color="gray.900"
            maxW="800px"
          >
            Hi, I’m{" "}
            <Box
              as="span"
              display="inline-block"
              fontWeight="extrabold"
              fontSize="inherit"
              style={{
                background: "linear-gradient(to right, #2563EB, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Mohammed Annahri
            </Box>

          </Heading>

          {/* Description */}
          <Text
            fontSize={{ base: "16px", md: "18px" }}
            color="gray.600"
            maxW="650px"
          >
            A passionate Full-Stack Developer specializing in modern, scalable and
            user-focused web applications. I enjoy solving complex problems and
            creating clean, beautiful digital experiences.
          </Text>

          {/* Buttons */}
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={4}
            pt={3}
            w={{ base: "full", sm: "auto" }}
            justify="center"
          >
            <Button
              as={RouterLink}
              to="/projects"
              size="lg"
              bg="blue.600"
              color="white"
              _hover={{ bg: "blue.700" }}
              w={{ base: "full", sm: "auto" }}
            >
              View Projects
              <Box as="span" ml={2} fontWeight="normal" display="inline-flex" alignItems="center">
                <FaArrowRight size={16} />
              </Box>
            </Button>

            <Button
              as={RouterLink}
              to="/contact"
              variant="outline"
              size="lg"
              borderColor="gray.300"
              _hover={{ bg: "gray.50" }}
              w={{ base: "full", sm: "auto" }}
            >
              Contact Me
            </Button>
          </Stack>
        </VStack>
      </Container>

      {/* Featured Projects Section */}
      <Box bg="gray.50" py={{ base: "50px", md: "60px" }}>
        <Container maxW="container.xl">
          <Box as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading
              as="h2"
              fontSize="24px"
              textAlign="center"
              mb={12}
              fontWeight="medium"
            >
              Featured Projects
            </Heading>

            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacingX={{ base: 6, md: 8 }}
              spacingY={{ base: 8, md: 10 }}
            >
              {featuredProjects.map((project, index) => (
                <Box key={project.title} p={{ base: 2, md: 3 }}>
                  <Box
                    key={index}
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    p={0}
                  >
                    <ChakraLink
                      as={RouterLink}
                      to={`/projects/${project.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      display="block"
                      bg="white"
                      borderRadius="16px"
                      overflow="hidden"
                      boxShadow="lg"
                      borderWidth="1px"
                      borderColor="gray.200"
                      border="1px solid #E5E7EB"
                      _hover={{ boxShadow: "xl", transform: "translateY(-6px)" }}
                    >
                  <Box
                    h="200px"
                    bg="gray.200"
                    position="relative"
                    overflow="hidden"
                  >
                    <Image
                      src={project.image ? project.image : makePlaceholder(project.title)}
                      alt={project.title}
                      objectFit="cover"
                      w="full"
                      h="full"
                      transition="transform 0.3s"
                      _hover={{ transform: "scale(1.05)" }}
                    />
                  </Box>

                  <Box p={{ base: 4, md: 6 }}>
                    <Badge
                      px={3}
                      py={1}
                      bg="blue.50"
                      color="blue.600"
                      borderRadius="full"
                      fontSize="xs"
                      mb={3}
                    >
                      Full-Stack
                    </Badge>

                    <Heading as="h3" fontSize="18px" mb={2} fontWeight="medium">
                      {project.title}
                    </Heading>

                    <Text fontSize="14px" color="gray.600" mb={4}>
                      {project.description}
                    </Text>

                    <HStack spacing={2} flexWrap="wrap">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <Badge
                          key={i}
                          px={2}
                          py={1}
                          bg="gray.100"
                          color="gray.700"
                          borderRadius="md"
                          fontSize="xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </HStack>
                  </Box>
                      </ChakraLink>
                    </Box>
                </Box>
              ))}
            </SimpleGrid>

            <Box textAlign="center" mt={12}>
              <ChakraLink
                as={RouterLink}
                to="/projects"
                color="blue.600"
                fontSize="16px"
                fontWeight="medium"
                _hover={{ color: "blue.700" }}
              >
                View All Projects →
              </ChakraLink>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Tech Stack Section */}
      <Box bg="white" py={{ base: "50px", md: "60px" }}>
        <Container maxW="container.xl">
          <Box as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            as="h2"
            fontSize="24px"
            textAlign="center"
            mb={12}
            fontWeight="medium"
          >
            Tech Stack
          </Heading>

          <SimpleGrid
            columns={{ base: 2, md: 3, lg: 6 }}
            spacing={6}
          >
            {techStack.map((tech, index) => (
              <Box key={tech.name} p={{ base: 2, md: 3 }}>
              <Box as={motion.div}
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                bg="white"
                p={6}
                borderRadius="xl"
                boxShadow="sm"
                textAlign="center"
                _hover={{ boxShadow: "md" }}
              >
                <Icon as={tech.icon} boxSize={10} mb={3} color={tech.color} />
                <Text fontSize="14px" fontWeight="medium">
                  {tech.name}
                </Text>
              </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        </Container>
      </Box>

      {/* About Preview Section */}
      <Box bg="gray.50" py={{ base: "60px", md: "80px" }}>
        <Container maxW="container.md">
          <Box as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            textAlign="center"
          >
            <Heading
              as="h2"
              fontSize="24px"
              mb={6}
              fontWeight="medium"
            >
              About Me
            </Heading>

            <Text
              fontSize="16px"
              color="gray.600"
              maxW="750px"
              mx="auto"
              mb={8}
            >
              I'm a passionate Full-Stack Developer based in Morocco with
              expertise in building modern web applications. I specialize in
              React, TypeScript, Node.js, and modern databases, focusing on
              creating scalable, maintainable, and user-friendly solutions.
            </Text>

            <ChakraLink
              as={RouterLink}
              to="/about"
              color="blue.600"
              fontSize="16px"
              fontWeight="medium"
              _hover={{ color: "blue.700" }}
            >
              Learn More About Me →
            </ChakraLink>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box maxW="1000px" mx="auto" py="80px" px="20px">
        <Box
          as={motion.div}
          backgroundImage="linear-gradient(to right, #6366F1, #8B5CF6)"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          color="white"
          p={{ base: "40px", md: "60px" }}
          borderRadius="24px"
          textAlign="center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          boxShadow="0px 40px 80px rgba(0,0,0,0.25)"
        >
          <Heading fontSize="32px" mb="12px">
            Let’s Work Together
          </Heading>

          <Text fontSize="18px" opacity="0.9" maxW="600px" mx="auto" mb="28px">
            I’m always open to discussing new projects, creative ideas,
            or opportunities to collaborate.
          </Text>

          <Button
            as={RouterLink}
            to="/contact"
            bg="white"
            color="#4F46E5"
            fontWeight="bold"
            size="lg"
            _hover={{ bg: "gray.100" }}
          >
            Get In Touch →
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
