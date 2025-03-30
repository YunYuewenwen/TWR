ServerEvents.recipes((event) => {
    let {immersiveengineering} = event.recipes

    let blastFurnaceRecipes = [
        ["frostedheart:aluminum_ingot", "immersiveengineering:dust_aluminum", 800],
        ["frostedheart:cast_iron_ingot", "minecraft:iron_ingot", 900],
        ["minecraft:copper_ingot", "#forge:raw_materials/copper", 200],
        ["frostedheart:tin_ingot", "#forge:raw_materials/tin", 150],
        ["minecraft:iron_ingot", "#forge:raw_materials/iron", 400],
        ["minecraft:iron_ingot", "#forge:raw_materials/pyrite", 400],
        ["frostedheart:nickel_ingot", "#forge:raw_materials/nickel", 400],
        ["minecraft:iron_ingot", "frostedheart:rusted_iron_ingot", 200],
        ["frostedheart:lead_ingot", "#forge:raw_materials/lead", 200],
        ["minecraft:gold_ingot", "#forge:raw_materials/gold", 200],
        ["frostedheart:silver_ingot", "#forge:raw_materials/silver", 200],
        ["frostedheart:sodium_chloride_dust", "#forge:raw_materials/salt", 200],
        ["create:zinc_ingot", "#forge:raw_materials/zinc", 200],
        ["frostedheart:magnesia_dust", "frostedheart:crushed_raw_magnesite", 200]
    ]
    blastFurnaceRecipes.forEach(([output, input, time], index) => {
        immersiveengineering.blast_furnace(output, input, "immersiveengineering:slag")
            .id(`the_winter_rescue:immersiveengineering/blast_furnace/${index}`)
            .time(time)
    })

    // 移除旧的钢铁高炉配方
    event.remove({type: "immersiveengineering:blast_furnace", output: "immersiveengineering:ingot_steel"})
    event.remove({type: "immersiveengineering:blast_furnace", output: "immersiveengineering:storage_steel"})
})