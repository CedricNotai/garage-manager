import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';

function ShowCarDetails() {
    const [car, setCar] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const priceFormatter = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
    });

    useEffect(() => {
        axios.get(`http://localhost:8093/api/cars/${id}`)
            .then((res) => {
                setCar(res.data);
            })
            .catch((err) => {
                console.log('Error from ShowCarDetails!');
            });
    }, [id]);

    const onDeleteClick = (id) => {
        axios.delete(`http://localhost:8093/api/cars/${id}`)
            .then((res) => {
                navigate('/');
            })
            .catch((err) => {
                console.log('Error from ShowCarDetails_deleteClick')
            });
    };

    const CarItem = (
        <div>
            <table className='table table-hover table-dark'>
                <tbody>
                    <tr>
                        <th scope='row'>1</th>
                        <td>Brand</td>
                        <td>{car.brandName}</td>
                    </tr>
                    <tr>
                        <th scope='row'>2</th>
                        <td>Model</td>
                        <td>{car.modelName}</td>
                    </tr>
                    <tr>
                        <th scope='row'>3</th>
                        <td>Price</td>
                        <td>{car.modelPrice ? priceFormatter.format(car.modelPrice['$numberDecimal']) : ''}</td>
                    </tr>
                    <tr>
                        <th scope='row'>4</th>
                        <td>Energy</td>
                        <td>{car.modelEnergy}</td>
                    </tr>
                    <tr>
                        <th scope='row'>5</th>
                        <td>Purchase date</td>
                        <td>{moment(car.dateBuy).format('DD-MM-YYYY')}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    
    return (
        <div className='ShowCarDetails'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10 m-auto'>
                        <br />
                        <Link to='/' className='btn btn-outline-warning float-left'>
                            Show Car List
                        </Link>
                    </div>
                    <br />

                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>Car's Record</h1>
                        <p className='lead text-center'>View Car's Info</p>
                        <hr /> <br />
                    </div>

                    <div className='col-md-10 m-auto'>{CarItem}</div>

                    <div className='col-md-6 m-auto'>
                        <button
                            type='button'
                            className='btn btn-outline-danger btn-lg btn-block'
                            onClick={() => {
                                onDeleteClick(car._id);
                            }}
                        >
                            Delete Car
                        </button>
                    </div>

                    <div className='col-md-6 m-auto'>
                        <Link
                            to={`/edit-car/${car._id}`}
                            className='btn btn-outline-info btn-lg btn-block'
                        >
                            Edit Car
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCarDetails;