function Person(name, favColour) {
  this.name = name;
  this.favouriteColour = favColour;
  this.greet = function() {
    console.log("hello mi nombre este" + this.name + "and my favourite colour is " + this.favouriteColour);
  }
}

export default Person;
