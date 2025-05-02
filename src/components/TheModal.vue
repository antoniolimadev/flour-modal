<script setup lang="ts">
import '@/styles/the-modal.scss';
import {computed, onMounted, onUnmounted, provide, ref} from "vue";
import type { ModalIntent } from "../types/intent";
import { INTENT_DEFAULT, INTENT_ERROR } from "../constants/intent";

const props = withDefaults(defineProps<{
    title?: string,
    message?: string,
    intent?: ModalIntent,
    defaultCTA?: boolean,
    defaultCTALabel?: string,
    destroy: any,
}>(), {
    title: '',
    message: '',
    intent: INTENT_DEFAULT,
    defaultCTA: true,
    defaultCTALabel: 'OK',
    destroy: () => {},
});

const isVisible = ref(false);

onMounted(() => {
    isVisible.value = true;
});

let closeModal = (): void => {
    isVisible.value = false;

    setTimeout(() => {
        props.destroy();
    },150);
};

provide('closeModal', closeModal);

function closeOnEscape(event: KeyboardEvent): void {
    if (! isVisible.value) {
        return;
    }

    if (event.key !== 'Escape') {
        return;
    }

    closeModal();
}

onMounted(() => document.addEventListener('keydown', closeOnEscape));
onUnmounted(() => document.removeEventListener('keydown', closeOnEscape));

const intentClass = computed(() => {
    switch (props.intent) {
        default:
        case INTENT_DEFAULT:
            return 'modal__button--default';
        case INTENT_ERROR:
            return 'modal__button--error';
    }
})

</script>

<template>
    <Transition name="modal">
        <div v-if="isVisible" class="modal__background">

            <div class="modal__mask" @click="closeModal"></div>

            <div class="modal">
                <div class="modal__body">
                    <div class="modal__body-inner">
                        <h3 class="modal__title">
                            {{ title }}
                        </h3>
                        <div class="modal__message">
                            <p class="modal__message-text">
                                {{ message }}
                            </p>
                        </div>

                        <slot></slot>
                    </div>
                </div>

                <div v-if="defaultCTA" class="modal__footer">
                    <button type="button" @click="closeModal" class="modal__button" :class="intentClass">
                        {{ defaultCTALabel }}
                    </button>
                </div>
            </div>

        </div>
    </Transition>
</template>
