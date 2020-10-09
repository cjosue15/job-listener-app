import React from 'react';
import './HeaderFilter.css';

const HeaderFilter = ({ filters, setFilters }) => {
    const handleRemove = (index) => {
        filters.splice(index, 1);
        setFilters([...filters]);
    };

    const handleRemoveAll = () => {
        setFilters([]);
    };

    return (
        <>
            <header className='header-filter'></header>
            {filters && filters.length > 0 && (
                <div className='container'>
                    <div className='filter'>
                        <div className='filter-content'>
                            <ul className='filter-items'>
                                {filters.map((item, index) => (
                                    <li key={item}>
                                        {item}
                                        <span onClick={() => handleRemove(index)}>
                                            <img src='./images/icon-remove.svg' alt='Rmove' />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <span className='remove-all' onClick={handleRemoveAll}>
                                Clear
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default HeaderFilter;
