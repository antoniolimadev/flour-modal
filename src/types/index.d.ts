import type { ComponentInternalInstance } from "@vue/runtime-core";
import { MODAL_INTENT } from "../constants";

export type ModalIntent =
    MODAL_INTENT.DEFAULT |
    MODAL_INTENT.ERROR;

export interface ModalOptions {
    title?: string,
    message?: string,
    intent: ModalIntent,
    defaultCTA?: boolean,
    child?: any
}

export interface UseModalInstance {
    createModal(options: ModalOptions): ComponentInternalInstance | null,
    open(options: ModalOptions): ComponentInternalInstance | null | void,
    error(options: ModalOptions): ComponentInternalInstance | null | void,
    close(): void,
}