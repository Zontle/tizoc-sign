import { Box, Button, Tag, TagLeftIcon, TagLabel, Text, Skeleton } from "@chakra-ui/react";
import { Persona } from "../Persona";
import { Claudia, Airport, Tizoc } from "../../constants/mocks";
import { PersonaRole } from "../../commons/persona";
import { ViewIcon, CheckIcon, SmallAddIcon, InfoIcon } from "@chakra-ui/icons";
import { WalkthroughStageTemplate, WalkthroughStepTemplate } from "../Walkthrough";

const Stage1 = ({ nextStage, isMd }: { nextStage: () => void, isMd: Boolean }) => {
  const loading = true;

  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.verified} mb={2} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
          PDF
          </Button>
      }>
        <Button width="100%" disabled rightIcon={<SmallAddIcon />} px="2" size="xs" variant="solid" colorScheme="green" mt="2">
          Pay validation fee
          </Button>
        <Persona persona={Airport} role={PersonaRole.company} mt={4}>
          <Button width="100%" disabled rightIcon={<SmallAddIcon />} px="2" size="xs" variant="solid" colorScheme="purple" mt="2">
            Pay validation fee
            </Button>
        </Persona>
      </Persona>}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service}>
        <Button width="100%" onClick={nextStage} px="2" size="xs" variant="solid" colorScheme="yellow" mt="2" rightIcon={<SmallAddIcon />}>
          Create Wallet
        </Button>
      </Persona>}
      thirdPersona={<Persona persona={Claudia} role={PersonaRole.verified} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
          PDF
          </Button>
      } wallet={
        <Skeleton isLoaded={!loading} mt={loading && '2'}>
          <Box d="flex">
            <Tag size="sm" mt="2" variant="subtle" colorScheme="cyan">
              <TagLeftIcon boxSize="12px" as={InfoIcon} />
              <TagLabel>Wallet</TagLabel>
            </Tag>
            <Tag size="sm" ml="1" mt="2" variant="subtle" colorScheme="cyan">
              <TagLabel>Balance</TagLabel>
              <Text>&nbsp; 0.00</Text>
            </Tag>
          </Box>
        </Skeleton>
      }>
      </Persona>}
      isMd={isMd}
    />
  )
}

const Stage2 = ({ nextStage, isMd }: { nextStage: () => void, isMd: Boolean }) => {
  const loading = true;
  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.verified} mb={2} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
          PDF
          </Button>
      }>
        <Button width="100%" onClick={nextStage} rightIcon={<SmallAddIcon />} px="2" size="xs" variant="solid" colorScheme="green" mt="2">
          Pay validation fee
          </Button>
        <Persona persona={Airport} role={PersonaRole.company} mt={4}>
          <Button width="100%" onClick={nextStage} rightIcon={<SmallAddIcon />} px="2" size="xs" variant="solid" colorScheme="purple" mt="2">
            Pay validation fee
            </Button>
        </Persona>
      </Persona>}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service} viewIcon={
        <Skeleton isLoaded={!loading} ml={loading && '2'}>
          <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="yellow" ml="2">
          Payment
          </Button>
        </Skeleton>
        }>
        <Button width="100%" disabled px="2" size="xs" variant="solid" colorScheme="yellow" mt="2" rightIcon={<CheckIcon />}>
          Wallet Created
        </Button>
      </Persona>}
      thirdPersona={<Persona persona={Claudia} role={PersonaRole.verified} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
          PDF
          </Button>
      } wallet={
        <Box d="flex">
          <Tag size="sm" mt="2" variant="subtle" colorScheme="cyan">
            <TagLeftIcon boxSize="12px" as={InfoIcon} />
            <TagLabel>Wallet</TagLabel>
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

const Stage3 = ({ isMd }: { isMd: Boolean }) => {
  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.verified} mb={2} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
          PDF
          </Button>
      }>
        <Button width="100%" disabled rightIcon={<CheckIcon />} px="2" size="xs" variant="solid" colorScheme="green" mt="2">
          Validation fee paid
          </Button>
        <Persona persona={Airport} role={PersonaRole.company} mt={4}>
          <Button width="100%" disabled rightIcon={<CheckIcon />} px="2" size="xs" variant="solid" colorScheme="purple" mt="2">
            Validation fee paid
            </Button>
        </Persona>
      </Persona>}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="yellow" ml="2">
          Payment
          </Button>
        }>
        <Button width="100%" disabled px="2" size="xs" variant="solid" colorScheme="yellow" mt="2" rightIcon={<CheckIcon />}>
          Wallet Created
        </Button>
      </Persona>}
      thirdPersona={<Persona persona={Claudia} role={PersonaRole.verified} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
          PDF
          </Button>
      } wallet={
        <Box d="flex">
          <Tag size="sm" mt="2" variant="subtle" colorScheme="cyan">
            <TagLeftIcon boxSize="12px" as={InfoIcon} />
            <TagLabel>Wallet</TagLabel>
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
    Stage2,
    Stage3
  ];

  return (
    <WalkthroughStepTemplate
      nextStep={nextStep}
      isMd={isMd}
      stages={stages}
    />
  )
}