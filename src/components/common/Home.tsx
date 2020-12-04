import { Button } from '@chakra-ui/react'
import { NextChakraLink } from './NextChakraLink'

export const Home = () => {
  return (
    <NextChakraLink
      flexGrow={3}
      mx={2}
      my={2}
      href="/"
      as={`/`}
    >
      <Button
        variant="link"

        position="fixed"
        top="1rem"
        left="1rem"
        color="green"
      >
        Go Home
      </Button>
    </NextChakraLink>
  )
}
