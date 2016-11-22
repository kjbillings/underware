![alt text](https://github.com/kjbillings/underware/blob/master/logo.jpg "Underware.js Logo")
# Underware.js
## A supportware library designed to help you build better apps, faster.
### Built by kjbillings


Includes various checks including javascript variable types, formats, regular expressions.
Includes various object & array manipulations for common needs in a js coder's life.

======

#### `U.isFalsey(argument)`
Checks if variable is undefined, false, or null.

```js
U.isFalsey(0);

--> true

U.isFalsey('example');

--> false
```

-----

#### `U.isTruthy(argument)`
Checks for whether or not a variable is not "falsey"...

```js
U.isTruthy(true);

--> true

U.isTruthy(0);

--> false
```

-----

#### `U.isFilled(argument)`
Checks if variable is not "falsey" nor empty...

```js
U.isFilled(true);

--> true

U.isFilled({});

--> false
```

-----

#### `U.isArray(argument)`
Checks if variable is an array.

```js
U.isArray([]);

--> true

U.isArray({});

--> false
```

-----

#### `U.isObject(argument)`
Checks if variable is an object.

```js
U.isObject("It's Underware. Like the software underneath?");

--> false

U.isObject({});

--> true
```

-----

#### `U.isNumber(argument)`
Checks if variable is an object.

```js
U.isNumber({cat: "meow"});

--> false

U.isNumber(3);

--> true
```

-----

#### `U.isString(argument)`
Checks if variable is a string.

```js
U.isString(1967);

--> false

U.isString("Chevy Imapala");

--> true
```

-----

#### `U.isType(argument, type)`
Checks if variable is of the specified type.

```js
U.isType(1967, "number");

--> true

U.isType("The Winchester's Baby", "object");

--> false
```

-----

#### `U.isType(argument, type)`
Checks if variable is of the specified type.

```js
U.isType(1967, "number");

--> true

U.isType("The Winchester's Baby", "object");

--> false
```

-----

#### `U.isDef(argument)`
Checks if variable is defined.

```js
U.isDef();

--> false

U.isDef("The Boy Who Lived");

--> true
```

-----

#### `U.areDef(array)`
Checks if all values in an array are defined. Returns false as soon as it finds an undefined variable.

```js
var x = 1;
U.areDef([x, y]);

--> false

U.areDef([x]);

--> true
```

-----

#### `U.areFalsey(array)`
Checks if all values in an array are falsey.

```js
U.areFalsey([1, 0, false]);

--> false

U.areFalsey([0, 0, false]);

--> true
```

-----

#### `U.areTruthy(array)`
Checks if all values in an array are truthy.

```js
U.areTruthy([0, 1, true]);

--> false

U.areTruthy([1, 1, true]);

--> true
```

-----

#### `U.arrayRemove(array, value)`
Remove all items in a given array matching the specified value.

```js
var x = [ "Harry", "Ron", "Hermione", "Argus" ];
U.arrayRemove(x, "Argus");

--> [ "Harry", "Ron", "Hermione" ]
```

-----

#### `U.arrayRemoveWhere(array, key, value)`
Removes an object from an array of objects where the key and it's value match that which is given.

```js
var x = [ 
	{id: 1, name: "Master Chief"},
	{id: 2, name: "Cortana"},
	{id: 3, name: "Arbiter"},
	{id: 4, name: "Brute"}
];

U.arrayRemoveWhere(x, "id", 3);

--> [ {id: 1, name: "Master Chief"}, {id: 2, name: "Cortana"}, {id: 4, name: "Brute"} ];
```

-----

#### `U.objFromArrayWhere(array, key, value)`
Returns first occurance of key value pair inside an array.

```js
var x = [ {id: 1, name: "Rory Gilmore"},
	{id: 2, name: "Lorelai"},
	{id: 3, name: "Babette"},
	{id: 4, name: "Paris"}
];

U.objFromArrayWhere(x, "id", 3);

-->	{id: 3, name: "Babette"};
```

-----

#### `U.hasGrandChildren(object)`
Checks whether or not an object or array has a second level of depth.

```js
U.hasGrandChildren({
	artist: "Arctic Monkeys", 
	album: "AM", 
	tracks: {
		1: "Do I Wanna Know?",
		2: "R U Mine?",
		3: "One for the Road",
		4: "Arabella",
		5: "I Want It All",
		6: "No. 1 Party Anthem",
		7: "Mad Sounds",
		8: "Fireside",
		9: "Why'd You Only Call Me When You're High?",
		10: "Snap Out of It",
		11: "Knee Socks",
		12: "I Wanna Be Yours",
	}
});

-->	true;
```
-----

#### `U.countGrandChildren(object)`
Counts the items on the second level of depth on an object or array.

```js
U.countGrandChildren({
	tracks: {
		1: "Do I Wanna Know?",
		2: "R U Mine?",
		3: "One for the Road",
		4: "Arabella",
		5: "I Want It All",
		6: "No. 1 Party Anthem",
		7: "Mad Sounds",
		8: "Fireside",
		9: "Why'd You Only Call Me When You're High?",
		10: "Snap Out of It",
		11: "Knee Socks",
		12: "I Wanna Be Yours",
	}
});

-->	12;
```
-----

#### `U.objWithout(object, without)`
Creates a new object without the specified properties.

```js
U.objWithout({
	id: 12,
	name: "Dean Winchester",
	deaths: 6,
	birthday: "01-24-1979",
	favorite: "pie"
}, ["id", "deaths"]);

-->	{ name: "Dean Winchester", birthday: "01-24-1979", favorite: "pie" };
```

-----

#### `U.objWithFrom(arr, from)`
Create a new object by pulling a specified list of properties from a given object.

```js
U.objWithFrom(["id", "deaths"], { id: 12, name: "Dean Winchester", deaths: 6, birthday: "01-24-1979", favorite: "pie" });

-->	{ id: 12, deaths: 6 };
```
-----

#### `U.length(argument)`
Gets array-like length of an object, array, or string (only checks top level).

```js
U.length({ id: 15, name: "Sam Winchester", deaths: 4, birthday: "05-02-1983", favorite: "demon blood" });

-->	5;
```
-----

#### `U.lengthDeep(argument, format)`
Finds the length of the object given including all child generations, and the objects themselves.

Format: If set to "values", it will return a count of all the non-object child values, if set to "childObjects", it will return a count of all child objects, if left undefined, it will default to a count of all children of all types.

```js
U.lengthDeep({1: {episodes:25,original_air_date: "September 14, 1985"},2: {episodes:26,original_air_date: "September 27, 1986"},3: {episodes:25,original_air_date: "September 19, 1987"},4: {episodes:26,original_air_date: "October 8, 1988"},5: {episodes:26,original_air_date: "September 23, 1989"},6: {episodes:26,original_air_date: "September 22, 1990"},7: {episodes:26,original_air_date: "September 21, 1991"}}, "values");

-->	14;
```
-----

#### `U.objFlatten(argument, format)`
Takes all child generations of an object and puts them at the end of the top level, flattening the given object to a single level array.

Format: If set to "values", it will return a count of all the non-object child values, if set to "childObjects", it will return a count of all child objects, if left undefined, it will default to a count of all children of all types.

```js
U.objFlatten({1: {episodes:25,original_air_date: "September 14, 1985"},2: {episodes:26,original_air_date: "September 27, 1986"},3: {episodes:25,original_air_date: "September 19, 1987"},4: {episodes:26,original_air_date: "October 8, 1988"},5: {episodes:26,original_air_date: "September 23, 1989"},6: {episodes:26,original_air_date: "September 22, 1990"},7: {episodes:26,original_air_date: "September 21, 1991"}}, "values");

-->	[25, "September 14, 1985",26, "September 27, 1986",25, "September 19, 1987",26, "October 8, 1988",26, "September 23, 1989",26, "September 22, 1990",26, "September 21, 1991"];
```
-----

#### `U.getKeys(argument)`
Get an array of all property names from object.

```js
U.objGetChildKeys({name: "Tony Stark", occupation: "Self-employed", aka: "Iron Man"});

-->	[ "name", "occupation", "aka" ];
```
-----

#### `U.each(argument, callback)`
Loop over all the items in an object or array and call a function each time.

```js
var x = {primary: 1, secondary: 2, tiertiary: 3};
U.each(x, function(k, v){ x[k] = v+1; });

-->	{primary: 2, secondary: 3, tiertiary: 4};
```
-----

#### `U.getDeep(argument, path, delimiter)`
Follows a linear path in a given object to return a sub-object.

```js
U.getDeep({ 
	monsters: {
		vampires: {...},
		werewolves: {...},
		leviathan: {
			alpha: "Dick Roman"
		}
	},
	heroes: ["Dean", "Sam", "Castiel", "Bobby"]
}, "monsters.leviathan.alpha", ".");

-->	"Dick Roman";
```
-----

#### `U.hasDeep(argument, path, delimiter)`
Follows a linear path in a given object to whether or not a sub-object is defined.

```js
U.hasDeep({ 
	monsters: {
		vampires: {...},
		werewolves: {...},
		leviathan: {
			alpha: "Dick Roman"
		}
	},
	heroes: ["Dean", "Sam", "Castiel", "Bobby"]
}, "monsters.leviathan.alpha", ".");

-->	true;
```
-----

#### `U.truthyObject(object)`
Removes all falsey values from the object given.

```js
U.truthyObject({
	eatsMeat: true,
	isScientist: true,
	lovesLedZeppelin: true,
	hasDriversLiscens: false
});

-->	{ eatsMeat: true, isScientist: true, lovesLedZeppelin: true };
```
-----

#### `U.falseyObject(object)`
Removes all truthy values from the object given.

```js
U.falseyObject({
	eatsMeat: true,
	isScientist: true,
	lovesLedZeppelin: true,
	hasDriversLiscens: false
});

-->	{ hasDriversLiscens: false };
```
-----

#### `U.compactObject(object, format)`
Removes all truthy values from the object given.

format: If set to true, removes all children with falsey values from the object given. If set to false, removes all children with truthy values from the object given.

```js
U.compactObject({
	eatsMeat: true,
	isScientist: true,
	lovesLedZeppelin: true,
	hasDriversLiscens: false
}, true);

-->	{ eatsMeat: true, isScientist: true, lovesLedZeppelin: true };
```
-----

#### `U.ucFirst(string)`
Capitalizes first letter of a string.

```js
U.ucFirst("hacksaw Ridge");

-->	"Hacksaw Ridge";
```
-----

#### `U.lcFirst(string)`
Lowercases first letter of a string.

```js
U.lcFirst("Underware is a funny name.");

-->	"underware is a funny name.";
```
-----

#### `U.includes(haystack, needle)`
Check whether or not an array contains a value, an object contains a property, or a string contains a substring.

```js
U.includes("Underware is a funny name.", "name");

-->	true;

U.includes([1,2,33,44,55], 66);

-->	false;

U.includes({cats: 9, dogs: 2, birds: 9}, 'dogs');

-->	true;
```
-----

#### `U.merge(object, argument, overwrite)`
Takes two objects and merges them together.

Overwrite: True by default, if set to false, will not overwrite existing values in object with matching key, only adding new values that are yet unlisted. 

```js
U.merge({artist: "Childish Gambino"}, {artist: "Donald Glover", type: "actor"}, false);

-->	{artist: "Childish Gambino", type: "actor"};

U.merge({artist: "Childish Gambino"}, {artist: "Donald Glover", type: "actor"});

-->	{artist: "Donald Glover", type: "actor"};
```
-----

#### `U.stringToArray(string, delimiter)`
Split a string into an array of strings ( converting to integers where possible ) split by a delimiter.

Delimiter: "." by default 

```js
U.stringToArray("okay.This is an array nerds.check it out.2");

-->	[ "okay", "This is an array nerds", "check it out", 2 ];
```
-----

#### `U.addPercent(percent, number)`
Converts a string of a number into an integer and adds a percentage specified.

```js
U.addPercent(6, 100);

-->	106;

U.addPercent("20", 100);

-->	120;
```
-----

#### `U.toRadians(value)`
Generates radian value of a given number. Good for calculating radial distances for coordinates in geolocation data.

```js
U.toRadians(46);

-->	0.8028514559173915;
```
-----

#### `U.formatNumber(value)`
Formats a number into a string with commas for thousands.

```js
U.formatNumber(18392839);

-->	"18,392,839";
```
-----

#### `U.numCommas(argument, min, max)`
Add commas to a string of numbers for thousands.

```js

U.numCommas(100000);

--> "100,000"

```
-----

#### `U.regex(argument, names, operator)`
Tests whether or not a given regular expression, or list of expressions, applies to a given string. Optionally can run an array of tests ("b") on the given string ("a").

See U.exp for a list of available expressions.

```js

U.regex("19363", "zipcode")

-->	true

U.regex("19363", ["zipcode", "website"])

-->	false

U.regex("19363", ["zipcode", "website"], "||")

-->	true

```
-----

#### `U.exp.has(argument, name)`
Tests whether or not a given string ("a") passes a regular expression test ("b").

```js

U.exp.has("19363", "zipcode")

-->	true

```
-----

#### `U.exp.get(name)`
Returns a new regular expression object based on it's listed name in exp.
Feel free to add more expressions to this list.

```js

U.exp.get("zipcode")

-->	/\d{5}(-\d{4})?/i

```
-----

#### `U.hasNumber(name)`
Checks whether or not a string contains a numeric character using a regular expression.

```js

U.hasNumber("call911")

--> true

```
-----

#### `U.hasLetter(name)`
Checks whether or not a string contains a letter using a regular expression.

```js

U.hasLetter("call911")

--> true

```
-----

#### `U.hasSpecial(name)`
Checks whether or not a string contains a special character using a regular expression.

```js

U.hasSpecial("call911")

--> false

U.hasSpecial("Costs $9.11")

--> true

```
-----

#### `U.hasCapital(name)`
Checks whether or not a string contains an uppercase letter using a regular expression.

```js

U.hasCapital("call911")

--> false

U.hasCapital("Costs $9.11")

--> true

```
-----

#### `U.hasLowercase(name)`
Checks whether or not a string contains a lowercase letter using a regular expression.

```js

U.hasLowercase("ATLANTA")

--> false

U.hasLowercase("Atlanta")

--> true

```
-----

#### `U.isTag(name)`
Checks whether or not a string is a Tag.

```js

U.isTag("#Atlanta")

--> true

U.isTag("Wutang")

--> false

```
-----

#### `U.isZip(name)`
Checks whether or not a string is a Zipcode.

```js

U.isZip("60098")

--> true

U.isZip("My Little Pony")

--> false

```
-----

#### `U.isEIN(name)`
Checks whether or not a string is an EIN.

```js

U.isEIN("984033887")

--> true

```
-----

#### `U.isDate(name)`
Checks whether or not a string is a date.

```js

U.isDate("29/02/2000");

--> true

U.isDate("29/02/2001");

--> false

U.isDate("28/02/2001");

--> true

```
-----

#### `U.isEmail(name)`
Checks whether or not a string is an email.

```js

U.isEmail("whoever@example.com");

--> true

```
-----

#### `U.isName(name)`
Checks whether or not a string is a user name.

```js

U.isName("Kyle Billings");

--> true

U.isName("Kyle B1ll1ngs");

--> false

```
-----

#### `U.isWebsite(name)`
Checks whether or not this string is formatted as a website url.

```js

U.isWebsite("kjbillings.com");

--> true

U.isWebsite("ThisAintaWebsite");

--> false

```
-----

#### `U.isTimestamp(name)`
Checks whether or not a string is formatted as a timestamp.

```js

U.isTimestamp("2016-11-22T20:59:31.800Z");

--> true

```
-----

#### `U.allowedLength(argument, min, max)`
Checks whether or not a string is within the required character count limitations.

```js

U.allowedLength("ThisIsALength", 12, 15);

--> true

U.allowedLength("This", 12, 15);

--> false

```
-----

#### `U.objToConstructor(object, name)`
Transform an object of properties into a constructor.

```js

U.objToConstructor({bananas: 5, apples: 9}, "fruits");

--> function fruits() { return call(this, arguments) }

```
-----

#### `U.renameFunction(name, fn)`
Rename a javascript function.

```js

var fruits = function fruits() { return call(this, arguments) }

U.renameFunction("vegetables", fruits);

--> function vegetables() { return call(this, arguments) }

```
-----

#### `U.logIt(messages, type, options)
Tool for robust logging of your app's processes console log, checkpoint, warn, info, and error.

```js

U.logIt(["================", "App Started", "================"], "checkpoint")

--> ✓ ================
--> ✓ App Started
--> ✓ ================

```
-----