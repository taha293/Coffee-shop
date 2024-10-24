import { size, Psize } from "./data.js";
import { starters, beefBurgers, chickenBurgers, beefSteak, chickenSteak, hotBeverages, coldBeverages, pizza, salad, pasta, sandwiches, } from "./data.js";
import inquirer from "inquirer";
let cart = {
    names: [],
    prices: []
};
//size function
async function sizeF(sizearg, namearg, pricearg, anyfunc) {
    let message = `Price of ${sizearg} ${namearg} is Rs ${pricearg}. Do you want to Add to Cart?`;
    let addtoCart = await inquirer.prompt([{
            name: "cartPrompt",
            message: message,
            type: "list",
            choices: ["Add to Cart", "Back"]
        }]);
    if (addtoCart.cartPrompt === "Back") {
        anyfunc();
    }
    else if (addtoCart.cartPrompt === "Add to Cart") {
        let quantity = await inquirer.prompt([{
                name: "quantityPrompt",
                type: "number",
                message: "How much items do you want to add in your cart?"
            }]);
        let cartName = cart.names.push(`${sizearg} ${namearg} x ${quantity.quantityPrompt}`);
        let cartPrice = cart.prices.push(pricearg * quantity.quantityPrompt);
        let message = `Your Items has been added to cart.`;
        let viewYourcart = await inquirer.prompt([{
                name: "vycPrompt",
                type: "list",
                choices: ["View Your Cart", "Go to MainMenu"],
                message: message
            }]);
        if (viewYourcart.vycPrompt === "View Your Cart") {
            cartF();
        }
        else if (viewYourcart.vycPrompt === "Go to MainMenu") {
            mainMenuF();
        }
    }
}
async function cartF() {
    let cartF = await inquirer.prompt([{
            name: "cartfPrompt",
            type: "list",
            choices: ["Checkout your cart", "Continue to order"],
            message: `Your Items are ${cart.names} and your payable amount is ${cart.prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}\n`
        }]);
    if (cartF.cartfPrompt === "Continue to order") {
        mainMenuF();
    }
    else if (cartF.cartfPrompt === "Checkout your cart") {
        let payment = await inquirer.prompt([{
                name: "paymentPrompt",
                type: "list",
                choices: ["Pay Online", "Cash on Delivery"],
                message: "Choose Payment method"
            }]);
        if (payment.paymentPrompt === "Cash on Delivery") {
            console.log(`Your Order ${cart.names} has been placed and your payable amount is ${cart.prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}\n`);
        }
        else if (payment.paymentPrompt === "Pay Online") {
            let pay = await inquirer.prompt([
                {
                    name: "payPrompt",
                    type: "list",
                    choices: ["Debit card"],
                    message: "Choose You method"
                }
            ]);
            if (pay.payPrompt === "Debit card") {
                let cardNum = await inquirer.prompt([
                    {
                        name: "cardprompt",
                        type: "number",
                        message: "Enter Your Card Number"
                    }
                ]);
                if (cardNum.cardprompt) {
                    console.log(`Your Order ${cart.names} has been placed and your net payable amount is ${cart.prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}\n`);
                }
            }
        }
    }
}
// MainMenu
async function mainMenuF() {
    let orderMenu = await inquirer.prompt([{
            name: "items",
            type: "list",
            choices: ["Starters", "BeefBurgers", "ChickenBurgers", "BeefSteak", "ChickenSteak", "HotBeverages", "ColdBeverages", "Pizza", "Salad", "Pasta", "Sandwiches", "View Your Cart"]
        }]);
    //For Cart
    if (orderMenu.items === "View Your Cart") {
        cartF();
    }
    // For Starters
    else if (orderMenu.items === "Starters") {
        async function startersMenuF() {
            let startersMenu = await inquirer.prompt([{
                    name: "items",
                    type: "list",
                    choices: ["Fried Wings (04pcs)", "Chicken Quesdilla", "Crispy chicken strips and fries", "French Fries", "Nuggets (06 pcs)", "Nuggets (10 pcs)", "Tender Seekh Kabab", "Go to MainMenu"]
                }]);
            // -Starters Menu
            if (startersMenu.items === "Go to MainMenu") {
                mainMenuF();
            }
            // -Starters Frien Wings
            else if (startersMenu.items === "Fried Wings (04pcs)") {
                let message = `Price of Fried Wings (04pcs) is Rs ${starters[0].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    startersMenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${starters[0].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(starters[0].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            // Starters Chicken Quesdilla
            else if (startersMenu.items === "Chicken Quesdilla") {
                let message = `Price of Chicken Quesdilla is Rs ${starters[1].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    startersMenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${starters[1].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(starters[1].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            // starters Crispy chicken strips and fries
            else if (startersMenu.items === "Crispy chicken strips and fries") {
                let message = `Price of Crispy chicken strips and fries is Rs ${starters[2].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    startersMenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${starters[2].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(starters[2].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            //starters French Fries
            else if (startersMenu.items === "French Fries") {
                let message = `Price of French Fries is Rs ${starters[3].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    startersMenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${starters[3].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(starters[3].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            // starters Nuggets (06 pcs)
            else if (startersMenu.items === "Nuggets (06 pcs)") {
                let message = `Price of Nuggets (06 pcs) is Rs ${starters[4].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    startersMenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${starters[4].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(starters[4].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            //starters Nuggets (10 pcs)
            else if (startersMenu.items === "Nuggets (10 pcs)") {
                let message = `Price of Nuggets (10 pcs) is Rs ${starters[5].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    startersMenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${starters[5].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(starters[5].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            //starters Tender Seekh Kabab
            else if (startersMenu.items === "Tender Seekh Kabab") {
                let message = `Price of Tender Seekh Kabab is Rs ${starters[6].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    startersMenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${starters[6].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(starters[6].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
        }
        startersMenuF();
    }
    //Beef Burgers
    else if (orderMenu.items === "BeefBurgers") {
        async function beefBurgersmenuF() {
            let beefBurgersMenu = await inquirer.prompt([{
                    name: "items",
                    type: "list",
                    choices: ["Original cheese burger (serving fries)", "Classic beef burger (serving with fries)", "Mushroomy swiss burger (serving with fries)", "Go to MainMenu"]
                }]);
            if (beefBurgersMenu.items === "Go to MainMenu") {
                mainMenuF();
            }
            // Beef Burgers Original cheese burger (serving fries)
            else if (beefBurgersMenu.items === "Original cheese burger (serving fries)") {
                let message = `Price of ${beefBurgers[0].name} is Rs ${beefBurgers[0].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    beefBurgersmenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${beefBurgers[0].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(beefBurgers[0].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            // beef burgers Classic beef burger (serving with fries)
            else if (beefBurgersMenu.items === "Classic beef burger (serving with fries)") {
                let message = `Price of ${beefBurgers[1].name} is Rs ${beefBurgers[1].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    beefBurgersmenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${beefBurgers[1].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(beefBurgers[1].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            // beef burgers Mushroomy swiss burger (serving with fries)
            else if (beefBurgersMenu.items === "Mushroomy swiss burger (serving with fries)") {
                let message = `Price of ${beefBurgers[2].name} is Rs ${beefBurgers[2].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    beefBurgersmenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${beefBurgers[2].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(beefBurgers[2].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
        }
        beefBurgersmenuF();
    }
    //Chicken Burgers
    else if (orderMenu.items === "ChickenBurgers") {
        async function chickenBurgersmenuF() {
            let chickenBurgersMenu = await inquirer.prompt([{
                    name: "items",
                    type: "list",
                    choices: ["Grilled chicken burger (serving with fries)", "Crispy chicken burger (serving with fries)", "Go to MainMenu"]
                }]);
            if (chickenBurgersMenu.items === "Go to MainMenu") {
                mainMenuF();
            }
            // chicken Burgers Grilled chicken burger (serving with fries)
            else if (chickenBurgersMenu.items === "Grilled chicken burger (serving with fries)") {
                let message = `Price of ${chickenBurgers[0].name} is Rs ${chickenBurgers[0].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    chickenBurgersmenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${chickenBurgers[0].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(chickenBurgers[0].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            // chicken Burger  Crispy chicken burger (serving with fries)
            else if (chickenBurgersMenu.items === "Crispy chicken burger (serving with fries)") {
                let message = `Price of ${chickenBurgers[1].name} is Rs ${chickenBurgers[1].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    chickenBurgersmenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${chickenBurgers[1].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(chickenBurgers[1].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
        }
        chickenBurgersmenuF();
    }
    // beef steaks
    else if (orderMenu.items === "BeefSteak") {
        async function beefSteakmenuF() {
            let beefSteakMenu = await inquirer.prompt([{
                    name: "items",
                    type: "list",
                    choices: ["Black Peppers Steak (Garlic Rice/Fries)", "Tarragon Steak (Garlic Rice/Fries)", "Mushroom Steak (Garlic Rice/Fries)", "Go to MainMenu"]
                }]);
            if (beefSteakMenu.items === "Go to MainMenu") {
                mainMenuF();
            }
            // beef steak Black Peppers Steak (Garlic Rice/Fries)
            else if (beefSteakMenu.items === "Black Peppers Steak (Garlic Rice/Fries)") {
                let message = `Price of ${beefSteak[0].name} is Rs ${beefSteak[0].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    beefSteakmenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${beefSteak[0].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(beefSteak[0].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            // beef steak Tarragon Steak (Garlic Rice/Fries) 
            else if (beefSteakMenu.items === "Tarragon Steak (Garlic Rice/Fries)") {
                let message = `Price of ${beefSteak[1].name} is Rs ${beefSteak[1].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    beefSteakmenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${beefSteak[1].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(beefSteak[1].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            // beef steak Mushroom Steak (Garlic Rice/Fries)
            else if (beefSteakMenu.items === "Mushroom Steak (Garlic Rice/Fries)") {
                let message = `Price of ${beefSteak[2].name} is Rs ${beefSteak[2].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    beefSteakmenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${beefSteak[2].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(beefSteak[2].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
        }
        beefSteakmenuF();
    }
    // chicken steaks
    else if (orderMenu.items === "ChickenSteak") {
        async function chickenSteakmenuF() {
            let chickenSteakMenu = await inquirer.prompt([{
                    name: "items",
                    type: "list",
                    choices: ["Black Peppers Steak (Garlic Rice/Fries)", "Tarragon Steak (Garlic Rice/Fries)", "Mushroom Steak (Garlic Rice/Fries)", "Go to MainMenu"]
                }]);
            if (chickenSteakMenu.items === "Go to MainMenu") {
                mainMenuF();
            }
            // chicken steak Black Peppers Steak (Garlic Rice/Fries)
            else if (chickenSteakMenu.items === "Black Peppers Steak (Garlic Rice/Fries)") {
                let message = `Price of ${chickenSteak[0].name} is Rs ${chickenSteak[0].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    chickenSteakmenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${chickenSteak[0].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(chickenSteak[0].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            // chicken steak Tarragon Steak (Garlic Rice/Fries)
            else if (chickenSteakMenu.items === "Tarragon Steak (Garlic Rice/Fries)") {
                let message = `Price of ${chickenSteak[1].name} is Rs ${chickenSteak[1].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    chickenSteakmenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${chickenSteak[1].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(chickenSteak[1].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            //chicken Steak 
            else if (chickenSteakMenu.items === "Mushroom Steak (Garlic Rice/Fries)") {
                let message = `Price of ${chickenSteak[2].name} is Rs ${chickenSteak[2].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    chickenSteakmenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${chickenSteak[2].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(chickenSteak[2].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
        }
        chickenSteakmenuF();
    }
    //salad menu
    else if (orderMenu.items === "Salad") {
        async function saladMenuF() {
            let saladMenu = await inquirer.prompt([{
                    name: "items",
                    type: "list",
                    choices: ["Chopped Mediterranean Salad", "Grilled Chicken Salad", "Go to MainMenu"]
                }]);
            if (saladMenu.items === "Go to MainMenu") {
                mainMenuF();
            }
            // salad Chopped Mediterranean Salad 
            else if (saladMenu.items === "Chopped Mediterranean Salad") {
                let message = `Price of ${salad[0].name} is Rs ${salad[0].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    saladMenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${salad[0].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(salad[0].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            // salad
            else if (saladMenu.items === "Grilled Chicken Salad") {
                let message = `Price of ${salad[1].name} is Rs ${salad[1].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    saladMenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${salad[1].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(salad[1].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
        }
        saladMenuF();
    }
    // Pasta menu
    else if (orderMenu.items === "Pasta") {
        async function pastaMenuF() {
            let pastaMenu = await inquirer.prompt([{
                    name: "items",
                    type: "list",
                    choices: ["Frettucino alfredo pasta", "Creamy roasted tomatoes penne pasta (Special)", "Mac n cheese", "Baked penne pasta", "Go to MainMenu"]
                }]);
            if (pastaMenu.items === "Go to MainMenu") {
                mainMenuF();
            }
            // pasta Frettucino alfredo pasta
            else if (pastaMenu.items === "Frettucino alfredo pasta") {
                let message = `Price of ${pasta[0].name} is Rs ${pasta[0].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    pastaMenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${pasta[0].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(pasta[0].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            //pasta "Creamy roasted tomatoes penne pasta (Special)"
            else if (pastaMenu.items === "Creamy roasted tomatoes penne pasta (Special)") {
                let message = `Price of ${pasta[1].name} is Rs ${pasta[1].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    pastaMenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${pasta[1].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(pasta[1].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            //pasta "Mac n cheese "
            else if (pastaMenu.items === "Mac n cheese") {
                let message = `Price of ${pasta[2].name} is Rs ${pasta[2].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    pastaMenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${pasta[1].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(pasta[1].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            //pasta " Baked penne pasta "
            else if (pastaMenu.items === "Baked penne pasta") {
                let message = `Price of ${pasta[3].name} is Rs ${pasta[3].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    pastaMenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${pasta[3].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(pasta[3].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
        }
        pastaMenuF();
    }
    // sandwiches menu
    else if (orderMenu.items === "Sandwiches") {
        async function sandwichesMenuF() {
            let sandwichesMenu = await inquirer.prompt([{
                    name: "items",
                    type: "list",
                    choices: ["Grilled cheese sandwich (serving with fries)", "Grilled chicken sandwich (serving with fries)", "Club sandwich (serving with fries", "Chicken and egg melt (serving with fries)", "Go to MainMenu"]
                }]);
            if (sandwichesMenu.items === "Go to MainMenu") {
                mainMenuF();
            }
            // sandwiches "Grilled cheese sandwich (serving with fries)"
            else if (sandwichesMenu.items === "Grilled cheese sandwich (serving with fries)") {
                let message = `Price of ${sandwiches[0].name} is Rs ${sandwiches[0].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    sandwichesMenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${sandwiches[0].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(sandwiches[0].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            // sandwiches "Grilled chicken sandwich (serving with fries)"
            else if (sandwichesMenu.items === "Grilled chicken sandwich (serving with fries)") {
                let message = `Price of ${sandwiches[1].name} is Rs ${sandwiches[1].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    sandwichesMenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${sandwiches[1].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(sandwiches[1].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            // sandwiches "Club sandwich (serving with fries"
            else if (sandwichesMenu.items === "Club sandwich (serving with fries") {
                let message = `Price of ${sandwiches[2].name} is Rs ${sandwiches[2].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    sandwichesMenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${sandwiches[2].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(sandwiches[2].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
            // sandwiches "Chicken and egg melt (serving with fries)"
            else if (sandwichesMenu.items === "Chicken and egg melt (serving with fries)") {
                let message = `Price of ${sandwiches[3].name} is Rs ${sandwiches[3].price}. Do you want to Add to Cart?`;
                let addtoCart = await inquirer.prompt([{
                        name: "cartPrompt",
                        message: message,
                        type: "list",
                        choices: ["Add to Cart", "Back"]
                    }]);
                if (addtoCart.cartPrompt === "Back") {
                    sandwichesMenuF();
                }
                else if (addtoCart.cartPrompt === "Add to Cart") {
                    let quantity = await inquirer.prompt([{
                            name: "quantityPrompt",
                            type: "number",
                            message: "How much items do you want to add in your cart?"
                        }]);
                    let cartName = cart.names.push(`${sandwiches[3].name} x ${quantity.quantityPrompt}`);
                    let cartPrice = cart.prices.push(sandwiches[3].price * quantity.quantityPrompt);
                    let message = `Your Items has been added to cart.`;
                    let viewYourcart = await inquirer.prompt([{
                            name: "vycPrompt",
                            type: "list",
                            choices: ["View Your Cart", "Go to MainMenu"],
                            message: message
                        }]);
                    if (viewYourcart.vycPrompt === "View Your Cart") {
                        cartF();
                    }
                    else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                        mainMenuF();
                    }
                }
            }
        }
        sandwichesMenuF();
    }
    // pizza
    else if (orderMenu.items === "Pizza") {
        async function pizzaMenuF() {
            let pizzaMenu = await inquirer.prompt([{
                    name: "items",
                    type: "list",
                    choices: ["Pepperoni pizza", "Cheesy pizza", "Chicken tikka", "Go to MainMenu"]
                }]);
            if (pizzaMenu.items === "Go to MainMenu") {
                mainMenuF();
            }
            // pizza Pepperoni pizza
            else if (pizzaMenu.items === "Pepperoni pizza") {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [Psize.small, Psize.regular, Psize.large, "back"]
                    }
                ]);
                if (weight.sizePrompt === "back") {
                    pizzaMenuF();
                }
                // small
                else if (weight.sizePrompt === Psize.small) {
                    let message = `Price of ${pizza[0].small.size} ${pizza[0].name} is Rs ${pizza[0].small.price}. Do you want to Add to Cart?`;
                    let addtoCart = await inquirer.prompt([{
                            name: "cartPrompt",
                            message: message,
                            type: "list",
                            choices: ["Add to Cart", "Back"]
                        }]);
                    if (addtoCart.cartPrompt === "Back") {
                        pizzaMenuF();
                    }
                    else if (addtoCart.cartPrompt === "Add to Cart") {
                        let quantity = await inquirer.prompt([{
                                name: "quantityPrompt",
                                type: "number",
                                message: "How much items do you want to add in your cart?"
                            }]);
                        let cartName = cart.names.push(`${Psize.small} ${pizza[0].name} x ${quantity.quantityPrompt}`);
                        let cartPrice = cart.prices.push(pizza[0].small.price * quantity.quantityPrompt);
                        let message = `Your Items has been added to cart.`;
                        let viewYourcart = await inquirer.prompt([{
                                name: "vycPrompt",
                                type: "list",
                                choices: ["View Your Cart", "Go to MainMenu"],
                                message: message
                            }]);
                        if (viewYourcart.vycPrompt === "View Your Cart") {
                            cartF();
                        }
                        else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                            mainMenuF();
                        }
                    }
                }
                // regular
                else if (weight.sizePrompt === Psize.regular) {
                    let message = `Price of ${pizza[0].regular.size} ${pizza[0].name} is Rs ${pizza[0].regular.price}. Do you want to Add to Cart?`;
                    let addtoCart = await inquirer.prompt([{
                            name: "cartPrompt",
                            message: message,
                            type: "list",
                            choices: ["Add to Cart", "Back"]
                        }]);
                    if (addtoCart.cartPrompt === "Back") {
                        pizzaMenuF();
                    }
                    else if (addtoCart.cartPrompt === "Add to Cart") {
                        let quantity = await inquirer.prompt([{
                                name: "quantityPrompt",
                                type: "number",
                                message: "How much items do you want to add in your cart?"
                            }]);
                        let cartName = cart.names.push(`${Psize.regular} ${pizza[0].name} x ${quantity.quantityPrompt}`);
                        let cartPrice = cart.prices.push(pizza[0].regular.price * quantity.quantityPrompt);
                        let message = `Your Items has been added to cart.`;
                        let viewYourcart = await inquirer.prompt([{
                                name: "vycPrompt",
                                type: "list",
                                choices: ["View Your Cart", "Go to MainMenu"],
                                message: message
                            }]);
                        if (viewYourcart.vycPrompt === "View Your Cart") {
                            cartF();
                        }
                        else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                            mainMenuF();
                        }
                    }
                }
                // Large
                else if (weight.sizePrompt === Psize.large) {
                    let message = `Price of ${pizza[0].large.size} ${pizza[0].name} is Rs ${pizza[0].large.price}. Do you want to Add to Cart?`;
                    let addtoCart = await inquirer.prompt([{
                            name: "cartPrompt",
                            message: message,
                            type: "list",
                            choices: ["Add to Cart", "Back"]
                        }]);
                    if (addtoCart.cartPrompt === "Back") {
                        pizzaMenuF();
                    }
                    else if (addtoCart.cartPrompt === "Add to Cart") {
                        let quantity = await inquirer.prompt([{
                                name: "quantityPrompt",
                                type: "number",
                                message: "How much items do you want to add in your cart?"
                            }]);
                        let cartName = cart.names.push(`${Psize.large} ${pizza[0].name} x ${quantity.quantityPrompt}`);
                        let cartPrice = cart.prices.push(pizza[0].large.price * quantity.quantityPrompt);
                        let message = `Your Items has been added to cart.`;
                        let viewYourcart = await inquirer.prompt([{
                                name: "vycPrompt",
                                type: "list",
                                choices: ["View Your Cart", "Go to MainMenu"],
                                message: message
                            }]);
                        if (viewYourcart.vycPrompt === "View Your Cart") {
                            cartF();
                        }
                        else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                            mainMenuF();
                        }
                    }
                }
            }
            //pizza cheesy pizza
            else if (pizzaMenu.items === "Cheesy pizza") {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [Psize.small, Psize.regular, Psize.large, "back"]
                    }
                ]);
                if (weight.sizePrompt === "back") {
                    pizzaMenuF();
                }
                // small
                else if (weight.sizePrompt === Psize.small) {
                    let message = `Price of ${pizza[1].small.size} ${pizza[1].name} is Rs ${pizza[1].small.price}. Do you want to Add to Cart?`;
                    let addtoCart = await inquirer.prompt([{
                            name: "cartPrompt",
                            message: message,
                            type: "list",
                            choices: ["Add to Cart", "Back"]
                        }]);
                    if (addtoCart.cartPrompt === "Back") {
                        pizzaMenuF();
                    }
                    else if (addtoCart.cartPrompt === "Add to Cart") {
                        let quantity = await inquirer.prompt([{
                                name: "quantityPrompt",
                                type: "number",
                                message: "How much items do you want to add in your cart?"
                            }]);
                        let cartName = cart.names.push(`${Psize.small} ${pizza[1].name} x ${quantity.quantityPrompt}`);
                        let cartPrice = cart.prices.push(pizza[1].small.price * quantity.quantityPrompt);
                        let message = `Your Items has been added to cart.`;
                        let viewYourcart = await inquirer.prompt([{
                                name: "vycPrompt",
                                type: "list",
                                choices: ["View Your Cart", "Go to MainMenu"],
                                message: message
                            }]);
                        if (viewYourcart.vycPrompt === "View Your Cart") {
                            cartF();
                        }
                        else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                            mainMenuF();
                        }
                    }
                }
                // regular
                else if (weight.sizePrompt === Psize.regular) {
                    let message = `Price of ${pizza[1].regular.size} ${pizza[1].name} is Rs ${pizza[1].regular.price}. Do you want to Add to Cart?`;
                    let addtoCart = await inquirer.prompt([{
                            name: "cartPrompt",
                            message: message,
                            type: "list",
                            choices: ["Add to Cart", "Back"]
                        }]);
                    if (addtoCart.cartPrompt === "Back") {
                        pizzaMenuF();
                    }
                    else if (addtoCart.cartPrompt === "Add to Cart") {
                        let quantity = await inquirer.prompt([{
                                name: "quantityPrompt",
                                type: "number",
                                message: "How much items do you want to add in your cart?"
                            }]);
                        let cartName = cart.names.push(`${Psize.regular} ${pizza[1].name} x ${quantity.quantityPrompt}`);
                        let cartPrice = cart.prices.push(pizza[1].regular.price * quantity.quantityPrompt);
                        let message = `Your Items has been added to cart.`;
                        let viewYourcart = await inquirer.prompt([{
                                name: "vycPrompt",
                                type: "list",
                                choices: ["View Your Cart", "Go to MainMenu"],
                                message: message
                            }]);
                        if (viewYourcart.vycPrompt === "View Your Cart") {
                            cartF();
                        }
                        else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                            mainMenuF();
                        }
                    }
                }
                // Large
                else if (weight.sizePrompt === Psize.large) {
                    let message = `Price of ${pizza[1].large.size} ${pizza[1].name} is Rs ${pizza[1].large.price}. Do you want to Add to Cart?`;
                    let addtoCart = await inquirer.prompt([{
                            name: "cartPrompt",
                            message: message,
                            type: "list",
                            choices: ["Add to Cart", "Back"]
                        }]);
                    if (addtoCart.cartPrompt === "Back") {
                        pizzaMenuF();
                    }
                    else if (addtoCart.cartPrompt === "Add to Cart") {
                        let quantity = await inquirer.prompt([{
                                name: "quantityPrompt",
                                type: "number",
                                message: "How much items do you want to add in your cart?"
                            }]);
                        let cartName = cart.names.push(`${Psize.large} ${pizza[1].name} x ${quantity.quantityPrompt}`);
                        let cartPrice = cart.prices.push(pizza[1].large.price * quantity.quantityPrompt);
                        let message = `Your Items has been added to cart.`;
                        let viewYourcart = await inquirer.prompt([{
                                name: "vycPrompt",
                                type: "list",
                                choices: ["View Your Cart", "Go to MainMenu"],
                                message: message
                            }]);
                        if (viewYourcart.vycPrompt === "View Your Cart") {
                            cartF();
                        }
                        else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                            mainMenuF();
                        }
                    }
                }
            }
            //pizza chicken tikka
            else if (pizzaMenu.items === "Chicken tikka") {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [Psize.small, Psize.regular, Psize.large, "back"]
                    }
                ]);
                if (weight.sizePrompt === "back") {
                    pizzaMenuF();
                }
                // small
                else if (weight.sizePrompt === Psize.small) {
                    let message = `Price of ${pizza[2].small.size} ${pizza[2].name} is Rs ${pizza[2].small.price}. Do you want to Add to Cart?`;
                    let addtoCart = await inquirer.prompt([{
                            name: "cartPrompt",
                            message: message,
                            type: "list",
                            choices: ["Add to Cart", "Back"]
                        }]);
                    if (addtoCart.cartPrompt === "Back") {
                        pizzaMenuF();
                    }
                    else if (addtoCart.cartPrompt === "Add to Cart") {
                        let quantity = await inquirer.prompt([{
                                name: "quantityPrompt",
                                type: "number",
                                message: "How much items do you want to add in your cart?"
                            }]);
                        let cartName = cart.names.push(`${Psize.small} ${pizza[2].name} x ${quantity.quantityPrompt}`);
                        let cartPrice = cart.prices.push(pizza[2].small.price * quantity.quantityPrompt);
                        let message = `Your Items has been added to cart.`;
                        let viewYourcart = await inquirer.prompt([{
                                name: "vycPrompt",
                                type: "list",
                                choices: ["View Your Cart", "Go to MainMenu"],
                                message: message
                            }]);
                        if (viewYourcart.vycPrompt === "View Your Cart") {
                            cartF();
                        }
                        else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                            mainMenuF();
                        }
                    }
                }
                // regular
                else if (weight.sizePrompt === Psize.regular) {
                    let message = `Price of ${pizza[2].regular.size} ${pizza[2].name} is Rs ${pizza[2].regular.price}. Do you want to Add to Cart?`;
                    let addtoCart = await inquirer.prompt([{
                            name: "cartPrompt",
                            message: message,
                            type: "list",
                            choices: ["Add to Cart", "Back"]
                        }]);
                    if (addtoCart.cartPrompt === "Back") {
                        pizzaMenuF();
                    }
                    else if (addtoCart.cartPrompt === "Add to Cart") {
                        let quantity = await inquirer.prompt([{
                                name: "quantityPrompt",
                                type: "number",
                                message: "How much items do you want to add in your cart?"
                            }]);
                        let cartName = cart.names.push(`${Psize.regular} ${pizza[1].name} x ${quantity.quantityPrompt}`);
                        let cartPrice = cart.prices.push(pizza[1].regular.price * quantity.quantityPrompt);
                        let message = `Your Items has been added to cart.`;
                        let viewYourcart = await inquirer.prompt([{
                                name: "vycPrompt",
                                type: "list",
                                choices: ["View Your Cart", "Go to MainMenu"],
                                message: message
                            }]);
                        if (viewYourcart.vycPrompt === "View Your Cart") {
                            cartF();
                        }
                        else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                            mainMenuF();
                        }
                    }
                }
                // Large
                else if (weight.sizePrompt === Psize.large) {
                    let message = `Price of ${pizza[2].large.size} ${pizza[2].name} is Rs ${pizza[2].large.price}. Do you want to Add to Cart?`;
                    let addtoCart = await inquirer.prompt([{
                            name: "cartPrompt",
                            message: message,
                            type: "list",
                            choices: ["Add to Cart", "Back"]
                        }]);
                    if (addtoCart.cartPrompt === "Back") {
                        pizzaMenuF();
                    }
                    else if (addtoCart.cartPrompt === "Add to Cart") {
                        let quantity = await inquirer.prompt([{
                                name: "quantityPrompt",
                                type: "number",
                                message: "How much items do you want to add in your cart?"
                            }]);
                        let cartName = cart.names.push(`${Psize.large} ${pizza[2].name} x ${quantity.quantityPrompt}`);
                        let cartPrice = cart.prices.push(pizza[2].large.price * quantity.quantityPrompt);
                        let message = `Your Items has been added to cart.`;
                        let viewYourcart = await inquirer.prompt([{
                                name: "vycPrompt",
                                type: "list",
                                choices: ["View Your Cart", "Go to MainMenu"],
                                message: message
                            }]);
                        if (viewYourcart.vycPrompt === "View Your Cart") {
                            cartF();
                        }
                        else if (viewYourcart.vycPrompt === "Go to MainMenu") {
                            mainMenuF();
                        }
                    }
                }
            }
        }
        pizzaMenuF();
    }
    // cold beverages
    else if (orderMenu.items === "ColdBeverages") {
        async function coldBeveragesMenuF() {
            let coldBeveragesMenu = await inquirer.prompt([{
                    name: "items",
                    type: "list",
                    choices: ["Iced cappuccino", "Iced Latte", "Iced Mocha", "Iced Caramel Macciato", "Iced Spanish Latte", "Frappucino", "Iced Americano", "Go to MainMenu"]
                }]);
            if (coldBeveragesMenu.items === "Go to MainMenu") {
                mainMenuF();
            }
            //cold beverages Iced cappuccino
            else if (coldBeveragesMenu.items === "Iced cappuccino") {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [size.Demi, size.Short, size.Tall, size.Grande, size.Venti, size.Trenta, "back"]
                    }
                ]);
                // demi
                if (weight.sizePrompt === "back") {
                    coldBeveragesMenuF();
                }
                else if (weight.sizePrompt === size.Demi) {
                    sizeF(size.Demi, coldBeverages[0].name, coldBeverages[0].demi.price, coldBeveragesMenuF);
                }
                // short
                else if (weight.sizePrompt === size.Short) {
                    sizeF(size.Short, coldBeverages[0].name, coldBeverages[0].short.price, coldBeveragesMenuF);
                }
                // tall
                else if (weight.sizePrompt === size.Tall) {
                    sizeF(size.Tall, coldBeverages[0].name, coldBeverages[0].tall.price, coldBeveragesMenuF);
                }
                // grande
                else if (weight.sizePrompt === size.Grande) {
                    sizeF(size.Grande, coldBeverages[0].name, coldBeverages[0].grande.price, coldBeveragesMenuF);
                }
                // venti
                else if (weight.sizePrompt === size.Venti) {
                    sizeF(size.Venti, coldBeverages[0].name, coldBeverages[0].venti.price, coldBeveragesMenuF);
                }
                // trenta
                else if (weight.sizePrompt === size.Trenta) {
                    sizeF(size.Trenta, coldBeverages[0].name, coldBeverages[0].trenta.price, coldBeveragesMenuF);
                }
            }
            //cold beverages Iced LAtte
            else if (coldBeveragesMenu.items === "Iced Latte") {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [size.Demi, size.Short, size.Tall, size.Grande, size.Venti, size.Trenta, "back"]
                    }
                ]);
                // demi
                if (weight.sizePrompt === "back") {
                    coldBeveragesMenuF();
                }
                else if (weight.sizePrompt === size.Demi) {
                    sizeF(size.Demi, coldBeverages[1].name, coldBeverages[1].demi.price, coldBeveragesMenuF);
                }
                // short
                else if (weight.sizePrompt === size.Short) {
                    sizeF(size.Short, coldBeverages[1].name, coldBeverages[1].short.price, coldBeveragesMenuF);
                }
                // tall
                else if (weight.sizePrompt === size.Tall) {
                    sizeF(size.Tall, coldBeverages[1].name, coldBeverages[1].tall.price, coldBeveragesMenuF);
                }
                // grande
                else if (weight.sizePrompt === size.Grande) {
                    sizeF(size.Grande, coldBeverages[1].name, coldBeverages[1].grande.price, coldBeveragesMenuF);
                }
                // venti
                else if (weight.sizePrompt === size.Venti) {
                    sizeF(size.Venti, coldBeverages[1].name, coldBeverages[1].venti.price, coldBeveragesMenuF);
                }
                // trenta
                else if (weight.sizePrompt === size.Trenta) {
                    sizeF(size.Trenta, coldBeverages[1].name, coldBeverages[1].trenta.price, coldBeveragesMenuF);
                }
            }
            //cold beverages Iced LAtte
            else if (coldBeveragesMenu.items === "Iced Mocha") {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [size.Demi, size.Short, size.Tall, size.Grande, size.Venti, size.Trenta, "back"]
                    }
                ]);
                // demi
                if (weight.sizePrompt === "back") {
                    coldBeveragesMenuF();
                }
                else if (weight.sizePrompt === size.Demi) {
                    sizeF(size.Demi, coldBeverages[2].name, coldBeverages[2].demi.price, coldBeveragesMenuF);
                }
                // short
                else if (weight.sizePrompt === size.Short) {
                    sizeF(size.Short, coldBeverages[2].name, coldBeverages[2].short.price, coldBeveragesMenuF);
                }
                // tall
                else if (weight.sizePrompt === size.Tall) {
                    sizeF(size.Tall, coldBeverages[2].name, coldBeverages[2].tall.price, coldBeveragesMenuF);
                }
                // grande
                else if (weight.sizePrompt === size.Grande) {
                    sizeF(size.Grande, coldBeverages[2].name, coldBeverages[2].grande.price, coldBeveragesMenuF);
                }
                // venti
                else if (weight.sizePrompt === size.Venti) {
                    sizeF(size.Venti, coldBeverages[2].name, coldBeverages[2].venti.price, coldBeveragesMenuF);
                }
                // trenta
                else if (weight.sizePrompt === size.Trenta) {
                    sizeF(size.Trenta, coldBeverages[2].name, coldBeverages[2].trenta.price, coldBeveragesMenuF);
                }
            }
            //cold beverages Iced macciato
            else if (coldBeveragesMenu.items === "Iced Caramel Macciato") {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [size.Demi, size.Short, size.Tall, size.Grande, size.Venti, size.Trenta, "back"]
                    }
                ]);
                // demi
                if (weight.sizePrompt === "back") {
                    coldBeveragesMenuF();
                }
                else if (weight.sizePrompt === size.Demi) {
                    sizeF(size.Demi, coldBeverages[3].name, coldBeverages[3].demi.price, coldBeveragesMenuF);
                }
                // short
                else if (weight.sizePrompt === size.Short) {
                    sizeF(size.Short, coldBeverages[3].name, coldBeverages[3].short.price, coldBeveragesMenuF);
                }
                // tall
                else if (weight.sizePrompt === size.Tall) {
                    sizeF(size.Tall, coldBeverages[3].name, coldBeverages[3].tall.price, coldBeveragesMenuF);
                }
                // grande
                else if (weight.sizePrompt === size.Grande) {
                    sizeF(size.Grande, coldBeverages[3].name, coldBeverages[3].grande.price, coldBeveragesMenuF);
                }
                // venti
                else if (weight.sizePrompt === size.Venti) {
                    sizeF(size.Venti, coldBeverages[3].name, coldBeverages[3].venti.price, coldBeveragesMenuF);
                }
                // trenta
                else if (weight.sizePrompt === size.Trenta) {
                    sizeF(size.Trenta, coldBeverages[3].name, coldBeverages[3].trenta.price, coldBeveragesMenuF);
                }
            }
            //cold beverages Iced spanish latt4
            else if (coldBeveragesMenu.items === "Iced Spanish Latte") {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [size.Demi, size.Short, size.Tall, size.Grande, size.Venti, size.Trenta, "back"]
                    }
                ]);
                // demi
                if (weight.sizePrompt === "back") {
                    coldBeveragesMenuF();
                }
                else if (weight.sizePrompt === size.Demi) {
                    sizeF(size.Demi, coldBeverages[4].name, coldBeverages[4].demi.price, coldBeveragesMenuF);
                }
                // short
                else if (weight.sizePrompt === size.Short) {
                    sizeF(size.Short, coldBeverages[4].name, coldBeverages[4].short.price, coldBeveragesMenuF);
                }
                // tall
                else if (weight.sizePrompt === size.Tall) {
                    sizeF(size.Tall, coldBeverages[4].name, coldBeverages[4].tall.price, coldBeveragesMenuF);
                }
                // grande
                else if (weight.sizePrompt === size.Grande) {
                    sizeF(size.Grande, coldBeverages[4].name, coldBeverages[4].grande.price, coldBeveragesMenuF);
                }
                // venti
                else if (weight.sizePrompt === size.Venti) {
                    sizeF(size.Venti, coldBeverages[4].name, coldBeverages[4].venti.price, coldBeveragesMenuF);
                }
                // trenta
                else if (weight.sizePrompt === size.Trenta) {
                    sizeF(size.Trenta, coldBeverages[4].name, coldBeverages[4].trenta.price, coldBeveragesMenuF);
                }
            }
            //cold beverages Frappucino
            else if (coldBeveragesMenu.items === "Frappucino") {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [size.Demi, size.Short, size.Tall, size.Grande, size.Venti, size.Trenta, "back"]
                    }
                ]);
                // demi
                if (weight.sizePrompt === "back") {
                    coldBeveragesMenuF();
                }
                else if (weight.sizePrompt === size.Demi) {
                    sizeF(size.Demi, coldBeverages[5].name, coldBeverages[5].demi.price, coldBeveragesMenuF);
                }
                // short
                else if (weight.sizePrompt === size.Short) {
                    sizeF(size.Short, coldBeverages[5].name, coldBeverages[5].short.price, coldBeveragesMenuF);
                }
                // tall
                else if (weight.sizePrompt === size.Tall) {
                    sizeF(size.Tall, coldBeverages[5].name, coldBeverages[5].tall.price, coldBeveragesMenuF);
                }
                // grande
                else if (weight.sizePrompt === size.Grande) {
                    sizeF(size.Grande, coldBeverages[5].name, coldBeverages[5].grande.price, coldBeveragesMenuF);
                }
                // venti
                else if (weight.sizePrompt === size.Venti) {
                    sizeF(size.Venti, coldBeverages[5].name, coldBeverages[5].venti.price, coldBeveragesMenuF);
                }
                // trenta
                else if (weight.sizePrompt === size.Trenta) {
                    sizeF(size.Trenta, coldBeverages[5].name, coldBeverages[5].trenta.price, coldBeveragesMenuF);
                }
            }
            //cold beverages Iced Americano
            else if (coldBeveragesMenu.items === "Iced Americano") {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [size.Demi, size.Short, size.Tall, size.Grande, size.Venti, size.Trenta, "back"]
                    }
                ]);
                // demi
                if (weight.sizePrompt === "back") {
                    coldBeveragesMenuF();
                }
                else if (weight.sizePrompt === size.Demi) {
                    sizeF(size.Demi, coldBeverages[6].name, coldBeverages[6].demi.price, coldBeveragesMenuF);
                }
                // short
                else if (weight.sizePrompt === size.Short) {
                    sizeF(size.Short, coldBeverages[6].name, coldBeverages[6].short.price, coldBeveragesMenuF);
                }
                // tall
                else if (weight.sizePrompt === size.Tall) {
                    sizeF(size.Tall, coldBeverages[6].name, coldBeverages[6].tall.price, coldBeveragesMenuF);
                }
                // grande
                else if (weight.sizePrompt === size.Grande) {
                    sizeF(size.Grande, coldBeverages[6].name, coldBeverages[6].grande.price, coldBeveragesMenuF);
                }
                // venti
                else if (weight.sizePrompt === size.Venti) {
                    sizeF(size.Venti, coldBeverages[6].name, coldBeverages[6].venti.price, coldBeveragesMenuF);
                }
                // trenta
                else if (weight.sizePrompt === size.Trenta) {
                    sizeF(size.Trenta, coldBeverages[6].name, coldBeverages[6].trenta.price, coldBeveragesMenuF);
                }
            }
        }
        coldBeveragesMenuF();
    }
    else if (orderMenu.items === "HotBeverages") {
        async function hotBeveragesMenuF() {
            let hotBeveragesMenu = await inquirer.prompt([{
                    name: "items",
                    type: "list",
                    choices: [hotBeverages[0].name, hotBeverages[1].name, hotBeverages[2].name, hotBeverages[3].name, hotBeverages[4].name, hotBeverages[5].name, hotBeverages[6].name, hotBeverages[7].name, hotBeverages[8].name, hotBeverages[9].name, hotBeverages[10].name, hotBeverages[11].name, hotBeverages[12].name, "Go to MainMenu"]
                }]);
            if (hotBeveragesMenu.items === "Go to MainMenu") {
                mainMenuF();
            }
            //hot Beverages indexing
            else if (hotBeveragesMenu.items === hotBeverages[0].name) {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [size.Demi, size.Short, size.Tall, size.Grande, size.Venti, size.Trenta, "back"]
                    }
                ]);
                // demi
                if (weight.sizePrompt === "back") {
                    hotBeveragesMenuF();
                }
                else if (weight.sizePrompt === size.Demi) {
                    sizeF(size.Demi, hotBeverages[0].name, hotBeverages[0].demi.price, hotBeveragesMenuF);
                }
                // short
                else if (weight.sizePrompt === size.Short) {
                    sizeF(size.Short, hotBeverages[0].name, hotBeverages[0].short.price, hotBeveragesMenuF);
                }
                // tall
                else if (weight.sizePrompt === size.Tall) {
                    sizeF(size.Tall, hotBeverages[0].name, hotBeverages[0].tall.price, hotBeveragesMenuF);
                }
                // grande
                else if (weight.sizePrompt === size.Grande) {
                    sizeF(size.Grande, hotBeverages[0].name, hotBeverages[0].grande.price, hotBeveragesMenuF);
                }
                // venti
                else if (weight.sizePrompt === size.Venti) {
                    sizeF(size.Venti, hotBeverages[0].name, hotBeverages[0].venti.price, hotBeveragesMenuF);
                }
                // trenta
                else if (weight.sizePrompt === size.Trenta) {
                    sizeF(size.Trenta, hotBeverages[0].name, hotBeverages[0].trenta.price, hotBeveragesMenuF);
                }
            }
            //hot Beverages indexing
            else if (hotBeveragesMenu.items === hotBeverages[1].name) {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [size.Demi, size.Short, size.Tall, size.Grande, size.Venti, size.Trenta, "back"]
                    }
                ]);
                // demi
                if (weight.sizePrompt === "back") {
                    hotBeveragesMenuF();
                }
                else if (weight.sizePrompt === size.Demi) {
                    sizeF(size.Demi, hotBeverages[1].name, hotBeverages[1].demi.price, hotBeveragesMenuF);
                }
                // short
                else if (weight.sizePrompt === size.Short) {
                    sizeF(size.Short, hotBeverages[1].name, hotBeverages[1].short.price, hotBeveragesMenuF);
                }
                // tall
                else if (weight.sizePrompt === size.Tall) {
                    sizeF(size.Tall, hotBeverages[1].name, hotBeverages[1].tall.price, hotBeveragesMenuF);
                }
                // grande
                else if (weight.sizePrompt === size.Grande) {
                    sizeF(size.Grande, hotBeverages[1].name, hotBeverages[1].grande.price, hotBeveragesMenuF);
                }
                // venti
                else if (weight.sizePrompt === size.Venti) {
                    sizeF(size.Venti, hotBeverages[1].name, hotBeverages[1].venti.price, hotBeveragesMenuF);
                }
                // trenta
                else if (weight.sizePrompt === size.Trenta) {
                    sizeF(size.Trenta, hotBeverages[1].name, hotBeverages[1].trenta.price, hotBeveragesMenuF);
                }
            }
            //hot Beverages indexing
            else if (hotBeveragesMenu.items === hotBeverages[2].name) {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [size.Demi, size.Short, size.Tall, size.Grande, size.Venti, size.Trenta, "back"]
                    }
                ]);
                // demi
                if (weight.sizePrompt === "back") {
                    hotBeveragesMenuF();
                }
                else if (weight.sizePrompt === size.Demi) {
                    sizeF(size.Demi, hotBeverages[2].name, hotBeverages[2].demi.price, hotBeveragesMenuF);
                }
                // short
                else if (weight.sizePrompt === size.Short) {
                    sizeF(size.Short, hotBeverages[2].name, hotBeverages[2].short.price, hotBeveragesMenuF);
                }
                // tall
                else if (weight.sizePrompt === size.Tall) {
                    sizeF(size.Tall, hotBeverages[2].name, hotBeverages[2].tall.price, hotBeveragesMenuF);
                }
                // grande
                else if (weight.sizePrompt === size.Grande) {
                    sizeF(size.Grande, hotBeverages[2].name, hotBeverages[2].grande.price, hotBeveragesMenuF);
                }
                // venti
                else if (weight.sizePrompt === size.Venti) {
                    sizeF(size.Venti, hotBeverages[2].name, hotBeverages[2].venti.price, hotBeveragesMenuF);
                }
                // trenta
                else if (weight.sizePrompt === size.Trenta) {
                    sizeF(size.Trenta, hotBeverages[2].name, hotBeverages[2].trenta.price, hotBeveragesMenuF);
                }
            }
            //hot Beverages indexing
            else if (hotBeveragesMenu.items === hotBeverages[3].name) {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [size.Demi, size.Short, size.Tall, size.Grande, size.Venti, size.Trenta, "back"]
                    }
                ]);
                // demi
                if (weight.sizePrompt === "back") {
                    hotBeveragesMenuF();
                }
                else if (weight.sizePrompt === size.Demi) {
                    sizeF(size.Demi, hotBeverages[3].name, hotBeverages[3].demi.price, hotBeveragesMenuF);
                }
                // short
                else if (weight.sizePrompt === size.Short) {
                    sizeF(size.Short, hotBeverages[3].name, hotBeverages[3].short.price, hotBeveragesMenuF);
                }
                // tall
                else if (weight.sizePrompt === size.Tall) {
                    sizeF(size.Tall, hotBeverages[3].name, hotBeverages[3].tall.price, hotBeveragesMenuF);
                }
                // grande
                else if (weight.sizePrompt === size.Grande) {
                    sizeF(size.Grande, hotBeverages[3].name, hotBeverages[3].grande.price, hotBeveragesMenuF);
                }
                // venti
                else if (weight.sizePrompt === size.Venti) {
                    sizeF(size.Venti, hotBeverages[3].name, hotBeverages[3].venti.price, hotBeveragesMenuF);
                }
                // trenta
                else if (weight.sizePrompt === size.Trenta) {
                    sizeF(size.Trenta, hotBeverages[3].name, hotBeverages[3].trenta.price, hotBeveragesMenuF);
                }
            }
            //hot Beverages indexing
            else if (hotBeveragesMenu.items === hotBeverages[4].name) {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [size.Demi, size.Short, size.Tall, size.Grande, size.Venti, size.Trenta, "back"]
                    }
                ]);
                // demi
                if (weight.sizePrompt === "back") {
                    hotBeveragesMenuF();
                }
                else if (weight.sizePrompt === size.Demi) {
                    sizeF(size.Demi, hotBeverages[4].name, hotBeverages[4].demi.price, hotBeveragesMenuF);
                }
                // short
                else if (weight.sizePrompt === size.Short) {
                    sizeF(size.Short, hotBeverages[4].name, hotBeverages[4].short.price, hotBeveragesMenuF);
                }
                // tall
                else if (weight.sizePrompt === size.Tall) {
                    sizeF(size.Tall, hotBeverages[4].name, hotBeverages[4].tall.price, hotBeveragesMenuF);
                }
                // grande
                else if (weight.sizePrompt === size.Grande) {
                    sizeF(size.Grande, hotBeverages[4].name, hotBeverages[4].grande.price, hotBeveragesMenuF);
                }
                // venti
                else if (weight.sizePrompt === size.Venti) {
                    sizeF(size.Venti, hotBeverages[4].name, hotBeverages[4].venti.price, hotBeveragesMenuF);
                }
                // trenta
                else if (weight.sizePrompt === size.Trenta) {
                    sizeF(size.Trenta, hotBeverages[4].name, hotBeverages[4].trenta.price, hotBeveragesMenuF);
                }
            }
            //hot Beverages indexing
            else if (hotBeveragesMenu.items === hotBeverages[5].name) {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [size.Demi, size.Short, size.Tall, size.Grande, size.Venti, size.Trenta, "back"]
                    }
                ]);
                // demi
                if (weight.sizePrompt === "back") {
                    hotBeveragesMenuF();
                }
                else if (weight.sizePrompt === size.Demi) {
                    sizeF(size.Demi, hotBeverages[5].name, hotBeverages[5].demi.price, hotBeveragesMenuF);
                }
                // short
                else if (weight.sizePrompt === size.Short) {
                    sizeF(size.Short, hotBeverages[5].name, hotBeverages[5].short.price, hotBeveragesMenuF);
                }
                // tall
                else if (weight.sizePrompt === size.Tall) {
                    sizeF(size.Tall, hotBeverages[5].name, hotBeverages[5].tall.price, hotBeveragesMenuF);
                }
                // grande
                else if (weight.sizePrompt === size.Grande) {
                    sizeF(size.Grande, hotBeverages[5].name, hotBeverages[5].grande.price, hotBeveragesMenuF);
                }
                // venti
                else if (weight.sizePrompt === size.Venti) {
                    sizeF(size.Venti, hotBeverages[5].name, hotBeverages[5].venti.price, hotBeveragesMenuF);
                }
                // trenta
                else if (weight.sizePrompt === size.Trenta) {
                    sizeF(size.Trenta, hotBeverages[5].name, hotBeverages[5].trenta.price, hotBeveragesMenuF);
                }
            }
            //hot Beverages indexing
            else if (hotBeveragesMenu.items === hotBeverages[6].name) {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [size.Demi, size.Short, size.Tall, size.Grande, size.Venti, size.Trenta, "back"]
                    }
                ]);
                // demi
                if (weight.sizePrompt === "back") {
                    hotBeveragesMenuF();
                }
                else if (weight.sizePrompt === size.Demi) {
                    sizeF(size.Demi, hotBeverages[6].name, hotBeverages[6].demi.price, hotBeveragesMenuF);
                }
                // short
                else if (weight.sizePrompt === size.Short) {
                    sizeF(size.Short, hotBeverages[6].name, hotBeverages[6].short.price, hotBeveragesMenuF);
                }
                // tall
                else if (weight.sizePrompt === size.Tall) {
                    sizeF(size.Tall, hotBeverages[6].name, hotBeverages[6].tall.price, hotBeveragesMenuF);
                }
                // grande
                else if (weight.sizePrompt === size.Grande) {
                    sizeF(size.Grande, hotBeverages[6].name, hotBeverages[6].grande.price, hotBeveragesMenuF);
                }
                // venti
                else if (weight.sizePrompt === size.Venti) {
                    sizeF(size.Venti, hotBeverages[6].name, hotBeverages[6].venti.price, hotBeveragesMenuF);
                }
                // trenta
                else if (weight.sizePrompt === size.Trenta) {
                    sizeF(size.Trenta, hotBeverages[6].name, hotBeverages[6].trenta.price, hotBeveragesMenuF);
                }
            }
            //hot Beverages indexing
            else if (hotBeveragesMenu.items === hotBeverages[7].name) {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [size.Demi, size.Short, size.Tall, size.Grande, size.Venti, size.Trenta, "back"]
                    }
                ]);
                // demi
                if (weight.sizePrompt === "back") {
                    hotBeveragesMenuF();
                }
                else if (weight.sizePrompt === size.Demi) {
                    sizeF(size.Demi, hotBeverages[7].name, hotBeverages[7].demi.price, hotBeveragesMenuF);
                }
                // short
                else if (weight.sizePrompt === size.Short) {
                    sizeF(size.Short, hotBeverages[7].name, hotBeverages[7].short.price, hotBeveragesMenuF);
                }
                // tall
                else if (weight.sizePrompt === size.Tall) {
                    sizeF(size.Tall, hotBeverages[7].name, hotBeverages[7].tall.price, hotBeveragesMenuF);
                }
                // grande
                else if (weight.sizePrompt === size.Grande) {
                    sizeF(size.Grande, hotBeverages[7].name, hotBeverages[7].grande.price, hotBeveragesMenuF);
                }
                // venti
                else if (weight.sizePrompt === size.Venti) {
                    sizeF(size.Venti, hotBeverages[7].name, hotBeverages[7].venti.price, hotBeveragesMenuF);
                }
                // trenta
                else if (weight.sizePrompt === size.Trenta) {
                    sizeF(size.Trenta, hotBeverages[7].name, hotBeverages[7].trenta.price, hotBeveragesMenuF);
                }
            }
            //hot Beverages indexing
            else if (hotBeveragesMenu.items === hotBeverages[9].name) {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [size.Demi, size.Short, size.Tall, size.Grande, size.Venti, size.Trenta, "back"]
                    }
                ]);
                // demi
                if (weight.sizePrompt === "back") {
                    hotBeveragesMenuF();
                }
                else if (weight.sizePrompt === size.Demi) {
                    sizeF(size.Demi, hotBeverages[9].name, hotBeverages[9].demi.price, hotBeveragesMenuF);
                }
                // short
                else if (weight.sizePrompt === size.Short) {
                    sizeF(size.Short, hotBeverages[9].name, hotBeverages[9].short.price, hotBeveragesMenuF);
                }
                // tall
                else if (weight.sizePrompt === size.Tall) {
                    sizeF(size.Tall, hotBeverages[9].name, hotBeverages[9].tall.price, hotBeveragesMenuF);
                }
                // grande
                else if (weight.sizePrompt === size.Grande) {
                    sizeF(size.Grande, hotBeverages[9].name, hotBeverages[9].grande.price, hotBeveragesMenuF);
                }
                // venti
                else if (weight.sizePrompt === size.Venti) {
                    sizeF(size.Venti, hotBeverages[9].name, hotBeverages[9].venti.price, hotBeveragesMenuF);
                }
                // trenta
                else if (weight.sizePrompt === size.Trenta) {
                    sizeF(size.Trenta, hotBeverages[9].name, hotBeverages[9].trenta.price, hotBeveragesMenuF);
                }
            }
            //hot Beverages indexing
            else if (hotBeveragesMenu.items === hotBeverages[10].name) {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [size.Demi, size.Short, size.Tall, size.Grande, size.Venti, size.Trenta, "back"]
                    }
                ]);
                // demi
                if (weight.sizePrompt === "back") {
                    hotBeveragesMenuF();
                }
                else if (weight.sizePrompt === size.Demi) {
                    sizeF(size.Demi, hotBeverages[10].name, hotBeverages[10].demi.price, hotBeveragesMenuF);
                }
                // short
                else if (weight.sizePrompt === size.Short) {
                    sizeF(size.Short, hotBeverages[10].name, hotBeverages[10].short.price, hotBeveragesMenuF);
                }
                // tall
                else if (weight.sizePrompt === size.Tall) {
                    sizeF(size.Tall, hotBeverages[10].name, hotBeverages[10].tall.price, hotBeveragesMenuF);
                }
                // grande
                else if (weight.sizePrompt === size.Grande) {
                    sizeF(size.Grande, hotBeverages[10].name, hotBeverages[10].grande.price, hotBeveragesMenuF);
                }
                // venti
                else if (weight.sizePrompt === size.Venti) {
                    sizeF(size.Venti, hotBeverages[10].name, hotBeverages[10].venti.price, hotBeveragesMenuF);
                }
                // trenta
                else if (weight.sizePrompt === size.Trenta) {
                    sizeF(size.Trenta, hotBeverages[10].name, hotBeverages[10].trenta.price, hotBeveragesMenuF);
                }
            }
            //hot Beverages indexing
            else if (hotBeveragesMenu.items === hotBeverages[11].name) {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [size.Demi, size.Short, size.Tall, size.Grande, size.Venti, size.Trenta, "back"]
                    }
                ]);
                // demi
                if (weight.sizePrompt === "back") {
                    hotBeveragesMenuF();
                }
                else if (weight.sizePrompt === size.Demi) {
                    sizeF(size.Demi, hotBeverages[11].name, hotBeverages[11].demi.price, hotBeveragesMenuF);
                }
                // short
                else if (weight.sizePrompt === size.Short) {
                    sizeF(size.Short, hotBeverages[11].name, hotBeverages[11].short.price, hotBeveragesMenuF);
                }
                // tall
                else if (weight.sizePrompt === size.Tall) {
                    sizeF(size.Tall, hotBeverages[11].name, hotBeverages[11].tall.price, hotBeveragesMenuF);
                }
                // grande
                else if (weight.sizePrompt === size.Grande) {
                    sizeF(size.Grande, hotBeverages[11].name, hotBeverages[11].grande.price, hotBeveragesMenuF);
                }
                // venti
                else if (weight.sizePrompt === size.Venti) {
                    sizeF(size.Venti, hotBeverages[11].name, hotBeverages[11].venti.price, hotBeveragesMenuF);
                }
                // trenta
                else if (weight.sizePrompt === size.Trenta) {
                    sizeF(size.Trenta, hotBeverages[11].name, hotBeverages[11].trenta.price, hotBeveragesMenuF);
                }
            }
            //hot Beverages indexing
            else if (hotBeveragesMenu.items === hotBeverages[12].name) {
                let weight = await inquirer.prompt([
                    {
                        name: "sizePrompt",
                        type: "list",
                        choices: [size.Demi, size.Short, size.Tall, size.Grande, size.Venti, size.Trenta, "back"]
                    }
                ]);
                // demi
                if (weight.sizePrompt === "back") {
                    hotBeveragesMenuF();
                }
                else if (weight.sizePrompt === size.Demi) {
                    sizeF(size.Demi, hotBeverages[12].name, hotBeverages[12].demi.price, hotBeveragesMenuF);
                }
                // short
                else if (weight.sizePrompt === size.Short) {
                    sizeF(size.Short, hotBeverages[12].name, hotBeverages[12].short.price, hotBeveragesMenuF);
                }
                // tall
                else if (weight.sizePrompt === size.Tall) {
                    sizeF(size.Tall, hotBeverages[12].name, hotBeverages[12].tall.price, hotBeveragesMenuF);
                }
                // grande
                else if (weight.sizePrompt === size.Grande) {
                    sizeF(size.Grande, hotBeverages[12].name, hotBeverages[12].grande.price, hotBeveragesMenuF);
                }
                // venti
                else if (weight.sizePrompt === size.Venti) {
                    sizeF(size.Venti, hotBeverages[12].name, hotBeverages[12].venti.price, hotBeveragesMenuF);
                }
                // trenta
                else if (weight.sizePrompt === size.Trenta) {
                    sizeF(size.Trenta, hotBeverages[12].name, hotBeverages[12].trenta.price, hotBeveragesMenuF);
                }
            }
        }
        hotBeveragesMenuF();
    }
}
mainMenuF();
