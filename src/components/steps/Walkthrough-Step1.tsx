import { SimpleGrid, Box, Button } from "@chakra-ui/react";
import { Persona } from "../Persona";
import { Claudia, Tizoc } from "../../constants/mocks";
import { PersonaRole } from "../../commons/persona";
import { ChevronRightIcon, CheckIcon } from "@chakra-ui/icons";

export const WalkthroughStepOne = () => (
  <SimpleGrid columns={3} spacing={10} alignItems="center">
    <Box d="flex" alignContent="center" alignItems="center" justifyContent="center">
      <Persona persona={Claudia} role={PersonaRole.registered} />
      <ChevronRightIcon ml="10" />
    </Box>
    <Box height="80px" d="flex" alignContent="center" alignItems="center" justifyContent="center">
      <Persona persona={Tizoc} role={PersonaRole.service} >
        <Button width="100%" rightIcon={<CheckIcon />} px="2" size="xs" variant="solid" colorScheme="yellow" mt="2">
          Verify
          </Button>
      </Persona>
      <ChevronRightIcon ml="10" />
    </Box>
    <Box>
      <Persona persona={Claudia} role={PersonaRole.verified} />
    </Box>
  </SimpleGrid>
)