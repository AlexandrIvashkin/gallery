import React from 'react';

class AddImg extends React.Component {
	constructor(props) {
  		super(props);

  		this.handleSubmit = this.handleSubmit.bind(this);
  		this.toogleVisibleClick = this.toogleVisibleClick.bind(this);
	};

	getVisible(vis){
		if(vis == true){
			return {display: 'block'}
		}
		else{
			return {display: 'none'}
		}
	}

	toogleVisibleClick(){
		let vis = this.props.visible;
		this.props.showMenu(!vis);
	}

	handleSubmit(e){
      e.preventDefault();
      let url = this.refs.url.value;
      let comment = this.refs.comment.value;
      this.props.addImg( url, comment);
      this.toogleVisibleClick();
	}

	render(){
		return(
			<div>	
				<div className='addImage' onClick={this.toogleVisibleClick}><span>Добавить изображение</span></div>
		       	<div className='entryField' style={this.getVisible(this.props.visible)}>
		       		<div>
		       			<span className='closed' onClick={this.toogleVisibleClick}>x</span>
		       			<form onSubmit={this.handleSubmit} className='addImgForm'>
		       				<p>Введите Url изображения:</p>
  							<input type = 'text' ref='url' size='30' rows='1' /><br/>
  							<p>Введите комментарий:</p>
  							<input type = 'text' ref='comment' size='30' rows='1' /><br/>
  							<input type='submit' value='Изменить' />
  						</form>
		       		</div>
		       	</div>
		    </div>
		)
	}
}
export default AddImg;