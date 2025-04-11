import { IButton } from "../interfaces/button.interface";
import { ICard } from "../interfaces/card.interface";


export interface IUIFactory {
  createButton(): IButton;
  createCard(): ICard;
}
