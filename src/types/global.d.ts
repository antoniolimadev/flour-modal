import type { UseModalInstance } from "./index";

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $flourModal: UseModalInstance;
    }
}

declare global {
    const $flourModal: UseModalInstance;
}
