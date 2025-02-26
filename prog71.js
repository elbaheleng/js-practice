baleno ={
    model : "Hatch back",
    varient : ["automatic", "manuel"],
    manufacturer : "Maruti"
}

glanza = {
    manufacturer : "Toyota"
}

glanza.__proto__ = baleno
console.log(glanza.manufacturer);
console.log(glanza.model);
