import { Container } from "./layout/Container";
import { Box, Heading, Text, Badge, SimpleGrid } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons"

export const Section = ({ title, subtitle, additional, badge, children }: { title: string, subtitle: string, badge?: string, additional?: React.ReactNode, children?: React.ReactNode }) => (
  <Container mb="10">
    <Box mb="5">
      <Heading as="h2" size="lg">
        {title}
        {badge && <Badge ml="1" fontSize="0.4em" mx="2" borderRadius="10px" p="2" colorScheme="yellow">
          {badge}
        </Badge>}
      </Heading>
      <Text fontSize="lg" py="2">
        {subtitle}
      </Text>
      {additional}
    </Box>
    {children}
  </Container>)

export const SectionTemplate = ({ firstPersona, secondPersona, thirdPersona, isMd, light = false }: { firstPersona: React.ReactNode, secondPersona: React.ReactNode, thirdPersona: React.ReactNode, isMd: Boolean, light?: Boolean }) => {
  return (<SimpleGrid columns={5} spacing={10} alignItems="center" display={{ md: "flex" }} justifyContent="center">
      <Box d="flex" alignContent="center" alignItems="center" justifyContent="center">
        { firstPersona }
      </Box>
      { !light && (isMd ? <ChevronRightIcon m="auto" /> : <ChevronDownIcon my="5" display="block" mx="auto" />) }
      <Box d="flex" alignContent="center" alignItems="center" justifyContent="center">
        { secondPersona }
      </Box>
      { !light && (isMd ? <ChevronRightIcon m="auto" /> : <ChevronDownIcon my="5" display="block" mx="auto" />) }
      <Box>
        { thirdPersona }
      </Box>
    </SimpleGrid>
  )
}