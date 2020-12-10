import { Button, Code, Text, Box } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import { Persona } from "../Persona";
import { Claudia, Tizoc, Unknown } from "../../constants/mocks";
import { PersonaRole } from "../../commons/persona";
import { CheckIcon } from "@chakra-ui/icons";
import { WalkthroughStageTemplate, WalkthroughStepTemplate } from "../Walkthrough";
import { useUrlSearchParams } from "use-url-search-params";
import { useEffect } from "react";


const Stage1 = ({ nextStage, isMd }: { nextStage: () => void, isMd: Boolean }) => {
  const router = useRouter()
  
  const initial = {};

  const types = {
    code: String,
    nonce: String
  };

  const [params] = useUrlSearchParams(initial, types);

  const loadAuthorizationUrl = async () => {
    return await fetch('/api/initiate-authorize').then(res => res.text())
  }

  const next = async () => {
    const url = await loadAuthorizationUrl()
    router.push(url)
  }

  useEffect(() => {
    (async () => {
      if (typeof params.code === 'string') {
        const { code } = params;
        const token = await fetch('/api/token', { 
          method: "POST", 
          body: JSON.stringify({ code }), 
          headers: { 
            "Content-type": "application/json; charset=UTF-8"
          }}).then(res => res.json())
        console.log('Token', token)
        nextStage()
      }
    })()
  }, [params.code]);

  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.registered} />}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service}>
        <Button width="100%" onClick={next} px="2" size="xs" variant="solid" colorScheme="yellow" mt="2">
          Verify
          </Button>
          <Box mt="2">
            <Text margin="auto" textAlign="center">
                User: <Code>mark</Code>, Pass: <Code>123</Code>
            </Text>
          </Box>
      </Persona>}
      thirdPersona={<Persona persona={Unknown} role={PersonaRole.unknown} loading={true} />}
      isMd={isMd}
    />
  )
}

const Stage2 = ({ isMd }: { isMd: Boolean }) => {
  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.registered} />}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service}>
        <Button width="100%" disabled rightIcon={<CheckIcon />} px="2" size="xs" variant="solid" colorScheme="yellow" mt="2">
          Verified
          </Button>
      </Persona>}
      thirdPersona={<Persona persona={Claudia} role={PersonaRole.verified} />}
      isMd={isMd}
    />
  )
}

export const WalkthroughStepOne = ({ isMd, nextStep }: { isMd: Boolean, nextStep: () => void }) => {
  const stages = [
    { component: Stage1, name: 'Stage1' },
    { component: Stage2, name: 'Stage2' },
  ];

  return (
    <WalkthroughStepTemplate
      nextStep={nextStep}
      isMd={isMd}
      stages={stages}
    />
  )
}