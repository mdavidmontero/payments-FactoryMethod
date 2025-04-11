import { DarkThemeFactory } from "../factories/dark-theme.factory";
import { LightThemeFactory } from "../factories/light-theme.factory";
import { IUIFactory } from "../factories/ui-factory";


export type ThemeType = "light" | "dark";

export function getUIFactory(theme: ThemeType): IUIFactory {
  if (theme === "dark") {
    return new DarkThemeFactory();
  }
  return new LightThemeFactory();
}
