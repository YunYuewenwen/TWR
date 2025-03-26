ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// Define metal tags
	let tags = {
		ingots: "#forge:ingots/metal",
		blocks: "#forge:storage_blocks/metal",
		nuggets: "#forge:nuggets/metal",
		plates: "#forge:plates/metal"
	}

	// Iterate through the tags and generate recipes
	Object.keys(tags).forEach((key) => {
		let itemIds = Ingredient.of(tags[key]).getItemIds()

		if (!itemIds || itemIds.length === 0) {
			console.error(`No items found for tag: ${tags[key]}`)
			return 0
		}

		itemIds.forEach((itemId) => {
			if (key === "blocks") {
				// Metal block => 9 ingots
				let ingotId = itemId.replace("block", "ingot")
				if (Item.exists(ingotId)) {
					kubejs.shapeless(Item.of(ingotId, 9), [itemId])
				} else {
					// console.warn(`Skipping: No ingot found for block: ${ itemId }`)
				}
			} else if (key === "ingots") {
				// Metal ingot => 9 nuggets
				let nuggetId = itemId.replace("ingot", "nugget")
				if (Item.exists(nuggetId)) {
					kubejs.shapeless(Item.of(nuggetId, 9), [itemId])
					// 9 nuggets => Metal ingot
					kubejs.shapeless(Item.of(itemId, 1), Array(9).fill(nuggetId))
				} else {
					// console.warn(`Skipping: No nugget found for ingot: ${ itemId }`)
				}

				// 9 ingots => Metal block
				let blockId = itemId.replace("ingot", "block")
				if (Item.exists(blockId)) {
					kubejs.shapeless(Item.of(blockId, 1), Array(9).fill(itemId))
				} else {
					// console.warn(`Skipping: No block found for ingot: ${ itemId }`)
				}
			}
		})
	})

	kubejs.shapeless("9x create:copper_nugget", [
		"#forge:ingots/copper"
	])
	kubejs.shapeless("minecraft:copper_ingot", [
		"9x #forge:nuggets/copper"
	])

	let metals = [
		{ mod: "steampowered", metal: "bronze" },
		{ mod: "frostedheart", metal: "lead" },
		{ mod: "frostedheart", metal: "cast_iron" },
		{ mod: "frostedheart", metal: "invar" },
		{ mod: "frostedheart", metal: "steel" },
		{ mod: "create", metal: "copper" },
		{ mod: "create", metal: "brass" },
		{ mod: "create", metal: "iron" },
		{ mod: "frostedheart", metal: "aluminum" },
		{ mod: "frostedheart", metal: "constantan" },
		{ mod: "frostedheart", metal: "electrum" },
		{ mod: "frostedheart", metal: "silver" },
		{ mod: "create", metal: "gold" }
	]
	metals.forEach((metal) => {
		let sheet = `${metal.mod}:${metal.metal}_sheet`
		let ingot = `#forge:ingots/${metal.metal}`
		/*		console.log(sheet)
				console.log(ingot)
				create.compacting(sheet, ingot);*/
		event.custom({
			type: "create:compacting",
			ingredients: Ingredient.of(ingot, 3),
			results: Item.of(sheet, 2)
		})
	})
})