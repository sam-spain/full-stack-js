import { shallowMount } from '@vue/test-utils'
import MainComponent from '@web-page/main.vue'

describe('main page', () => {
    it('has data', () => {
        let wrapper = shallowMount(MainComponent)
        expect(wrapper.text()).toEqual('Register Login The Main Component!')
    })
})
