import { shallowMount } from '@vue/test-utils'
import MainComponent from '@web-page/main.vue'

describe('main page', () => {
    it('has data', () => {
        let wrapper = shallowMount(MainComponent, {
            stubs: ['router-link', 'router-view']
        })
        expect(wrapper.text()).toEqual('MEVN Sign In Join Now')
    })
})
