import { expect, test, describe, beforeEach, vi } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import TheModal from "@/components/TheModal.vue";

let wrapper;
const title = 'Welcome!';
const message = 'This is a message';



describe('close the modal', () => {
    beforeEach(() => {
        wrapper = mount(
            TheModal, {
                props: {
                    title,
                    message,
                    destroy: () => {},
                }
            });
    });

    test('when default CTA is clicked', async () => {
        await flushPromises();

        expect(wrapper.find('.modal').exists()).toBe(true);

        wrapper.find('.modal__button').trigger('click');

        await flushPromises();

        expect(wrapper.find('.modal').exists()).toBe(false);
    });

    test('when clicking outside of the modal', async () => {
        await flushPromises();

        expect(wrapper.find('.modal').exists()).toBe(true);

        wrapper.find('.modal__mask').trigger('click');

        await flushPromises();

        expect(wrapper.find('.modal').exists()).toBe(false);
    });

    test('when pressing the Escape key', async () => {
        await flushPromises();

        expect(wrapper.find('.modal').exists()).toBe(true);

        document.dispatchEvent(
            new KeyboardEvent('keydown', { key: 'Escape' })
        );

        await flushPromises();

        expect(wrapper.find('.modal').exists()).toBe(false);
    });
});