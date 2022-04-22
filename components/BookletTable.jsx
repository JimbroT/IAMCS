import { Box, SimpleGrid, Heading, Text, Img } from "@chakra-ui/react";

export const BookletTable = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={4}
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Img src="/booklet.png" mx="auto" maxH="400px" rounded="md" />
      </Box>

      <Box>
        <Heading color="white" fontSize="5xl">
          <Text as="span" color="#F1C232">
            Booklet
          </Text>{" "}
          Details:
        </Heading>

        <Text as="span" color="white" fontSize="2xl" fontWeight="normal">
          Our team created a booklet specialized for the 2022 #IAmCS Summit.
          Feel free to grab your copy at the Summit and share it with your
          friends!
        </Text>
      </Box>
    </SimpleGrid>
  );
};
