module.exports = {
	onPreBuild: ({ utils }) => {
		utils.status.show({
			title: 'Hello from the build plugin',
			summary: 'Pre build is starting...',
			text: 'Some more info...'
		})
	},
	onSuccess: () => {
		console.log("onSuccess event...");
	},
}
