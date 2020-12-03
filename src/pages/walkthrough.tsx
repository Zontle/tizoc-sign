import { Heading, Text, SimpleGrid, Box, Divider, Code } from "@chakra-ui/react"
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Back } from '../components/Back'
import { AirbnbExample } from "../components/Persona"


const Walkthrough = () => (
  <Container minHeight="100vh">
    <Main>
      <Heading as="h1" size="2xl" isTruncated>
        Tizoc Walkthrough
      </Heading>
      <Text fontSize="2xl">Learn how Tizoc provides any enterprise with custodial attestation.</Text>
      <Divider/>
      <SimpleGrid columns={1} spacing={10}>
        <Heading as="h2" size="lg">
          Step 1. Users register to your system via an OICD provider.
        </Heading>
        <Text>
          Depending on your authentication system, you likely will need to go 
          through an OpenID or other Oauth2 schema where you log in your user 
          and retrieve their identity from some <Code>getUser()</Code> method.
          Upon obtaining your user's data on the client-side of your application,
          format it so you append a unique ID.
        </Text>

      </SimpleGrid>
      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <AirbnbExample/>
        </Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </Main>
    <DarkModeSwitch />
    <Back />
  </Container>
)

export default Walkthrough
