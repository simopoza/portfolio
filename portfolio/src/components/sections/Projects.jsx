import { Heading, SimpleGrid } from "@chakra-ui/react";
import MotionBox from "../ui/MotionBox";
import { sectionAnimation } from "../ui/sectionAnimation";
import ProjectCard from "../ui/ProjectCard";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <MotionBox
      as="section"
      id="projects"
      py={20}
      px={6}
      maxW="1200px"
      mx="auto"
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Heading as="h2" size="xl" mb={10} textAlign="center" color="brand.500">
        My Projects
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            github={project.github}
            live={project.live}
          />
        ))}
      </SimpleGrid>
    </MotionBox>
  );
};

export default Projects;
