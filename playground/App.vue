<script setup lang="ts">
import TheChild from './TheChild.vue';
import { ref } from 'vue';
import {INTENT_DEFAULT, INTENT_ERROR} from "@/constants/intent";

const title = ref('Awesome!');
const message = ref('You\'ve just tried Flour Modal!');
const CTALabel = ref();
const intent = ref(INTENT_DEFAULT);

</script>

<template>

    <div class="w-full flex justify-center items-center h-screen">
        <div class="w-full max-w-lg">

            <div class="mb-3 w-full">
                <label class="block text-gray-700 text-sm font-bold mb-1">Title</label>
                <input type="text" v-model="title" class="border rounded-sm w-full py-2 px-3 text-gray-700" />
            </div>
            <div class="mb-3">
                <label class="block text-gray-700 text-sm font-bold mb-1">Message</label>
                <input type="text" v-model="message" class="border rounded-sm w-full py-2 px-3 text-gray-700" />
            </div>
            <div class="mb-3">
                <label class="block text-gray-700 text-sm font-bold mb-1">CTA Label</label>
                <input type="text" v-model="CTALabel" class="border rounded-sm w-full py-2 px-3 text-gray-700" placeholder="Default: OK" />
            </div>

            <div class="mb-3">
                <label class="block text-gray-700 text-sm font-bold mb-1">Intent</label>
                <select v-model="intent" class="block w-full border rounded text-gray-700 py-3 px-4  border-gray-500">
                    <option :value="INTENT_DEFAULT">Info (default)</option>
                    <option :value="INTENT_ERROR">Error</option>
                </select>
            </div>

            <button
                type="button"
                class="w-full bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
                @click="$flourModal.open({
                    title: title,
                    message: message,
                    defaultCTALabel: CTALabel,
                    intent: intent,
                })"
            >
                Show modal
            </button>

            <button
                type="button"
                class="w-full bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mt-5"
                @click="$flourModal.open({
                child: TheChild,
                defaultCTA: false,
            })"
            >
                Modal with child component
            </button>

        </div>
    </div>
</template>
