import React from 'react';
import Banner from '../Banner/Banner';
import Template from '../Template/Template';
import ConsultingServices from '../ConsultingServices/ConsultingServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Template></Template>
            <ConsultingServices></ConsultingServices>
        </div>
    );
};

export default Home;