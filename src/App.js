import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ViewportProvider from './containers/Viewport';
import { useCartMenu, useToggle } from './hooks/useToggle';
import LoginPage from './pages/LoginPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductsPage from './pages/ProductsPage';
import SignUpPage from './pages/SignUpPage';

const App = () => {
	const [isOpen, handleToggle, handleClose] = useToggle();
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
						component={() => (
							<ProductsPage openValue={isOpen} handleClose={handleClose} />
						)}
					/>
					<Route path="/products/:id" component={ProductDetailsPage} />
					<Route exact path="/account/login" component={LoginPage} />
					<Route exact path="/account/create" component={SignUpPage} />
				</Switch>
			</main>
		</ViewportProvider>
	);
};

export default App;
