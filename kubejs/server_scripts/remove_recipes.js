ServerEvents.recipes(event => {

    event.remove({input: "#forge:cobblestone", mod: "magistuarmory"});

    event.remove({id: "magistuarmory:steel_plate"});

    event.remove({id: "minecraft:paper"})
    
    event.remove({id: "scguns:buckshot"})
})