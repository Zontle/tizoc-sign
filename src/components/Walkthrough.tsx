import { Section } from "./Section"
import React from "react"
import { WalkthroughStepOne } from "./steps/Walkthrough-Step1"
import { WalkthroughStepTwo } from "./steps/Walkthrough-Step2"
import { WalkthroughStepThree } from "./steps/Walkthrough-Step3"
import { WalkthroughStepFour } from "./steps/Walkthrough-Step4"
import { WalkthroughStepFive } from "./steps/Walkthrough-Step5"
import { SimpleGrid, Box } from "@chakra-ui/react"
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons"


export const WalkthroughStageTemplate = ({ firstPersona, secondPersona, thirdPersona, isMd }: { firstPersona: React.ReactNode, secondPersona: React.ReactNode, thirdPersona: React.ReactNode, isMd: Boolean }) => {
  return (
    <SimpleGrid columns={5} spacing={10} alignItems="center" display={{ md: "flex" }} justifyContent="center">
      <Box d="flex" alignContent="center" alignItems="center" justifyContent="center">
        { firstPersona }
      </Box>
      { !isMd ? <ChevronDownIcon my="5" display="block" mx="auto" /> : <ChevronRightIcon m="auto" /> }
      <Box d="flex" alignContent="center" alignItems="center" justifyContent="center">
        { secondPersona }
      </Box>
      { !isMd ? <ChevronDownIcon my="5" display="block" mx="auto" /> : <ChevronRightIcon m="auto" /> }
      <Box>
        { thirdPersona }
      </Box>
    </SimpleGrid>
  )
}

const Section1 = ({ isMd, nextStep }: { isMd: Boolean, nextStep: () => void }) => (
  <Section
    title="1. Obtain verified data using Santander's Digital Trust Protocol"
    subtitle="Protect your users data privacy by leveraging on the Open ID provider DTP (Digital Trust Protocol),
        created by Santander, to obtain data attestations from a trusted authorised party."
  >
    <WalkthroughStepOne isMd={isMd} nextStep={nextStep}/>
  </Section>
)

const Section2 = () => (
  <Section
    title="2. Generate a digital certificate for offline verification"
    subtitle="Based on the data verification, your users can request an offline certification which can be used by 
    your company to be able to request the previously attested data. The certificate is encrypted, and uploaded to the IPFS Network."
  >
    <WalkthroughStepTwo />
  </Section>
)

const Section3 = () => (
  <Section
    title="3. Pay for offline attested certificate"
    subtitle="Each user is given their own regulated custodial-based Ethereum wallets based on cloud HSM-keys, so they can pay for 
    the digital signature on the certificate. For instance, as a company you can pay on behalf of the user if needed."
  >
    <WalkthroughStepThree />
  </Section>
)

const Section4 = () => (
  <Section
    title="4. Sign the certificate on the Blockchain"
    subtitle="After payment, the digital certificate can then be signed by Tizoc‘s HSM-based cloud key, creating a proof on the Ethereum blockchain, 
    timestamping the event. The proof is shared to the user and the certificate to your company, which can then be distributed accordingly to your own 
    backoffice employees to be used at checkpoints."
  >
    <WalkthroughStepFour />
  </Section>
)

const Section5 = () => (
  <Section
    title="5. Verify offline your users by using the pre-downloaded certificate"
    subtitle="Your company can verify users by requesting the previously generated digital proof obtained by Tizoc. Your company
    downloads the user certificate to allow offline verification via mobile devices or similar without an internet connection."
  >
    <WalkthroughStepFive />
  </Section>
)

export { Section1, Section2, Section3, Section4, Section5 }