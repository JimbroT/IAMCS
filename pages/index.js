import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Landing } from '../components/Landing'
import { DetailsTable } from '../components/DetailsTable'
import {
  Box, SimpleGrid, Heading, Avatar, Text, Container, Img
} from '@chakra-ui/react'
import { SignUpModal } from '../components/SignUpModal'
import { NavBar } from '../components/NavBar'
import { TwoColWithPic } from '../components/TwoColWithPic'
import { MedSep } from '../components/MedSep'
import { SmSep } from '../components/SmSep'
import { Footer } from '../components/Footer'
import Team from '../data/team.json'
import Logos from '../data/logos.json'
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
      <SignUpModal />
      <Box bgPos='center' bgRepeat='repeat' minH='40vh'
        bgImage="linear-gradient(to top, rgba(0, 0, 0, 0.5), rgb(23, 0, 35)), url('/iamcs_bkg.png') "
      >

        <Container maxW='container.xl' p={8}>

          <Box pt={16}>

            <DetailsTable />

            <SmSep />

            <Box textAlign="center" maxW="900px" mx="auto" id='about'>
              <Heading as="h1" size="3xl" color="white" fontWeight="bold">About #IAmCS</Heading>

              <Box fontSize="xl" color="white" mt='40px'>
                <Text>
                  #IAmCS is a campaign founded by the NC Computer Science Initiative in 2019. It aims to move the needle on equity-focused strategies to strengthen the North Carolina Computer Science landscape for all students. This summit is designed to do just that!. Our annual student-led Computer Science Summit is for all North Carolina students interested or involved in STEM and Computer Science.
                </Text>

                <Text mt='2'>
                  The summit is a great opportunity for elementary, middle, and high school students across North Carolina to not only connect with other students interested in these areas but an opportunity for them to be uplifted and inspired to break down barriers that hinder us from pursuing the endless possibilities that lie within STEM and Computer Science. With this in mind, this year’s theme is “Building Blocks: Spark. Innovate. Empower.”

                </Text>

                <Text mt='2'>
                  Our summit is spearheaded by a phenomenal group of passionate Student Leaders who have an immense passion for STEM, leadership, and youth empowerment. They work hard behind the scenes to prepare for this in-person event and we are elated that the summit will feature student workshop facilitators and speakers all around the topics of STEM and Computer Science.

                </Text>

              </Box>
            </Box>

            <MedSep />
            <Box textAlign="center" maxW="700px" mx="auto" mb={8}>
              <Heading as="h1" size="3xl" color="white" fontWeight="bold" id="workshops">Workshops</Heading>
            </Box >


            <TwoColWithPic
              img='/VEX_ Summit Poster.png'
              title='VEX-ing into the Robo World'
              desc="In this workshop students
              will learn and discuss the
              real-world implications of
              robots! By utilizing a VEX
              IQ robot, students will solve
              a challenge then code their
              robot to enact the solution.
              This workshop is a great
              opportunity for students to
              learn code, provide an intro
              to robots, and help
              students grow their
              teamwork skills."
              align='left'
            />

            <SmSep line={true} />

            <TwoColWithPic
              img='/intro-to-web.png'
              title='Finding the Spark in Code: Introduction to Web Development'
              desc="In this workshop, you will be introduced to the basics of web development! Including, understtanding how websites work and how HTML and CSS can be implemented easily. Then participants will desing/create their own website."
              align='right'
            />
            <SmSep line={true} />

            <TwoColWithPic
              img='/SET_ Summit Poster.png'
              title='The Magic of Science and Behind The Scenes'
              desc="Have you ever been curious about the magic behind movie and television sets? Have you ever wondered how the lore behind your favorite science fiction and fantasy shows and movies would be possible in today's world? In The Magic and Science Beyond The Set, we explore the possibilities, intricacies, and science in telivision sets and movies, as well as how through bioengineering, some of our favorite heroes have become the heroes we see on set."
              align='left'
            />

            <SmSep line={true} />
            <TwoColWithPic
              img='/PH_ Summit Poster.png'
              title='Making The Rainbow: Learning About PH'
              desc="Ever wonder why lemon tastes so sour? What about vinegar? Why does soap feel so slippery? In this workshop, we're going to be exploring why this is by magically changing the color of cabbage juice using substances with different pH. Students will perform a lab, talk through a discussion, and then do a fun art project!"
              align='right'
            />



            <MedSep />

            <Box textAlign="center" maxW="700px" mx="auto" id='team'>
              <Heading as="h1" size="3xl" color="white" fontWeight="bold">Meet the Team</Heading>


              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={20} mt={8}>
                {Team.map((member) => (
                  <Box key={member.name}>
                    <Avatar src={member.pic} alt={member.name} size='3xl' />
                    <Heading as="h3" size="lg" color="gray.300">{member.name}</Heading>

                    <Text fontSize="lg" color="gray.300">{member.desc}</Text>

                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            <MedSep />

            <Box textAlign="center" maxW="700px" mx="auto" id='partnerships'>
              <Heading as="h1" size="3xl" color="white" fontWeight="bold">Sponsors/Partnerships</Heading>


              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={20} mt={8}>
                {Logos.map((logo, index) => (
                  <Box key={index} as='a' target="_blank" href={logo.link}>
                    <Img src={logo.img} alt={logo.name} size='3xl' />
                    <Text mt={2} fontSize='xl' color='white'>{logo.name}</Text>
                  </Box>
                ))}

              </SimpleGrid>

            </Box>

            <Footer />





          </Box>
        </Container>

      </Box>

    </>
  )
}

// npdpi, friday institudte

