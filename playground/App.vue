<script setup lang="ts">
import TheChild from './TheChild.vue';

</script>

<template>
    App.vue here...
    <br>
    <button
        type="button"
        @click="$flourModal.open({
            title: 'Is this working?',
            message: 'Please confirm this is working by pressing the OK button',
        })"
    >
        Open modal
    </button>
    <br>
    <button
        type="button"
        @click="$flourModal.open({
            child: TheChild
        })"
    >
        Open modal with child
    </button>
    <br>
    <button @click="$flourModal.close()">
        Close modal
    </button>
</template>
