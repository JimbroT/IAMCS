import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Landing } from '../components/Landing'
import { DetailsTable } from '../components/DetailsTable'
import { Box, SimpleGrid, Heading, Text, Img, Container } from '@chakra-ui/react'
import { NavBar } from '../components/NavBar'
import { TwoColWithPic } from '../components/TwoColWithPic'
import { MedSep } from '../components/MedSep'
import { SmSep } from '../components/SmSep'
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
      <NavBar bg='#3B005A' />
      <Landing />
      <Box bgPos='center' bgRepeat='repeat' minH='40vh'
        bgImage="linear-gradient(to top, rgba(0, 0, 0, 0.5), rgb(23, 0, 35)), url('/iamcs_bkg.png') "
      >
        <Container maxW='container.xl' p={8}>

          <Box pt={16}>

            <DetailsTable />
            <MedSep />
            <Box textAlign="center" maxW="700px" mx="auto">
              <Heading as="h1" size="3xl" color="white" fontWeight="bold" id="workshops">Workshops</Heading>
            </Box >

            <SmSep />

            <TwoColWithPic
              img='/VEX Robot Poster.png'
              title='VEX-ing into the Robo World'
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
              align='left'
            />

            <SmSep />

            <TwoColWithPic
              img='/CODE_ School Poster.png'
              title='Finding the Spark in Code: Introduction to Web Development'
              desc="In this workshop, you will be introduced to the basics of web development! Including, understtanding how websites work and how HTML and CSS can be implemented easily. Then participants will desing/create their own website."
              align='right'
            />

            <SmSep />
            
            <TwoColWithPic
              img='/PH_ Summit Poster.png'
              title='Making The Rainbow: Learning About PH'
              desc="Ever wonder why lemon tastes so sour? What about vinegar? Why does soap feel so slippery? In this workshop, we're going to be exploring why this is by magically changing the color of cabbage juice using substances with different pH. Students will perform a lab, talk through a discussion, and then do a fun art project!"
              align='left'
            />

            <SmSep />




          </Box>
        </Container>
      </Box>

    </>
  )
}
