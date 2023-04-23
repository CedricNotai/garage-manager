import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateCarInfo(props) {
    const [car, setCar] = useState({
        brandName: '',
        modelName: '',
        modelPrice: '',
        modelEnergy: '',
        dateBuy: ''
    });
    
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8093/api/cars/${id}`)
            .then((res) => {
                setCar({
                    brandName: res.data.brandName,
                    modelName: res.data.modelName,
                    modelPrice: res.data.modelPrice,
                    modelEnergy: res.data.modelEnergy,
                    dateBuy: res.data.dateBuy,
                });
            })
            .catch((err) => {
                console.log('Error from UpdateCarInfo');
            });
    }, [id]);
        
    const onChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };
        
    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            brandName: car.brandName,
            modelName: car.modelName,
            modelPrice: car.modelPrice,
            modelEnergy: car.modelEnergy,
            dateBuy: car.dateBuy,
        };
        
        axios.put(`http://localhost:${process.env.PORT}/api/cars/${id}`, data)
            .then((res) => {
                navigate(`/show-car/${id}`);
            })
            .catch((err) => {
                console.log('Error in UpdateCarInfo!');
            });
    };
    
    return (
        <div className='UpdateCarInfo'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <br />
                        <Link to='/' className='btn btn-outline-warning float-left'>
                            Show Car List
                        </Link>
                    </div>
                    
                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>Edit Car</h1>
                        <p className='lead text-center'>Update Car's Info</p>
                    </div>
                </div>
                
                <div className='col-md-8 m-auto'>
                    <form noValidate onSubmit={onSubmit}>
                        <div className='form-group'>
                            <label htmlFor='brandName'>Brand</label>
                            <input
                                type='text'
                                placeholder='Brand'
                                name='brandName'
                                className='form-control'
                                value={car.brandName}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='modelName'>Model</label>
                            <input
                                type='text'
                                placeholder='Model'
                                name='modelName'
                                className='form-control'
                                value={car.modelName}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='modelPrice'>Price</label>
                            <input
                                type='number'
                                placeholder='Price'
                                name='modelPrice'
                                className='form-control'
                                value={car.modelPrice['$numberDecimal']}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='modelEnergy'>Energy</label>
                            <input
                                type='text'
                                placeholder='Energy'
                                name='modelEnergy'
                                className='form-control'
                                value={car.modelEnergy}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='dateBuy'>Purchase date</label>
                            <input
                                type='date'
                                placeholder='Purchase date'
                                name='dateBuy'
                                className='form-control'
                                value={car.dateBuy}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <button
                        type='submit'
                        className='btn btn-outline-info btn-lg btn-block'
                        >
                            Update Car
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCarInfo;