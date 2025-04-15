# FlourModal
An all purpose modal plugin for Vue 3. Easy to use and customise, with a modern but minimalist design. And you can use your own components alongside it!

## Installation
```
npm install flour-modal
```

<p align="center">
  <img src="https://github.com/user-attachments/assets/4b8129dd-ab1b-4258-ba41-d1918e56cb66">
</p>

## Usage

### Import it in your component

```javascript
import { fModal } from "flour-modal";
import "flour-modal/styles.css";
```

### With Composition API
```javascript
const modal = fModal();

const openModal = () => {
    modal.open({
        title: 'Awesome!',
        message: 'You have successfully installed the FlourModal plugin. Please press OK to continue.',
    });
};

<template>
    <button type="button" @click="openModal"> Open modal </button>
</template>
```

### With Options API
```javascript
export default defineComponent({
    methods: {
        openModal() {
            fModal().open({
                title: 'Awesome!',
                message: 'You have successfully installed the FlourModal plugin. Please press OK to continue.'
            });
        },
    },
});
```

## Using your own component within the modal

You'll likely want to display one of your components as a modal. Simply pass it as the `child` prop and that's it! If your component already has its own CTA and you don't need the default one, just set the `defaultCTA` prop as `false`.

```javascript
import YourComponent from "@/components/YourComponent.vue";
import { fModal } from "flour-modal";
import "flour-modal/styles.css";

const modal = fModal();

modal.open({
    title: 'Use your own component',
    child: YourComponent,
    defaultCTA: false,
});
```

## How do I close the modal?
Clicking the default CTA button or outside of the modal or pressing the Escape key will close the modal.

If you're using your own component and need to close the modal from it, FlourModal `provides` its own internal method called `closeModal` which you can simply inject like so and then just call it wherever you need.

```javascript
import { inject } from "vue";

const close = inject('closeModal');
```

## Making the modal available globally
If you're going to use modals in many different places then it might be worth it to make the modal available globally:
```javascript
import { createApp } from 'vue';
import FlourModal from "flour-modal";
import "flour-modal/styles.css";

const app = createApp(App);

app.use(FlourModal);
app.mount('#app');
```

This will make a global `$flourModal` property available inside any component template which you can use like this:
```javascript
<template>
  <button
      @click="$flourModal.open({
          title: 'Awesome!',
          message: 'You have successfully installed the FlourModal plugin. Please press OK to continue.',
      })"
  > Open modal </button>
</template>
```
**NOTE:** If you're using the Options API and you want to use this outside of the component template then you'll have to reference it as `this.$flourModal`; With the Compositon API, you'll have to inject it like so: `const $flourModal = inject('$flourModal');`
