ItemEvents.tooltip((event) => {
	function createGrayTranslatedText (key) {
		return Text.of(Component.translate(key)).gray()
	}

	let addTooltip = [
		{
			items: ["minecraft:blast_furnace", "minecraft:furnace"],
			txt: ["tooltip.the_winter_rescue.replaced_recipe"]
		},
		{
			items: ["minecraft:vine"],
			txt: ["tooltip.the_winter_rescue.snowy_vine"]
		},
		{
			items: ["frostedheart:makeshift_knife"],
			txt: ["tooltip.the_winter_rescue.flint_knife"]
		},
		{
			items: ["stone_age:flint_knife"],
			txt: ["tooltip.the_winter_rescue.flint_knife_2"]
		},
		{
			items: ["stone_age:tanning_rack"],
			txt: ["tooltip.the_winter_rescue.tanning_rack"]
		},
		{
			items: ["kubejs:activated_carbon"],
			txt: ["tooltip.the_winter_rescue.activated_carbon"]
		},
		{
			items: ["minecraft:campfire"],
			txt: ["tooltip.the_winter_rescue.campfire"]
		},
		{
			items: ["frostedheart:straw_lining", "frostedheart:kelp_lining", "frostedheart:gambeson", "frostedheart:buff_coat"],
			txt: ["tooltip.the_winter_rescue.lining"]
		},
		{
			items: ["create:blaze_burner"],
			txt: ["tooltip.the_winter_rescue.blaze_burner"]
		}
	]
	addTooltip.forEach((recipe) => {
		event.add(recipe.items, recipe.txt.map(createGrayTranslatedText))
	})
})