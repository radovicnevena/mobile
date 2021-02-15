import M from "materialize-css/dist/js/materialize.min";
import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router";
import * as service from "../services/adverts.service";

function AdvertEditPage() {
	const {id} = useParams();
	const history = useHistory();
	const [advert, setAdvert] = useState({});

	useEffect(() => {
		service.getById(id)
			.then(setAdvert)
			.catch(() => {
				if (id !== "new"){
					history.replace("/adverts/new");
				}
				setAdvert({})
			});
	}, []);

	useEffect(() => {
		M.updateTextFields();
	}, [advert]);

	const handleInput = ({currentTarget: input}) => {
		setAdvert({...advert, [input.name]: input.value});
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		if (advert.id) {
			service.update(advert)
				.then(_advert => {
					setAdvert(_advert);
					alert("Updated");
				});
		} else {
			service.save(advert)
				.then(_advert => {
					setAdvert(_advert);
					alert("Saved");
					history.replace("/adverts");
				});
		}
	};

	const handleDelete = () => {
		service.deleteById(advert.id)
			.then(()=> history.replace("/adverts"));
	}

	return <div className="container">
		<form onSubmit={handleSubmit}>
			<div className="row">
				<div className="input-field col s12 m6 l4">
					<img style={{height: 200}} src={advert.image}/>
					<input value={advert.image}
					       onChange={handleInput}
					       name="image"
					       placeholder="image"
					       id="image"
					       type="text"/>
					<label htmlFor="image">Image</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m6 l4">
					<input value={advert.model}
					       onChange={handleInput}
					       name="model"
					       placeholder="Eg. Xiaomi Mi A2"
					       id="model"
					       type="text"/>
					<label htmlFor="model">Model</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m6 l4">
					<input value={advert.memory}
					       onChange={handleInput}
					       name="memory"
					       placeholder="Eg. 4GB"
					       id="memory"
					       type="text"/>
					<label htmlFor="memory">Memory</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m6 l4">
					<input value={advert.cpu}
					       onChange={handleInput}
					       name="cpu"
					       placeholder="Eg. 4 x 1.8 GHz"
					       id="cpu"
					       type="text"/>
					<label htmlFor="cpu">Cpu</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m6 l4">
					<input value={advert.storage}
					       onChange={handleInput}
					       name="storage"
					       placeholder="Eg. 64GB"
					       id="storage"
					       type="text"/>
					<label htmlFor="storage">Storage</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m6 l4">
					<input value={advert.camera}
					       onChange={handleInput}
					       name="camera"
					       placeholder="Eg. 21MPix back, 2MPix front"
					       id="camera"
					       type="text"/>
					<label htmlFor="camera">Camera</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m6 l4">
					<input value={advert.price}
					       onChange={handleInput}
					       name="price"
					       placeholder="Eg. 100E"
					       id="price"
					       type="text"/>
					<label htmlFor="price">Price</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12 m6 l4">
					<textarea className="materialize-textarea"
					          value={advert.description}
					          onChange={handleInput}
					          name="description"
					          placeholder="Description"
					          id="description"/>
					<label htmlFor="description">Description</label>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<button className="btn">Save</button>
					<br/>
					<button className="btn red" type="button" onClick={handleDelete}>Delete</button>
				</div>
			</div>
		</form>
	</div>;
}

export default AdvertEditPage;
