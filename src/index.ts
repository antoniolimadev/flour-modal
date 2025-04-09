import type {App} from "vue";
import { useModal } from "./composables/useModal";
import type { UseModalInstance } from "./types";

export default {
    install: (app: App) => {
        let instance = useModal();
        app.config.globalProperties.$flourModal = instance;
        app.provide('$flourModal', instance as UseModalInstance);
    },
};
