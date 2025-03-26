ServerEvents.recipes((event) => {
    let {charcoal_pit} = event.recipes

    charcoal_pit.pottery("minecraft:stone", "#forge:cobblestone")
    charcoal_pit.pottery("minecraft:stone", "#forge:stone")

    charcoal_pit.orekiln("minecraft:copper_ingot", ["#forge:raw_materials/copper"], 1)
    charcoal_pit.orekiln("minecraft:copper_ingot", ["#forge:ingots/rusted_copper"], 1)
    charcoal_pit.orekiln("frostedheart:tin_ingot", ["#forge:raw_materials/tin"], 1)
    charcoal_pit.orekiln("frostedheart:tin_ingot", ["#forge:ingots/gray_tin"], 1)
    charcoal_pit.orekiln("frostedheart:lead_ingot", ["#forge:raw_materials/lead"], 1)
    charcoal_pit.orekiln("frostedheart:magnesium_ingot", ["#forge:raw_materials/magnesium"], 1)
    charcoal_pit.orekiln("minecraft:gold_ingot", ["#forge:raw_materials/gold"], 1)
})