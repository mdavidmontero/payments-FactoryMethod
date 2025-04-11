import { ICard } from "../interfaces/card.interface";
import { Box, Text } from "@chakra-ui/react";

export class LightCard implements ICard {
  render() {
    return (
      <Box bg="gray.100" p={4} borderRadius="md" shadow="md">
        <Text>Light Card Content</Text>
      </Box>
    );
  }
}
