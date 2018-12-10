import React, {Component} from 'react';
import '../App.css';
import Header from '../Components/Header';
import News from '../Components/News';
export default class Home extends Component{
  render(){
    return(
      <div>
        <Header currentIndex={this.props.location.pathname}/>
        <News history = {this.props.history}/>
      </div>
    )
  }
}
