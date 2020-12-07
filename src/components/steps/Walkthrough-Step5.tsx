import { SimpleGrid, Box, Button } from "@chakra-ui/react";
import { Persona } from "../Persona";
import { Claudia, Javier } from "../../constants/mocks";
import { PersonaRole } from "../../commons/persona";
import { ViewIcon, ChevronRightIcon, CheckIcon } from "@chakra-ui/icons";

export const WalkthroughStepFive = () => (
  <SimpleGrid columns={3} spacing={10} alignItems="center">
    <Box d="flex" alignContent="center" alignItems="center" justifyContent="center">
      <Persona persona={Claudia} role={PersonaRole.registered} light viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="blue" ml="-1">
          Proof
          </Button>
      } />
      <ChevronRightIcon ml="10" />
    </Box>
    <Box height="120px" d="flex" alignContent="center" alignItems="center" justifyContent="center">
      <Persona persona={Javier} role={PersonaRole.backoffice} mt={4} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="red" ml="2">
          Certificate
            </Button>
      }>
        <Button width="100%" rightIcon={<CheckIcon />} px="2" size="xs" variant="solid" colorScheme="red" mt="2">
          Verify proof
            </Button>
      </Persona>
      <ChevronRightIcon ml="10" />
    </Box>
    <Box>
      <Persona persona={Claudia} role={PersonaRole.verified} light viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="green" ml="-1">
          Proof
          </Button>
      } />
    </Box>
  </SimpleGrid>
)