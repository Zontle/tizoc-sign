import { SimpleGrid, Box, ButtonGroup, Button } from "@chakra-ui/react";
import { Persona } from "../Persona";
import { Claudia, Tizoc } from "../../constants/mocks";
import { PersonaRole } from "../../commons/persona";
import { ChevronRightIcon, SmallAddIcon, ViewIcon } from "@chakra-ui/icons";

export const WalkthroughStepTwo = () => (
  <SimpleGrid columns={3} spacing={10} alignItems="center">
    <Box d="flex" alignContent="center" alignItems="center" justifyContent="center">
      <Persona persona={Claudia} role={PersonaRole.verified} />
      <ChevronRightIcon ml="10" />
    </Box>
    <Box height="120px" d="flex" alignContent="center" alignItems="center" justifyContent="center">
      <Persona persona={Tizoc} role={PersonaRole.service} >
        <ButtonGroup variant="solid" size="xs" spacing="2" mt="2" colorScheme="yellow">
          <Button rightIcon={<SmallAddIcon />}>
            Create Key
            </Button>
          <Button rightIcon={<SmallAddIcon />}>
            Generate PDF
            </Button>
        </ButtonGroup>
      </Persona>
      <ChevronRightIcon ml="10" />
    </Box>
    <Box>
      <Persona persona={Claudia} role={PersonaRole.verified} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
          PDF
          </Button>
      } />
    </Box>
  </SimpleGrid>
)