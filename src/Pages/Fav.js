import React,{Component} from 'react';
import '../App.css';
import Header from '../Components/Header';
export default class Fav extends Component{
  constructor(props)
  {
    super(props);

    this.state = {
      hits:[],
      fav:{}
    };
  }
  componentDidMount() {
      fetch('https://newsapi.org/v2/sources?language=en&apiKey=303fbde54f69465c9f498b63fb79870a')
        .then(response => response.json())
        .then(data  => this.setState({hits:data.sources} ));
    }
  render(){
    return(
      <div>
        <Header currentIndex={this.props.location.pathname}/>
        <p>{this.props.location.state.name}</p>
        <p>hiii</p>

      </div>
    )
  }
}
