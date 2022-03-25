import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    chakra,
    FormControl,
    Text, FormHelperText,
    Input
} from '@chakra-ui/react'
// import useState
import { useState, useEffect } from 'react'
export const SignUpModal = () => {
    // const { isOpen, onOpen, onClose } = useDisclosure()


    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowModal(true), 1000);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let email = document.getElementById('email').value;

        await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email
            })
        })

    }

    return (
        <>
            {showModal ? <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Text fontWeight='black'>
                            Subscribe to the <chakra.span color='#F1C232'>#IAmCS</chakra.span> newsletter!
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl isRequired>
                            <Input id='email' placeholder='e.g. example@example.com' />
                            <FormHelperText ml='1'>We promise its an email worth reading.</FormHelperText>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter justifyContent='start'>
                        <Button colorScheme='blue' mr={3} fontSize='md' onClick={handleSubmit}>
                            Subscribe
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal> : null}

        </>
    )
}