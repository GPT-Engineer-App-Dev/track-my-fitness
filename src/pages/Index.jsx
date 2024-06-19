import { Container, Text, VStack, Heading, Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaRunning, FaDumbbell, FaHeartbeat } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Fitness Tracker</Heading>
        <Text fontSize="lg" textAlign="center">Track your workouts, monitor your progress, and stay healthy!</Text>
        <Flex width="100%" justifyContent="space-around">
          <Box textAlign="center">
            <FaRunning size="3em" />
            <Text mt={2}>Running</Text>
          </Box>
          <Box textAlign="center">
            <FaDumbbell size="3em" />
            <Text mt={2}>Strength</Text>
          </Box>
          <Box textAlign="center">
            <FaHeartbeat size="3em" />
            <Text mt={2}>Health</Text>
          </Box>
        </Flex>
        <Link to="/log-workout">
          <Button colorScheme="teal" size="lg">Log Workout</Button>
        </Link>
        <Link to="/progress">
          <Button colorScheme="teal" size="lg">View Progress</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;