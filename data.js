export var size;
(function (size) {
    size["Demi"] = "Demi";
    size["Short"] = "Short";
    size["Tall"] = "Tall";
    size["Grande"] = "Grande";
    size["Venti"] = "Venti";
    size["Trenta"] = "Trenta";
})(size || (size = {}));
export var Psize;
(function (Psize) {
    Psize["small"] = "Small";
    Psize["regular"] = "Regular";
    Psize["large"] = "Large";
})(Psize || (Psize = {}));
export let starters = [{
        name: "Fried Wings (04pcs)",
        price: 650
    },
    {
        name: "Chicken Quesdilla",
        price: 1150
    },
    {
        name: "Crispy chicken strips and fries",
        price: 800
    },
    {
        name: "French Fries",
        price: 400
    },
    {
        name: "Nuggets (06 pcs)",
        price: 600
    },
    {
        name: "Nuggets (10 pcs)",
        price: 900
    },
    {
        name: "Tender Seekh Kabab",
        price: 600
    },
];
export let pasta = [
    {
        name: "Frettucino alfredo pasta",
        price: 1250
    },
    {
        name: " Creamy roasted tomatoes penne pasta (Special) ",
        price: 800
    },
    {
        name: "  Mac n cheese ",
        price: 600
    },
    {
        name: " Baked penne pasta ",
        price: 750
    },
];
export let hotBeverages = [
    {
        name: "espresso shot",
        demi: {
            price: 380,
            size: size.Demi
        },
        short: {
            price: 450,
            size: size.Short
        },
        tall: {
            price: 520,
            size: size.Tall
        },
        grande: {
            price: 590,
            size: size.Grande
        },
        venti: {
            price: 660,
            size: size.Venti
        },
        trenta: {
            price: 730,
            size: size.Trenta
        }
    },
    {
        name: "Cappucino",
        demi: {
            price: 450,
            size: size.Demi
        },
        short: {
            price: 520,
            size: size.Short
        },
        tall: {
            price: 590,
            size: size.Tall
        },
        grande: {
            price: 660,
            size: size.Grande
        },
        venti: {
            price: 730,
            size: size.Venti
        },
        trenta: {
            price: 800,
            size: size.Trenta
        }
    },
    {
        name: "Latte",
        demi: {
            price: 450,
            size: size.Demi
        },
        short: {
            price: 520,
            size: size.Short
        },
        tall: {
            price: 590,
            size: size.Tall
        },
        grande: {
            price: 660,
            size: size.Grande
        },
        venti: {
            price: 730,
            size: size.Venti
        },
        trenta: {
            price: 800,
            size: size.Trenta
        }
    },
    {
        name: "Mocha",
        demi: {
            price: 580,
            size: size.Demi
        },
        short: {
            price: 650,
            size: size.Short
        },
        tall: {
            price: 720,
            size: size.Tall
        },
        grande: {
            price: 790,
            size: size.Grande
        },
        venti: {
            price: 860,
            size: size.Venti
        },
        trenta: {
            price: 930,
            size: size.Trenta
        }
    },
    {
        name: "Americano",
        demi: {
            price: 450,
            size: size.Demi
        },
        short: {
            price: 520,
            size: size.Short
        },
        tall: {
            price: 590,
            size: size.Tall
        },
        grande: {
            price: 660,
            size: size.Grande
        },
        venti: {
            price: 730,
            size: size.Venti
        },
        trenta: {
            price: 800,
            size: size.Trenta
        }
    },
    {
        name: "Hot Chocolate",
        demi: {
            price: 650,
            size: size.Demi
        },
        short: {
            price: 720,
            size: size.Short
        },
        tall: {
            price: 790,
            size: size.Tall
        },
        grande: {
            price: 860,
            size: size.Grande
        },
        venti: {
            price: 930,
            size: size.Venti
        },
        trenta: {
            price: 1000,
            size: size.Trenta
        }
    },
    {
        name: "Tea",
        demi: {
            price: 300,
            size: size.Demi
        },
        short: {
            price: 370,
            size: size.Short
        },
        tall: {
            price: 440,
            size: size.Tall
        },
        grande: {
            price: 510,
            size: size.Grande
        },
        venti: {
            price: 580,
            size: size.Venti
        },
        trenta: {
            price: 650,
            size: size.Trenta
        }
    },
    {
        name: "Green Tea",
        demi: {
            price: 250,
            size: size.Demi
        },
        short: {
            price: 320,
            size: size.Short
        },
        tall: {
            price: 390,
            size: size.Tall
        },
        grande: {
            price: 460,
            size: size.Grande
        },
        venti: {
            price: 530,
            size: size.Venti
        },
        trenta: {
            price: 600,
            size: size.Trenta
        }
    },
    {
        name: "Caramel maccciato",
        demi: {
            price: 600,
            size: size.Demi
        },
        short: {
            price: 670,
            size: size.Short
        },
        tall: {
            price: 740,
            size: size.Tall
        },
        grande: {
            price: 810,
            size: size.Grande
        },
        venti: {
            price: 880,
            size: size.Venti
        },
        trenta: {
            price: 950,
            size: size.Trenta
        }
    },
    {
        name: "Affogato",
        demi: {
            price: 700,
            size: size.Demi
        },
        short: {
            price: 770,
            size: size.Short
        },
        tall: {
            price: 850,
            size: size.Tall
        },
        grande: {
            price: 920,
            size: size.Grande
        },
        venti: {
            price: 990,
            size: size.Venti
        },
        trenta: {
            price: 1060,
            size: size.Trenta
        }
    },
    {
        name: "Cortado",
        demi: {
            price: 500,
            size: size.Demi
        },
        short: {
            price: 570,
            size: size.Short
        },
        tall: {
            price: 590,
            size: size.Tall
        },
        grande: {
            price: 660,
            size: size.Grande
        },
        venti: {
            price: 730,
            size: size.Venti
        },
        trenta: {
            price: 800,
            size: size.Trenta
        }
    },
    {
        name: "Ristretta",
        demi: {
            price: 450,
            size: size.Demi
        },
        short: {
            price: 520,
            size: size.Short
        },
        tall: {
            price: 590,
            size: size.Tall
        },
        grande: {
            price: 660,
            size: size.Grande
        },
        venti: {
            price: 730,
            size: size.Venti
        },
        trenta: {
            price: 800,
            size: size.Trenta
        }
    },
    {
        name: "Spanish Latte",
        demi: {
            price: 650,
            size: size.Demi
        },
        short: {
            price: 720,
            size: size.Short
        },
        tall: {
            price: 790,
            size: size.Tall
        },
        grande: {
            price: 860,
            size: size.Grande
        },
        venti: {
            price: 930,
            size: size.Venti
        },
        trenta: {
            price: 1000,
            size: size.Trenta
        }
    },
];
export let coldBeverages = [
    {
        name: "Iced cappuccino",
        demi: {
            price: 500,
            size: size.Demi
        },
        short: {
            price: 570,
            size: size.Short
        },
        tall: {
            price: 640,
            size: size.Tall
        },
        grande: {
            price: 710,
            size: size.Grande
        },
        venti: {
            price: 780,
            size: size.Venti
        },
        trenta: {
            price: 850,
            size: size.Trenta
        }
    },
    {
        name: "Iced Latte",
        demi: {
            price: 700,
            size: size.Demi
        },
        short: {
            price: 770,
            size: size.Short
        },
        tall: {
            price: 850,
            size: size.Tall
        },
        grande: {
            price: 920,
            size: size.Grande
        },
        venti: {
            price: 990,
            size: size.Venti
        },
        trenta: {
            price: 1060,
            size: size.Trenta
        }
    },
    {
        name: "Iced Mocha",
        demi: {
            price: 750,
            size: size.Demi
        },
        short: {
            price: 820,
            size: size.Short
        },
        tall: {
            price: 890,
            size: size.Tall
        },
        grande: {
            price: 960,
            size: size.Grande
        },
        venti: {
            price: 1030,
            size: size.Venti
        },
        trenta: {
            price: 1100,
            size: size.Trenta
        }
    },
    {
        name: "Iced Caramel Macciato",
        demi: {
            price: 750,
            size: size.Demi
        },
        short: {
            price: 820,
            size: size.Short
        },
        tall: {
            price: 890,
            size: size.Tall
        },
        grande: {
            price: 960,
            size: size.Grande
        },
        venti: {
            price: 1030,
            size: size.Venti
        },
        trenta: {
            price: 1100,
            size: size.Trenta
        }
    },
    {
        name: "Iced Spanish Latte",
        demi: {
            price: 750,
            size: size.Demi
        },
        short: {
            price: 820,
            size: size.Short
        },
        tall: {
            price: 890,
            size: size.Tall
        },
        grande: {
            price: 960,
            size: size.Grande
        },
        venti: {
            price: 1030,
            size: size.Venti
        },
        trenta: {
            price: 1100,
            size: size.Trenta
        }
    },
    {
        name: "Frappucino",
        demi: {
            price: 700,
            size: size.Demi
        },
        short: {
            price: 770,
            size: size.Short
        },
        tall: {
            price: 850,
            size: size.Tall
        },
        grande: {
            price: 920,
            size: size.Grande
        },
        venti: {
            price: 990,
            size: size.Venti
        },
        trenta: {
            price: 1060,
            size: size.Trenta
        }
    },
    {
        name: "Iced Americano",
        demi: {
            price: 500,
            size: size.Demi
        },
        short: {
            price: 570,
            size: size.Short
        },
        tall: {
            price: 640,
            size: size.Tall
        },
        grande: {
            price: 710,
            size: size.Grande
        },
        venti: {
            price: 780,
            size: size.Venti
        },
        trenta: {
            price: 850,
            size: size.Trenta
        }
    },
];
export let beefBurgers = [
    {
        name: " Original cheese burger (serving fries)",
        price: 700
    },
    {
        name: " Classic beef burger (serving with fries) ",
        price: 850
    },
    {
        name: " Mushroomy swiss burger (serving with fries) ",
        price: 800
    }
];
export let chickenBurgers = [
    {
        name: " Grilled chicken burger (serving with fries)",
        price: 750
    },
    {
        name: "  Crispy chicken burger (serving with fries) ",
        price: 850
    }
];
export let sandwiches = [
    {
        name: "Grilled cheese sandwich (serving with fries)",
        price: 650
    },
    {
        name: "Grilled chicken sandwich (serving with fries)",
        price: 750
    },
    {
        name: "Club sandwich (serving with fries",
        price: 850
    },
    {
        name: "Chicken and egg melt (serving with fries)",
        price: 1150
    },
];
export let salad = [
    {
        name: " Chopped Mediterranean Salad ",
        price: 550
    },
    {
        name: "Grilled Chicken Salad",
        price: 750
    }
];
export let pizza = [
    {
        name: "Pepperoni pizza",
        small: {
            price: 400,
            size: Psize.small
        },
        regular: {
            price: 800,
            size: Psize.regular
        },
        large: {
            price: 1200,
            size: Psize.large
        }
    },
    {
        name: "Cheesy pizza",
        small: {
            price: 400,
            size: Psize.small
        },
        regular: {
            price: 800,
            size: Psize.regular
        },
        large: {
            price: 1200,
            size: Psize.large
        }
    },
    {
        name: "Chicken tikka",
        small: {
            price: 400,
            size: Psize.small
        },
        regular: {
            price: 800,
            size: Psize.regular
        },
        large: {
            price: 1200,
            size: Psize.large
        }
    },
];
export let beefSteak = [
    {
        name: " Black Peppers Steak (Garlic Rice/Fries) ",
        price: 2400
    },
    {
        name: "Tarragon Steak (Garlic Rice/Fries)  ",
        price: 2700
    },
    {
        name: " Mushroom Steak (Garlic Rice/Fries) ",
        price: 2700
    },
];
export let chickenSteak = [
    {
        name: " Black Peppers Steak (Garlic Rice/Fries) ",
        price: 1800
    },
    {
        name: "Tarragon Steak (Garlic Rice/Fries)  ",
        price: 1900
    },
    {
        name: " Mushroom Steak (Garlic Rice/Fries) ",
        price: 1900
    },
];
