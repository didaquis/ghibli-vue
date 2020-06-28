import { shallowMount, createLocalVue } from '@vue/test-utils'
import InformativeNotification from '@/components/InformativeNotification.vue'

import Buefy from 'buefy'

describe('InformativeNotification', () => {
	it('should render button text and notification text as properties', () => {
		const localVue = createLocalVue()
		localVue.use(Buefy)

		const expectedTextButton = 'button-text'
		const expectedTextNotification = 'notification-text'

		const wrapper = shallowMount(InformativeNotification, {
			localVue,
			propsData: {
				buttonText: expectedTextButton,
				notificationText: expectedTextNotification
			}
		})

		expect(wrapper.text()).toMatch(expectedTextButton)
		expect(wrapper.text()).toMatch(expectedTextNotification)
	})
})
