<script setup lang="ts">
import '@/styles/the-modal.scss';
import { onMounted, provide, ref, useTemplateRef } from "vue";
import { onClickOutside, onKeyStroke } from "@vueuse/core";

const props = withDefaults(defineProps<{
    title?: string,
    message?: string,
    defaultCTA?: boolean,
    destroy: any,
}>(), {
    title: '',
    message: '',
    defaultCTA: true,
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

const target = useTemplateRef<HTMLElement>('target');

onClickOutside(target, () => closeModal());
onKeyStroke('Escape', () => closeModal());

</script>

<template>
    <Transition name="modal">
        <div v-if="isVisible" class="modal__mask">

            <div class="modal" ref="target">
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
                    <button type="button" @click="closeModal" class="modal__button">
                        OK
                    </button>
                </div>
            </div>

        </div>
    </Transition>
</template>
