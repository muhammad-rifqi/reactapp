import React, { useEffect, useState } from 'react';
import axios from "axios";

const Detail = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://nci.rifhandi.com/api/userall')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }, []);

    const handleDelete = async (event) => {
        axios.get('https://nci.rifhandi.com/api/deleteuser/' + event)
            .then(response => {
                if (response.data.success === true) {
                    window.location.href = '/userlist';
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    if (loading) return <p align="center">Loading...</p>;
    if (error) return <p align="center">Error: {error.message}</p>;

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#t">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" width="30" height="30" className="d-inline-block align-top" alt="Logo Anda" />
                    &nbsp; &nbsp; APPS
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#tnavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/userlist">Daftar Pengguna</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='row'>
                <div className='col-md-12'><h3>Daftar Pengguna</h3></div>
            </div>
            <div className='row'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Tanggal Lahir</th>
                            <th scope="col">Umur Tahun</th>
                            <th scope="col">Umur Bulan</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Email</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data?.map((item, index) => (
                            <tr key={item.id}>
                                <th scope="row">#{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.birth_date.split('T')[0]}</td>
                                <td>{item.age_years}</td>
                                <td>{item.age_months}</td>
                                <td>{item.address}</td>
                                <td>{item.email}</td>
                                <td><button className='btn btn-danger' onClick={() => { handleDelete(item.id) }}>Hapus</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='row'>
                <div className='col-md-12 text-center'>copyright &copy; by Muhammad Rifqi </div>
            </div>
        </div>
    )


}
export default Detail