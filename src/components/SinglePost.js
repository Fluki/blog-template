import { Component } from 'react';

class SinglePost extends Component {
  constructor()
  {
    super();
    this.state = {
      isLoaded: false,
      isFailed: false,
        deleted: false
    }
    // this.id = this.props.id;
  }
  
  componentDidMount() {
    fetch(`http://localhost:5000/blogs/${this.props.id}`)
      .then(response => {
        response.json().
          then(data => {
            // vraca niz sa jedim elementom
            if( data.length === 0 )
            {
              this.setState({isFailed:true})
            }
            else
            {
              this.setState(
                {
                  isLoaded: true,
                  post:data[0]
                }
              );
            }       
      })
      }).catch(
        (err) => {
          this.setState({isFailed:true})
          console.log(err);
      }
    )
  }

    delete(){
        fetch(`http://localhost:5000/delete/${this.props.id}`)
        .then(response => {
            this.setState({deleted: true}, ()=>{console.log(this.state)});
        });

    }

  render()
  {
      if (this.state.deleted === true) {
        return <h1> Post was successfully deleted </h1>
      }

    if (this.state.isFailed === true) {
      return <h1> Error, page not found </h1>
    }

    if (this.state.isLoaded === false) {
      return(<h1>Component is loading...</h1>)
    }

    else {
    return (
      // Dodati laoding state i upisati post u state

      <div>
          <div id="post" >
            <h1>{this.state.post.title}</h1>
            <span className="contentWrap">         
              <img src={this.state.post.image} alt={"log"} id="img"/>
              <p id="content">{this.state.post.description}</p>
            </span>
          </div>
            <button onClick={()=>this.delete()}>Delete</button>
      </div>
  ); 
    }

    // console.log("Post id ->", this.props.id);

  } 

}

export default SinglePost;
