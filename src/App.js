import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ViewportProvider from './containers/Viewport';
import { useCartMenu, useToggle } from './hooks/useToggle';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductsPage from './pages/ProductsPage';
import './styles/app.css';

const App = () => {
	const [isOpen, handleToggle] = useToggle();
	const [openCartMenu, closeCartMenu, handleCartMenu] = useCartMenu();
	return (
		<ViewportProvider>
			<Header
				isOpen={isOpen}
				handleToggle={handleToggle}
				openCartMenu={openCartMenu}
				closeCartMenu={closeCartMenu}
				handleCartMenu={handleCartMenu}
			/>
			<main id="main" className="main app-main">
				<Switch>
					<Route
						exact
						path="/"
						component={() => <ProductsPage openValue={isOpen} />}
					/>
					<Route path="/products/:id" component={ProductDetailsPage} />
				</Switch>
			</main>
		</ViewportProvider>
	);
};

export default App;
