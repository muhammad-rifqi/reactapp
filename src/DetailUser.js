import React, { Component } from 'react';

class DetailUser extends Component{

  constructor(props){
    super(props);
    this.state = {
      datauser : []
    }
  }


componentDidMount(){
  const idnya = this.props.match.params.id_user ;
  fetch('https://www.baznaspayakumbuh.com/api/api_tabloit_pulsa.php?id='+idnya)
  .then(response=>response.json()
  )
  .then(
    (data)=> { this.setState({datauser:data.result}) }
  )
}

  render(){

      return (

          <div className="alert alert-primary">
            <img src={this.state.datauser.image} width="100%"/>
              <h5 >{this.state.datauser.title}</h5>
              <p>{this.state.datauser.description}</p>
        </div>


      )

  }

}

export default DetailUser
