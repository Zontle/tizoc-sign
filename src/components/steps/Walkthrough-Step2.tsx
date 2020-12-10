import { ButtonGroup, Button, Skeleton } from "@chakra-ui/react";
import { Persona } from "../Persona";
import { Claudia, Tizoc } from "../../constants/mocks";
import { PersonaRole } from "../../commons/persona";
import { SmallAddIcon, ViewIcon, CheckIcon } from "@chakra-ui/icons";
import { WalkthroughStageTemplate, WalkthroughStepTemplate } from "../Walkthrough";


const Stage1 = ({ nextStage, isMd }: { nextStage: () => void, isMd: Boolean }) => {
  const loading = true;

  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.verified} />}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service} viewIcon={
        <Skeleton isLoaded={!loading} ml={loading && '2'}>
          <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="yellow" ml="2">
            Key
          </Button>
        </Skeleton>
      }>
        <ButtonGroup variant="solid" size="xs" spacing="2" mt="2" colorScheme="yellow">
          <Button onClick={nextStage} rightIcon={<SmallAddIcon />}>
            Create Key
          </Button>
          <Button disabled rightIcon={<SmallAddIcon />}>
            Generate PDF
          </Button>
        </ButtonGroup>
      </Persona>}
      thirdPersona={<Persona persona={Claudia} role={PersonaRole.verified} />}
      isMd={isMd}
    />
  )
}

const Stage2 = ({ nextStage, isMd }: { nextStage: () => void, isMd: Boolean }) => {
  const loading = true;
  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.verified} />}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="yellow" ml="2">
          Key
        </Button>
      }>
        <ButtonGroup variant="solid" size="xs" spacing="2" mt="2" colorScheme="yellow">
          <Button disabled rightIcon={<CheckIcon />}>
            Key Created
            </Button>
          <Button onClick={nextStage} rightIcon={<SmallAddIcon />}>
            Generate PDF
            </Button>
        </ButtonGroup>
      </Persona>}
      thirdPersona={<Persona persona={Claudia} role={PersonaRole.verified} viewIcon={
        <Skeleton isLoaded={!loading} ml={loading && '2'}>
          <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
            PDF
          </Button>
        </Skeleton>
      } />}
      isMd={isMd}
    />
  )
}

const Stage3 = ({ isMd }: { isMd: Boolean }) => {
  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.verified} />}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="yellow" ml="2">
          Key
        </Button>
      }>
        <ButtonGroup variant="solid" size="xs" spacing="2" mt="2" colorScheme="yellow">
          <Button disabled rightIcon={<CheckIcon />}>
            Key Created
            </Button>
          <Button rightIcon={<SmallAddIcon />}>
            PDF Generated
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
    { component: Stage1, name: 'Stage1' },
    { component: Stage2, name: 'Stage2' },
    { component: Stage3, name: 'Stage3' },
  ];

  return (
    <WalkthroughStepTemplate
      nextStep={nextStep}
      isMd={isMd}
      stages={stages}
    />
  )
}