import React,{Component} from 'react';
import Paper from './Images/paper.jpg';
export default class Header extends Component{
  render(){
    return(
      <div className='container-fluid'>
        <div className='row heading' >
          <div className='col-sm-2'>
              <img src={Paper} alt='paper'/>
          </div>
          <div className='col-sm-6'>
              <h1>News Of The Day</h1>
          </div>
          <div className='col-sm-4 buttons'>
            <div className="buttons">
               {
               (this.props.currentIndex === '/')?<a className='button active' href="/">
               Home
               </a>:<a className='button' href="/">Home</a>
               }
               {
               (this.props.currentIndex === '/fav')?<a className='button active' href="/fav">
               Favourite
               </a>:<a className='button' href="/fav">Favourite</a>
               }
            </div>
          </div>
        </div>


      </div>
    )
  }
}
