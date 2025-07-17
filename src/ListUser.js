import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const User = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const check = async () => {
    const body = {
      "name": name,
      "email": email
    }
    axios.post('https://api.example.com/new-item', JSON.stringify(body))
      .then(response => {
        console.log(response.data);
        navigate('/')
      })
      .catch(error => {
        console.error('Error creating item:', error);
      });

  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#t">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" width="30" height="30" className="d-inline-block align-top" alt="Logo Anda" />
          &nbsp; &nbsp; NCI APPS
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#tnavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#t">Home <span className="sr-only">(current)</span></a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#t">Tentang Kami</a>
            </li> */}
          </ul>
        </div>
      </nav>
      <form>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Nama</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="email" onChange={(e) => { setEmail(e.target.value) }} required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Tanggal Lahir</label>
          <div className="col-sm-10">
            <input type="date" className="form-control" id="email" onChange={(e) => { setEmail(e.target.value) }} required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Umur</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="email" onChange={(e) => { setEmail(e.target.value) }} required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Alamat</label>
          <div className="col-sm-10">
            <input type="address" className="form-control" id="email" onChange={(e) => { setEmail(e.target.value) }} required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email" onChange={(e) => { setEmail(e.target.value) }} required />
          </div>
        </div>
         <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">-</label>
          <div className="col-sm-10">
            <button type="button" className="btn btn-primary" onClick={check}>Submit</button> &nbsp; &nbsp;
            <button type="reset" className="btn btn-success">Reset</button>
          </div>
        </div>
      </form>
    </div>
  )


}

export default User

