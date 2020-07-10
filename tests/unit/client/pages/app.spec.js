import { mount } from '@vue/test-utils'
import MainComponent from '@web-page/main.vue'

describe('main page', () => {
    it('has data', () => {
        let wrapper = mount(MainComponent)
        expect(wrapper.text()).toEqual('The Main Component!')
    })
})