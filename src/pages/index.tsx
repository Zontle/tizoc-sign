import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container height="100vh">
    <Hero title="Tizoc Sign" />
    <Main>
      <Text>
        An open-source SDK to <Code>sign</Code> and <Code>encrypt</Code> <Code>verifiable</Code> documents
        via <Code>HSM-keys</Code>, discoverable via the <Code>Ethereum blockchain</Code> and shareable via the <Code>IPFS network</Code>.
      </Text>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Verification via the <ChakraLink textDecoration="underline" isExternal href="https://gruposantander.github.io/digital-trust-docs/" flexGrow={1}>Digital Trust Protocol</ChakraLink>, a consumer privacy-first OpenID (OIDC) identity service.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Encryption using <ChakraLink textDecoration="underline" isExternal href="https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt#AES-GCM" flexGrow={1}>Web Cryptography API and AES-GCM</ChakraLink>, an authenticated encryption schema.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Signature using <ChakraLink textDecoration="underline" isExternal href="https://docs.tangany.com/" flexGrow={1}>secp256k1 ECDSA signing service</ChakraLink>, able to connect users to Ethereum accounts.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Discoverable via the <ChakraLink textDecoration="underline" isExternal href="https://ethereum.org/en/" flexGrow={1}>Ethereum Blockchain</ChakraLink>, using Smart Contracts for signatures and timestamps.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Shareable via <ChakraLink textDecoration="underline" isExternal href="https://ipfs.io/" flexGrow={1}>IPFS</ChakraLink>, a p2p decentralised hypermedia protocol for accesible file distribution.
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>By <ChakraLink textDecoration="underline" isExternal href="https://zontle.tech/" flexGrow={1}>Zontle</ChakraLink> as part of the <ChakraLink textDecoration="underline" isExternal href="https://santander.devpost.com/" flexGrow={1}>2020 Santander Hackathon</ChakraLink></Text>
    </Footer>
    <CTA />
  </Container>
)

export default Index
