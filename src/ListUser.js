import React , { Component } from 'react';
import {Link} from 'react-router-dom';
class ListUser extends Component {


constructor(props){
  super(props);
  this.state = {
    datauser : []
  }
}

  componentDidMount(){
    fetch('https://www.baznaspayakumbuh.com/api/api_tabloit_pulsa.php')
    .then(response=>response.json()
    )
    .then(
      (data)=> { this.setState({datauser:data.result}) }
    )
  }

  render(){
   const listuser = this.state.datauser.map((user)=>{
        return (

            <div className="col-md-4 card" key={user.article_id}>
              <Link to={'/detail/'+user.article_id}>
              <img src={user.image} width="100%"/>
              </Link>
                <h5 >{user.title}</h5>
                <p>{user.description.substr(1, 150)}</p>

          </div>


        )
      })
    return (
      <div className="row">
        {listuser}
      </div>
    )
  }

}

export default ListUser
