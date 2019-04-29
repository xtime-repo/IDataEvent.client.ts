import { IDataEvent } from "sdk-event";

export function AvoidEnterNewLine(event: IDataEvent) {
    if (event.data == null && (event.inputType == "insertParagraph" || event.inputType == "insertText")) {
        if (event.currentTarget) {
            let el = event.currentTarget as HTMLElement;
            el.innerHTML = el.innerText.replace(/\n/g, "");
            if (el.parentElement) {
                var nextsibling = el.parentElement.nextElementSibling as HTMLElement;
                if (!nextsibling) {
                    //# add new line function


                    //end add new line function
                } else {
                    var op = nextsibling.querySelector(
                        "." + (event.currentTarget as HTMLElement).className.split(" ").join("."));
                    if (op) { (op as HTMLElement).focus(); }
                }

                return;
            }
        }
    }
}