import { Button } from "@chakra-ui/react";
import { Persona } from "../Persona";
import { Claudia, Javier } from "../../constants/mocks";
import { PersonaRole } from "../../commons/persona";
import { ViewIcon, CheckIcon } from "@chakra-ui/icons";
import { WalkthroughStepTemplate, WalkthroughStageTemplate } from "../Walkthrough";


const Stage1 = ({ isMd }: { isMd: Boolean }) => {
  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.registered} light viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="blue" ml="-1">
          Proof
          </Button>
      } />}
      secondPersona={<Persona persona={Javier} role={PersonaRole.backoffice} mt={4} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="red" ml="2">
          Certificate
            </Button>
      }>
        <Button width="100%" rightIcon={<CheckIcon />} px="2" size="xs" variant="solid" colorScheme="red" mt="2">
          Verify proof
            </Button>
      </Persona>}
      thirdPersona={<Persona persona={Claudia} role={PersonaRole.verified} light viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="green" ml="-1">
          Proof
          </Button>
      } />}
      isMd={isMd}
    />
  )
}

export const WalkthroughStepFive = ({ isMd, nextStep }: { isMd: Boolean, nextStep: () => void }) => {
  const stages = [
    Stage1,
  ];

  return (
    <WalkthroughStepTemplate
      nextStep={nextStep}
      isMd={isMd}
      stages={stages}
    />
  )
}