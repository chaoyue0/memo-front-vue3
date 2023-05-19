function getTag(value: any) {
	if (value == null) {
		return value === undefined ? '[object Undefined]' : '[object Null]';
	}
	return Object.prototype.toString.call(value);
}

export function isObjectLike(value: any) {
	return typeof value == 'object' && value !== null;
}

//Number
export function isNumber(value: any) {
	return typeof value === 'number' || (isObjectLike(value) && getTag(value) === '[object Number]');
}

//String
export function isString(value: any) {
	return typeof value === 'string' || (isObjectLike(value) && getTag(value) === '[object String]');
}

//Boolean
export function isBoolean(value: any) {
	return typeof value === 'boolean' || (isObjectLike(value) && getTag(value) === '[object Boolean]');
}

//Object
export function isObject(value: any) {
	return isObjectLike(value) || typeof value === 'function';
}

//Function
export function isFunction(value: any) {
	if (!isObject(value)) {
		return false;
	}
	return getTag(value) === '[object Function]' || getTag(value) === '[object AsyncFunction]' || getTag(value) === '[object GeneratorFunction]';
}

//Array
export function isArray(value: any) {
	if (!isObject(value)) {
		return false;
	}
	return Array.isArray(value) || value instanceof Array || getTag(value) === '[object Array]';
}

//Date
export function isDate(value: any) {
	if (!isObject(value)) {
		return false;
	}
	return getTag(value) === '[object Date]';
}

//Set
export function isSet(value: any) {
	if (!isObject(value)) {
		return false;
	}
	return getTag(value) === '[object Set]';
}

//Map
export function isMap(value: any) {
	if (!isObject(value)) {
		return false;
	}
	return getTag(value) === '[object Map]';
}

//Error
export function isError(value: any) {
	if (!isObject(value)) {
		return false;
	}
	return getTag(value) === '[object Error]';
}

//Proxy
export function isProxy(value: any) {
	if (!isObject(value)) {
		return false;
	}
	if (typeof Proxy !== 'undefined') {
		getTag(value) === '[object Proxy]';
	} else {
		getTag(value) === '[object Object]';
	}
}
