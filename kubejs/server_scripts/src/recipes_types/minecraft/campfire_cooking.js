ServerEvents.recipes((event) => {
    let { minecraft } = event.recipes

    let recipes = [
        campfireRecipe(Item.of('frostedheart:wooden_cup_drink', '{Fluid:{FluidName:"caupona:nail_soup",Amount:250}}'), Item.of('frostedheart:wooden_cup_drink', '{Fluid:{FluidName:"minecraft:water",Amount:250}}'), 200),
        // campfireRecipe('minecraft:torch', 'stone_age:unlit_torch', 200),
        campfireRecipe('kubejs:coal_briquette', 'kubejs:wet_coal_briquette', 0, 200),
        campfireRecipe('kubejs:coal_briquette', 'kubejs:creosoted_coal_briquette', 0, 100),
        campfireRecipe('kubejs:charcoal_briquette', 'kubejs:creosoted_charcoal_briquette', 0, 200),
        campfireRecipe('kubejs:coal_briquette', 'kubejs:bound_coal_briquette', 0, 200),
        campfireRecipe('kubejs:charcoal_briquette', 'kubejs:bound_charcoal_briquette', 0, 200),
        campfireRecipe('kubejs:sawdust_briquette', 'kubejs:creosoted_sawdust_briquette', 0, 200),
        campfireRecipe('kubejs:straw_briquette', 'kubejs:wet_straw_briquette', 0, 200),
        campfireRecipe('frostedheart:rye_bread', Item.of('frostedheart:raw_rye_bread'), 0, 200),
        campfireRecipe('#forge:ingots/tin', 'frostedheart:gray_tin_ingot', 0, 600)
    ]
    recipes.forEach((recipe) => {
        minecraft.campfire_cooking(recipe.result, recipe.ingredients, 0, recipe.time)
    })
})