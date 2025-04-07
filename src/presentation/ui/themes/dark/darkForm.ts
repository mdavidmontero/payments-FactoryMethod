import { PaymentForm } from "../../interface/paymentForm";


export class DarkForm implements PaymentForm {
    render(): string {
        return `
            <form style="background-color: #333; color: white; padding: 20px; border-radius: 10px;">
                <label>Monto:</label><br/>
                <input type="text" name="monto" style="margin-bottom: 10px;" /><br/>
                <input type="submit" value="Procesar Pago" />
            </form>
            `
    }
}
