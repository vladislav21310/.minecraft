ServerEvents.recipes(event => {
    [
        "ingotcraft:tin_ingot",
        "#minecraft:planks",
        "#forge:cobblestone"

    ].forEach((itemID) => event.remove({input: itemID, mod: "magistuarmory"}))

})