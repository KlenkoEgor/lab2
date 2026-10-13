'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
	Connor: '+380501234567',
	Kara: '+380679876543',
	name: '+380935551122'
};

const findPhoneByName = (name) => phonebook[name];



module.exports = { phonebook, findPhoneByName };
