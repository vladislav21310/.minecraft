ServerEvents.tags('item', event => {
    let material = [
        "iron",
        "gold",
        "diamond",
        "silver",
        "netherite",
        "steel",
        "copper",
        "bronze",
        "wood",
        "tin",
        "stone"
    ];

    let weapon_type = [
        "stylet",
        "shortsword",
        "katzbalger",
        "pike",
        "ranseur",
        "ahlspiess",
        "chivalrylance",
        "bastardsword",
        "estoc",
        "claymore",
        "zweihander",
        "flamebladedsword",
        "lochaberaxe",
        "concavehalberd",
        "heavymace",
        "heavywarhammer",
        "lucernhammer",
        "morgenstern",
        "chainmorgenstern",
        "guisarme"
    ];

    weapon_type.forEach(type => material.forEach(mat => event.add(`magistuarmory:${type}s`, `magistuarmory:${mat}_${type}`)))
    
})