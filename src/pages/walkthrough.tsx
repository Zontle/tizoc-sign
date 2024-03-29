import { Heading, Text, Divider, Link as ChakraLink, ButtonGroup, Button, useMediaQuery } from "@chakra-ui/react"
import { Container } from '../components/layout/Container'
import { Main } from '../components/layout/Main'
import { DarkModeSwitch } from '../components/common/DarkModeSwitch'
import { Home } from '../components/common/Home'
import * as Walkthrough from "../components/Walkthrough"
import { Footer } from "../components/layout/Footer"
import { useState, useEffect } from "react"
import { useUrlSearchParams } from "use-url-search-params"


const WalkthroughPage = () => {
  const [isMd] = useMediaQuery("(min-width: 52em)")
  const [currentStep, useCurrentStep] = useState(0)

  const steps = [
    Walkthrough.Step1,
    Walkthrough.Step2,
    Walkthrough.Step3,
    Walkthrough.Step4,
    Walkthrough.Step5,
  ];

  const initial = {
    step: steps[0].name
  };

  const types = {
    step: steps.map( step => step.name )
  };

  const [params, setParams] = useUrlSearchParams(initial, types);

  useEffect(() => {
    if (typeof params.step === 'string') {
      const [, actualStep] = params.step.split('Step');
      useCurrentStep(+actualStep - 1);
    }
  }, [params.step]);

  const nextStepHandler = (step: number) => () => {
    console.log(`Updating Step to ${step + 1}`)
    useCurrentStep(step + 1)
    setParams({ step: `Step${ step + 2 }` })
    setParams({ stage: `Stage1` })
  }

  const DynamicStep = ({ isMd }: { isMd: Boolean } ) => {
    const RenderableStep = steps[currentStep]
    return <RenderableStep isMd={isMd} nextStep={
      currentStep < steps.length - 1 ? nextStepHandler(currentStep) : () => {}
    } />
  }

  return (
    <Container minHeight="100vh">
      <Main>

        <Heading as="h1" size="2xl" d="flex" alignItems="center">
          Tizoc Walkthrough
        <ButtonGroup variant="solid" size="xs" isAttached ml="2" mt="2" colorScheme="yellow">
          {
            Array.from(steps.map((_, step) => 
              (<Button 
                key={step}
                variant={currentStep === step ? "solid" : "outline"}
                onClick={nextStepHandler(step - 1)}
                >
                  Step {step + 1}
                </Button>)
            ))
          }
        </ButtonGroup>
        </Heading>

        <Text fontSize="2xl">
          Learn how Tizoc provides offline attestation requirements to any enterprise.
          <Text fontSize="xl" color="gray.600">Click on the buttons inside of each section for each step to see the descripted steps in action.</Text>
        </Text>
        
        <Divider mb="5" />
        
        <DynamicStep isMd={isMd} />

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
