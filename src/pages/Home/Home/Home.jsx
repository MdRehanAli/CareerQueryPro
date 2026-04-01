import React from 'react';
import Banner from '../Banner/Banner';
import Template from '../Template/Template';
import ConsultingServices from '../ConsultingServices/ConsultingServices';
import Testimonials from '../Testimonials/Testimonials';
import CTA from '../CTA/CTA';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Template></Template>
            <ConsultingServices></ConsultingServices>
            <Testimonials></Testimonials>
            <CTA></CTA>
        </div>
    );
};

export default Home;