import {Route, Switch} from "react-router";
import AdvertEditPage from "../pages/AdvertEditPage";
import AdvertsPage from "../pages/AdvertsPage";
import PurchasePage from "../pages/PurchasePage";


function Routes() {
	return (
		<Switch>
			<Route path="/adverts/:id">
				<AdvertEditPage/>
			</Route>
			<Route exact path="/buy">
				<PurchasePage/>
			</Route>
			<Route exact path="/adverts">
				<AdvertsPage/>
			</Route>
			<Route>
				<AdvertsPage/>
			</Route>
		</Switch>
	);
};

export default Routes;
