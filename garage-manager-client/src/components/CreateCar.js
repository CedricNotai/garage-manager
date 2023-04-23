import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateCar = (props) => {
    // Define the state with useState hook
    const navigate = useNavigate();
    const [car, setCar] = useState({
        brandName: '',
        modelName: '',
        modelPrice: '',
        modelEnergy: '',
        dateBuy: '',
    });

    const onChange = (e) => {
        setCar({...car, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8093/api/cars', car)
            .then((res) => {
                setCar({
                    brandName: '',
                    modelName: '',
                    modelPrice: '',
                    modelEnergy: '',
                    dateBuy: '',
                });

                // Push to / 
                navigate('/');
            })
            .catch((err) => {
                console.log('Error in CreateCar!');
            });
    };

    return (
        <div className='CreateCar'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <br />
                        <Link to='/' className='btn btn-outline-warning float-left'>
                            Show car list
                        </Link>
                    </div>
    
                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>Add a car</h1>
                        <p className='lead text-center'>Create a new car</p>
                        <form noValidate onSubmit={onSubmit}>
                            <div className='form-group'>
                            <label for="brandName" class="form-label">Marque</label>
                                <input
                                    type='text'
                                    placeholder='Brand'
                                    name='brandName'
                                    id='brandName'
                                    className='form-control'
                                    value={car.brandName}
                                    onChange={onChange}
                                />
                            </div>
                            <br />
    
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Model'
                                    name='modelName'
                                    id='modelName'
                                    className='form-control'
                                    value={car.modelName}
                                    onChange={onChange}
                                />
                            </div>
                            <br />
    
                            <div className='form-group'>
                                <input
                                    type='number'
                                    placeholder='Price'
                                    name='modelPrice'
                                    id='modelPrice'
                                    className='form-control'
                                    value={car.modelPrice}
                                    onChange={onChange}
                                />
                            </div>
                            <br />
    
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Energy'
                                    name='modelEnergy'
                                    id='modelEnergy'
                                    className='form-control'
                                    value={car.modelEnergy}
                                    onChange={onChange}
                                />
                            </div>
                            <br />
    
                            <div className='form-group'>
                                <input
                                    type='date'
                                    placeholder='Purchase date'
                                    name='dateBuy'
                                    id='dateBuy'
                                    className='form-control'
                                    value={car.dateBuy}
                                    onChange={onChange}
                                />
                            </div>
    
                            <button 
                                type='submit' 
                                id='new-car-submit' 
                                className='btn btn-outline-warning btn-block mt-4'
                            >
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateCar;