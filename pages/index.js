import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Landing } from "../components/Landing";
import { DetailsTable } from "../components/DetailsTable";
import {
  Box,
  SimpleGrid,
  Heading,
  Avatar,
  Text,
  Container,
  Img,
} from "@chakra-ui/react";
import { SignUpModal } from "../components/SignUpModal";
import { NavBar } from "../components/NavBar";
import { TwoColWithPic } from "../components/TwoColWithPic";
import { MedSep } from "../components/MedSep";
import { SmSep } from "../components/SmSep";
import { Footer } from "../components/Footer";
import Team from "../data/team.json";
import Partners from "../data/partners.json";
import Sponsors from "../data/sponsors.json";
import { BookletTable } from "../components/BookletTable";
export default function Home() {
  return (
    <>
      <Head>
        <title>#IAmCS Summit</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:description"
          content="Sign up for the #IAmCS Summit!"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar bg="#3B005A" />
      <Landing />
      <SignUpModal />
      <Box
        bgPos="center"
        bgRepeat="repeat"
        minH="40vh"
        bgImage="linear-gradient(to top, rgba(0, 0, 0, 0.5), rgb(23, 0, 35)), url('/iamcs_bkg.png') "
      >
        <Container maxW="container.xl" p={8}>
          <Box pt={16}>
            <DetailsTable />

            <SmSep />

            <BookletTable />

            <SmSep />

            <Box textAlign="center" maxW="900px" mx="auto" id="about">
              <Heading as="h1" size="3xl" color="white" fontWeight="bold">
                About{" "}
                <Text as="span" color="#F1C232">
                  #IAmCS
                </Text>
              </Heading>

              <Box fontSize="xl" color="white" mt="40px">
                <Text>
                  The #IAmCS Campaign was founded by Dr. Mary Hemphill-Joseph as
                  the inaugural Director of K-12 Computer Science & Technology
                  Education for the NC Department of Public Instruction. Each
                  year the initiative hosts this summit to amplify the computer
                  science landscape across North Carolina. The campaign will
                  host it’s first-ever-in-person summit at NC States’ Friday
                  Institute for Educational Innovation on April 30, 2022, from
                  10am-5:30pm. Students will engage in three workshops of their
                  choosing within the topic of computer science ranging from
                  STEM, AI & Robotics, and website development.
                </Text>

                <Text mt="2">
                  Our keynote speakers, Dr. Veronica Catete, Computer Science
                  Researcher with NCSU, and Maria Hopper/Julia Wagner from FIRST
                  NC will highlight the importance of taking advantage of
                  opportunities in computer science. Also, during this event,
                  students will interact with STEM-based organizations and
                  businesses to receive lunch and other grab-bag items. Leaders
                  in education will have the opportunity to participate in an
                  informational session regarding the newly adopted K-12
                  Computer Science Standards as well as join in on any of the
                  workshops during the day.
                </Text>

                <Text mt="2">
                  This year’s summit will be an opportunity for students across
                  the state to connect with other students interested in these
                  areas and offers a moment to be uplifted and inspired to break
                  barriers that may hinder them from pursuing career pathways
                  leading to computer science.
                </Text>
              </Box>
            </Box>

            <MedSep />
            <Box textAlign="center" maxW="700px" mx="auto" mb={8}>
              <Heading
                as="h1"
                size="3xl"
                color="white"
                fontWeight="bold"
                id="workshops"
              >
                Workshops
              </Heading>
            </Box>

            <TwoColWithPic
              img="/ROBOTICS_ Lets go Flying!.png"
              title="Lets go Flying! Into the World of STEM."
              desc="In this workshop students will learn and discuss the real-world implications of drones! They will build a Quadcopter, then navigate their creation through an obstacle course. This workshop is a great opportunity for students to be provided an introduction to drones and grow their teamwork skills."
              align="left"
            />

            <SmSep line={true} />

            <TwoColWithPic
              img="/intro-to-web.png"
              title="Finding the Spark in Code: Introduction to Web Development"
              desc="In this workshop, you will be introduced to the basics of web development! Including, understanding how websites work and how HTML and CSS can be implemented easily. Then participants will design/create their own website."
              align="right"
            />
            <SmSep line={true} />

            <TwoColWithPic
              img="/SET_ Summit Poster.png"
              title="The Magic of Science and Behind The Scenes"
              desc="Have you ever been curious about the magic behind movie and television sets? Have you ever wondered how the lore behind your favorite science fiction and fantasy shows and movies would be possible in today's world? In The Magic and Science Beyond The Set, we explore the possibilities, intricacies, and science in telivision sets and movies, as well as how through bioengineering, some of our favorite heroes have become the heroes we see on set."
              align="left"
            />

            <SmSep line={true} />
            <TwoColWithPic
              img="/PH_ Summit Poster.png"
              title="Making The Rainbow: Learning About PH"
              desc="Ever wonder why lemon tastes so sour? What about vinegar? Why does soap feel so slippery? In this workshop, we're going to be exploring why this is by magically changing the color of cabbage juice using substances with different pH. Students will perform a lab, talk through a discussion, and then do a fun art project!"
              align="right"
            />

            <SmSep line={true} />
            <TwoColWithPic
              img="/STEM_ Summit Poster-1.png"
              title="Exploring the
              Future of STEM"
              desc="This workshop is designed to
              engage and educate students
              on the vast careers and job
              outlook in the STEM field
              while providing resources
              and information on how
              students can immerse
              themselves in experiences
              that will help gear them
              towards a STEM career in the
              future."
              align="left"
            />
            <SmSep line={true} />
            <MedSep />

            <Box textAlign="center" maxW="700px" mx="auto" id="team">
              <Heading as="h1" size="3xl" color="white" fontWeight="bold">
                Meet the Team
              </Heading>

              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={20}
                mt={8}
              >
                {Team.map((member) => (
                  <Box key={member.name}>
                    <Avatar
                      src={member.pic}
                      alt={member.name}
                      height="200px"
                      width="200px"
                    />
                    <Heading as="h3" size="lg" color="gray.300">
                      {member.name}
                    </Heading>

                    <Text fontSize="lg" color="gray.300">
                      {member.desc}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            <MedSep />

            <Box textAlign="center" maxW="700px" mx="auto" id="sponsors">
              <Heading as="h1" size="3xl" color="white" fontWeight="bold">
                Sponsors
              </Heading>

              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={20}
                mt={8}
              >
                {Sponsors.map((logo, index) => (
                  <Box key={index} as="a" target="_blank" href={logo.link}>
                    <Img src={logo.img} alt={logo.name} size="3xl" />
                    <Text mt={2} fontSize="xl" color="white">
                      {logo.name}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            <MedSep />

            <Box textAlign="center" maxW="700px" mx="auto" id="partnerships">
              <Heading as="h1" size="3xl" color="white" fontWeight="bold">
                Partners
              </Heading>

              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={20}
                mt={8}
              >
                {Partners.map((logo, index) => (
                  <Box key={index} as="a" target="_blank" href={logo.link}>
                    <Img src={logo.img} alt={logo.name} size="3xl" />
                    <Text mt={2} fontSize="xl" color="white">
                      {logo.name}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            <Footer />
          </Box>
        </Container>
      </Box>
    </>
  );
}

// npdpi, friday institudte
