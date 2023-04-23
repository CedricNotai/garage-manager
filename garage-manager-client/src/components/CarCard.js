import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import moment from 'moment';

const CarCard = (props) => {
    const car = props.car;
    const priceFormatter = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
    });
  
    return (
        <div className='card-container'>
            <div className='desc'>
                <h2>
                    <Link to={`/show-car/${car._id}`}>{car.brandName} - {car.modelName}</Link>
                </h2>
                <p>{car.modelEnergy}</p>
                <p>{car.modelPrice ? priceFormatter.format(car.modelPrice['$numberDecimal']) : ''}</p>
                <p>{moment(car.dateBuy).format('DD-MM-YYYY')}</p>
            </div>
        </div>
    );
};

export default CarCard;