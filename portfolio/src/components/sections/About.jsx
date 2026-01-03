import { motion } from 'framer-motion';
import { Box, Container, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { FaCode, FaRocket, FaHeart, FaUsers } from "react-icons/fa";

export default function About() {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Chakra UI', 'Next.js', 'Redux']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'NestJS', 'RESTful APIs', 'WebSockets', 'Authentication']
    },
    {
      category: 'Database',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Database Design', 'SQL Optimization']
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'Docker', 'CI/CD', 'Testing', 'AWS', 'Agile/Scrum']
    }
  ];

  const values = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable, well-documented, and scalable code is my priority.'
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Always exploring new technologies and best practices to deliver modern solutions.'
    },
    {
      icon: FaHeart,
      title: 'User-Centric',
      description: 'Building applications that prioritize user experience and accessibility.'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'Effective communication and teamwork are essential to successful projects.'
    }
  ];

  return (
    <Box minH="100vh" pt={24} pb={20} px={{ base: 4, sm: 6, lg: 8 }}>
      <Container maxW="5xl">
        {/* Hero */}
        <Box
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          textAlign="center"
          mb={16}
        >
          <Heading as="h1" mb={6} color="gray.900">
            About Me
          </Heading>
          <Text color="gray.600" maxW="3xl" mx="auto">
            I'm Mohammed Annahri, a Full-Stack Developer and 1337 student based in Morocco. I specialize in building modern, scalable, and user-friendly web applications using React, Node.js, and the latest web technologies. I’m passionate about turning ideas into real products that solve problems and deliver value.
          </Text>
        </Box>

        {/* Bio Section */}
        <Box
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          mb={16}
          bg="white"
          rounded="xl"
          p={8}
          boxShadow="sm"
        >
          <Heading as="h2" size="lg" mb={6} color="gray.900">
            My Journey
          </Heading>
          <Box color="gray.600" spaceY={4}>
            <Text mb={4}>
              My journey into web development began with curiosity — wanting to understand how websites and apps are built. Over time, this curiosity turned into a passion for creating practical digital solutions.
            </Text>
            <Text mb={4}>
              As a Full-Stack Developer, I have gained experience building end-to-end applications, from crafting interactive user interfaces with React and Chakra UI, to designing robust backends with Node.js, Express, and NestJS, and managing databases like MySQL, PostgreSQL, and MongoDB.
            </Text>
            <Text>
              I thrive on solving complex problems and optimizing applications for performance, usability, and scalability. Through my projects at 1337 and personal work, I strive to deliver code that is clean, maintainable, and impactful, always keeping the end-user experience at the forefront.
            </Text>
          </Box>
        </Box>

        {/* Skills Grid */}
        <Box
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          mb={16}
        >
          <Heading as="h2" size="lg" mb={8} textAlign="center" color="gray.900">
            Core Skills
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            {skills.map((skillGroup, index) => (
              <Box
                as={motion.div}
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                bg="white"
                rounded="xl"
                p={6}
                boxShadow="sm"
              >
                <Heading as="h3" size="md" mb={4} color="gray.900">
                  {skillGroup.category}
                </Heading>
                <Box display="flex" flexWrap="wrap" gap={2}>
                  {skillGroup.items.map((skill) => (
                    <Text
                      key={skill}
                      px={3}
                      py={1}
                      bg="blue.50"
                      color="blue.600"
                      rounded="lg"
                      fontSize="sm"
                    >
                      {skill}
                    </Text>
                  ))}
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Values */}
        <Box
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Heading as="h2" size="lg" mb={8} textAlign="center" color="gray.900">
            Values & Passion
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Box
                  as={motion.div}
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  bgGradient="linear(to-br, white, gray.50)"
                  rounded="xl"
                  p={6}
                  boxShadow="sm"
                >
                  <Box
                    w={12}
                    h={12}
                    bg="blue.100"
                    rounded="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={4}
                  >
                    <IconComponent color="#2563EB" size={24} />
                  </Box>
                  <Heading as="h3" size="md" mb={2} color="gray.900">
                    {value.title}
                  </Heading>
                  <Text color="gray.600">{value.description}</Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
