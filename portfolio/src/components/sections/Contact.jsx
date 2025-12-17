import { Heading, Text, VStack, HStack, Link, Button } from "@chakra-ui/react";
import MotionBox from "../ui/MotionBox";
import { sectionAnimation } from "../ui/sectionAnimation";

const Contact = () => {
  return (
    <MotionBox
      as="section"
      id="contact"
      py={20}
      px={6}
      bg="gray.50"
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <VStack spacing={6} maxW="700px" mx="auto" textAlign="center">
        <Heading as="h2" size="xl" color="brand.500">
          Contact
        </Heading>

        <Text fontSize="lg">
          I’m currently open to new opportunities in Morocco or remote roles.
          Feel free to reach out if you’d like to discuss a project, collaboration,
          or job opportunity.
        </Text>

        <VStack spacing={2}>
          <Text fontWeight="bold">Email</Text>
          <Link
            href="mailto:annahrimohammed@gmail.com"
            color="brand.500"
            fontSize="lg"
          >
            annahrimohammed@gmail.com
          </Link>
        </VStack>

        <HStack spacing={6} pt={4}>
          <Button
            as={Link}
            href="https://github.com/simopoza"
            target="_blank"
            colorScheme="brand"
          >
            GitHub
          </Button>

          <Button
            as={Link}
            href="https://www.linkedin.com/in/mohammed-annahri/"
            target="_blank"
            colorScheme="blue"
          >
            LinkedIn
          </Button>
        </HStack>
      </VStack>
    </MotionBox>
  );
};

export default Contact;
