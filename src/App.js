import React,{Component} from 'react'
import {Header,MovieList,MovieDetails} from './Components'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      movieElement:[
        {
          title: 'The Godfather',
          img: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR3,0,140,209_AL_.jpg',
          details: 'R | 175 min | Crime, Drama',
          description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
        },
        {
          title: 'Apocalypse Now',
          img: 'https://imgr.cineserie.com/2021/05/affiche-article-e1622452922223.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1',
          details: 'R | 147 min | Drama, War',
          description: 'During the Vietnam War, Captain Willard is sent on a dangerous mission into Cambodia to assassinate a renegade Colonel who has set himself up as a god among a local tribe.'
        }, 
        
      ],
      selectedMovie:0,
    }
  }
  render() {
    return (
      <div className="App d-flex flex-column">
        <Header/>
        <div className="d-flex border flex-row flex-fill">
          <MovieList/>
          <MovieDetails movieElement={this.state.movieElement[this.state.selectedMovie]}/>
        </div>
      </div>
    ); 
  }
  
}

export default App;
