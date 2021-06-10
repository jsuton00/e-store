export const updateObjects = (oldObject, updatedProperties) => ({
	...oldObject,
	...updatedProperties,
});

export const orderItemObject = (productId, quantity) => ({
	productId: productId,
	quantity: quantity,
});
