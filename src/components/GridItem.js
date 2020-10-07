import React from 'react';
import './GridItem.css';

const GridItem = () => {
    return (
        <div className='grid-item'>
            <div className='item-image'>
                <figure>
                    <img src={require('../assets/images/manage.svg')} alt='manage' />
                </figure>
            </div>
            <div className='item-content'>
                <div className='item-information'>
                    <h5>Photosnap</h5>
                    <h3>Senior Frontend Developer</h3>
                    <div className='information'>
                        <span>1d ago</span>
                        <span>Part Time</span>
                        <span>Remote</span>
                    </div>
                </div>
                <div className='item-skills'>
                    <ul>
                        <li>Frontend</li>
                        <li>Senior</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default GridItem;
