import type {App} from "vue";
import { TheModal as FlourModal } from "./components";

export default {
    install: (app: App, options: { }) => {
        app.component("FlourModal", FlourModal);
        app.provide("FlourModal", options);
    },
};

export { FlourModal };