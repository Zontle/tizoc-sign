import { Button } from '@chakra-ui/react'
import { NextChakraLink } from './common/NextChakraLink'
import { Container } from './layout/Container'

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={2}
  >
    <NextChakraLink
      flexGrow={3}
      mx={2}
      my={2}
      href="/motivation"
      as={`/motivation`}
    >
      <Button width="100%" variant="outline" colorScheme="yellow">
        Motivation
      </Button>
    </NextChakraLink>
    <NextChakraLink
      flexGrow={3}
      mx={2}
      my={2}
      href="/use-cases"
      as={`/use-cases`}
    >
      <Button width="100%" variant="outline" colorScheme="yellow">
        Use Cases
      </Button>
    </NextChakraLink>
    <NextChakraLink
      flexGrow={3}
      mx={2}
      my={2}
      href="/walkthrough"
      as={`/walkthrough`}
    >
      <Button width="100%" variant="solid" colorScheme="yellow">
        View Walkthrough
      </Button>
    </NextChakraLink>
  </Container>
)
