import { Heading, Text, VStack } from "@chakra-ui/react";
import MotionBox from "../ui/MotionBox";
import { sectionAnimation } from "../ui/sectionAnimation";

const About = () => {
  return (
    <MotionBox
      as="section"
      id="about"
      py={20}
      px={6}
      maxW="900px"
      mx="auto"
      textAlign="center"
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Heading as="h2" size="xl" mb={6} color="brand.500">
        About Me
      </Heading>

      <VStack spacing={4}>
        <Text fontSize="lg">
          I'm a Fullstack Web Developer and a <strong>1337 student</strong> with a passion for building{" "}
          <strong>real-world applications</strong>.
          From managing backend systems to crafting interactive frontend interfaces, I enjoy solving
          problems and creating seamless user experiences.
        </Text>

        <Text fontSize="lg">
          I have worked on projects involving{" "}
          <strong>authentication, real-time features, and database-driven applications</strong>.
          I also completed a 6-month internship at <strong>M2M Group</strong>, gaining professional
          experience in banking and payment systems.
        </Text>

        <Text fontSize="lg">
          Currently, I focus on{" "}
          <strong>React, Node.js, Chakra UI, and modern web technologies</strong>.
          My goal is to build applications that are{" "}
          <strong>clean, efficient, and user-friendly</strong>.
        </Text>
      </VStack>
    </MotionBox>
  );
};

export default About;
