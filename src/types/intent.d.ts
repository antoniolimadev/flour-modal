import { INTENT_DEFAULT, INTENT_ERROR } from "../constants";


export type ModalIntent =
    typeof INTENT_DEFAULT |
    typeof INTENT_ERROR;