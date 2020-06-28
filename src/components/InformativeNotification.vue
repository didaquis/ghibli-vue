<template>
    <section>
		<b-button class="custom-mb-4 custom-mt-4" type="is-warning" @click="isActive = true" :disabled="isActive" data-cy="notification-button">{{buttonText}}</b-button>
        <b-notification
            type="is-warning"
            :active.sync="isActive"
            aria-close-label="Close notification"
			role="alert"
			data-cy="notification">
            {{ notificationText }}
        </b-notification>
    </section>
</template>

<script>
export default {
	props: {
		buttonText: {
			type: String,
			required: true
		},
		notificationText: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			isActive: false
		}
	}
}
</script>
