'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
	{name: 'Connor', phone: '+380501234567'},
	{name: 'Kara', phone: '+380679876543'},
	{name: 'Markus', phone: '+380935551122'}
];

const findPhoneByName = (name) => {
	for (const o of phonebook) {
		if(o.name === name){
			return o.phone 
		}
	}
};

module.exports = { phonebook, findPhoneByName };
