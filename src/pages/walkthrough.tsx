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
        Learn the features Tizoc provides to any enterprise with custodial attestation requirements.
        <Text fontSize="xl" color="gray.600">Click on the middle sections of each step to see the descripted steps for the walkthrough.</Text>
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
      <Text>By <ChakraLink textDecoration="underline" isExternal href="https://zontle.tech/" flexGrow={1}>Zontle</ChakraLink>, a submission to the <ChakraLink textDecoration="underline" isExternal href="https://santander.devpost.com/" flexGrow={1}>2020 Santander Hackathon</ChakraLink></Text>
    </Footer>
    <Home />
  </Container>
)

export default WalkthroughPage
