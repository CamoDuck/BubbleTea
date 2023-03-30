menu = {
    "Teas": {
        "Hojicha": "yellow",
        "Roasted Oolong": "yellow",
        "Ali Shan (Oolong)": "yellow",
        "Lychee Black Tea": "yellow",
        "Peach Oolong": "yellow",
        "Rose Tie Guan Yin": "yellow",
        "Earl Grey": "yellow",
        "Jasmine Green Tea":"yellow",
        "gap11": "",
        "gap12": "",
    },
    "Milk Tea": {
        "Classic Milk Tea": "yellow",
        "Coffee Milk Tea": "yellow",
        "Chocolate Milk Tea": "yellow",
        "gap11": "",
        "gap12": "",
    },
    "Fresh Milk/Latte": {
        "Hojicha Milk Tea": "yellow",
        "Roasted Oolong Milk Tea": "yellow",
        "Ali Shan Oolong Milk Tea": "yellow",
        "Rose Tie Guan Yin": "yellow",
        "Earl Grey Milk Tea": "yellow",
        "Peach Oolong Milk Tea": "yellow",
        "Lychee Black Milk Tea": "yellow",
        "Jasmine Green Milk Tea": "yellow",
        "Honey Green Milk Tea": "yellow",
        "Brown Sugar Pearl Latte": "yellow",
        "Real Taro Latte": "yellow",
        "Matcha Latte": "yellow",
        "Strawberry Matcha Latte": "yellow",
        "Strawberry Latte": "yellow",
        "Mango Latte": "yellow",
        "Chocolate Latte": "yellow",
        "gap11":"",
        "gap12":"",
        "gap13":"",
        "gap14":"",
    },
    "Cheese Foam": {
        "Earl Grey Cheese Foam": "yellow",
        "Ali Shan Cheese Foam": "yellow",
        "Lychee Black Tea Cheese Foam": "yellow",
        "Peach Oolong Cheese Foam": "yellow",
        "Rose Tie Guan Yin Cheese Foam": "yellow",
        "Hojicha Cheese Foam": "yellow",
        "Rose Tie Guan Yin Cheese Foam": "yellow",
        "Jasmine Cheese Foam": "yellow",
        "gap11": "",
        "gap12": "",
        "gap13": "",
    },
    "Fruit Tea": {
        
    },
    ">>": {

    },

}

extraMenu = {
    "Grass Jelly": "green",
    "Lychee Jelly": "green",
    "Cheese Foam": "green",
    "Pearl": "green",
    "Mango Jelly": "green",
    "Brown Sugar Pearls": "green",
    "Popping Lychee": "green",
    "Popping Strawberry": "green",
    "Crystal Pearls": "green",
    "Aloe Vera": "green",
    "Coffee Jelly": "green",
    "gap11":"",
    "gap12":"",
    "gap13":"",
    "gap14":"",
    "gap15":"",
    "100%Sugar": "orange",
    "75%Sugar": "orange",
    "50%Sugar": "orange",
    "25%Sugar": "orange",
    "0%Sugar": "orange",
    "gap21":"",
    "gap22":"",
    "gap23":"",
    "Regular Ice": "red",
    "Less Ice": "green",
    "No Ice": "green",
    "Hot": "green",
    "gap31":"",
    "gap32":"",
    "gap33":"",
    "gap34":"",
    "Cup Fee Yes": "red",
    "Cup Fee No": "orange",
    "gap41":"",
    "gap42":"",
    "gap43":"",
    "gap44":"",
    "gap45":"",
    "gap46":"",
    "Fuanton": "green",
    "Uber": "green",
    "Ritual": "green",
    "DoorDash": "green",
    "Skip": "green",
    "gap51":"",
    "gap52":"",
    "gap53":"",


};


var currentCatagory = menu[0];

function createBut(name, parent, color="") {
    const but = document.createElement("button");
    but.innerHTML = name;
    if (color != "") {
        but.classList.add(color);
    }

    parent = document.querySelector(parent);
    parent.appendChild(but);
    return but;
}


function listItems() {
    const main = document.querySelector("main");
    main.innerHTML = '';
    currentCatagory = this.innerHTML;
    Object.keys(menu[this.innerHTML]).forEach(function(item) {
        item = createBut(item, "main", menu[currentCatagory][item]!=""? menu[currentCatagory][item]: "invis");
        item.addEventListener("click", listExtras);
    })

}

function listExtras() {
    const header = document.querySelector("header");
    header.classList.add("hidden");
    const main = document.querySelector("main");
    main.innerHTML = '';

    Object.keys(extraMenu).forEach(function(extra) {
        extraitem = createBut(extra, "main", extraMenu[extra]!=""? extraMenu[extra]: "invis");
    })

}

function main() {
    Object.keys(menu).forEach(function(catagory) {
        catagory = createBut(catagory, "header");
        catagory.addEventListener("click", listItems);
    })

    console.log("done");
}


main();