ServerEvents.recipes((event) => {
	let { stone_age } = event.recipes

	stone_age.tree_stump("create:copper_sheet", "2x #forge:ingots/copper", "#forge:hammers", 3)
	stone_age.tree_stump("kubejs:creosoted_sawdust_briquette", "kubejs:creosoted_sawdust", "#forge:hammers", 2)
	stone_age.tree_stump("steampowered:bronze_sheet", "2x #forge:ingots/bronze", "#forge:hammers", 3)
	stone_age.tree_stump("create:iron_sheet", "2x #forge:ingots/iron", "#forge:hammers", 3)
	stone_age.tree_stump("frostedheart:cast_iron_sheet", "2x #forge:ingots/cast_iron", "#forge:hammers", 3)
	stone_age.tree_stump("immersiveengineering:plate_gold", "2x #forge:ingots/gold", "#forge:hammers", 3)
	stone_age.tree_stump("frostedheart:invar_sheet", "2x #forge:ingots/invar", "#forge:hammers", 3)
	stone_age.tree_stump("create:brass_sheet", "2x #forge:ingots/brass", "#forge:hammers", 3)
	stone_age.tree_stump("frostedheart:crushed_raw_bauxite", "frostedheart:bauxite", "#forge:hammers", 3)
	stone_age.tree_stump("3x frostedheart:flux", "minecraft:calcite", "#forge:hammers", 3)
	stone_age.tree_stump("3x frostedheart:kaolin", "frostedheart:kaolin_block", "#forge:hammers", 3)
	stone_age.tree_stump("2x kubejs:wet_coal_briquette", "kubejs:wet_coal_dust", "#forge:hammers", 2)
	stone_age.tree_stump("2x immersiveengineering:slab_treated_wood_horizontal", "immersiveengineering:treated_wood_horizontal", "#forge:axes", 2)
	stone_age.tree_stump("2x immersiveengineering:slab_treated_wood_vertical", "immersiveengineering:treated_wood_vertical", "#forge:axes", 2)
	stone_age.tree_stump("2x immersiveengineering:slab_treated_wood_packaged", "immersiveengineering:treated_wood_packaged", "#forge:axes", 2)

	let wood_recipes = []
	//auto bulk wood recipes
	//Ingredient.of("#minecraft:carpets").getItemIds().forEach(name=>{console.info(name)});
	Ingredient.of("#minecraft:logs")
		.getItemIds()
		.forEach((name) => {
			if (name.indexOf("caupona") != -1) {

			} else if (name.indexOf("log") != -1) {
				let namex = name.replace("_log", "").replace("stripped_", "");
				wood_recipes.push(tree_stumpRecipe(Item.of(namex + "_planks", 3), Item.of(name),
					Ingredient.of("#minecraft:axes"), 2))
				wood_recipes.push(tree_stumpRecipe(Item.of(namex + "_slab", 2), Item.of(namex + "_planks"),
					Ingredient.of("#minecraft:axes"), 2))
			} else if (name.indexOf("wood") != -1) {
				let namex = name.replace("_wood", "").replace("stripped_", "");
				wood_recipes.push(tree_stumpRecipe(Item.of(namex + "_planks", 3), Item.of(name),
					Ingredient.of("#minecraft:axes"), 2))
			} else if (name.indexOf("stem") != -1) {
				let namex = name.replace("_stem", "").replace("stripped_", "");
				wood_recipes.push(tree_stumpRecipe(Item.of(namex + "_planks", 3), Item.of(name),
					Ingredient.of("#minecraft:axes"), 2))
			}
		})

	wood_recipes.forEach((recipe) => {
		event.remove({ output: recipe.result, type: "minecraft:crafting_shapeless" });
		event.custom({
			type: "stone_age:tree_stump",
			ingredient: recipe.ingredients,
			tool: recipe.tool,
			chopTimes: recipe.chop,
			result: recipe.result
		})
	})

	let metals2 = [
		"aluminum",
		"lead",
		"constantan",
		"steel",
		"electrum",
		"silver",
		"gold"
	]
	metals2.forEach((plate) => {
		stone_age.tree_stump(`2x immersiveengineering:plate_${plate}`, `3x #forge:ingots/${plate}`, "#forge:hammers", 3)
	})
})