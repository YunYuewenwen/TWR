if (global.showVersionInfo) {
	PlayerEvents.loggedIn((event) => {
		let { player } = event

		player.paint({
			versionTip: {
				type: "text",
				x: 10,
				y: "$screenH - 30",
				alignX: "left",
				text: global.version,
				scale: 0.7
			}
		})
	})
}