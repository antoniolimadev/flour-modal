<script setup lang="ts">
import { inject } from "vue";

const closeModal = inject<() => void>('closeModal')!;

</script>

<template>
    <div class="bg-gray-100 text-gray-700 rounded p-5">
        <h3 class="font-bold">Hi, I'm another component!</h3>
        <p class="mt-2">
            Displaying your own components as a modal is as simple as passing them as the child prop. If your component already has its own CTA and you don't need the default one, just set the defaultCTA prop as false.
        </p>
        <p class="mt-2">
            The button below belongs to this component, and it will close the modal when clicked. To do this all you need is to inject the <span class="font-semibold">closeModal</span> method and then call it wherever you need.
        </p>
        <button
            type="button"
            @click="closeModal"
            class="w-full bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded mt-5"
        >
            Close modal
        </button>
    </div>
</template>
