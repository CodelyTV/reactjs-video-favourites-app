import React, { Component } from 'react';
import Loading from './Loading';
import Item from './Item';
import Header from './Header';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      videos: null
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    //Llamada a API externa
    setTimeout(() => {
      this.setState({ isLoading: false , videos:[{  
      id:0,
      title:'¿Qué es CodelyTV? 🍄🔝 - Formación para programadores y divulgación del mundo del desarrollo',
      url:'https://www.youtube.com/watch?v=rpMQd2DazTc',
      thumbnail:'https://img.youtube.com/vi/rpMQd2DazTc/maxresdefault.jpg',
    },
    {   
      id:1,
      title:'Introducción a PHP: Cómo configurar tu entorno de desarrollo 🐘',
      url: 'https://www.youtube.com/embed/watch?v=v2IjMrpZog4',
      thumbnail: 'https://img.youtube.com/vi/v2IjMrpZog4/maxresdefault.jpg',
    }]});
    },2000);
  }
  render() {
    const { videos,  isLoading } = this.state;
    if (isLoading) {
      return <Loading message="Cargando ..."/>;
    }
    return (<React.Fragment>
        <Header onClickAdd={this.handleAdd} />
        <div className="container">
          <div className="grid-container">
              {
                videos && videos.map((video,i) => {
                  return (<Item key={i} data={video}/>)
                })
              }
          </div>
        </div>
     </React.Fragment>);
  }
}

export default List;