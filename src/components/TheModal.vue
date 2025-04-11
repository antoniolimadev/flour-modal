<script setup lang="ts">
import '../styles/the-modal.scss';
import { onMounted, ref } from "vue";

const props = defineProps<{
    title?: string,
    message?: string,
    destroy: any,
}>();

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
</script>

<template>
    <Transition name="modal">
        <div v-if="isVisible" class="modal__mask">

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

                <div class="modal__footer">
                    <button type="button" @click="closeModal" class="modal__button">
                        OK
                    </button>
                </div>
            </div>

        </div>
    </Transition>
</template>
