import { expect, test } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import TheModal from "@/components/TheModal.vue";

test('renders title and message when passed as props', async () => {
  const title = 'Welcome!';
  const message = 'This is a message';

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