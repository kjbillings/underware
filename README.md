# Underware.js
## A supportware utility library designed to help you build better apps, faster.

![alt text](https://github.com/kjbillings/underware/blob/master/logo.jpg "Underware.js Logo")

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
