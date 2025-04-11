import { IButton } from "../interfaces/button.interface";
import { Button } from "@chakra-ui/react";

export class DarkButton implements IButton {
  render() {
    return <Button colorScheme="purple">Dark Button</Button>;
  }
}
