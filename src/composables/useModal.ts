import { h, render } from 'vue';
import { FlourModal } from "../components";
import type { ModalOptions, UseModalInstance } from "../types";
import { INTENT_ERROR } from "../constants/intent";

export const useModal = (): UseModalInstance => {
    let container: HTMLDivElement | null = null;

    return {
        createModal(options: ModalOptions) {
            const vNode = h(
                FlourModal,
                {
                    ...options,
                    destroy: this.close
                },
                options.child !== null
                    ? { default: () => [ h(options.child)] }
                    : {}
            );

            container = document.createElement('div');
            document.body.appendChild(container);
            render(vNode, container);

            return vNode.component;
        },

        open(options: ModalOptions) {
            if (!container) {
                return this.createModal(options);
            }
        },

        error(options: ModalOptions) {
            if (!container) {
                return this.createModal({
                    ...options,
                    intent: INTENT_ERROR,
                    defaultCTALabel: options.defaultCTALabel ?? 'Dismiss',
                });
            }
        },

        close() {
            if (container) {
                render(null, container);
                document.body.removeChild(container);
                container = null;
            }
        }
    }
}
