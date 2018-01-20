function Phone(brand, price, color, size) {
  	this.brand = brand;
	this.price = price;
	this.color = color;
	this.size = size;
}
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " and the size is " + this.size + ".");
		alert("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " and the size is " + this.size + ".");
}
var galaxyS6 = new Phone("Samsung", 1800, "white", 5);
var iPhone6S = new Phone("Apple", 2250, "silver", 4.5);
var one = new Phone("OnePlus", 2300, "red", 5.5);

galaxyS6.printInfo();
iPhone6S.printInfo();
one.printInfo();
