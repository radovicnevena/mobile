import {useState} from "react";
import * as service from "../services/adverts.service";

function AdvertPurchaseListItem(props) {
	const [advert, setAdvert] = useState(props.advert);
	const handleRent = () => {
		const purchasedAdvert = {...advert, purchased: !advert.purchased};
		service.update(purchasedAdvert)
			.then(setAdvert);
	};

	return (
		<li className={"collection-item avatar red lighten-2 white-text" + (advert.purchased ? " purchased" : "")}>
			<img src={advert.image} alt="Advert" className="circle"/>
			<span style={advert.purchased ? {textDecoration: "line-through"} : {}} className="title">{advert.model}</span>
			<p>
				Memory: {advert.memory} <br/>
				Cpu: {advert.cpu} <br/>
				Storage: {advert.storage} <br/>
				Camera: {advert.camera} <br/>
				Price: {advert.price} <br/>
				Purchased: {advert.purchased ? "Purchased" : ""} <br/>
			</p>
			<p className="truncate">
				{advert.description}
			</p>
			{!advert.purchased ?
				<button onClick={handleRent} className="btn secondary-content white black-text">
					Purchase
				</button>
				:
				<button onClick={handleRent} className="btn secondary-content white black-text">
					Return
				</button>
			}
		</li>);
}

export default AdvertPurchaseListItem;
