export const updateObjects = (oldObject, updatedProperties) => ({
	...oldObject,
	...updatedProperties,
});

export const cartItemObject = (product, quantity) => ({
	...product,
	quantity,
});

export const userObject = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
};
