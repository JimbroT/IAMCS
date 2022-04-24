import { Box, SimpleGrid, Heading, Text, Img, Button } from "@chakra-ui/react";

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
        <Text color="white" fontSize="2xl" fontWeight="normal" my={4}>
          Our team created a booklet specialized for the 2022 #IAmCS Summit.
          Feel free to grab your copy at the Summit (or now!) and share it with
          your friends!
        </Text>

        <Button
          color="#494949"
          as="a"
          href="https://www.flipsnack.com/9AEFF9EEFB5/2022-iamcs-booklet.html"
          bg={"#F1C232"}
          rounded={"full"}
          px={6}
          _hover={{
            bg: "#c9a228",
          }}
          target="_blank"
        >
          Grab a copy here!
        </Button>
      </Box>
    </SimpleGrid>
  );
};
