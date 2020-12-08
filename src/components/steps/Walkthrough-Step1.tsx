import { Button, Box } from "@chakra-ui/react";
import { Persona } from "../Persona";
import { Claudia, Tizoc, Unknown } from "../../constants/mocks";
import { PersonaRole } from "../../commons/persona";
import { CheckIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Container } from "../layout/Container";
import { WalkthroughStageTemplate } from "../Walkthrough";



const Stage1 = ({ nextStage, isMd }: { nextStage: () => void, isMd: Boolean }) => {
  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.registered} />}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service}>
          <Button width="100%" onClick={nextStage} rightIcon={<CheckIcon />} px="2" size="xs" variant="solid" colorScheme="yellow" mt="2">
            Verify
          </Button>
        </Persona>}
      thirdPersona={<Persona persona={Unknown} role={PersonaRole.unknown} loading={true} />}
      isMd={isMd}
    />
  )
}

const Stage2 = ({ isMd }: { isMd: Boolean }) => {
  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.registered} />}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service}>
          <Button width="100%" disabled rightIcon={<CheckIcon />} px="2" size="xs" variant="solid" colorScheme="yellow" mt="2">
            Verify
          </Button>
        </Persona>}
      thirdPersona={<Persona persona={Claudia} role={PersonaRole.verified} />}
      isMd={isMd}
    />
  )
}

export const WalkthroughStepOne = ({ isMd, nextStep }: { isMd: Boolean, nextStep: () => void } ) => {
  const [currentStage, useStage] = useState(0)

  const stages = [
    Stage1,
    Stage2,
  ];

  const DynamicStage = ({ isMd }: { isMd: Boolean }) => {
    const RenderableStep = stages[currentStage]
    return <RenderableStep isMd={isMd} nextStage={() => useStage(currentStage+1)}/>
  }

  return (
  <Container>
    <DynamicStage isMd={isMd} />
    { 
      currentStage == stages.length - 1 &&
      <Box position="absolute" bottom="-50px" mt="10">
        <Button onClick={() => useStage(0)}>Reset</Button>
        <Button ml="2" variant="solid" colorScheme="yellow" onClick={nextStep}>Next</Button>
      </Box>
    }
  </Container>
  )
}