declare module "sdk-event" {
    export interface IDataEvent extends Event {
        data: null | string;
        inputType:"insertParagraph" | "insertText" | "insertFromPaste" | "deleteContentBackward";
    }
}