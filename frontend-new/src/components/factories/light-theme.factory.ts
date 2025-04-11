import { IUIFactory } from "./ui-factory";
import { IButton } from "../interfaces/button.interface";
import { ICard } from "../interfaces/card.interface";
import { LightButton } from "../products/light-button";
import { LightCard } from "../products/light-card";

export class LightThemeFactory implements IUIFactory {
  createButton(): IButton {
    return new LightButton();
  }

  createCard(): ICard {
    return new LightCard();
  }
}
