export const sortAscending = (arr, key) => {
	return arr.sort((a, b) => {
		if (a[key] > b[key]) {
			return 1;
		}
		if (b[key] > a[key]) {
			return -1;
		}
		return 0;
	});
};

export const sortDescending = (arr, key) => {
	return arr.sort((a, b) => {
		if (b[key] > a[key]) {
			return -1;
		}
		if (a[key] > b[key]) {
			return 1;
		}
		return 0;
	});
};

export const searchArray = (arr, keyword) => {
	const searchTerm = keyword.toLowerCase();
	return arr.filter(
		(value) =>
			value.title.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
			value.category.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
			value.description.toLowerCase().match(new RegExp(searchTerm, 'g')),
	);
};
