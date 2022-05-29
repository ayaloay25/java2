function getRandom(min, max) {
    var x = Math.floor(Math.random() * (max - min + 1) + min);
    return x;
}

rNumber = getRandom(1, 3);


console.log(rNumber);