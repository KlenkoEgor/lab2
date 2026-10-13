'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

//obj1.name = 'John Snow'; // значення поля в ключі name зміниться
//obj2.name = 'John snow';  // значення поля в ключі name змінится
//obj1 = {name: 'John Snow king in the North'} - помилка, константу змінювати не можна 
//obj2 = {name:'John Snow king in the North'} //спрацює, obj2 - змінна
const fn = () => {
	const obj1 = {name: 'Jon'};
	let obj2 = {name: 'Jon'};

	obj1.name = 'Jon Snow'; 
    obj2.name = 'Jon snow'; 

	obj2 = {name:'Jon Snow king in the North'};
};



module.exports = { fn };
