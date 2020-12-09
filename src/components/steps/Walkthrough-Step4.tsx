import { Box, Button, Tag, TagLeftIcon, TagLabel, ButtonGroup, Text, Skeleton } from "@chakra-ui/react";
import { Persona } from "../Persona";
import { Claudia, Tizoc, Airport, Javier } from "../../constants/mocks";
import { PersonaRole } from "../../commons/persona";
import { ViewIcon, InfoIcon, SmallAddIcon, CheckIcon } from "@chakra-ui/icons";
import { WalkthroughStepTemplate, WalkthroughStageTemplate } from "../Walkthrough";


const Stage1 = ({ nextStage, isMd }: { nextStage: () => void, isMd: Boolean }) => {
  const loading = true;

  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.verified} viewIcon={
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
      }/>}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service}>
        <ButtonGroup variant="solid" size="xs" spacing="2" mt="2" colorScheme="yellow">
          <Button onClick={nextStage} rightIcon={<SmallAddIcon />}>
            Create cert
            </Button>
          <Button disabled rightIcon={<SmallAddIcon />}>
            Create proof
            </Button>
        </ButtonGroup>
      </Persona>}
      thirdPersona={<Box>
      <Persona persona={Claudia} role={PersonaRole.verified} mb={2} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
          PDF
        </Button>
      } wallet={
        <Box d="flex" flexDirection="column">
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
        </Box>
      }>
        
      </Persona>
      <Persona persona={Airport} role={PersonaRole.company} viewIcon={
        <Skeleton isLoaded={!loading} ml={loading && '2'}>
          <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="purple" ml="2">
            Cert
          </Button>
        </Skeleton>
      }>
        <Persona persona={Javier} role={PersonaRole.backoffice} mt={4} wallet={
          <Skeleton width="100%" isLoaded={!loading} mt={loading && '2'}>
            <Button width="100%" rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="red" mt="2">
              Cert
            </Button>
          </Skeleton>
        }>
        </Persona>
      </Persona>
    </Box>}
      isMd={isMd}
    />
  )
}

const Stage2 = ({ nextStage, isMd }: { nextStage: () => void, isMd: Boolean }) => {
  const loading = true;

  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.verified} viewIcon={
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
      }/>}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service}>
        <ButtonGroup variant="solid" size="xs" spacing="2" mt="2" colorScheme="yellow">
          <Button disabled rightIcon={<CheckIcon />}>
            Cert created
          </Button>
          <Button onClick={nextStage} rightIcon={<SmallAddIcon />}>
            Create proof
          </Button>
        </ButtonGroup>
      </Persona>}
      thirdPersona={<Box>
      <Persona persona={Claudia} role={PersonaRole.verified} mb={2} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
          PDF
        </Button>
      } wallet={
        <Box d="flex" flexDirection="column">
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
          <Skeleton isLoaded={!loading} mt={loading && '2'}>
            <Button width="100%" rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" mt="2">
              Proof
            </Button>
          </Skeleton>
        </Box>
      }>
        
      </Persona>
      <Persona persona={Airport} role={PersonaRole.company} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="purple" ml="2">
          Cert
          </Button>
      }>
        <Persona persona={Javier} role={PersonaRole.backoffice} mt={4} wallet={
          <Button width="100%" rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="red" mt="2">
            Cert
          </Button>
        }>
        </Persona>
      </Persona>
    </Box>}
      isMd={isMd}
    />
  )
}

const Stage3 = ({ isMd }: { isMd: Boolean }) => {
  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.verified} viewIcon={
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
      }/>}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service}>
        <ButtonGroup variant="solid" size="xs" spacing="2" mt="2" colorScheme="yellow">
          <Button disabled rightIcon={<CheckIcon />}>
            Cert created
            </Button>
          <Button disabled rightIcon={<CheckIcon />}>
            Proof created
            </Button>
        </ButtonGroup>
      </Persona>}
      thirdPersona={<Box>
      <Persona persona={Claudia} role={PersonaRole.verified} mb={2} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
          PDF
        </Button>
      } wallet={
        <Box d="flex" flexDirection="column">
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
          <Button width="100%" rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" mt="2">
            Proof
          </Button>
        </Box>
      }>
        
      </Persona>
      <Persona persona={Airport} role={PersonaRole.company} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="purple" ml="2">
          Cert
          </Button>
      }>
        <Persona persona={Javier} role={PersonaRole.backoffice} mt={4} wallet={
          <Button width="100%" rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="red" mt="2">
            Cert
          </Button>
        }>
        </Persona>
      </Persona>
    </Box>}
      isMd={isMd}
    />
  )
}

export const WalkthroughStepFour = ({ isMd, nextStep }: { isMd: Boolean, nextStep: () => void }) => {
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