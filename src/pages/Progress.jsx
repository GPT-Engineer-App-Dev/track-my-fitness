import { useState, useEffect } from "react";
import { Container, Heading, VStack, Box } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Progress = () => {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    // Fetch progress data from local storage or server
    const data = JSON.parse(localStorage.getItem("progressData")) || [];
    setProgressData(data);
  }, []);

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%" maxW="md">
        <Heading as="h2" size="xl" textAlign="center">Progress Over Time</Heading>
        <Box width="100%" height={400}>
          <ResponsiveContainer>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="duration" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="intensity" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </VStack>
    </Container>
  );
};

export default Progress;