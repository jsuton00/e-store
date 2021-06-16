export const roundPrices = (value) => {
	return Number(value).toFixed(2);
};

export const calculateTotalPrice = (price1, price2) => {
	let sum = price1 * price2;
	return roundPrices(sum);
};
