import { shallowMount } from '@vue/test-utils';
import MainComponent from '@web-page/main.vue';

describe('main page', () => {
  it('has data', () => {
    let wrapper = shallowMount(MainComponent, {
      stubs: ['router-link', 'router-view']
    });
    expect(wrapper.find('.text-blue-400').text()).toBe('MEVN');
    expect(wrapper.find('[to="/auth/login"').text()).toBe('Sign In');
    expect(wrapper.find('[to="/auth/register"').text()).toBe('Join Now');
  });
});
