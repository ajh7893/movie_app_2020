import React from 'react';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';


function Food({ name, picture, rating }) {

    return (<div >
        <h2> I like {name} </h2>
        <h4 > {rating} / 5.0 </h4>
        <img src={picture} alt={name} />
    </div>
    );
}

const foodILike = [

    {
        id: 1,
        name: 'kimchi',
        image: 'http://egnmall.net/data/rental/goods/big/201921237024768.jpg',
        rating: 5,
    },
    {
        id: 2,
        name: 'doncasu',
        image: 'http://th2.tmon.kr/thumbs/image/423/336/e17/1b1492318_700x700_95_FIT.jpg',
        rating: 4.9,
    },
    {
        id: 3,
        name: 'bibibob',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/440px-Dolsot-bibimbap.jpg',
        rating: 2,
    },
];


function App() {

    return (
        <div>

            {
                foodILike.map(dish => (
                    <Food key={dish.id}
                        name={dish.name}
                        picture={dish.image}
                        rating={dish.rating} />
                ))
            };
        </div>
    );
}
Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number,
};

export default App;
