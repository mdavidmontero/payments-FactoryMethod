import { Button } from "../../interface/button";


export class DarkButton implements Button {
    render(): string {
        return `<button style="background-color: black; color: white; padding: 10px; border-radius: 5px;">Pagar</button>`;
    }
}
