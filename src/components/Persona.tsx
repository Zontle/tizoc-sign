import { Box, Badge, Avatar, AvatarBadge, Text } from '@chakra-ui/react'
import { IPersona, PersonaRole, PersonaColors } from '../commons/persona'

export const Persona = ({ persona, role }: { persona: IPersona, role: PersonaRole }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <Box d="flex" alignItems="center">
          <Avatar name={`${persona.firstName} ${persona.lastName}`} src={persona.avatarSrc} mr="3">
            <AvatarBadge boxSize="1.25em" bg={ `${PersonaColors[role]}.300` } />
          </Avatar>
          <Box d="flex" alignItems="baseline" flexDirection="column">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme={ PersonaColors[role] }>
                { role }
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {persona.username}
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
                <Text color="green.300" fontSize="xs">{persona.address}</Text>
                <Text color="green.300" fontSize="xs">{persona.phone}</Text>
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
      </Box>
    </Box>
  )
}