import React from 'react';
import GridContainer from './components/GridContainer';
import HeaderFilter from './components/HeaderFilter';

const JobListenerApp = () => {
    return (
        <div id='main'>
            <HeaderFilter />
            <GridContainer />
        </div>
    );
};

export default JobListenerApp;
