import { Container } from "./layout/Container";
import { Box, Heading, Text } from "@chakra-ui/react";

export const Section = ({ title, subtitle, children }: {title: string, subtitle: string, children: React.ReactNode}) => (
  <Container mb="10">
    <Box mb="5">
      <Heading as="h2" size="lg">
        {title}
      </Heading>
      <Text fontSize="lg" py="2">
        {subtitle}
      </Text>
    </Box>
    {children}
  </Container>)
