import { ButtonGroup, Button, Skeleton, useToast } from "@chakra-ui/react";
import { useState } from "react";


import { Persona } from "../Persona";
import { Claudia, Tizoc } from "../../constants/mocks";
import { PersonaRole } from "../../commons/persona";
import { SmallAddIcon, ViewIcon, CheckIcon } from "@chakra-ui/icons";
import { WalkthroughStageTemplate, WalkthroughStepTemplate } from "../Walkthrough";
import { generateKey, encryptPlaintext, useKeyState, useSaltState, useIVState, useIPFSHashState } from "../../utils/chimalli";



const short = (value:string) => {
  const INITIAL_CHARACTERS_TO_SHOW = 6
  return `${value.substr(0, INITIAL_CHARACTERS_TO_SHOW)}...${value.substring(value.length - INITIAL_CHARACTERS_TO_SHOW, value.length)}`
}


const Stage1 = ({ nextStage, isMd }: { nextStage: () => void, isMd: Boolean }) => {
  const loading = true;
  const [isLoading, setLoading] = useState(false)
  const [localKey, setLocalKey] = useKeyState('');
  const [localSalt, setLocalSalt] = useSaltState('');

  const createKeyHandler = () => {
    setLoading(true)

    const { salt, key } = !localKey ? generateKey('password') : { salt: localSalt, key: localKey }
    salt != localSalt && setLocalSalt(salt.toString('hex'));
    key != localKey && setLocalKey(key);
    
    setLoading(false)
    nextStage();
  }

  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.verified} />}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service} viewIcon={
        <Skeleton isLoaded={!loading} ml={loading && '2'}>
          <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="yellow" ml="2">
            Key
          </Button>
        </Skeleton>
      }>
        <ButtonGroup variant="solid" size="xs" spacing="2" mt="2" colorScheme="yellow">
          <Button onClick={createKeyHandler} rightIcon={<SmallAddIcon />} isLoading={isLoading}>
            Create Key
          </Button>
          <Button disabled rightIcon={<SmallAddIcon />}>
            Generate JSON
          </Button>
        </ButtonGroup>
      </Persona>}
      thirdPersona={<Persona persona={Claudia} role={PersonaRole.verified} />}
      isMd={isMd}
    />
  )
}

const Stage2 = ({ nextStage, isMd }: { nextStage: () => void, isMd: Boolean }) => {
  const [isLoading, setLoading] = useState(false)
  const [localKey] = useKeyState('key');
  const [localSalt] = useSaltState('salt');
  const [, setLocalIV] = useIVState();
  const [localIPFS, setLocalIPFSHash] = useIPFSHashState();
  const toast = useToast()
  const loading = true;


  const viewKeyHandler = () => {
    toast({
      title: "Encryption Key.",
      description: `Key: ${short(localKey)}, Salt: ${short(localSalt)}`,
      status: "success",
      duration: 10000,
      isClosable: true,
    })
  }


  const generateJSONHandler = async () => {
    setLoading(true)

    const { iv, ciphertext } = encryptPlaintext(JSON.stringify(Claudia), localKey)
    setLocalIV(iv.toString('hex'))
    const ipfsHashResponse = !localIPFS ? await fetch('/api/ipfs/upload', { 
      method: "POST", 
      body: JSON.stringify({ ciphertext }), 
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(res => res.json()) : { IpfsHash: localIPFS }

    const { IpfsHash } = ipfsHashResponse
    setLocalIPFSHash(IpfsHash)

    toast({
      title: "Encrypted JSON in IPFS.",
      description: `https://cloudflare-ipfs.com/ipfs/${IpfsHash}`,
      status: "success",
      duration: 6000,
      isClosable: true,
    })

    setLoading(false)
    nextStage()
  }

  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.verified} />}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service} viewIcon={
        <Button onClick={viewKeyHandler} rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="yellow" ml="2">
          Key
        </Button>
      }>
        <ButtonGroup variant="solid" size="xs" spacing="2" mt="2" colorScheme="yellow">
          <Button disabled rightIcon={<CheckIcon />}>
            Key Created
            </Button>
          <Button onClick={generateJSONHandler} rightIcon={<SmallAddIcon />} isLoading={isLoading}>
            Generate JSON
          </Button>
        </ButtonGroup>
      </Persona>}
      thirdPersona={<Persona persona={Claudia} role={PersonaRole.verified} viewIcon={
        <Skeleton isLoaded={!loading} ml={loading && '2'}>
          <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
            JSON
          </Button>
        </Skeleton>
      } />}
      isMd={isMd}
    />
  )
}

const Stage3 = ({ isMd }: { isMd: Boolean }) => {
  const toast = useToast()
  const [localIPFS] = useIPFSHashState('ipfs');

  const viewJSONHandler = () => {
    toast({
      title: "Encrypted JSON in IPFS.",
      description: `https://cloudflare-ipfs.com/ipfs/${localIPFS}`,
      status: "success",
      duration: 6000,
      isClosable: true,
    })
  }

  return (
    <WalkthroughStageTemplate
      firstPersona={<Persona persona={Claudia} role={PersonaRole.verified} />}
      secondPersona={<Persona persona={Tizoc} role={PersonaRole.service} viewIcon={
        <Button rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="yellow" ml="2">
          Key
        </Button>
      }>
        <ButtonGroup variant="solid" size="xs" spacing="2" mt="2" colorScheme="yellow">
          <Button disabled rightIcon={<CheckIcon />}>
            Key Created
            </Button>
          <Button disabled rightIcon={<CheckIcon />}>
            JSON Generated
            </Button>
        </ButtonGroup>
      </Persona>}
      thirdPersona={<Persona persona={Claudia} role={PersonaRole.verified} viewIcon={
        <Button onClick={viewJSONHandler} rightIcon={<ViewIcon />} px="2" size="xs" variant="outline" colorScheme="teal" ml="2">
          JSON
        </Button>
      } />}
      isMd={isMd}
    />
  )
}

export const WalkthroughStepTwo = ({ isMd, nextStep }: { isMd: Boolean, nextStep: () => void }) => {
  const stages = [
    { component: Stage1, name: 'Stage1' },
    { component: Stage2, name: 'Stage2' },
    { component: Stage3, name: 'Stage3' },
  ];

  return (
    <WalkthroughStepTemplate
      nextStep={nextStep}
      isMd={isMd}
      stages={stages}
    />
  )
}