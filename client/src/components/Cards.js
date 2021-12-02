import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const Cards = () => {
    return (
        <div className='cards'>
            <h1> Check our epic destinations </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall
                        deep inside Amazonian jungle"
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        src="/images/img-5.jpg"
                        text="Travel through the Islands of Bali in
                        a Private Cruise"
                        label='Luxury'
                        path='/services'
                        />
                     </ul>
                     <ul className='cards__items'>
                     <CardItem
                        src='/images/img-3.jpg'
                        text="Set sail in Atlantic ocean visiting uncharted waters"
                        label='Mystery'
                        path='/services'
                        />
                        <CardItem
                        src='/images/img-4.jpg'
                        text="Experince Footbal on top of Himalayan Mountains"
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        src='/images/img-8.jpg'
                        text="Ride on Sahara Desert on a guided camel tour"
                        label='Adrenaline'
                        path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
