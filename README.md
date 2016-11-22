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

U.arrayRemove(x, "id", 3);

--> [ 
	{id: 1, name: "Master Chief"},
	{id: 2, name: "Cortana"},
	{id: 4, name: "Brute"}
];
```

-----

#### `U.objFromArrayWhere(array, key, value)`
Returns first occurance of key value pair inside an array.

```js
var x = [ 
	{id: 1, name: "Rory Gilmore"},
	{id: 2, name: "Lorelai"},
	{id: 3, name: "Babette"},
	{id: 4, name: "Paris"}
];

U.arrayRemove(x, "id", 3);

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

-->	{
	name: "Dean Winchester",
	birthday: "01-24-1979",
	favorite: "pie"
};
```

-----

#### `U.objWithFrom(arr, from)`
Create a new object by pulling a specified list of properties from a given object.

```js
U.objWithFrom(["id", "deaths"], { id: 12, name: "Dean Winchester", deaths: 6, birthday: "01-24-1979", favorite: "pie" });

-->	{
	id: 12,
	deaths: 6
};
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
U.lengthDeep({ id: 15, name: "Golden Girls", genre: "Sitcom",created_by:	"Susan Harris",starring:	["Beatrice Arthur","Betty White","Rue McClanahan","Estelle Getty"]});

-->	5;
```

-----
