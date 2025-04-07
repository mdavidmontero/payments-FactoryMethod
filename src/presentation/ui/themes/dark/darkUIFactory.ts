import { Button } from "../../interface/button";
import { PaymentForm } from "../../interface/paymentForm";
import { UIFactory } from "../../interface/UIFactory";
import { DarkButton } from "./darkButton";
import { DarkForm } from "./darkForm";

export class DarkUIFactory implements UIFactory {

    createButton(): Button {
        return new DarkButton()
    }

    createForm(): PaymentForm {
        return new DarkForm()
    }
}