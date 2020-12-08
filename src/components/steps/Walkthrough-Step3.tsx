import { Box, Button, ButtonGroup, Tag, TagLeftIcon, TagLabel, Text } from "@chakra-ui/react";
import { Persona } from "../Persona";
import { Claudia, Airport, Tizoc } from "../../constants/mocks";
import { PersonaRole } from "../../commons/persona";
import { ViewIcon, CheckIcon, SmallAddIcon, InfoIcon } from "@chakra-ui/icons";
import { WalkthroughStageTemplate, WalkthroughStepTemplate } from "../Walkthrough";


const Stage1 = ({ isMd }: { isMd: Boolean }) => {
  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.verified} mb={2} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
          PDF
          </Button>
      }>
        <Button width="100%" rightIcon={<CheckIcon />} px="2" size="xs" variant="solid" colorScheme="green" mt="2">
          Pay validation fee
          </Button>
        <Persona persona={Airport} role={PersonaRole.company} mt={4}>
          <Button width="100%" rightIcon={<CheckIcon />} px="2" size="xs" variant="solid" colorScheme="purple" mt="2">
            Pay validation fee
            </Button>
        </Persona>
      </Persona>}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service} >
        <ButtonGroup variant="solid" size="xs" spacing="2" mt="2" colorScheme="yellow">
          <Button rightIcon={<SmallAddIcon />}>
            Create Wallet
            </Button>
          <Button rightIcon={<SmallAddIcon />}>
            Validate payment
            </Button>
        </ButtonGroup>
      </Persona>}
      thirdPersona={<Persona persona={Claudia} role={PersonaRole.verified} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
          PDF
          </Button>
      } wallet={
        <Box d="flex">
          <Tag size="sm" mt="2" variant="subtle" colorScheme="cyan">
            <TagLeftIcon boxSize="12px" as={InfoIcon} />
            <TagLabel>Address</TagLabel>
          </Tag>
          <Tag size="sm" ml="1" mt="2" variant="subtle" colorScheme="cyan">
            <TagLabel>Balance</TagLabel>
            <Text>&nbsp; 0.00</Text>
          </Tag>
        </Box>
      }>
      </Persona>}
      isMd={isMd}
    />
  )
}

export const WalkthroughStepThree = ({ isMd, nextStep }: { isMd: Boolean, nextStep: () => void }) => {
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