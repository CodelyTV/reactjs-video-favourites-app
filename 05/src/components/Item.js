import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class Item extends PureComponent{
	render(){
		const { id, thumbnail, title } = this.props.data;
		return (<Link className="grid-item-link" to={`/${id}`}>
			<div className="grid-item" >
				<img className="preview-image" src={thumbnail} alt={title}/>
				<div className="preview-title">{title}</div>
			</div>
		</Link>);
	}
}

Item.propTypes = {
	data: PropTypes.object.isRequired
};

export default Item;