import { Section } from "./Section"
import React, { useState, useEffect } from "react"
import { WalkthroughStepOne } from "./steps/Walkthrough-Step1"
import { WalkthroughStepTwo } from "./steps/Walkthrough-Step2"
import { WalkthroughStepThree } from "./steps/Walkthrough-Step3"
import { WalkthroughStepFour } from "./steps/Walkthrough-Step4"
import { WalkthroughStepFive } from "./steps/Walkthrough-Step5"
import { SimpleGrid, Box, Container, Button } from "@chakra-ui/react"
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons"
import { useUrlSearchParams } from "use-url-search-params"


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
      <Box d="flex" alignContent="center" alignItems="center" justifyContent="center">
        { thirdPersona }
      </Box>
    </SimpleGrid>
  )
}

interface WalkthroughStageProps {
   isMd: Boolean,
   nextStage: () => void
}

export const WalkthroughStepTemplate = ({ isMd, nextStep, stages }: { isMd: Boolean, nextStep: () => void, stages: { component: React.FC<WalkthroughStageProps>, name: string}[]  }) => {
  const [currentStage, useStage] = useState(0)

  useEffect(() => {
    if (typeof params.stage === 'string') {
      const [, actualStage] = params.stage.split('Stage');
      useStage(+actualStage - 1);
    }
  }, []);

  const initial = {
    stage: stages[0].name
  };

  const types = {
    stage: stages.map( stage => stage.name )
  };

  const [params, setParams] = useUrlSearchParams(initial, types);

  const nextStageHandler = (stage: number) => () => {
    useStage(stage+1);
    setParams({ stage: `Stage${ stage + 2 }` })
  }

  const DynamicStage = ({ isMd }: { isMd: Boolean }) => {
    const RenderableStage = stages[currentStage].component
    return <RenderableStage 
      isMd={isMd}
      nextStage={
        currentStage < stages.length - 1 ? nextStageHandler(currentStage): () => {}
      }
    />
  }

  return (
  <Container>
    <DynamicStage isMd={isMd} />
    { 
      currentStage == stages.length - 1 &&
      <Box position="absolute" bottom="-50px" mt="10" left="0" right="0" textAlign="center">
        <Button onClick={() => { useStage(0); setParams({ stage: `Stage1` }); }}>Reset</Button>
        <Button ml="2" variant="solid" colorScheme="yellow" onClick={nextStep}>Next</Button>
      </Box>
    }
  </Container>
  )
}

const Step1 = ({ isMd, nextStep }: { isMd: Boolean, nextStep: () => void }) => (
  <Section
    title="1. Obtain verified data using Santander's Digital Trust Protocol"
    subtitle="Protect your users data privacy by leveraging on the Open ID provider DTP (Digital Trust Protocol),
        created by Santander, to obtain data attestations from a trusted authorised party."
  >
    <WalkthroughStepOne isMd={isMd} nextStep={nextStep}/>
  </Section>
)

const Step2 = ({ isMd, nextStep }: { isMd: Boolean, nextStep: () => void }) => (
  <Section
    title="2. Generate a digital certificate for offline verification"
    subtitle="Based on the data verification, your users can request an offline certification which can be used by 
    your company to be able to request the previously attested data. The certificate is encrypted, and uploaded to the IPFS Network."
  >
    <WalkthroughStepTwo isMd={isMd} nextStep={nextStep}/>
  </Section>
)

const Step3 = ({ isMd, nextStep }: { isMd: Boolean, nextStep: () => void }) => (
  <Section
    title="3. Pay for offline attested certificate"
    subtitle="Each user is given their own regulated custodial-based Ethereum wallets based on cloud HSM-keys, so they can pay for 
    the digital signature on the certificate. For instance, as a company you can pay on behalf of the user if needed."
  >
    <WalkthroughStepThree isMd={isMd} nextStep={nextStep}/>
  </Section>
)

const Step4 = ({ isMd, nextStep }: { isMd: Boolean, nextStep: () => void }) => (
  <Section
    title="4. Sign the certificate on the Blockchain"
    subtitle="After payment, the digital certificate can then be signed by Tizoc‘s HSM-based cloud key, creating a proof on the Ethereum blockchain, 
    timestamping the event. The proof is shared to the user and the certificate to your company, which can then be distributed accordingly to your own 
    backoffice employees to be used at checkpoints."
  >
    <WalkthroughStepFour isMd={isMd} nextStep={nextStep}/>
  </Section>
)

const Step5 = ({ isMd, nextStep }: { isMd: Boolean, nextStep: () => void }) => (
  <Section
    title="5. Verify offline your users by using the pre-downloaded certificate"
    subtitle="Your company can verify users by requesting the previously generated digital proof obtained by Tizoc. Your company
    downloads the user certificate to allow offline verification via mobile devices or similar without an internet connection."
  >
    <WalkthroughStepFive isMd={isMd} nextStep={nextStep}/>
  </Section>
)

export { Step1, Step2, Step3, Step4, Step5 }