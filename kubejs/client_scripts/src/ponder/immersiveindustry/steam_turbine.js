Ponder.registry((event) => {
	event.create("immersiveengineering:generator")
		.tag("immersiveindustry:ponder")
		.scene("steam_turbine", "Steam Turbine", "kubejs:steam_turbine", (scene) => {
			scene.showBasePlate()
			scene.idle(20)
		})
})