import { Section } from "./Section"
import { SimpleGrid, Box, Text, Button, ButtonGroup, Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react"
import { Persona } from "./Persona"
import { Claudia, Javier, Tizoc, Airport } from "../constants/mocks"
import { PersonaRole } from "../commons/persona"
import React from "react"
import { Container } from "./layout/Container"
import { ChevronRightIcon, CheckIcon, SmallAddIcon, ViewIcon, InfoIcon } from "@chakra-ui/icons"

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
    the digital signature on the certificate. For instance, as a company you can pay on behalf of the user if needed."
  >
    <SimpleGrid columns={3} spacing={10} alignItems="center">
      <Box d="flex" alignContent="center" alignItems="center" justifyContent="center">
        <Persona persona={Claudia} role={PersonaRole.verified} mb={2} viewIcon={
          <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
            PDF
          </Button>
        }>
          <Button width="100%" rightIcon={<CheckIcon />} px="2" size="xs" variant="solid" colorScheme="green" mt="2">
            Pay validation fee
          </Button>
          <Persona persona={Airport} role={PersonaRole.company} mt={4}>
            <Button width="100%" rightIcon={<CheckIcon />} px="2" size="xs" variant="solid" colorScheme="purple" mt="2">
              Pay validation fee
            </Button>
          </Persona>
        </Persona>
        <ChevronRightIcon ml="10" />
      </Box>
      <Box height="120px" d="flex" alignContent="center" alignItems="center" justifyContent="center">
        <Persona persona={Tizoc} role={PersonaRole.service} >
          <ButtonGroup variant="solid" size="xs" spacing="2" mt="2" colorScheme="yellow">
            <Button rightIcon={<SmallAddIcon />}>
              Create Wallet
            </Button>
            <Button rightIcon={<SmallAddIcon />}>
              Validate payment
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
        } wallet={
          <Box d="flex">
            <Tag size="sm" mt="2" variant="subtle" colorScheme="cyan">
              <TagLeftIcon boxSize="12px" as={InfoIcon} />
              <TagLabel>Address</TagLabel>
            </Tag>
            <Tag size="sm" ml="1" mt="2" variant="subtle" colorScheme="cyan">
              <TagLabel>Balance</TagLabel>
              <Text>&nbsp; 0.00</Text>
            </Tag>
          </Box>
        }>
        </Persona>
      </Box>
    </SimpleGrid>
  </Section>
)

const Section4 = () => (
  <Section
    title="4. Sign the certificate on the Blockchain"
    subtitle="After payment, the digital certificate can then be signed by Tizoc‘s HSM-based cloud key, creating a proof on the Ethereum blockchain, 
    timestamping the event. The proof is shared to the user and the certificate to your company, which can then be distributed accordingly to your own 
    backoffice employees to be used at checkpoints."
  >
    <SimpleGrid columns={3} spacing={10} alignItems="center">
      <Box d="flex" alignContent="center" alignItems="center" justifyContent="center">
        <Persona persona={Claudia} role={PersonaRole.verified} viewIcon={
          <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
            PDF
          </Button>
        } wallet={
          <Box d="flex">
            <Tag size="sm" mt="2" variant="subtle" colorScheme="cyan">
              <TagLeftIcon boxSize="12px" as={InfoIcon} />
              <TagLabel>Address</TagLabel>
            </Tag>
            <Tag size="sm" ml="1" mt="2" variant="subtle" colorScheme="cyan">
              <TagLabel>Balance</TagLabel>
              <Text>&nbsp; 0.00</Text>
            </Tag>
          </Box>
        }>
        </Persona>
        <ChevronRightIcon ml="10" />
      </Box>
      <Box height="120px" d="flex" alignContent="center" alignItems="center" justifyContent="center">
        <Persona persona={Tizoc} role={PersonaRole.service} >
          <ButtonGroup variant="solid" size="xs" spacing="2" mt="2" colorScheme="yellow">
            <Button rightIcon={<SmallAddIcon />}>
              Create cert
            </Button>
            <Button rightIcon={<SmallAddIcon />}>
              Publish ETH tx
            </Button>
          </ButtonGroup>
        </Persona>
        <ChevronRightIcon ml="10" />
      </Box>
      <Box>
        <Persona persona={Claudia} role={PersonaRole.verified} mb={2} viewIcon={
          <ButtonGroup variant="solid" size="xs" spacing="2" mt="2" colorScheme="green">
            <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
              PDF
            </Button>
            <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
              Proof
            </Button>
          </ButtonGroup>
        } wallet={
          <Box d="flex">
            <Tag size="sm" mt="2" variant="subtle" colorScheme="cyan">
              <TagLeftIcon boxSize="12px" as={InfoIcon} />
              <TagLabel>Address</TagLabel>
            </Tag>
            <Tag size="sm" ml="1" mt="2" variant="subtle" colorScheme="cyan">
              <TagLabel>Balance</TagLabel>
              <Text>&nbsp; 0.00</Text>
            </Tag>
          </Box>
        }/>
        <Persona persona={Airport} role={PersonaRole.company} viewIcon={
          <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="purple" ml="2">
            Certificate
          </Button>
        }>
          <Persona persona={Javier} role={PersonaRole.backoffice} mt={4}>
            <Button width="100%" rightIcon={<CheckIcon />} px="2" size="xs" variant="solid" colorScheme="red" mt="2">
              Download certificate
            </Button>
          </Persona>
        </Persona>
      </Box>
    </SimpleGrid>
  </Section>
)

const Section5 = () => (
  <Section
    title="5. Verify offline your users by using the pre-downloaded certificate"
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