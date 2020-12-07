import { Heading, Text, Divider, Link as ChakraLink, ButtonGroup, Button } from "@chakra-ui/react"
import { Container } from '../components/layout/Container'
import { Main } from '../components/layout/Main'
import { DarkModeSwitch } from '../components/common/DarkModeSwitch'
import { Home } from '../components/common/Home'
import * as Walkthrough from "../components/Walkthrough"
import { Footer } from "../components/layout/Footer"
import { useState } from "react"


const WalkthroughPage = () => {
  const [ currentStep, useCurrentStep ] = useState(0)
  const STEPS = 5

  const steps = [
    Walkthrough.Section1,
    Walkthrough.Section2,
    Walkthrough.Section3,
    Walkthrough.Section4,
    Walkthrough.Section5,
  ];

  const DynamicStep = () => {
    const RenderableStep = steps[currentStep]
    return <RenderableStep />
  }

  return (
    <Container minHeight="100vh">
      <Main>
        <Heading as="h1" size="2xl" d="flex" alignItems="center">
          Tizoc Walkthrough
        <ButtonGroup variant="solid" size="xs" isAttached ml="2" mt="2" colorScheme="yellow">
          {
            Array.from(Array(STEPS).keys()).map( step => 
              (<Button 
                key={step}
                variant={currentStep === step ? "solid" : "outline"}
                onClick={() => useCurrentStep(step)}
                >
                  Step {step + 1}
                </Button>)
            )
          }
        </ButtonGroup>
        </Heading>
        <Text fontSize="2xl">
          Learn how Tizoc provides offline attestation requirements to any enterprise.
        <Text fontSize="xl" color="gray.600">Click on the buttons inside of each section for each step to see the descripted steps in action.</Text>
        </Text>
        


        <Divider mb="5" />
        
        <DynamicStep/>

      </Main>
      <DarkModeSwitch />
      <Footer>
        <Text>By <ChakraLink textDecoration="underline" isExternal href="https://enigma.sh/" flexGrow={1}>E Nigma Technologies OÜ</ChakraLink>, a submission to the <ChakraLink textDecoration="underline" isExternal href="https://santander.devpost.com/" flexGrow={1}>2020 Santander Hackathon</ChakraLink></Text>
      </Footer>
      <Home />
    </Container>
  )
}

export default WalkthroughPage
