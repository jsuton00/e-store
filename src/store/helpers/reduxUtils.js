export const updateObjects = (oldObject, updatedProperties) => ({
	...oldObject,
	...updatedProperties,
});

export const cartItemObject = (product, quantity) => ({
	...product,
	quantity,
});
