import { Section } from "./Section"
import { SimpleGrid, Box } from "@chakra-ui/react"
import { Persona } from "./Persona"
import { Claudia, Nathan, Tizoc, Alberto, Andy } from "../constants/mocks"
import { PersonaRole } from "../commons/persona"
import React from "react"
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons"

const SectionTemplate = ({ firstPersona, secondPersona, thirdPersona, isMd }: { firstPersona: React.ReactNode, secondPersona: React.ReactNode, thirdPersona: React.ReactNode, isMd: Boolean }) => {
  return (<SimpleGrid columns={5} spacing={10} alignItems="center" display={{ md: "flex" }} justifyContent="center">
      <Box d="flex" alignContent="center" alignItems="center" justifyContent="center">
        { firstPersona }
      </Box>
      { isMd ? <ChevronRightIcon m="auto" /> : <ChevronDownIcon my="5" display="block" mx="auto" /> }
      <Box d="flex" alignContent="center" alignItems="center" justifyContent="center">
        { secondPersona }
      </Box>
      { isMd ? <ChevronRightIcon m="auto" /> : <ChevronDownIcon my="5" display="block" mx="auto" /> }
      <Box>
        { thirdPersona }
      </Box>
    </SimpleGrid>
  )
}


const Section1 = ({ isMd }: { isMd: Boolean }) => (
  <Section
    title="Fast verification of COVID-19 Tests"
    badge="airports"
    subtitle="In some countries, airports have COVID-19 checkpoints to allow entry only to individuals that can produce 
    successful negative tests in the last 72 hours. Using Tizoc, these results can be onboarded via Santander's Digital Trust
    Protocol (DTP), to then be printed offline for quick verification, reducing queue times."
  >
    <SectionTemplate 
      firstPersona={<Persona persona={Claudia} role={PersonaRole.registered} />}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service} />}
      thirdPersona={<Persona persona={Claudia} role={PersonaRole.verified} />}
      isMd={isMd}
    />
  </Section>
)

const Section2 = ({ isMd }: { isMd: Boolean }) => (
  <Section
    title="Privacy-aware age check on minors"
    badge="Stores"
    subtitle="Verifying the age on teenagers is privacy-complex issue due to having to request gobernamental approved credentials
    that disclose more information than needed. In some cases, stores or clubs need to keep copies of the IDs, exposing the minors.
    Tizoc can create offline proofs that disclose only majority of age, and can be corroborated online when needed."
  >
    <SectionTemplate 
      firstPersona={<Persona persona={Nathan} role={PersonaRole.registered} />}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service} />}
      thirdPersona={<Persona persona={Nathan} role={PersonaRole.verified} />}
      isMd={isMd}
    />
  </Section>
)

const Section3 = ({ isMd }: { isMd: Boolean }) => (
  <Section
    title="Contactless tickets for exclusive areas"
    badge="Clubs"
    subtitle="Instead of having to require an in-house expensive ticketing system that checks badges personally, clubs can
    rely on Tizoc's verification system to produce access-like proofs that can be read offline, while remaining safe knowing
    that the proof was issued cryptographically against a trusted identity provider."
  >
    <SectionTemplate 
      firstPersona={<Persona persona={Alberto} role={PersonaRole.registered} />}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service} />}
      thirdPersona={<Persona persona={Alberto} role={PersonaRole.verified} />}
      isMd={isMd}
    />
  </Section>
)

const Section4 = ({ isMd }: { isMd: Boolean }) => (
  <Section
    title="Loggable voting for in-person requirements"
    badge="Goverments"
    subtitle="Despite the increase rise of online or mailing voting systems, multiple jurisdictions across the world still require
    a paper trail to validate elections, which require verification for each voter. By using Tizoc, citizens can safely share only
    the require information for poll workers who can then check them when needed."
  >
    <SectionTemplate 
      firstPersona={<Persona persona={Andy} role={PersonaRole.registered} />}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service} />}
      thirdPersona={<Persona persona={Andy} role={PersonaRole.verified} />}
      isMd={isMd}
    />
  </Section>
)

export { Section1, Section2, Section3, Section4 }