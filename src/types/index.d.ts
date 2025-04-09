import type { ComponentInternalInstance } from "@vue/runtime-core";

export interface ModalOptions {
    msg: string,
    child?: any
}

export interface UseModalInstance {
    createModal(options: ModalOptions): ComponentInternalInstance | null,
    open(options: ModalOptions): ComponentInternalInstance | null | void,
    close(): void,
}