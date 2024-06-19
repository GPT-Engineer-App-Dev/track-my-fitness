import { useState } from "react";
import { Container, Heading, VStack, FormControl, FormLabel, Input, Select, Button, Textarea } from "@chakra-ui/react";

const LogWorkout = () => {
  const [workout, setWorkout] = useState({
    type: "",
    duration: "",
    intensity: "",
    notes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the workout information (e.g., send it to a server or save it in local storage)
    console.log("Workout logged:", workout);
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md">
        <Heading as="h2" size="xl" textAlign="center">Log Workout</Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl id="type" isRequired>
              <FormLabel>Type of Exercise</FormLabel>
              <Select name="type" value={workout.type} onChange={handleChange} placeholder="Select exercise type">
                <option value="running">Running</option>
                <option value="strength">Strength</option>
                <option value="cycling">Cycling</option>
                <option value="swimming">Swimming</option>
              </Select>
            </FormControl>
            <FormControl id="duration" isRequired>
              <FormLabel>Duration (minutes)</FormLabel>
              <Input type="number" name="duration" value={workout.duration} onChange={handleChange} />
            </FormControl>
            <FormControl id="intensity" isRequired>
              <FormLabel>Intensity</FormLabel>
              <Select name="intensity" value={workout.intensity} onChange={handleChange} placeholder="Select intensity">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Select>
            </FormControl>
            <FormControl id="notes">
              <FormLabel>Notes</FormLabel>
              <Textarea name="notes" value={workout.notes} onChange={handleChange} placeholder="Additional notes" />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="100%">Log Workout</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default LogWorkout;