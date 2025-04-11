import { PaymentForm } from "../../interface/paymentForm";

export class LightForm implements PaymentForm {
    render(): string {
        return `
            <form style="background-color: #f9f9f9; color: #333; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                <label>Monto:</label><br/>
                <input type="text" name="monto" style="margin-bottom: 10px;" /><br/>
                <input type="submit" value="Procesar Pago" />
            </form>
            `
    }
}