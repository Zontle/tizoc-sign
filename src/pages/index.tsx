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
  <Container minHeight="100vh">
    <Main>
      <Hero title="Tizoc" />  
      <Text>
        Tizoc is a turnkey solution for <Code>data attestation</Code>{' '}
        that uses <Code>custodial blockchain wallets</Code> for attestation payment services, with
        proofs discoverable via the <Code>Ethereum blockchain</Code> and files shared encrypted via{' '}
        the <Code>IPFS network</Code>.
      </Text>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          In-house user management via the <ChakraLink textDecoration="underline" isExternal href="https://gruposantander.github.io/digital-trust-docs/" flexGrow={1}>Digital Trust Protocol</ChakraLink>, a consumer privacy-first OpenID (OIDC) identity service.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Custodial accounts are created as <ChakraLink textDecoration="underline" isExternal href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm" flexGrow={1}>secp256k1-ECDSA</ChakraLink> based Ethereum wallets using <ChakraLink textDecoration="underline" isExternal href="https://docs.tangany.com/" flexGrow={1}>Tangany</ChakraLink>, a regulated custodial provider.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Files are encrypted using <ChakraLink textDecoration="underline" isExternal href="https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt#AES-GCM" flexGrow={1}>AES-GCM on 256 bits</ChakraLink>, and shared using a <ChakraLink textDecoration="underline" isExternal href="https://en.wikipedia.org/wiki/Key_Wrap" flexGrow={1}>Key Wrapping</ChakraLink> model via the <ChakraLink textDecoration="underline" isExternal href="https://ipfs.io/" flexGrow={1}>IPFS Network</ChakraLink>.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Attestations proofs are discoverable via the <ChakraLink textDecoration="underline" isExternal href="https://ethereum.org/en/" flexGrow={1}>Ethereum Blockchain</ChakraLink> and searcheable and downloadeable. 
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>By <ChakraLink textDecoration="underline" isExternal href="https://zontle.tech/" flexGrow={1}>Zontle</ChakraLink>, a submission to the <ChakraLink textDecoration="underline" isExternal href="https://santander.devpost.com/" flexGrow={1}>2020 Santander Hackathon</ChakraLink></Text>
    </Footer>
    <CTA />
  </Container>
)

export default Index
