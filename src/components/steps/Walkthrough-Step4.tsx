import { SimpleGrid, Box, Button, Tag, TagLeftIcon, TagLabel, ButtonGroup, Text } from "@chakra-ui/react";
import { Persona } from "../Persona";
import { Claudia, Tizoc, Airport, Javier } from "../../constants/mocks";
import { PersonaRole } from "../../commons/persona";
import { ViewIcon, InfoIcon, ChevronRightIcon, SmallAddIcon, CheckIcon } from "@chakra-ui/icons";

export const WalkthroughStepFour = () => (
  <SimpleGrid columns={3} spacing={10} alignItems="center">
    <Box d="flex" alignContent="center" alignItems="center" justifyContent="center">
      <Persona persona={Claudia} role={PersonaRole.verified} viewIcon={
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
      </Persona>
      <ChevronRightIcon ml="10" />
    </Box>
    <Box height="120px" d="flex" alignContent="center" alignItems="center" justifyContent="center">
      <Persona persona={Tizoc} role={PersonaRole.service} >
        <ButtonGroup variant="solid" size="xs" spacing="2" mt="2" colorScheme="yellow">
          <Button rightIcon={<SmallAddIcon />}>
            Create cert
            </Button>
          <Button rightIcon={<SmallAddIcon />}>
            Publish ETH tx
            </Button>
        </ButtonGroup>
      </Persona>
      <ChevronRightIcon ml="10" />
    </Box>
    <Box>
      <Persona persona={Claudia} role={PersonaRole.verified} mb={2} viewIcon={
        <ButtonGroup variant="solid" size="xs" spacing="2" mt="2" colorScheme="green">
          <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
            PDF
            </Button>
          <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
            Proof
            </Button>
        </ButtonGroup>
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
      } />
      <Persona persona={Airport} role={PersonaRole.company} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="purple" ml="2">
          Certificate
          </Button>
      }>
        <Persona persona={Javier} role={PersonaRole.backoffice} mt={4} viewIcon={
          <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="red" ml="2">
            Certificate
            </Button>
        }>
          <Button width="100%" rightIcon={<CheckIcon />} px="2" size="xs" variant="solid" colorScheme="red" mt="2">
            Download certificate
            </Button>
        </Persona>
      </Persona>
    </Box>
  </SimpleGrid>
)