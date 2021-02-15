import {useEffect, useState} from "react";
import AdvertPurchaseListItem from "../components/AdvertPurchaseListItem";
import * as service from "../services/adverts.service";

function PurchasePage() {
	const [adverts, setAdverts] = useState([]);

	useEffect(() => {
		service.getAll()
			.then(setAdverts);
	}, []);

	return <div className="container">
		<ul className="collection">
			{adverts.map(advert => <AdvertPurchaseListItem advert={advert}/>)}
		</ul>
	</div>;
}

export default PurchasePage;
