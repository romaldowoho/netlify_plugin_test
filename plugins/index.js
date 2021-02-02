module.exports = {
	onPreBuild: () => {
		console.log("onPreBuild event...");
	},
	onSuccess: () => {
		console.log("onSuccess event...");
	}
}
