import { useState } from 'react';

export const useToggle = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		return setIsOpen(!isOpen);
	};

	const handleClose = () => setIsOpen(false);

	return [isOpen, handleToggle, handleClose];
};

export const useCartMenu = () => {
	const [openCartMenu, setOpenCartMenu] = useState(false);

	const handleCartMenu = () => {
		return setOpenCartMenu(!openCartMenu);
	};

	const closeCartMenu = () => {
		return setOpenCartMenu(false);
	};

	return [openCartMenu, closeCartMenu, handleCartMenu];
};
