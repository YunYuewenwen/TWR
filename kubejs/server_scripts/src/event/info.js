PlayerEvents.loggedIn((event) => {
	let { player } = event

	// Read the last line of the client.properties file
	let getVersionArray = FilesJS.readLastLines("kubejs/config/client.properties", 1)

	// Take the last line of string from the array
	let getVersion = getVersionArray[0]

	// Use a regular expression to match and intercept the version number
	let versionMatch = getVersion.match(/\d+\.\d+\.\d+-\d{8}-Build\d+/i)

	global.debugUserName.forEach((debugUser) => {
		let playerInfo = Component.translate("text.kubejs.player").black().getString()

		// Check if versionMatch is not null before accessing versionMatch[0]
		let modpackVersion = versionMatch ? Component.translate("text.kubejs.version", [versionMatch[0]]).black().getString() : "Version not found"

		player.paint({
			playerTip: {
				type: "text",
				x: 10,
				y: "$screenH - 40",
				alignX: "left",
				text: playerInfo,
				scale: 0.7
			}
		})
		player.paint({
			versionTip: {
				type: "text",
				x: 10,
				y: "$screenH - 30",
				alignX: "left",
				text: modpackVersion,
				scale: 0.7
			}
		})
		if (player.username === debugUser) {
			let devInfo = Component.translate("text.kubejs.dev").black().getString()
			player.paint({
				devTip: {
					type: "text",
					x: 10,
					y: "$screenH - 50",
					alignX: "left",
					text: devInfo,
					scale: 0.7
				}
			})
		}
	})
})