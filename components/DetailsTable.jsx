import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Box, SimpleGrid, Heading, Text, Img, Container
} from '@chakra-ui/react'

export const DetailsTable = () => {
    return (
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4} alignItems='center' justifyContent='center'>
            <Box >
                <Heading color='white' fontSize='5xl'>
                    <Text as='span' color='#F1C232'>2022</Text> Summit Details:
                </Heading>
                <Table variant='unstyled' mt='4'>
                    <Tbody p={0} m={0}>
                        <Tr alignItems='center'>
                            <Td p={0}>
                                <Text color='#F1C232' fontSize='3xl' fontWeight='bold'>
                                    Where:
                                </Text>

                            </Td>
                            <Td lineHeight='6'>
                                <Text as='span' color='white' fontSize='2xl' fontWeight='normal' >The Friday Institute for Educational Innovation </Text>
                                <Text color='gray.300' fontSize='lg'>
                                    1890 Main Campus Dr, Raleigh, NC 27606
                                </Text>
                            </Td>
                        </Tr>
                        <Tr alignItems='center'>
                            <Td p={0}>
                                <Text color='#F1C232' fontSize='3xl' fontWeight='semibold'>
                                    When:
                                </Text>

                            </Td>
                            <Td lineHeight='6'>
                                <Text as='span' color='white' fontSize='2xl' fontWeight='normal'>April 30th 2022 </Text>
                                <Text color='gray.300' fontSize='lg'>
                                    10am - 5:30pm
                                </Text>
                            </Td>
                        </Tr>

                        <Tr alignItems='center'>
                            <Td p={0}>
                                <Text color='#F1C232' fontSize='3xl' fontWeight='semibold'>
                                    About:
                                </Text>

                            </Td>
                            <Td lineHeight='6'>
                                <Text as='span' color='white' fontSize='2xl' fontWeight='normal'>This event is aimed at exposing students, with a focus on girls, to computer science, ai, STEM, and robotics.
                                    <Text as='span' color='green.100' fontStyle='italic' fontWeight='bold'> Due to this, participants must be in grades 6th to 12th.</Text></Text>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>

            </Box>

            <Box>
                <Img src='/sie.png' mx='auto' maxH='600px' />
            </Box>

        </SimpleGrid>
    )
}