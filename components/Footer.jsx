import { Divider, Box, Icon, Link } from '@chakra-ui/react'
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'

export const Footer = () => {
    return (
        <>
            <Divider mt={20} borderColor='gray.100' />

            <Box textAlign='center' fontSize='4xl' mt={4}>

                <Link href='/INSTA' isExternal>
                    <Icon as={AiOutlineInstagram} color='#f50057' transition='all 0.2s' _hover={{
                        color: '#ffffff',
                    }} />
                </Link>

                <Link href='/TWITTER' isExternal>
                    <Icon as={AiOutlineTwitter} color='#1da1f2' mx={4} transition='all 0.2s' _hover={{
                        color: '#ffffff',
                    }} />
                </Link>

                <Link href='/LINKEDIN' isExternal>
                    <Icon as={AiOutlineLinkedin} color='#0077b5' transition='all 0.2s' _hover={{
                        color: '#ffffff',
                    }} />
                </Link>
            </Box>
        </>
    )
}