import { Section } from "./Section"
import { SimpleGrid, Box, Text, Button, ButtonGroup } from "@chakra-ui/react"
import { Persona } from "./Persona"
import { Claudia, Javier, Tizoc, Airport } from "../constants/mocks"
import { PersonaRole } from "../commons/persona"
import React from "react"
import { Container } from "./layout/Container"
import { ChevronRightIcon, CheckIcon, RepeatIcon, SmallAddIcon, ViewIcon, UnlockIcon } from "@chakra-ui/icons"

const Section1 = () => (
  <Section
    title="1. Obtain verified data using the Santander's Digital Trust Protocol"
    subtitle="Protect your users data privacy by leveraging on the Open ID provider DTP (Digital Trust Protocol),
        created by Santander, to obtain data attestations from a trusted authorised party."
  >
    <SimpleGrid columns={3} spacing={10} alignItems="center">
      <Box d="flex" alignContent="center" alignItems="center" justifyContent="center">
        <Persona persona={Claudia} role={PersonaRole.registered} />
        <ChevronRightIcon ml="10" />
      </Box>
      <Box height="80px" d="flex" alignContent="center" alignItems="center" justifyContent="center">
        <Persona persona={Tizoc} role={PersonaRole.service} >
          <Button width="100%" rightIcon={<CheckIcon />} px="2" size="xs" variant="solid" colorScheme="yellow" mt="2">
            Verify
          </Button>
        </Persona>
        <ChevronRightIcon ml="10" />
      </Box>
      <Box>
        <Persona persona={Claudia} role={PersonaRole.verified} />
      </Box>
    </SimpleGrid>
  </Section>
)

const Section2 = () => (
  <Section
    title="2. Generate a digital certificate for offline verification"
    subtitle="Based on the data verification, your users can request an offline certification which can be used by 
    your company to be able to request the previously attested data. The certificate is encrypted, and uploaded to the IPFS Network."
  >
    <SimpleGrid columns={3} spacing={10} alignItems="center">
      <Box d="flex" alignContent="center" alignItems="center" justifyContent="center">
        <Persona persona={Claudia} role={PersonaRole.verified} />
        <ChevronRightIcon ml="10" />
      </Box>
      <Box height="120px" d="flex" alignContent="center" alignItems="center" justifyContent="center">
        <Persona persona={Tizoc} role={PersonaRole.service} >
          <ButtonGroup variant="solid" size="xs" spacing="2" mt="2" colorScheme="yellow">
            <Button rightIcon={<SmallAddIcon />}>
              Create Key
            </Button>
            <Button rightIcon={<SmallAddIcon />}>
              Generate PDF
            </Button>
          </ButtonGroup>
        </Persona>
        <ChevronRightIcon ml="10" />
      </Box>
      <Box>
        <Persona persona={Claudia} role={PersonaRole.verified} viewIcon={
          <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
            PDF
          </Button>
        } />
      </Box>
    </SimpleGrid>
  </Section>
)

const Section3 = () => (
  <Section
    title="3. Pay for offline attested certificate"
    subtitle="Each user is given their own regulated custodial-based Ethereum wallets based on cloud HSM-keys, so they can pay for 
    the digital signature on the certificate. Alternately, your company can pay on behalf of the user."
  >
    <SimpleGrid columns={3} spacing={10} alignItems="center">
      <Box>
        <Persona persona={Claudia} role={PersonaRole.verified} mb={2} />
        <Persona persona={Airport} role={PersonaRole.company} />
      </Box>
      <Box height="120px" d="flex" alignContent="center" alignItems="center" justifyContent="center" border="1px gray dotted">
        <Container>
          <Text textAlign="center">1. Create User Wallet</Text>
          <Text textAlign="center">2. For user ramp its wallet</Text>
          <Text textAlign="center">3. For company fund wallet</Text>
          <Text textAlign="center">4. Verify funds in wallets</Text>
        </Container>
      </Box>
      <Box>
        <Persona persona={Tizoc} role={PersonaRole.service} />
      </Box>
    </SimpleGrid>
  </Section>
)

const Section4 = () => (
  <Section
    title="4. Sign the certificate on the Blockchain"
    subtitle="After payment, the digital certificate is signed by Tizoc‘s HSM-based cloud key, creating a proof on the Ethereum blockchain, 
    timestamping the event. The proof is shared to the user and the certificate to your company."
  >
    <SimpleGrid columns={3} spacing={10} alignItems="center">
      <Box>
        <Persona persona={Tizoc} role={PersonaRole.service} />
      </Box>
      <Box height="120px" d="flex" alignContent="center" alignItems="center" justifyContent="center" border="1px gray dotted">
        <Container>
          <Text textAlign="center">1. Publish tx from Tz wallet</Text>
          <Text textAlign="center">2. Create digital signature</Text>
          <Text textAlign="center">3. Send offline proof to user</Text>
          <Text textAlign="center">4. Send certificate to employee</Text>
        </Container>
      </Box>
      <Box>
        <Persona persona={Claudia} role={PersonaRole.verified} mb={2} />
        <Persona persona={Javier} role={PersonaRole.backoffice} />
      </Box>
    </SimpleGrid>
  </Section>
)

const Section5 = () => (
  <Section
    title="5. Verify offline your users by pre-downloading our certificate"
    subtitle="Your company can verify users by requesting the previously generated digital proof obtained by Tizoc. Your company
    downloads the user certificate to allow offline verification via mobile devices or similar without an internet connection."
  >
    <SimpleGrid columns={3} spacing={10} alignItems="center">
      <Box>
        <Persona persona={Claudia} role={PersonaRole.verified} />
      </Box>
      <Box height="120px" d="flex" alignContent="center" alignItems="center" justifyContent="center" border="1px gray dotted">
        <Container>
          <Text textAlign="center">1. Share proof to external</Text>
          <Text textAlign="center">2. Verify signature w/cert</Text>
        </Container>
      </Box>
      <Box>
        <Persona persona={Javier} role={PersonaRole.backoffice} />
      </Box>
    </SimpleGrid>
  </Section>
)

export { Section1, Section2, Section3, Section4, Section5 }