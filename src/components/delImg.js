import React from 'react';

class DelImg extends React.Component {
	constructor(props) {
  		super(props);

  		this.delImg = this.delImg.bind(this);
	};

	delImg(){
		{/*closed form for edit comment*/}
		$('.imgComment form').css({'display': 'none'});
		this.props.delImg(this.props.index);
	}

	render(){
		return(
			<div className='delImg' onClick={this.delImg}>X</div>
		)
	}
}

export default DelImg;