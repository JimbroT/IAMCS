import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Img,
  Button,
} from "@chakra-ui/react";

export const DetailsTable = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      backgroundImage="url('/peopletalking.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
    >
    

      <Heading color="white" fontSize="5xl" mt = "-80" ml = "-8">
        <Text as="span" color="#F1C232">
          What We Do
        </Text>
      </Heading>


      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={40} 
        mt="8"
        maxW="1200px"
        mx="auto"
      >
        <Box mt = "10">
          <Img src="/image1.png" alt="Image 1" />
          <Text color="white" mt="12" fontWeight = "bold" textAlign="left">
            Consulting
          </Text>
          <Button colorScheme="blue" mt="12" ml = "-5">
            Learn More
          </Button>
        </Box>

        <Box mt = "10">
          <Img src="/idea2.png" alt="Image 2" />
          <Text color="white" mt="12" fontWeight = "bold" textAlign="left">
            Workshops
          </Text>
          <Button colorScheme="blue" mt="12" ml = "-5">
            Learn More
          </Button>
        </Box>

        <Box mt = "10" textAlign="center">
          <Img src="/idea3.png" alt="Image 3" />
          <Text color="white" mt="12" fontWeight = "bold" textAlign="left" ml = "-4">
            OurCity Program
          </Text>
          <Button colorScheme="blue" mt="12" ml = "-5">
            Learn More
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};