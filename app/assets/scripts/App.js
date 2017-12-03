import Person from './modules/Person';
//var Person = require('./modules/Person')
alert("webpack integrated")
var john = new Person("john doe", "bluegreen");
john.greet();
var jane = new Person("jane smith", "orange");
jane.greet();
