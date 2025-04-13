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
        title: 'Awesome',
        message: 'You have successfully installed the FlourModal plugin. Please press OK to continue.',
    });
};

<template>
  <button type="button" @click="openModal"> Open modal </button>
</template>
```

### With Options API
```javascript
//options api code goes here
```

### Using your own component within the modal

You'll likely want to display one of your components as a modal. Simply pass it as the `child` prop and that's it! If your component already has its own CTA and you don't need the default one, just set the `defaultCTA` prop as `false`.

```javascript
import YourComponent from "@/components/YourComponent.vue";

modal.open({
    title: 'Use your own component',
    child: YourComponent,
    defaultCTA: false,
});
```

### How do I close the modal then?
Clicking the default button, outside of the modal or pressing the Escape key will close the modal.

If you're using your own component and need to close the modal from it, FlourModal `provides` its own internal method which you can simply inject like so and then just call it wherever you need:

```javascript
import { inject } from "vue";

const close = inject('closeModal');
```


