import { Button } from "../../interface/button";
import { PaymentForm } from "../../interface/paymentForm";
import { UIFactory } from "../../interface/UIFactory";
import { LightButton } from "./lightButton";
import { LightForm } from "./lightForm";

export class LightUIFactory implements UIFactory{

    createButton(): Button {
        return new LightButton()
    }

    createForm(): PaymentForm {
        return new LightForm()
    }
}