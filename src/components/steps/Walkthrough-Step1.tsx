import { SimpleGrid, Box, Button } from "@chakra-ui/react";
import { Persona } from "../Persona";
import { Claudia, Tizoc, Unknown } from "../../constants/mocks";
import { PersonaRole } from "../../commons/persona";
import { ChevronRightIcon, CheckIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Container } from "../layout/Container";

const Stage1 = ({ nextStage }: { nextStage: () => void }) => {
  return (
    <SimpleGrid columns={3} spacing={10} alignItems="center" mt="5" height="150px">
      <Box d="flex" alignContent="center" alignItems="center" justifyContent="center">
        <Persona persona={Claudia} role={PersonaRole.registered} />
        <ChevronRightIcon ml="10" />
      </Box>
      <Box height="80px" d="flex" alignContent="center" alignItems="center" justifyContent="center">
        <Persona persona={Tizoc} role={PersonaRole.service} >
          <Button width="100%" onClick={nextStage} rightIcon={<CheckIcon />} px="2" size="xs" variant="solid" colorScheme="yellow" mt="2">
            Verify
          </Button>
        </Persona>
        <ChevronRightIcon ml="10" />
      </Box>
      <Box>
        <Persona persona={Unknown} role={PersonaRole.unknown} />
      </Box>
    </SimpleGrid>
  )
}

const Stage2 = () => {
  return (
    <SimpleGrid columns={3} spacing={10} alignItems="center" mt="5" height="150px">
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
}

export const WalkthroughStepOne = () => {
  const [currentStage, useStage] = useState(0)

  const stages = [
    Stage1,
    Stage2,
  ];

  const DynamicStage = () => {
    const RenderableStep = stages[currentStage]
    return <RenderableStep nextStage={() => useStage(currentStage+1)}/>
  }

  return (
  <Container>
    <DynamicStage />
    { currentStage == stages.length - 1 && <Button position="absolute" bottom="-50px" mt="10" onClick={() => useStage(0)}>Reset</Button> }
  </Container>
  )
}