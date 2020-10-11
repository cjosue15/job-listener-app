import React from 'react';
import './GridItem.css';

const GridItem = ({
    company,
    contract,
    featured,
    languages,
    level,
    location,
    logo,
    new: nuevo,
    position,
    postedAt,
    role,
    tools,
    setFilters,
    filters,
}) => {
    const skils = [...languages, level, role, ...tools];

    const handleClick = (item) => {
        if (!filters.includes(item)) {
            setFilters((filters) => [item, ...filters]);
        }
    };

    // const existItem = () => {
    //     return filters.length === 0 ? true : skils.some((filter) => filters.includes(filter));
    // };

    //     var fullWordList = ['1','2','3','4','5'];
    // var wordsToRemove = ['1','2','3'];
    // undefined
    // var filteredKeywords = fullWordList.filter((word) => wordsToRemove.includes(word));

    return (
        <>
            {/* {JSON.stringify({ skils, filters, value: existItem() }, null, 3)} */}
            {/* {existItem() && (
                <div className='grid-item'>
                    <div className='item-image'>
                        <figure>
                            <img src={logo} alt='manage' />
                        </figure>
                    </div>
                    <div className='item-content'>
                        <div className='item-information'>
                            <div className='badges-content'>
                                <h5>{company}</h5>
                                {(featured || nuevo) && (
                                    <div className='badges'>
                                        {nuevo && <span className='new'>NEW!</span>}
                                        {featured && <span className='featured'>FEATURED</span>}
                                    </div>
                                )}
                            </div>
                            <h3>{position}</h3>
                            <div className='information'>
                                <span>{postedAt}</span>
                                <span>{contract}</span>
                                <span>{location}</span>
                            </div>
                        </div>
                        <div className='item-skills'>
                            <ul>
                                {skils.map((item) => (
                                    <li key={item} onClick={() => handleClick(item)}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )} */}
            <div className={`grid-item ${featured && 'border'}`}>
                <div className='item-image'>
                    <figure>
                        <img src={logo} alt='manage' />
                    </figure>
                </div>
                <div className='item-content'>
                    <div className='item-information'>
                        <div className='badges-content'>
                            <h5>{company}</h5>
                            {(featured || nuevo) && (
                                <div className='badges'>
                                    {nuevo && <span className='new'>NEW!</span>}
                                    {featured && <span className='featured'>FEATURED</span>}
                                </div>
                            )}
                        </div>
                        <h3>{position}</h3>
                        <div className='information'>
                            <span>{postedAt}</span>
                            <span>{contract}</span>
                            <span>{location}</span>
                        </div>
                    </div>
                    <div className='item-skills'>
                        <ul>
                            {skils.map((item) => (
                                <li key={item} onClick={() => handleClick(item)}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GridItem;
