import { createContext, useContext, useEffect, useState } from 'react';

const ViewportContext = createContext({});
export const useViewport = (viewportWidth, viewportHeight) => {
	const [width, setWidth] = useState(viewportWidth || window.innerWidth);
	const [height, setHeight] = useState(viewportHeight || window.innerHeight);

	useEffect(() => {
		const timer = setTimeout(() => {
			const handleWindowResize = () => {
				setWidth(window.innerWidth);
				setHeight(window.innerHeight);
			};

			window.addEventListener('resize', handleWindowResize);

			return () => {
				window.removeEventListener('resize', handleWindowResize);
			};
		}, 5000);

		return () => {
			clearTimeout(timer);
		};
	}, []);
	return [width, height, ViewportContext];
};

export const useViewportContext = () => {
	const { width, height } = useContext(ViewportContext);
	return [width, height];
};
