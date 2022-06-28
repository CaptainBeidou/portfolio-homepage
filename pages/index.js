import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Link, useColorModeValue } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Section from '../components/section'
import Paragraph from '../components/paragraph.js'
import { BioSection, BioYear } from "../components/bio";

const Page = ( ) => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I&apos;m a front-end developer based in Colombia!
      </Box>

      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Miguel Sanabria
          </Heading>
          <p> Multimedia Engineer ( 3D / Web-Dev / VideoGames )</p>
        </Box>
        <Box 
          flexShrink={0} 
          mt={{base:4, md: 0}} 
          ml={{md: 6}} 
          align="center">
          <Image 
          borderColor="whiteAlpha.800" 
          borderWidth={2} 
          borderStyle="solid"
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
          src="/images/miguel.jpg"
          alt="Profile Image"/>
        </Box>
      </Box>
      <Section delay={0,1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Miguel is a front-end developer based in Cali with a passion for creating the best-in-class digital stuff. He has a knack for planning, designing and developing products/services to solve real-life problems with User Centered Design. Seeking for an opportunity to be a part of something innovative, challenging and meaningful. Currently, he is studying Multimedia Engineer.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Palmira, Colombia.
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
