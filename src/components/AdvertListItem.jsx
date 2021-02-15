import {Link} from "react-router-dom";

function AdvertListItem({advert}) {
	return (
		<li className="collection-item avatar red lighten-2 white-text">
			<img src={advert.image} alt="Advert" className="circle"/>
			<span className="title">{advert.model}</span>
			<p>
				Memory: {advert.memory} <br/>
				Cpu: {advert.cpu} <br/>
				Storage: {advert.storage} <br/>
				Camera: {advert.camera} <br/>
				Price: {advert.price} <br/>
				{advert.purchased ? "Purchased" : ""} <br/>
			</p>
			<p className="truncate">
				{advert.description}
			</p>
			<Link to={`/adverts/${advert.id}`} className="secondary-content white-text"><i className="material-icons">edit</i></Link>
		</li>);
}

export default AdvertListItem;
