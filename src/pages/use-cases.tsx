import { Heading, Text, Divider, Link as ChakraLink } from "@chakra-ui/react"
import { Container } from '../components/layout/Container'
import { Main } from '../components/layout/Main'
import { DarkModeSwitch } from '../components/common/DarkModeSwitch'
import { Home } from '../components/common/Home'
import * as UseCases from "../components/UseCases"
import { Footer } from "../components/layout/Footer"


const UseCasesPage = () => (
  <Container minHeight="100vh">
    <Main>
      <Heading as="h1" size="2xl">
        Tizoc Use Cases
      </Heading>
      <Text fontSize="2xl">
        Learn the motivation behind Tizoc and some of its use cases.
      </Text>
      

      <Divider mb="10" />

      <UseCases.Section1 />
      <UseCases.Section2 />
      <UseCases.Section3 />

    </Main>
    <DarkModeSwitch />
    <Footer>
      <Text>By <ChakraLink textDecoration="underline" isExternal href="https://zontle.tech/" flexGrow={1}>Zontle</ChakraLink>, a submission to the <ChakraLink textDecoration="underline" isExternal href="https://santander.devpost.com/" flexGrow={1}>2020 Santander Hackathon</ChakraLink></Text>
    </Footer>
    <Home />
  </Container>
)

export default UseCasesPage
