import { ICard } from "../interfaces/card.interface";
import { Box, Text } from "@chakra-ui/react";

export class DarkCard implements ICard {
  render() {
    return (
      <Box bg="gray.700" p={4} borderRadius="md" shadow="md" color="white">
        <Text>Dark Card Content</Text>
      </Box>
    );
  }
}
