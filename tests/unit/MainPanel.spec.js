import { shallowMount } from '@vue/test-utils'
import MainPanel from '@/components/MainPanel.vue'

describe('MainPanel', () => {
	it('renders props.msg when passed', () => {
		const expectedTitle = 'Studio Ghibli'
		const wrapper = shallowMount(MainPanel)
		expect(wrapper.text()).toMatch(expectedTitle)
	})
})
