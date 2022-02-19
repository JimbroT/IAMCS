import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Landing } from '../components/Landing'
import { DetailsTable } from '../components/DetailsTable'
import { Box, SimpleGrid, Heading, Text, Img, Container } from '@chakra-ui/react'
export default function Home() {
  return (
    <>
      <Head>
        <title>#IAmCS Summit</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:description" content="Sign up for the #IAmCS Summit!" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Landing />
      <Box bgPos='center' bgRepeat='repeat' minH='40vh'
        bgImage="linear-gradient(to top, rgba(0, 0, 0, 0.5), rgb(23, 0, 35)), url('/iamcs_bkg.png') "
      >
        <Container maxW='container.xl' p={8}>

          <Box pt={16}>

            <DetailsTable />




          </Box>
        </Container>
      </Box>

    </>
  )
}
