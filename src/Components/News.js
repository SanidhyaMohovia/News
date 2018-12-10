import React,{Component} from 'react';
export default class News extends Component{
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
    More = index => {
      const id = this.state.hits[index].id;
      const name = this.state.hits[index].name;
      const description = this.state.hits[index].description;
      const url = this.state.hits[index].url;
      const category = this.state.hits[index].category;
      const language = this.state.hits[index].language;
      const country = this.state.hits[index].country;
      this.props.history.push({
             pathname:`/more/${id}`,
             state:{
                 name:`${name}`,
                 description:`${description}`,
                 url:`${url}`,
                 category:`${category}`,
                 language:`${language}`,
                 country:`${country}`
              }
            });
    }
    Favorites = (index) => {
      const fav = {...this.state.fav};
      fav[index] = fav[index] + 0 || 1;
      this.setState({fav});
      this.props.history.push({
             pathname:`/fav`,
             state:{
          
              }
            });
    }
  render(){
    return(
          <div className='container  main'>
           <div className="row">
              {this.state.hits.map((p, index)=>{return(
              <div className="col-sm-4" key={index}>
                 <div className="card">
                    <div className="card-body">
                       <h5 className="card-title">{p.name}</h5>
                       <p className="card-text">{p.category}</p>
                       <a className="button pointer" onClick={this.More.bind(this, index)}>More</a>
                       <a><i className="far fa-star" onClick={this.Favorites.bind(this, index)}></i></a>
                    </div>
                 </div>
              </div>
              );})}
       </div>
    </div>
    )
  }
}
