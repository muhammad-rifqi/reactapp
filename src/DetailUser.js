import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

const Detail = () => {
    let { id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://nci.rifhandi.com/api/user/' + id)
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }, [id]);

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
            <form>
                <div className="form-group row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Nama</label>
                    <div className="col-sm-10">
                        {data?.data[0]?.name.toUpperCase()}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Tanggal Lahir</label>
                    <div className="col-sm-10">
                        {data?.data[0]?.birth_date.split('T')[0]}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Umur(Tahun)</label>
                    <div className="col-sm-10">
                        {data?.data[0]?.age_years} Tahun
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Umur(Bulan)</label>
                    <div className="col-sm-10">
                        {data?.data[0]?.age_months} Bulan
                    </div>
                </div>
                {/* defaultValue={0} ini pada value form html */}
                <div className="form-group row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Alamat</label>
                    <div className="col-sm-10">
                        {data?.data[0]?.address}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        {data?.data[0]?.email}
                    </div>
                </div>
            </form>
        </div>
    )


}
export default Detail