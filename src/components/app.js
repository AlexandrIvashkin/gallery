import React from 'react';
import actions from './redux/actions.js';
import { connect } from 'react-redux';
import './1.scss';

import strImg from '../img/str.png';

import AddImg from './addImg.js';
import DelImg from './delImg.js';
import EditComment from './editComment.js';

class App extends React.Component {
	constructor(props) {
  		super(props);
  		this.visibleDelImg = this.visibleDelImg.bind(this);
  		this.hiddenDelImg = this.hiddenDelImg.bind(this);
	};

	visibleDelImg(e){
		let imgContainer = e.currentTarget;
		$(imgContainer).find('.elementsControl').css({'display': 'block'})
	}

	hiddenDelImg(e){
		$('.elementsControl').css({'display': 'none'})
	}

	imgGallery(obj, index){
		return(
			<div>
				<a href={obj.img} data-toggle='lightbox' data-gallery='example-gallery' >
					<img src={obj.img} className='img-fluid'/>
				</a>
				<EditComment title={obj.title} editComment ={this.props.editComment} index={index}/>
			</div>
		)
	}

	getDateGallery(dateStorage) {
		let dataGellery = dateStorage.map((obj, index)=> (
			<div key={index} className='col-xs-12 col-sm-6 col-md-4' onMouseOver={this.visibleDelImg} onMouseOut={this.hiddenDelImg}>
				{this.imgGallery(obj, index)}
				<div className='elementsControl'>
					<DelImg delImg={this.props.delImg} index={index}/>
					<div id='str'><img src={strImg}/></div>
				</div>
			</div>));
		return dataGellery;
	}

	render(){
		return (
			<div className='gallery container'>
		        <div className='row galleryContainer' id='sortContainer'>
					{this.getDateGallery(this.props.gallery)}
		       	</div>
		       	<AddImg visible={this.props.visible} showMenu = {this.props.showMenu} addImg = {this.props.addImg}/>
			</div>
		)
	}
}

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$(function() {
    $('#sortContainer').sortable({placeholder: 'borderForDADContainer'}); 
});

function mapStateToProps (state) {
  return {
   	visible: !!(+state.menu),
   	gallery: state.gallery
  }
};

export default connect(mapStateToProps, actions)(App);