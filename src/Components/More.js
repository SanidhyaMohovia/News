import React,{Component} from 'react';
import Header from './Header';
export default class More extends Component{
  render(){
    return(
      <div>
        <Header/>
        <table className='text-center'>
          <tr>
            <th>Name</th>
            <td>{this.props.location.state.name}</td>
          </tr>
          <tr>
            <th>Description</th>
            <td>{this.props.location.state.description}</td>
          </tr>
          <tr>
            <th>URL</th>
            <td><a href={this.props.location.state.url} target="_blank">{this.props.location.state.url}</a></td>
          </tr>
          <tr>
            <th>Category</th>
            <td>{this.props.location.state.category}</td>
          </tr>
          <tr>
            <th>Language</th>
            <td>{this.props.location.state.language}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>{this.props.location.state.country}</td>
          </tr>
        </table>
      </div>
    )
  }
}
