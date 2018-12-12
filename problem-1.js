String.prototype.XyloHack = function(number) {
  return number % 2 === 0 ? this.toUpperCase() : this.toLowerCase();
};

// console.log("Hello".XyloHack(3));

function callXylohack(string, number) {
  return string.XyloHack(number);
}

console.log(callXylohack("Hello", 3));