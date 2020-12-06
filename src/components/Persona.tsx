import { Box, Badge, Avatar, AvatarBadge, Text } from '@chakra-ui/react'
import { IPersona, PersonaRole, PersonaColors } from '../commons/persona'

export const Persona = ({ persona, role, mb = 0, children, viewIcon }: { persona: IPersona, role: PersonaRole, mb?: number, children?: React.ReactNode, viewIcon?: React.ReactNode }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" mb={mb}>
      <Box alignItems="center" p="4" justifyContent="center">
        <Box d="flex" alignItems="center">
          {
            role != PersonaRole.registered && 
            <Avatar name={`${persona.firstName} ${persona.lastName}`} src={persona.avatarSrc} mr="3">
              <AvatarBadge boxSize="1.25em" bg={ `${PersonaColors[role]}.300` } />
            </Avatar>
          }
          <Box d="flex" alignItems="baseline" flexDirection="column">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme={ PersonaColors[role] }>
                { role }
              </Badge>
              <Box
                d="flex"
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
                alignItems="center"
                justifyContent="space-around"
              >
                {persona.tag}
                {viewIcon}
              </Box>
            </Box>
            <Box
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
              mt="1"
              ml="1"
            >
              {persona.firstName} &bull; {persona.lastName}
              {
                role == PersonaRole.verified && 
                (<>
                <br/>
                <Text color="green.300" fontSize="xs">{persona.proof}</Text>
                <Text color="green.300" fontSize="xs">{persona.proofMetadata}</Text>
                </>)
              
              }
            </Box>

            <Box>
              <Box as="span" color="gray.600" fontSize="sm" ml="1">
                {persona.email}
              </Box>
            </Box>
          </Box>
        </Box>
        {children}
      </Box>
    </Box>
  )
}