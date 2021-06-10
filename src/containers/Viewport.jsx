import React from 'react';
import { useViewport } from '../hooks/useViewport';

const ViewportProvider = ({ children }) => {
	const [width, height, ViewportContext] = useViewport(
		window.innerWidth,
		window.innerHeight,
	);
	return (
		<ViewportContext.Provider value={{ width, height }}>
			{children}
		</ViewportContext.Provider>
	);
};

export default ViewportProvider;
