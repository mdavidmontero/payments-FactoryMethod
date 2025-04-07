import { Request, Response } from "express";
import { UIFactory } from "../ui/interface/UIFactory";
import { DarkUIFactory } from "../themes/dark/darkUIFactory";
import { LightUIFactory } from "../themes/light/lightUIFactory";



export const renderUI = (req: Request, res: Response) => {
  const theme = (req.query.theme as string) || "light";

  let factory: UIFactory;
  if (theme === "dark") {
    factory = new DarkUIFactory();
  } else {
    factory = new LightUIFactory();
  }

  const form = factory.createForm();
  const button = factory.createButton();
  const oppositeTheme = theme === "dark" ? "light" : "dark";

  const html = `
    <html>
      <head>
        <title>Pago</title>
        <script>
          window.onload = () => {
            const stored = localStorage.getItem("theme");
            if (!stored) localStorage.setItem("theme", "${theme}");
            if (stored && stored !== "${theme}") {
              window.location.href = "/ui?theme=" + stored;
            }
          }

          function toggleTheme() {
            const next = "${oppositeTheme}";
            localStorage.setItem("theme", next);
            window.location.href = "/ui?theme=" + next;
          }
        </script>
      </head>
      <body>
        <h1>Interfaz de pago (${theme})</h1>
        <button onclick="toggleTheme()">Cambiar a tema ${oppositeTheme}</button>
        <hr/>
        ${form.render()}
        <br/>
        ${button.render()}
      </body>
    </html>
  `;

  res.send(html);
};
