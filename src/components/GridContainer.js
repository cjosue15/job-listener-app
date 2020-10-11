import React, { useState } from 'react';
import { company } from '../data';
import Footer from './Footer';
import GridItem from './GridItem';
import HeaderFilter from './HeaderFilter';

const GridContainer = () => {
    const [filters, setFilters] = useState([]);

    return (
        <>
            <HeaderFilter filters={filters} setFilters={setFilters} />
            <div className='jobs' style={{ paddingTop: filters && filters.length > 0 ? '0px' : '40px' }}>
                <div className='container'>
                    {company
                        .filter((item) => {
                            const skils = [...item.languages, item.level, item.role, ...item.tools];

                            if (filters && filters.length > 0) {
                                const filtered = skils.filter((f) => filters.includes(f));

                                return filtered.length > 0 && filters.length === filtered.length ? item : null;
                            } else {
                                return item;
                            }
                        })
                        .map((item) => (
                            <GridItem key={item.id} {...item} setFilters={setFilters} filters={filters} />
                        ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default GridContainer;
