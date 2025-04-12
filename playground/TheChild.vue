<script setup lang="ts">
import { inject } from "vue";

const closeModal = inject<() => void>('closeModal')!;

</script>

<template>
    <div>
        <h3>I am the child</h3>
        <button type="button" @click="closeModal">
            Close modal
        </button>
    </div>
</template>
