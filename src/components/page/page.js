import React, {Component, Fragment} from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default class Page extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      class: STATUS.NORMAL,
      newInputValue: "",
      sites: [
        "www.bpol.net",
        "www.facebook.com",
        "www.hbo.go"
      ]
    };
  }
  
  // pickName = (title) =>{
  //   //   return this.state.sites.filter((site)=>{return title === site})
  //   // }
  //   //
  //   // handleInputChange = e => {
  //   //   this.setState({newInputValue: e.target.value});
  //   // };
  //   //
  //   // handleFormSubmit = e => {
  //   //   e.preventDefault()
  //   //   this.pickName(this.state.newInputValue).length  ? console.log('yes') : console.log('no')
  //   //   this.setState({newInputValue: ""});
  //   // }
  
  onMouseEnter = () => {
    this.setState({class: STATUS.HOVERED});
  }
  
  onMouseLeave = () => {
    this.setState({class: STATUS.NORMAL});
  }
  
  render() {
    const{newInputValue} = this.state
    return (
      <Fragment>
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.props.page}
      </a>
      </Fragment>
    );
  }
}
