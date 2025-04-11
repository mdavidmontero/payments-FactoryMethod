import { IButton } from "../interfaces/button.interface";
import { Button } from "@chakra-ui/react";

export class LightButton implements IButton {
  render() {
    return <Button colorScheme="teal">Light Button</Button>;
  }
}
