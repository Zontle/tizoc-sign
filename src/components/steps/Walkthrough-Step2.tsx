import { ButtonGroup, Button } from "@chakra-ui/react";
import { Persona } from "../Persona";
import { Claudia, Tizoc } from "../../constants/mocks";
import { PersonaRole } from "../../commons/persona";
import { SmallAddIcon, ViewIcon } from "@chakra-ui/icons";
import { WalkthroughStageTemplate, WalkthroughStepTemplate } from "../Walkthrough";


const Stage1 = ({ isMd }: { isMd: Boolean }) => {
  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.verified} />}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service} >
        <ButtonGroup variant="solid" size="xs" spacing="2" mt="2" colorScheme="yellow">
          <Button rightIcon={<SmallAddIcon />}>
            Create Key
            </Button>
          <Button rightIcon={<SmallAddIcon />}>
            Generate PDF
            </Button>
        </ButtonGroup>
      </Persona>}
      thirdPersona={<Persona persona={Claudia} role={PersonaRole.verified} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
          PDF
          </Button>
      } />}
      isMd={isMd}
    />
  )
}

export const WalkthroughStepTwo = ({ isMd, nextStep }: { isMd: Boolean, nextStep: () => void }) => {
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