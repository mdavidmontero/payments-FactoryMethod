import React, { useState } from "react";
import { VStack, Heading, Button as ChakraButton } from "@chakra-ui/react";
import { getUIFactory, ThemeType } from "../components/helpers/theme-selector";

export const PaymentPage = () => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const factory = getUIFactory(theme);
  const Button = factory.createButton();
  const Card = factory.createCard();

  return (
    <VStack gap={6} align="center" p={8}>
      <Heading>Theme: {theme.toUpperCase()}</Heading>

      <ChakraButton
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        colorScheme={theme === "light" ? "teal" : "orange"}
      >
        Cambiar a {theme === "light" ? "Dark" : "Light"} Theme
      </ChakraButton>

      {Button.render()}
      {Card.render()}
    </VStack>
  );
};
