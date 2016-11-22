(function(){
	var U = {

		/**
		 * [isFalsey Checks if variable is undefined, false, or null]
		 * @param  {Mixed} a [Variable to be tested for falseyness]
		 * @return {Boolean} [Indicates whether or not the given variable is falsey]
		 */
		isFalsey: function isFalsey(argument){
			return (!this.isDef(argument) || argument === false || argument === null || argument === 0 || argument === [] || argument === {});
		},

		/**
		 * [isTruthy Checks if variable is not "falsey"]
		 * @param  {Mixed} argument [Variable to be tested for truthyness]
		 * @return {Boolean} [Indicates wether or not the given variable is truthy]
		 */
		isTruthy: function isTruthy(argument){
			return (!this.isFalsey(argument));
		},

		/**
		 * [isFilled Checks if variable is not "falsey" or empty]
		 * @param  {Mixed} argument [Variable to be tested for whether or not it's filled]
		 * @return {Boolean}
		 */
		isFilled: function isFilled(argument){
			return (this.isTruthy(argument) || argument === "" || argument === {} || argument === []);
		},

		/**
		 * [isArray Checks for whether or not a variable is an array.]
		 * @param  {Mixed}  argument [Variable to be tested for whether or not it is an array.]
		 * @return {Boolean}          [Indicates whether or not the given variable is an array.]
		 */
		isArray: function isArray(argument) {
			return (this.isType(argument, 'array'));
		},

		/**
		 * [isObject Checks for whether or not a variable is an object.]
		 * @param  {Mixed}  argument [Variable to be tested for whether or not it is an object.]
		 * @return {Boolean}          [Indicates whether or not the given variable is an object.]
		 */
		isObject: function isObject(argument) {
			return (this.isType(argument, 'object'));
		},

		/**
		 * [isNumber Checks for whether or not a variable is a number.]
		 * @param  {Mixed}  argument [Variable to be tested for whether or not it is a number.]
		 * @return {Boolean}          [Indicates whether or not the given variable is a number.]
		 */
		isNumber: function isNumber(argument) {
			return (this.isType(argument, 'number'));
		},

		/**
		 * [isString Checks for whether or not a variable is a string.]
		 * @param  {Mixed}  argument [Variable to be tested for whether or not it is a string.]
		 * @return {Boolean}          [Indicates whether or not the given variable is a string.]
		 */
		isString: function isString(argument) {
			return (this.isType(argument, 'string'));
		},

		/**
		 * [isType Check if a given variable matches the type specified. ]
		 * @param  {Mixed}  argument [Variable to be tested for whether or not it is of the specified type.]
		 * @param  {String} [t]	[Variable type to be checked against]
		 * @return {Boolean}          [Indicates whether or not the given variable is of the specified type.]
		 */
		isType: function isType(argument, type){ 
			var x = typeof argument;
			if(x === null) return false;				
			if(type === 'array') return (argument instanceof Array);
			return (x === type);
		},

		/**
		 * [isDef Checks if a variable is defined. ]
		 * @param  {Mixed} argument [Variable to be tested for whether or not it is defined.]
		 * @return {Boolean} [Indicates whether or not the given variable is defined. ]
		 */
		isDef: function isDef(argument){
			return (!this.isType(argument,"undefined") && argument !== null);
		},

		/**
		 * [areDef Checks if all values in an array are defined. Returns false as soon as it finds an undefined variable. ]
		 * @param  {Array} array [Array of mixed variables to be tested for whether or not they are defined. ]
		 * @return {Boolean} [Indicates whether or not the given variables are all defined. ]
		 */
		areDef: function areDef(array){
			for (var i = 0; i < array.length-1; i++){ 
				if(!this.isDef(array[i])) return false; 
			}
			return true;
		},

		/**
		 * [areFalsey Checks if all values in an array are falsey. ]
		 * @param  {Array} array [Array of mixed variables be tested for whether or not they are falsey. ]
		 * @return {Boolean} [Indicates whether or not they are falsey. ]
		 */
		areFalsey: function areFalsey(array){
			for (var i = 0; i < array.length; i++){
				if(this.isTruthy(array[i])) return false;
			}
			return true;
		},

		/**
		 * [areTruthy Checks if all values in an array are truthy. ]
		 * @param  {Array} array [Array of mixed variables be tested for whether or not they are truthy. ]
		 * @return {Boolean} [Indicates whether or not they are truthy. ]
		 */
		areTruthy: function areTruthy(array){
			for (var i = 0; i < array.length; i++){
				if(this.isFalsey(array[i])) return false;
			}
			return true;
		},

		/**
		 * [arrayRemove Remove all items in a given array matching the specified value. ]
		 * @param  {Array} array [Array to remove the specified value from. ]
		 * @param  {Mixed} value [Value to remove from array. ]
		 * @return {Array}   [Array cleaned of given value. ]
		 */
		arrayRemove: function arrRemove(array, value){
		  for (var i = 0; i < array.length; i++){
		    if (array[i] === value){         
		      array.splice(i, 1);
		      i--;
		    }
		  }
		  return array;
		},

		/**
		 * [arrayRemoveWhere Removes an object from an array of objects where the key and it's value match that which is given.]
		 * @param  {Array} array [Array from which items are to be removed.]
		 * @param  {String} key   [Key of item to be removed]
		 * @param  {Mixed} value [Value specified, if matched, to be removed from given array.]
		 * @return {Array}       [New array without the specified key/value pair.]
		 */
		arrayRemoveWhere: function arrayRemoveWhere(array, key, value){
			var newarr = [];
			for (var i = array.length - 1; i >= 0; i--) {
				var x = array[i];
				if(U.isDef(x) && x[key] !== value) newarr.push(x);
			}
			return newarr;
		},

		/**
		 * [objFromArrayWhere Returns first occurance of key value pair inside an array]
		 * @param  {[type]} array [description]
		 * @param  {[type]} key   [description]
		 * @param  {[type]} value [description]
		 * @return {[type]}       [description]
		 */
		objFromArrayWhere: function objFromArrayWhere(array, key, value){
			var x;
		  for (var i = 0; i < array.length; i++){
		  	var y = array[i][key];
		  	if(y === value) x = array[i];
		  }
		  return x;
		},

		/**
		 * [hasGrandChildren Checks whether or not an object or array has a second level of depth]
		 * @param  {Object} object [Object or array to check for grandchildren]
		 * @return {Boolean} [Indicates wheter or not the object given has a second level of depth]
		 */
		hasGrandChildren: function hasGrandChildren(object){
			return this.countGrandChildren(object) > 0;
		},

		/**
		 * [countGrandChildren Counts the second level of depth on an object or array]
		 * @param  {Object} object [Object or array to count the number of grandchildren of]
		 * @return {Integer}   [Number of second level properties.]
		 */
		countGrandChildren: function countGrandChildren(object){
			var b = 0, self = this;
			this.each(object, function(k, v){ if(self.isDef(v)) b += (v.length || self.length(v)); });
			return b;
		},
		
		/**
		 * [objWithout Creates a new object without the specified properties.]
		 * @param  {Object}	object [Object to be returned without the specified properties.]
		 * @return {Object} [New object without the specified properties. ]
		 */
		objWithout: function objWithout(object, without){
			var newobj = {}, self = this;
			this.each(object, function(k, v){
				if(((self.isType(without, 'string') || self.isType(without, 'integer') && without !== "k") || (self.isArray(without) && !self.includes(without, k))) ) newobj[k] = v;
			});
			return newobj;
		},

		/**
		 * [objWithFrom Create a new object by pulling a specified list of properties from a given object. ]
		 * @param  {Array} arr  [Array should be a list of properties to take from the given object, and create a new object from. ]
		 * @param  {Object} from [Object from which to pull properties listed and create a new object. ]
		 * @return {Object}      [New object created from properties listed and given object.]
		 */
		objWithFrom: function objWithFrom(arr, from){
			var obj = {};
			for (var i = arr.length - 1; i >= 0; i--) {
				var x = arr[i];
				obj[x] = from[x];
			}
			return obj;
		},

		/**
		 * [length Gets array-like length of an object, array, or string (only checks top level)]
		 * @param  {Object}	object [Object to count the length of]
		 * @return {Integer} [Length of the top level of the object given]
		 */
		length: function length(object){
			if(this.isType(object, "array") || this.isType(object, "string")) return object.length;
			if(this.isType(object, "object")){
				var l = 0, i; for (i in object){ if (object.hasOwnProperty(i)) l++; } return l;
			}
		},

		/**
		 * [lengthDeep Finds the length of the object given including all child generations, and the objects themselves]
		 * @param  {Object} object [Object to be counted]
		 * @param  {String} format [If set to "values", it will return a count of all the non-object child values, if set to "childObjects", it will return a count of all child objects, if left undefined, it will default to a count of all children of all types.]
		 * @return {Integer} [Length of object and all it's children]
		 */
	  lengthDeep: function lengthDeep(object, format){
			return this.objFlatten(object, format).length;
	  },

		/**
		 * [objFlatten Takes all child generations of an object and puts them at the end of the top level, flattening the given object to a single level array.]
		 * @param  {Object} object [Object to be flattened]
		 * @param  {String} format [If set to "values", it will return all the non-object child values, if set to "childObjects", it will return all child objects, if left undefined, it will default to returning all children of all types.]
		 * @return {Array} [All values and child values of object given and it's sub-objects]
		 */
	  objFlatten: function objFlatten(object, format){
			var c = [], self = this;
	  	function loop(d){
	  		self.each(d, function(k, v){
	  			var isobj = self.isObject(v);
	  			switch(format){
	  				case "values":
		  				if(isobj) loop(v); else c.push(v);
	  				break;
	  				case "childObjects":
		  				if(isobj){
		  					loop(v);
		  					c.push(v);
		  				}
	  				break;
	  				default:
		  				if(isobj) loop(v);
		  				c.push(v);
	  			}
	  		});
			}
			loop(object);
			return c;
	  },

	  /**
	   * [objGetChildKeys Get an array of all property names from object.]
	   * @param  {Object} object [Object you want to collect the property names of.]
	   * @return {Array}        [Array of property names]
	   */
		getKeys: function objGetChildKeys(object){
			var arr = [];
			this.each(object, function(k, v){ arr.push(k); });
			return arr;
		},

		/**
		 * [each Loop through each item in an array, or object and call a specified callback function each time. ]
		 * @param  {Object|Array}   object   [Object or Array upon which the callback should be iterated. ]
		 * @param  {Function} callback [ Callback function to be called on each iteration. (First argument will be key of iteration, and second will be the value of the iteration)]
		 * @return {Object|Array} [After all callbacks are called for all items in array or object, it returns the resulting array or object. ]
		 */
		each: function each( object, callback ) {
			var length, i = 0;
			if ( this.isArray( object ) ) {
				length = object.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( object[ i ], i, object[ i ] ) === false ) break;
				}
			} else {
				for ( i in object ) {
					if ( callback.call( object[ i ], i, object[ i ] ) === false ) break;
				}
			}
			return object;
		},

		/**
		 * [objGetDeep Follows a linear path in a given object to return a sub-object]
		 * @param  {Object} object [Object to find sub-object within]
		 * @param  {String} path [Linear path of keys from top level into object given]
		 * @param  {String} delimiter [Delimiter in the variable "b" to split by]
		 * @return {Object}   [Sub-object in given object specified by path given options]
		 */
		getDeep: function objGetDeep(object, path, delimiter){
			var d = delimiter || '.', x = path.split(d), pi= 0, self = this;
			while(object && x.length){ 
				var i = x.shift(), e = object[i];
				if(!self.isDef(e)) console.warn("Unable to find '"+i+"' in child '"+pi+"'?");
				object = e; pi = i;
			}
			return object;
		},

		/**
		 * [objHasDeep Follows a linear path in a given object to return a boolean of whether or not the specified sub-object exists]
		 * @param  {Object} object [Object to find sub-object within]
		 * @param  {String} path [Linear path of keys from top level into object given]
		 * @param  {String} delimiter [Delimiter in the variable "b" to split by]
		 * @return {[type]}   [Indicates the given object contains the sub-object specified by the linear path given.]
		 */
		objHasDeep: function objHasDeep(object, path, delimiter){
			return this.isDef( this.objGetDeep(object, path, delimiter));
		},

		/**
		 * [truthyObject Removes all falsey values from the object given]
		 * @param  {Object} object [Object to be truthified]
		 * @return {Object} [Object with only truthy values]
		 */
		truthyObject: function truthyObject(object){
			return this.compactObject(object, true);
		},

		/**
		 * [falseyObject Removes all truthy values from the object given]
		 * @param  {Object} object [Object to be fasleyfied]
		 * @return {Object} [Object with only falsey values]
		 */
		falseyObject: function falseyObject(object){
			return this.compactObject(object, false);
		},

		/**
		 * [compactObject Removes all children from an object with specified booleanyness (uses lodash clone)]
		 * @param  {Object} object [Object to be compacted]
		 * @param  {Boolean} format [If set to true, removes all children with falsey values from the object given. If set to false, removes all children with truthy values from the object given.]
		 * @return {Object} [Compact Object]
		 */
		compactObject: function compactObject(object, format){
			var c = (this.isType(object, "array")) ? [] : {}, self = this;
			if(this.isDef(object))
				this.each(object, function(k, v){
					if(self.isType(v, 'object')) c[k] = self.compactObject(v, format);
					else if((!format && self.isFalsey(v)) || (format && self.isTruthy(v))) c[k] = v;
				});
			else return object;
			return c;
		},

		/**
		 * [ucfirst Capitalizes first letter of a string]
		 * @param  {String} string [String to have first letter capitalized]
		 * @return {String} [String produced]
		 */
		ucFirst: function ucFirst(string){ 
			return string.charAt(0).toUpperCase() + string.slice(1);
		},

		/**
		 * [lcFirst Lowercases first letter of a string. ]
		 * @param  {String} string [String to have first letter lowercased]
		 * @return {String} [String produced]
		 */
		lcFirst: function lcFirst(string){ 
			return string.charAt(0).toLowerCase() + string.slice(1);
		},

		/**
		 * [includes Check whether or not an array contains a value, an object contains a property, or a string contains a substring. ]
		 * @param  {Object|Array|String} argument [Array to find a value within]
		 * @param  {Mixed} value [Value to search for in array]
		 * @return {Boolean}   [Indicates whether or not the array given contains the value given]
		 */
	  includes: function includes(haystack, needle){
	  	if(this.isDef(haystack) && this.isDef(needle)){	
		  	switch(typeof haystack){
		  		case 'function':
		  		case 'string':
		  		case 'array': return (haystack.indexOf(needle) !== -1);
		  		case 'object': return this.isDef(haystack[needle]);
		  	}
	  	}
	  	return;
	  },

	  /**
	   * [merge Takes two objects and merges them together]
	   * @param  {Object} object   [Original object]
	   * @param  {Object} argument [Object to merge into original object]
	   * @param  {Boolean} overwrite  [True by default, if set to false, will not overwrite existing values in object with matching key, only adding new values that are yet unlisted unlisted]
	   * @return {Object}          [Object that has merged with argument object]
	   */
	  merge: function merge(object, argument, overwrite){
	  	var o = overwrite || true, self = this;
			function loop(x, y){
	  		self.each(y, function(k, v){
	  			if(self.isDef(x[k])){
	  				if(self.isType(x[k], 'object') && self.isType(v, 'object')) loop(x[k], v);
	  				else if(!o) return;
	  			} else x[k] = v;
		  	});
			}
	  	if(this.isDef(argument) && this.isDef(object)){
	  		loop(object, argument);
	  	}
	  	return object;
	  },

	  /**
	   * [stringToArray Split a string into an array of strings ( or integers where possible ) split by a delimiter]
	   * @param  {String} string [String to be split into an array]
	   * @param  {String} delimiter [Delimiter to split the given string by, defaulting to ",".]
	   * @return {Array} [Array of strings and integers(if anything was able to be converted to an integer)]
	   */
	  stringToArray: function stringToArray(string, delimiter){
	  	var y = delimiter || ",", x = string.split(y);
	  	for (var i = x.length - 1; i >= 0; i--){
	  		var n = parseInt(x[i], 0);
	  		if(!isNaN(n)) x[i] = n;
	  	}
	  	return x;
	  },

		/**
		 * [addpercent Converts a string of a number into an integer and adds a percentage specified.]
		 * @param  {String} a [A number (string of a whole integer) to have a percentage added to it.]
		 * @param  {Integer} b [A whole number representing a percentage to be added to the given number.]
		 * @return {Integer}   [Returns an integer of the number with the added percentage.]
		 */
		addPercent: function addPercent(percent, value){
			if(this.isString(percent)) percent = parseInt(percent, 10);
			if(this.isString(value)) value = parseInt(value, 10);
			if(this.isNumber(percent) && this.isNumber(value)) return value+(value*(percent/100));
			return;
		},

		/**
		 * [log10 Divide a number by it's base10 logarithm]
		 * @param  {Integer} a [Number to be divided]
		 * @return {Integer}   [Resulting integer value]
		 */
		log10: function log10(a){
			return Math.log(a) / Math.LN10;
		},

		/**
		 * [toRadians Find radian value of a given number]
		 * @param  {Integer} a [Number given]
		 * @return {Integer}   [Resulting integer value]
		 */
		toRadians: function toRadians(a){ 
			return a * Math.PI / 180;
		},

		/**
		 * [formatNumber Formats a number into a string with commas for thousands]
		 * @param  {Integer|String} a [Number you want to format.]
		 * @param  {String|Object} b [Format for the given number to be returned in (k, th, TH)]
		 * @return {String}   [Formatted string of the number given.]
		 */
		formatNumber: function formatNumber(a, b){
			function k(y){
				if (y >= 1000000000000) return (y / 1000000000000).toFixed(1).replace(/\.0$/, '') + 'T';
				else if (y >= 1000000000) return (y / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
		    else if (y >= 1000000) return (y / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
		    else if (y >= 1000) return (y / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
		    else return y;
			}
			function th(y, j, k){
				if (j === 1 && k !== 11) return y + "st";
		    else if (j === 2 && k !== 12) return y + "nd";
		    else if (j === 3 && k !== 13) return y + "rd";
		    else return y + "th";
			}
			function TH(y, j, k){
				if (j === 1 && k !== 11) return y + "ST";
		    else if (j === 2 && k !== 12) return y + "ND";
		    else if (j === 3 && k !== 13) return y + "RD";
		    else return y + "TH";
			}
			function commas(n){
				return n.toFixed().replace(new RegExp(/(\d)(?=(\d{3})+$)/g), '$1,');
			}
			if(this.isDef(b)){
				b = (this.isDef(b.option)) ? b.option : b;
				b = (this.isDef(b.options)) ? b.options : b;
				b = (this.isDef(b.format)) ? b.format : b;
			}
			if(this.isDef(a)){
				var x, y = (this.isType(a, 'integer')) ? a : parseInt(a);
				if(b === "k"){
					x = k(y);
				} else if(b === "th" || b === "TH"){
			    var j = y % 10, p = a % 100;
			    y = commas(y);
			    if(b === "th") x = th(y, j, p);
			    else x = TH(y, j, p);
				} else {
					x = commas(y);
					if(x === 0 && b === "noZero") x = "--";
				}
				return x;
			}
		},

		/**
		 * [numCommas Add commas to a string of numbers for thousands. ]
		 * @param  {String} string [String of numbers to add commas to for thousands. ]
		 * @return {String}   [Number string with commas for thousands. ]
		 */
		numCommas: function numCommas(string){
	    return string.toString().replace(/[^\d\.]/g,"").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
		},

		/**
		 * [regex Tests whether or not a given regular expression, or list of expressions, applies to a given string. Optionally can run an array of tests ("b") on the given string ("a").]
		 * @param  {String} argument [String to be tested against regular expression(s) of given names]
		 * @param  {String|Array} names [Name or array of names of regular expression(s) to test against given string]
		 * @param  {String} operator [Operator for when "names" is an array. Options include: and "&&", or "||" (Defaults to "&&")]
		 * @return {Boolean} [Indicates whether or not the given string fits the given regular expression]
		 */
		regex: function regex(argument, names, operator){
			if(this.isType(names, "string")) return this.exp.has(argument,names);
			else if(this.isType(names, "array")){
				for (var i = names.length - 1; i >= 0; i--){
					switch(operator){
						case "||": if(this.exp.has(argument,names[i])) return true;
						break;
						case "&&": if(!this.exp.has(argument,names[i])) return false;
						break;
						default: if(!this.exp.has(argument,names[i])) return false;
					}
				}
				if(operator === "||") return false; else return true;
			}
		 return false;
		},

		exp:{

			/**
			 * [exp.has Tests whether or not a given string ("a") passes a regular expression test ("b")]
			 * @param  {String} argument [String to be tested using regular expression by given name]
			 * @param  {String} name [Regular expression shortname to test against given string]
			 * @return {Boolean} [Indicates whether or not the given string fits the given regular expression]
			 */
			has: function has(argument, name){
				return (this.get(name).test(argument)) ? true : false;
			},
			
			/**
			 * [exp.get Creates a regular expression object by looking up the regex by name given]
			 * @param  {String} string [String of the name of the regular expression to return]
			 * @return {regularExpression}   [Regular expression object created by looking up the regex below]
			 */
			get: function get(string){
				return new RegExp(this[string]);
			},

			number: /([0-9])+/i,
			ein: /\d{2}\-\d{7}/i,
			lowercase: /([a-z])+/i,
			zip: /\d{5}(-\d{4})?/i,
			letter: /([A-Z][a-z])+/i,
			zipcode: /\d{5}(-\d{4})?/i,
			tag: /\B\#[\w0-9_-]{1,25}/g,
			special: /([^A-Za-z0-9\s])+/i,
			username: /\B@[\w\._-]{1,24}/g,
			alphanumeric: /([0-9a-zA-Z-_])+/i,
			name: /^([A-Z]){1}([ A-Za-z']){1,29}$/,
			scheme: /(^|[^\/])(www\.[\S]+\.[\w]+)(\b|$)/gim,
			website: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i,
			protocol: /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,
			email: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
			youtubeurl: /^https?:\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
			vimeourl: /https?:\/\/(?:www\.)?vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)([0-9]{8,11})/,
			timestamp: /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d)/,
			url: /((https?|ftp)\:\/\/)?([a-z0-9+!*(),;?&=\$_.-]+(\:[a-z0-9+!*(),;?&=\$_.-]+)?@)?([a-z0-9-.]*)\.([a-z]{2,3})(\:[0-9]{2,5})?(\/([a-z0-9+\$_\-~@\(\)\%]\.?)+)*\/?(\?[a-z+&\$_.-][a-z0-9;:@&%=+\/\$_.-]*)?(#[a-z_.-][a-z0-9+\$_.-]*)?/i,
			date: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/i
		},

		/**
		 * [hasNumber Checks whether or not a string contains a numeric character using a regular expression.]
		 * @param  {String}  argument [String to be checked]
		 * @return {Boolean}   [Indicates whether or not this string contains a numeric character.]
		 */
		hasNumber: function hasNumber(argument){ 
			return this.regex(argument, "number"); },

		/**
		 * [hasLetter Checks whether or not a string contains a letter using a regular expression.]
		 * @param  {String}  argument [String to be checked]
		 * @return {Boolean}   [Indicates whether or not this string contains a letter.]
		 */
		hasLetter: function hasLetter(argument){ 
			return this.regex(argument, "letter"); 
		},
		
		/**
		 * [hasSpecial Checks whether or not a string contains a special character using a regular expression.]
		 * @param  {String}  argument [String to be checked]
		 * @return {Boolean}   [Indicates whether or not this string contains a special character.]
		 */
		hasSpecial: function hasSpecial(argument){ 
			return this.regex(argument, "special");
		},

		/**
		 * [hasCapital Checks whether or not a string contains an uppercase letter using a regular expression.]
		 * @param  {String}  argument [String to be checked]
		 * @return {Boolean}   [Indicates whether or not this string contains an uppercase letter.]
		 */
		hasCapital: function hasCapital(argument){ 
			return this.regex(argument, "capital"); 
		},

		/**
		 * [hasLowercase Checks whether or not a string contains a lowercase letter using a regular expression.]
		 * @param  {String}  argument [String to be checked]
		 * @return {Boolean}   [Indicates whether or not this string contains a lowercase letter.]
		 */
		hasLowercase: function hasLowercase(argument){ 
			return this.regex(argument, "lowercase"); 
		},

		/**
		 * [isTag Checks wheter or not a string is a Tag]
		 * @param  {String}  argument [String to be checked]
		 * @return {Boolean}   [Indicates whether or not this string is a Tag]
		 */
		isTag: function isTag(argument){ 
			return this.regex(argument, "tag"); 
		},

		/**
		 * [isZip Checks wheter or not a string is a Zipcode]
		 * @param  {String}  argument [String to be checked]
		 * @return {Boolean}   [Indicates whether or not this string is a Zipcode]
		 */
		isZip: function isZip(argument){ 
			return this.regex(argument, "zip"); 
		},

		/**
		 * [isEIN Checks wheter or not a string is an EIN]
		 * @param  {String}  argument [String to be checked]
		 * @return {Boolean}   [Indicates whether or not this string is an EIN]
		 */
		isEIN: function isEIN(argument){ 
			return this.regex(argument, "ein"); 
		},


		/**
		 * [isDate Checks wheter or not a string is a date]
		 * @param  {String}  argument [String to be checked]
		 * @return {Boolean}   [Indicates whether or not this string is a date]
		 */
		isDate: function isDate(argument){ 
			return this.regex(argument, "date"); 
		},

		/**
		 * [isEmail Checks wheter or not a string is an email]
		 * @param  {String}  argument [String to be checked]
		 * @return {Boolean}   [Indicates whether or not this string is an email]
		 */
		isEmail: function isEmail(argument){ 
			return this.regex(argument, "email"); 
		},

		/**
		 * [isName Checks wheter or not a string is a user name]
		 * @param  {String}  argument [String to be checked]
		 * @return {Boolean}   [Indicates whether or not this string is a user name]
		 */
		isName: function isName(argument){ 
			return this.regex(argument, "name"); 
		},

		/**
		 * [isWebsite Checks whether or not this string is formatted as a website url. ]
		 * @param  {String}  argument [String to be checked for whether or not this string is formatted as a website url. ]
		 * @return {Boolean}   [Indicates whether or not this string is formatted as a website url. ]
		 */
		isWebsite: function isWebsite(argument){ 
			return this.regex(argument, "website"); 
		},

		/**
		 * [isTimestamp Checks wheter or not a string is formatted as a timestamp. ]
		 * @param  {String}  argument [String to be checked for whether or not it is formatted as a timestamp. ]
		 * @return {Boolean}   [Indicates whether or not this string is formatted as a timestamp. ]
		 */
		isTimestamp: function isTimestamp(argument){ 
			return this.regex(argument, "timestamp"); 
		},

		/**
		 * [allowedLength Checks whether or not a string is within the required character count limitations.]
		 * @param  {String} a [String to be checked]
		 * @param  {Integer} b [Minimum character count]
		 * @param  {Integer} c [Maximum character count]
		 * @return {Boolean}   [Indicates whether or not the string is between the minimum and maximum character limits]
		 */
		allowedLength: function allowedLength(argument, min, max){
			return (this.isDef(argument) && argument.length >= min && argument.length <= max) ? true : false;
		},

		/**
		 * [objToConstructor Transform an object of properties into a constructor. ]
		 * @param  {Object} object [An object of properties to turn into a constructor. ]
		 * @param  {String} name   [The name to be given to the constructor being created. ]
		 * @return {Constructor}        [Constructor built from the given properties. ]
		 */
		objToConstructor: function objToConstructor(object, name){
			var self = this, fn = function(){};
			if(this.isDef(name)) fn = this.renameFunction(name, fn);
			return self.merge(fn, object);
		},
		
		/**
		 * [renameFunction Rename a javascript function. ]
		 * @param  {String}   name [Name to be applied to the given function. ]
		 * @param  {Function} fn   [Function to be renamed. ]
		 * @return {Function}        [Function renamed. ]
		 */
		renameFunction: function renameFunction(name, fn) {
			return (new Function("return function (call) { return function "+ name +" () { return call(this, arguments) }; };")())(Function.apply.bind(fn));
		},
		
		/**
		 * [logIt Tool for robust logging of your app's processes console log, checkpoint, warn, info, and error interactions. ]
		 * @param  {Array|String} x       [List of entries to be logged in the console.]
		 * @param  {String} type    [Type of function to use in the console, (warn, error, info, checkpoint)]
		 * @param  {Object} options [options = {activated: Boolean describing wether or not to log it live to the console.}]
		 */
		logIt: function logIt(messages, type, options){
			var debug = options.debug, y;
			function print(z){
				switch(type){
					case "error": console.error(z); break;
					case "info": console.info(z); break;
					case "warn": console.warn(z); break;
					default: 
						if(U.isDef(y) && U.isType(z, 'string') && type === "checkpoint") z = "\u2713 " + z;
						console.log(z);
				}
			}
			if( options.activated ){
				if(this.isType(messages, 'array')){
					for (var i = 0; i <= messages.length - 1; i++) {
						print(messages[i]);
					}
				} else print(messages);
				if(debug === "debug") debugger;
			}
		}

	};


	if(U.isDef(module) && U.isDef(module.imports)) module.exports = U;
	if(U.isDef(window)) window.U = U;
	
}());