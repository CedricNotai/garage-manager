import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CarCard from './CarCard';

function ShowCarList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8093/api/cars')
            .then((res) => {
                setCars(res.data);
            })
            .catch((err) => {
                console.log('Error from ShowCarList!');
            });
    }, []);

    const carList = cars.length === 0 
        ? 'there is no car record!' 
        // : cars;
        : cars.map((car, k) => <CarCard car={car} key={k} />);
    
    return (
        <div className='ShowCarList'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <br />
                        <h2 className='display-4 text-center'> Cars List</h2>
                    </div>

                    <div className='col-md-11'>
                        <Link
                            to='/create-car'
                            className='btn btn-outline-warning float-right'
                        >
                            + Add New Car
                        </Link>
                    </div>
                </div>

                <div className='list'>
                    {/* {Object.keys(carList).map(function(key) {
                        return (
                            <CarCard key={key} data={carList[key]}/>
                        );
                    })}; */}
                    {carList}
                </div>
            </div>
        </div>
    );
};

export default ShowCarList;