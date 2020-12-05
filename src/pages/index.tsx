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
import { Container } from '../components/layout/Container'
import { Main } from '../components/layout/Main'
import { DarkModeSwitch } from '../components/common/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/layout/Footer'


const Index = () => (
  <Container minHeight="100vh">
    <Main>
      <Hero title="Tizoc" />
      <Text>
        Tizoc is a solution for <Code>offline data attestation</Code> that uses <Code>custodial blockchain wallets</Code>{' '}
        for attestation payment services, which generates timestamped proofs on the <Code>Ethereum blockchain</Code>.{' '}
        All proofs are encrypted and stored in the <Code>IPFS network</Code>.
      </Text>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="yellow.500" />
          Initial data attestation verification via the <ChakraLink textDecoration="underline" isExternal href="https://gruposantander.github.io/digital-trust-docs/" flexGrow={1}>Digital Trust Protocol</ChakraLink>, a consumer privacy-first OpenID (OIDC) implementation.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="yellow.500" />
          Custodial accounts are created as <ChakraLink textDecoration="underline" isExternal href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm" flexGrow={1}>secp256k1-ECDSA</ChakraLink> based Ethereum wallets using HSM-based keys via a regulated cloud provider.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="yellow.500" />
          Proofs are end-to-end encrypted using the <ChakraLink textDecoration="underline" isExternal href="https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt#AES-CBC" flexGrow={1}>Web Cryptography API</ChakraLink>, and shared using a <ChakraLink textDecoration="underline" isExternal href="https://en.wikipedia.org/wiki/Key_Wrap" flexGrow={1}>Key Wrapping</ChakraLink> model via the <ChakraLink textDecoration="underline" isExternal href="https://ipfs.io/" flexGrow={1}>IPFS Network</ChakraLink>.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="yellow.500" />
          Attestations proofs are timestamped by the <ChakraLink textDecoration="underline" isExternal href="https://ethereum.org/en/" flexGrow={1}>Ethereum Blockchain</ChakraLink>, and can be verified offline via a downloadable certificate.
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>By <ChakraLink textDecoration="underline" isExternal href="https://enigma.sh/" flexGrow={1}>E Nigma Technologies OÜ</ChakraLink>, a submission to the <ChakraLink textDecoration="underline" isExternal href="https://santander.devpost.com/" flexGrow={1}>2020 Santander Hackathon</ChakraLink></Text>
    </Footer>
    <CTA />
  </Container>
)

export default Index
