import { Heading, Text, Divider, Badge, Link as ChakraLink } from "@chakra-ui/react"
import { Container } from '../components/layout/Container'
import { Main } from '../components/layout/Main'
import { DarkModeSwitch } from '../components/common/DarkModeSwitch'
import { Home } from '../components/common/Home'
import * as Walkthrough from "../components/Walkthrough"
import { Footer } from "../components/layout/Footer"


const WalkthroughPage = () => (
  <Container minHeight="100vh">
    <Main>
      <Heading as="h1" size="2xl">
        Tizoc Walkthrough
        <Badge ml="1" fontSize="0.3em" mx="2" borderRadius="10px" p="2" colorScheme="green">
          Interactive
        </Badge>
      </Heading>
      <Text fontSize="2xl">
        Learn how Tizoc provides to any enterprise with offline attestation requirements.
        <Text fontSize="xl" color="gray.600">Click on the buttons inside of each section for each step to see the descripted steps in action.</Text>
      </Text>
      

      <Divider mb="10" />

      <Walkthrough.Section1 />
      <Walkthrough.Section2 />
      <Walkthrough.Section3 />
      <Walkthrough.Section4 />
      <Walkthrough.Section5 />

    </Main>
    <DarkModeSwitch />
    <Footer>
      <Text>By <ChakraLink textDecoration="underline" isExternal href="https://enigma.sh/" flexGrow={1}>E Nigma Technologies OÜ</ChakraLink>, a submission to the <ChakraLink textDecoration="underline" isExternal href="https://santander.devpost.com/" flexGrow={1}>2020 Santander Hackathon</ChakraLink></Text>
    </Footer>
    <Home />
  </Container>
)

export default WalkthroughPage
