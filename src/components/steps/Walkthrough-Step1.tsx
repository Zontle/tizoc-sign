import { Button } from "@chakra-ui/react";
import { Persona } from "../Persona";
import { Claudia, Tizoc, Unknown } from "../../constants/mocks";
import { PersonaRole } from "../../commons/persona";
import { CheckIcon } from "@chakra-ui/icons";
import { WalkthroughStageTemplate, WalkthroughStepTemplate } from "../Walkthrough";



const Stage1 = ({ nextStage, isMd }: { nextStage: () => void, isMd: Boolean }) => {
  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.registered} />}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service}>
        <Button width="100%" onClick={nextStage} px="2" size="xs" variant="solid" colorScheme="yellow" mt="2">
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
          Verified
          </Button>
      </Persona>}
      thirdPersona={<Persona persona={Claudia} role={PersonaRole.verified} />}
      isMd={isMd}
    />
  )
}

export const WalkthroughStepOne = ({ isMd, nextStep }: { isMd: Boolean, nextStep: () => void }) => {
  const stages = [
    Stage1,
    Stage2,
  ];

  return (
    <WalkthroughStepTemplate
      nextStep={nextStep}
      isMd={isMd}
      stages={stages}
    />
  )
}