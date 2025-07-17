import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";


const User = () => {
  const [name, setName] = useState("");
  const [tgl_lahir, setTanggalLahir] = useState("");
  const [tahunlhr, setTahun] = useState();
  const [bulanlhr, setBulan] = useState();
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  // const navigate = useNavigate();

  function cekUmur(tgllahir) {
    const hariIni = new Date();
    const tahunIni = hariIni.getFullYear();
    const bulanIni = hariIni.getMonth();
    const tanggal = hariIni.getDate();

    const tahunLahir = tgllahir.getFullYear();
    const bulanLahir = tgllahir.getMonth();
    const tanggalLahirTanggal = tgllahir.getDate();

    let umurTahun = tahunIni - tahunLahir;
    let umurBulan = bulanIni - bulanLahir;

    if (bulanIni < bulanLahir || (bulanIni === bulanLahir && tanggal < tanggalLahirTanggal)) {
      umurTahun--;
      umurBulan += 12;
    }

    return { tahun: umurTahun, bulan: umurBulan };
  }

  const handleUmur = async (usia) => {
    setTanggalLahir(usia);
    const [thn, bln, tgl] = usia.split('-').map(Number);
    const tanggalLahirnya = new Date(thn, bln - 1, tgl);
    const usianya = cekUmur(tanggalLahirnya);
    setTahun(usianya.tahun)
    setBulan(usianya.bulan);
  }

  const check = async () => {

    if (name === "" || tgl_lahir === "" || email === "") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Harap Disini Datanya!",
      });

      return;
    }
    const body = {
      "name": name,
      "birth_date": tgl_lahir,
      "age_years": tahunlhr,
      "age_months": bulanlhr,
      "address": alamat,
      "email": email
    }

    const header = {
      'Content-Type': 'application/json',
    }
    axios.post('https://nci.rifhandi.com/api/user', body, { headers: header })
      .then(response => {
        console.log(response.data)
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message+'Silahkan Klik Untuk Konfirmasi Data',
        }).then(function(){
          window.location.href='/konfirmasi/'+response.data.last_id;
        })
        // navigate('/konfirmasi/'+response.data.last_id);
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.message,
        });
        return;
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
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
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
            <input type="text" className="form-control" id="name" onChange={(e) => { setName(e.target.value) }} required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Tanggal Lahir</label>
          <div className="col-sm-10">
            <input type="date" className="form-control" id="birth_date" min="1925-12-31" max="2025-12-31" onChange={(e) => handleUmur(e.target.value)} required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Umur(Tahun)</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="age_years" onChange={(e) => { setTahun(e.target.value) }} value={tahunlhr || 0} required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Umur(Bulan)</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="age_months" onChange={(e) => { setBulan(e.target.value) }} value={bulanlhr || 0} required />
          </div>
        </div>
        {/* defaultValue={0} ini pada value form html */}
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Alamat</label>
          <div className="col-sm-10">
            <input type="address" className="form-control" id="address " onChange={(e) => { setAlamat(e.target.value) }} required />
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

