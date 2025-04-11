import { IUIFactory } from "./ui-factory";
import { IButton } from "../interfaces/button.interface";
import { ICard } from "../interfaces/card.interface";
import { DarkButton } from "../products/dark-button";
import { DarkCard } from "../products/dark-card";

export class DarkThemeFactory implements IUIFactory {
  createButton(): IButton {
    return new DarkButton();
  }

  createCard(): ICard {
    return new DarkCard();
  }
}
