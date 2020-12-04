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
      href="/walkthrough"
      as={`/walkthrough`}
    >
      <Button width="100%" variant="outline" colorScheme="green">
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
      <Button width="100%" variant="solid" colorScheme="green">
        View Walkthrough
      </Button>
    </NextChakraLink>
  </Container>
)
