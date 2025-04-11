import { UIFactory } from "../../domain/interface/UIFactory";
import { DarkUIFactory } from "./themes/dark/darkUIFactory";
import { LightUIFactory } from "./themes/light/lightUIFactory";


let currentTheme: "light" | "dark" = "light";
let factory: UIFactory = new LightUIFactory();

const themeContainer = document.getElementById("theme-container")!;
const tableBody = document.getElementById("payment-table-body")!;

function renderUI(): void {
  themeContainer.innerHTML = "";

  const onSubmit = async (amount: number) => {
    const response = await fetch("/api/payments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ monto: amount }),
    });

    if (response.ok) {
      const result = await response.json();
      appendToTable(result.monto);
    } else {
      alert("Error al procesar el pago");
    }
  };

  factory.createForm().render(themeContainer, onSubmit);
  factory.createButton().render(themeContainer, () => {
    const input = themeContainer.querySelector("input[name='monto']") as HTMLInputElement;
    const value = parseFloat(input.value);
    if (!isNaN(value)) onSubmit(value);
  });

  const switchBtn = document.createElement("button");
  switchBtn.textContent = `Cambiar a ${currentTheme === "light" ? "Dark" : "Light"} Mode`;
  switchBtn.onclick = switchTheme;
  switchBtn.className = "theme-toggle";
  themeContainer.appendChild(switchBtn);
}

function switchTheme(): void {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  factory = currentTheme === "light" ? new LightUIFactory() : new DarkUIFactory();
  renderUI();
}

function appendToTable(monto: string): void {
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.textContent = monto;
  row.appendChild(cell);
  tableBody.appendChild(row);
}

renderUI();
