ServerEvents.recipes((event) => {
    let {minecraft} = event.recipes
    let recipes = [
        {output: 'frostedheart:alumina_dust', input: 'frostedheart:aluminium_hydroxide_dust'},
        {output: 'minecraft:black_dye', input: '#kubejs:coal_dust'},
        {output: 'minecraft:black_dye', input: 'kubejs:charcoal_dust'},
        {output: 'kubejs:coal_briquette', input: 'kubejs:wet_coal_briquette'},
        {output: 'kubejs:coal_briquette', input: 'kubejs:creosoted_coal_briquette'},
        {output: 'kubejs:charcoal_briquette', input: 'kubejs:creosoted_charcoal_briquette'},
        {output: 'kubejs:coal_briquette', input: 'kubejs:bound_coal_briquette'},
        {output: 'kubejs:charcoal_briquette', input: 'kubejs:bound_charcoal_briquette'},
        {output: 'kubejs:sawdust_briquette', input: 'kubejs:creosoted_sawdust_briquette'},
        {output: 'kubejs:straw_briquette', input: 'kubejs:wet_straw_briquette'},
        {output: '#forge:ingots/tin', input: 'frostedheart:gray_tin_ingot'},
        {output: '4x minecraft:red_dye', input: 'frostedheart:lead_oxide_dust'},
        {output: 'create:zinc_ingot', input: '#forge:dusts/zinc'},
        // Note: Dirt needs special biomass processing, otherwise becomes coarse_dirt
        {output: 'minecraft:coarse_dirt', input: 'frostedheart:dirt_permafrost'},
        {output: 'minecraft:coarse_dirt', input: 'frostedheart:rooted_dirt_permafrost'},
        {output: 'minecraft:coarse_dirt', input: 'frostedheart:coarse_dirt_permafrost'},
        {output: 'frostedheart:buried_mycelium', input: 'frostedheart:mycelium_permafrost'},
        {output: 'frostedheart:buried_podzol', input: 'frostedheart:podzol_permafrost'},
        {output: 'minecraft:sand', input: 'frostedheart:sand_permafrost'},
        {output: 'minecraft:clay', input: 'frostedheart:clay_permafrost'},
        {output: 'minecraft:red_sand', input: 'frostedheart:red_sand_permafrost'},
        {output: 'frostedheart:peat_block', input: 'frostedheart:peat_permafrost'},
        {output: 'frostedheart:bauxite_block', input: 'frostedheart:bauxite_permafrost'},
        {output: 'frostedheart:kaolin_block', input: 'frostedheart:kaolin_permafrost'},
        {output: 'minecraft:paper', input: 'frostedheart:pulp'},
    ]
    recipes.forEach((recipe) => {
        minecraft.smelting(recipe.output, recipe.input)
    })
})