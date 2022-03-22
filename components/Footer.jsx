import { Divider, Box, Icon, Link } from '@chakra-ui/react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

import { IoLogoTiktok } from 'react-icons/io5'
export const Footer = () => {
    return (
        <>
            <Divider mt={20} borderColor='gray.100' />

            <Box textAlign='center' fontSize='4xl' mt={4}>

                <Link href='/INSTA' isExternal>
                    <Icon as={AiOutlineInstagram} color='#ffffff' transition='all 0.2s' _hover={{
                        color: '#ffffff',
                    }} />
                </Link>

                <Link href='/TWITTER' isExternal>
                    <Icon as={AiOutlineTwitter} color='#ffffff' mx={4} transition='all 0.2s' _hover={{
                        color: '#ffffff',
                    }} />
                </Link>

                <Link href='/TIKTOK' isExternal>
                    <Icon as={IoLogoTiktok} color='#ffffff' transition='all 0.2s' _hover={{
                        color: '#ffffff',
                    }} />
                </Link>
            </Box>
        </>
    )
}