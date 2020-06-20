import { shallowMount } from '@vue/test-utils'
import MainPanel from '@/components/MainPanel.vue'

describe('MainPanel', () => {
	it('should render description of website', () => {
		const expectedTitle = 'An overview of Studio Ghibli universe'
		const wrapper = shallowMount(MainPanel)
		expect(wrapper.text()).toMatch(expectedTitle)
	})

	it('should render an image', () => {
		const wrapper = shallowMount(MainPanel)
		const image = wrapper.find('img')

		expect(image.exists()).toBe(true)
		expect(image.attributes().src).toMatch('mi-vecino-totoro.png')
		expect(image.attributes('src')).toMatch('mi-vecino-totoro.png')
	})
})
