import {useEffect, useState} from "react";
import AdvertListItem from "../components/AdvertListItem";
import * as service from "../services/adverts.service";

function AdvertsPage() {
	const [adverts, setAdverts] = useState([]);

	useEffect(() => {
		service.getAll()
			.then(setAdverts);
	}, []);

	return <div className="container">
		<ul className="collection">
			{adverts.map(advert => <AdvertListItem advert={advert}/>)}
		</ul>
	</div>;
}

export default AdvertsPage;
