//TODO refesh nakon delete
import React, { Component } from 'react'

class DeletePage extends Component{
  
  constructor(){
    super();
    this.state = {
      loaded: false,
      deleted: false
    }
  }

  componentDidMount(){
    fetch("http://localhost:5000")
    .then(response => response.json()
    .then(data => this.setState(
      {
        loaded: true,
        posts: data
      }
    ))
    ) 
  }

  onDeleteClick(id) {
    fetch(`http://localhost:5000/delete/${id}`).then((response) => {
      this.setState({ deleted: true }, () => {
        console.log(this.state);
      });
    });
  }

  render(){
    if(this.state.loaded === false){
      return <h1>Component is loading</h1>
    }
    else{
      return <div> 
        {this.state.posts.map(post=>{
            return(
              <div>
                <h1>{post.title}</h1>
                <button onClick={()=>this.onDeleteClick(post.id)}>Delte Post</button>
              </div>
            )
          }
        )}
      </div>
    }
  }

}

export default DeletePage;
