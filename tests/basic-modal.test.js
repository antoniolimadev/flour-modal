import { expect, test, describe } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import TheModal from "@/components/TheModal.vue";

describe('basic functionality', () => {
    const title = 'Welcome!';
    const message = 'This is a message';

    test('renders title and message when passed as props', async () => {
        const wrapper = mount(
            TheModal, {
                props: {
                    title,
                    message,
                }
            });

        await flushPromises();

        expect(wrapper.find('.modal__title').text()).toContain(title);
        expect(wrapper.find('.modal__message-text').text()).toContain(message);
    });

    test('always renders default CTA by default', async () => {
        const wrapper = mount(
            TheModal, {
                props: {
                    title,
                    message,
                }
            });

        await flushPromises();

        expect(wrapper.find('.modal__button').exists()).toBe(true);
        expect(wrapper.find('.modal__button').text()).toBe('OK');
    });

    test('renders custom CTA label when passed as prop', async () => {
        const wrapper = mount(
            TheModal, {
                props: {
                    title,
                    message,
                    defaultCTALabel: 'Got it',
                }
            });

        await flushPromises();

        expect(wrapper.find('.modal__button').exists()).toBe(true);
        expect(wrapper.find('.modal__button').text()).toBe('Got it');
    });
    test('does not render default CTA when prop is set to false', async () => {
        const wrapper = mount(
            TheModal, {
                props: {
                    title,
                    message,
                    defaultCTA: false,
                }
            });

        await flushPromises();

        expect(wrapper.find('.modal__button').exists()).toBe(false);
    });
});