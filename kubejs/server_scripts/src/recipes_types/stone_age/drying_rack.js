ServerEvents.recipes((event) => {
	let { stone_age } = event.recipes

	stone_age.drying_rack("charcoal_pit:straw", "minecraft:vine")
	stone_age.drying_rack("frostedheart:dried_wolfberries", "frostedheart:wolfberry_bush_block")
	stone_age.drying_rack("minecraft:paper", "frostedheart:pulp")
})