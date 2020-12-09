import { Heading, Text, Divider, Link as ChakraLink } from "@chakra-ui/react"
import { Container } from '../components/layout/Container'
import { Main } from '../components/layout/Main'
import { DarkModeSwitch } from '../components/common/DarkModeSwitch'
import { Home } from '../components/common/Home'
import { Footer } from "../components/layout/Footer"
import { Section } from "../components/Section"


const SlideDeckPage = () => {

  return (
    <Container minHeight="100vh">
      <Main>
        <Heading as="h1" size="2xl">
          Tizoc Slide Deck
      </Heading>
        <Text fontSize="2xl">
          A general introduction to Tizoc's background, the reasons behind it, as well as its technology, growth strategy and go-to-market plan.
      </Text>
        <Divider mb="10" />

        <Section
          title="Expensive and complicated real-world data attestation"
          badge="problem statement"
          subtitle={`Verifying someone’s data in the real world is a challenge for both medium and small enterprises.`}
          additional={
          <>
            <Text>
              Let's take the case of <b>identity</b>. Passports, gobernamental credentials and other ID’s require expensive
              (often six digits) equipment and contracts with the local authorities. These verification solutions usually
              require training, complex logistics protocols and an entire chain of actors to ensure. In most cases, thse
              solutions are only available to major players.
            </Text>
            <br />
            <Text>
              Another example are <b>access systems</b>. In most cases, clubs issuing memberships or organizations creating events
              need to setup an entire ticketing system alongside points of sale to issue and verify individuals accessing
              their facilities. These systems are not only pricey, but can be unreliable and error-prone.
            </Text>
            <br />
            <Text>
              As a final example, we have <b>health attestations</b>. One of the major challenges goverments across the world will
              face as part of the COVID-19 pandemic, is the verification of the vaccines as they are slowly rolled up. Without
              and easy to deploy health attestation protocol, jurisdictions are left alone in the challenge of ensuring their
              population is vaccinated.
            </Text>
          </>
          }
        />

        <Section
          title="Tizoc‘s as a turn-key solution for offline attestation"
          badge="solution"
          subtitle={`Setting up reliable data attestation checkpoints shouldn’t be a challenge.`}
          additional={
          <>
            <Text>
              Tizoc brings trustable data attestation from the digital world to the real-world. By relying on digital solutions that
              can attest data and actions against specific individual attributes, proof-of-knowledge can be issued in the 
              form of offline receipts that can be managed by users and easily verified by any company. Companies do not need to 
              purchase points of sale to issue and verify data.
            </Text>
            <br />
            <Text>
              Initially, Tizoc relies on Santader’s Digital Trust Protocol (DTP), an OpenID Connect (OIDC) standard that defines
              user claims and can be implemented by any authorized autority such as banks. By relying on banks as identity providers,
              Tizoc can issue offline certificates with data backed by trustable organizations that will only leverage the data 
              needed by an issuance relaying party using Tizoc.
            </Text>
          </>
          }
        />

        <Section
          title="Decentralised technology to avoid silo-ed knowledge"
          badge="technology"
          subtitle={`Unlike normal solutions, Tizoc relies on decentralised technology to protect all parties involved`}
          additional={
          <>
            <Text>
              Current offline claim solutions such as ticketing systems or identity checks rely on centralised parties to 
              maintain and keep track of the attestations made by third parties over individuals. Whenever these centralised
              parties go out of business, or their systems fail, being able to look back at these receipts, certificates, tickets
              or proofs is no longer possible.
            </Text>
            <br />
            <Text>
              Tizoc solves this by using <code>Ethereum wallets</code>, created over <code>secp256k1-ECDSA</code> based
              elliptic curves. Relying on cloud HSM-based keys via a regulated cloud provider, Tizoc can give users a blockchain
              based identity they can timestamp at a given point in time. The attestation proofs end-to-end encrypted using 
              the <code>Web Cryptography API</code>, and shared via the <code>IPFS Network</code>. Attestations proofs are timestamped
              by the <code>Ethereum Blockchain</code>, and can be verified offline via a downloadable certificate.
            </Text>
          </>
          }
        />

        <Section
          title="Enterprise-based software without scaling limitations"
          badge="business"
          subtitle={`Offered as a white-label solution, Tizoc can scale to millions of users`}
          additional={
          <>
            <Text>
              Since Tizoc's core engine relies on <code>key derivation over hierarchical deterministic paths</code>, so a single Tizoc
              business account can issue wallets for thousands of users before having to re-issue a company key. All data is
              encrypted securely by a industry-tested symmetric algorithm (AES-256 GCM), and shared over the Ethereum Blockchain and
              the IPFS Network, such as no actual data is kept by the Tizoc engine other than data references and keys.
            </Text>
            <br />
            <Text>
              Offered as a white-label enterprise solution, Tizoc is sold by E Nigma Tecnologies OÜ (an Estonian-based E-Residency program
              company), to enterprises as both an on-premise or a cloud solution, via an annual contract for both Tizoc and the cloud HSM 
              providers. Identity Providers agreements must be done individually by the contracting company and will have their own pricing
              and business model.
            </Text>
            <Text>
              As next steps, Tizoc is looking to be implemented from a PoC to a full-blown MVP w/a particular use case (see Use Cases).
              Before going to market, ideally it would need to go through a third-party audit, and release some of its encryption and verification
              models as open-source technologies, alongside a partnership with an adequate verification alliance global organization.
            </Text>
          </>
          }
        />

      </Main>
      <DarkModeSwitch />
      <Footer>
        <Text>By <ChakraLink textDecoration="underline" isExternal href="https://enigma.sh/" flexGrow={1}>E Nigma Technologies OÜ</ChakraLink>, a submission to the <ChakraLink textDecoration="underline" isExternal href="https://santander.devpost.com/" flexGrow={1}>2020 Santander Hackathon</ChakraLink></Text>
      </Footer>
      <Home />
    </Container>
  )
}

export default SlideDeckPage
