import { Section } from "./Section"
import { SimpleGrid, Box, Text } from "@chakra-ui/react"
import { Persona } from "./Persona"
import { Glenda, Nathan, Javier, Tizoc } from "../constants/mocks"
import { PersonaRole } from "../commons/persona"
import React from "react"
import { Container } from "./layout/Container"

const Section1 = () => (
  <Section
    title="Fast verification of COVID-19 Tests"
    badge="airports"
    subtitle="COVID-19 hot spots like airports require fast processing checks able to allow entry only to individuals that have
    passed a successful negative tests in the last 72 hours, which can be verified quickly via a timestamped certificate from Tizoc."
  >
    <SimpleGrid columns={3} spacing={10} alignItems="center">
      <Box>
        <Persona persona={Glenda} role={PersonaRole.registered} />
      </Box>
      <Box height="80px" d="flex" alignContent="center" alignItems="center" justifyContent="center">
        <Persona persona={Tizoc} role={PersonaRole.service} />
      </Box>
      <Box>
        <Persona persona={Glenda} role={PersonaRole.verified} />
      </Box>
    </SimpleGrid>
  </Section>
)

const Section2 = () => (
  <Section
    title="Privacy-aware age check on minors"
    badge="Stores"
    subtitle="Verifying the age on teenagers is complicated due to having to request gobernamental approved credentials
    that disclose more information than needed. Tizoc can quickly create an offline-first proof that disclose only majority of age."
  >
    <SimpleGrid columns={3} spacing={10} alignItems="center">
      <Box>
        <Persona persona={Nathan} role={PersonaRole.registered} />
      </Box>
      <Box height="80px" d="flex" alignContent="center" alignItems="center" justifyContent="center">
        <Persona persona={Tizoc} role={PersonaRole.service} />
      </Box>
      <Box>
        <Persona persona={Nathan} role={PersonaRole.verified} />
      </Box>
    </SimpleGrid>
  </Section>
)

const Section3 = () => (
  <Section
    title="Contacless Access Systems"
    subtitle="Instead of having to require an in-house expensive ticketing system that requests tickets personally, all access can
    be granted offline, and "
  >
    <SimpleGrid columns={3} spacing={10} alignItems="center">
      <Box>
        <Persona persona={Glenda} role={PersonaRole.verified} />
      </Box>
      <Box height="120px" d="flex" alignContent="center" alignItems="center" justifyContent="center" border="1px gray dotted">
        <Container>
          <Text textAlign="center">1. Create User Wallet</Text>
          <Text textAlign="center">2. Create Clerk Wallet</Text>
          <Text textAlign="center">3. Onboard user w/rDAI</Text>
          <Text textAlign="center">3. Transfer rDAI to clerk</Text>
        </Container>
      </Box>
      <Box>
        <Persona persona={Nathan} role={PersonaRole.backoffice} />
      </Box>
    </SimpleGrid>
  </Section>
)

const Section4 = () => (
  <Section
    title="Voting"
    subtitle="Upon careful verification, an attestator can then digitally sign the files given by the users and create a receipt of proof on
    the Ethereum blockchain, ensuring the authenticity of the proof, while timestamping the event."
  >
    <SimpleGrid columns={3} spacing={10} alignItems="center">
      <Box>
        <Persona persona={Nathan} role={PersonaRole.backoffice} />
      </Box>
      <Box height="120px" d="flex" alignContent="center" alignItems="center" justifyContent="center" border="1px gray dotted">
        <Container>
          <Text textAlign="center">1. Open file</Text>
          <Text textAlign="center">2. Create digital signature</Text>
          <Text textAlign="center">3. Publish to smart contract</Text>
          <Text textAlign="center">4. Send certificate of tx</Text>
        </Container>
      </Box>
      <Box>
        <Persona persona={Glenda} role={PersonaRole.verified} />
      </Box>
    </SimpleGrid>
  </Section>
)

const Section5 = () => (
  <Section
    title="5. Anyone can make verifications on attestations proofs"
    subtitle="Third-parties can verify the traceability of an attestation and link them to a particular person providing the proof obtained
    by Tizoc. Public certificates can be downloaded to allow offline verification via mobile devices."
  >
    <SimpleGrid columns={3} spacing={10} alignItems="center">
      <Box>
        <Persona persona={Javier} role={PersonaRole.backoffice} />
      </Box>
      <Box height="120px" d="flex" alignContent="center" alignItems="center" justifyContent="center" border="1px gray dotted">
        <Container>
          <Text textAlign="center">1. Share proof to external</Text>
          <Text textAlign="center">2. Download offline certificate</Text>
          <Text textAlign="center">3. Verify signature</Text>
        </Container>
      </Box>
      <Box>
        <Persona persona={Glenda} role={PersonaRole.verified} />
      </Box>
    </SimpleGrid>
  </Section>
)

export { Section1, Section2, Section3, Section4, Section5 }