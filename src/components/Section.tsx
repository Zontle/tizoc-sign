import { Container } from "./layout/Container";
import { Box, Heading, Text, Badge } from "@chakra-ui/react";

export const Section = ({ title, subtitle, badge, children }: { title: string, subtitle: string, badge?: string, children: React.ReactNode }) => (
  <Container mb="10">
    <Box mb="5">
      <Heading as="h2" size="lg">
        {title}
        {badge && <Badge ml="1" fontSize="0.4em" mx="2" borderRadius="10px" p="2" colorScheme="green">
          {badge}
        </Badge>}
      </Heading>
      <Text fontSize="lg" py="2">
        {subtitle}
      </Text>
    </Box>
    {children}
  </Container>)
