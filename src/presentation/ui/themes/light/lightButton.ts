import { Button } from "../../interface/button";

export class LightButton implements Button {

    render(): string {
        return `<button style="background-color: white; color: black; padding: 10px; border-radius: 5px; border: 1px solid #ccc;">Pagar</button>` 
    }
}