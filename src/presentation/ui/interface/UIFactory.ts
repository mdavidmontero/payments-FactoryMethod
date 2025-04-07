import { Button } from "./button";
import { PaymentForm } from "./paymentForm";

export interface UIFactory {

    createButton(): Button
    createForm(): PaymentForm
}