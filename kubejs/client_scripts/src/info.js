ClientEvents.loggedIn((event) => {
	let { player } = event

	global.debugUserName.forEach((debugUser) => {
		let playerInfo = Text.of(Component.translate("text.kubejs.player")).black().getString()
		player.paint({
			playerTip: {
				type: "text",
				x: 10,
				y: "$screenH - 40",
				alignX: "left",
				text: playerInfo,
				scale: 0.65
			}
		})
		if (player.username === debugUser) {
			let devInfo = Text.of(Component.translate("text.kubejs.dev")).black().getString()
			player.paint({
				devTip: {
					type: "text",
					x: 10,
					y: "$screenH - 50",
					alignX: "left",
					text: devInfo,
					scale: 0.65
				}
			})
		}
	})
	if (global.showVersionInfo) {
		player.paint({
			versionTip: {
				type: "text",
				x: 10,
				y: "$screenH - 30",
				alignX: "left",
				text: global.version,
				scale: 0.65
			}
		})
	}
})