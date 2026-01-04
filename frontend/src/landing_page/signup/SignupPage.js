import React from 'react'
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Signup from './Signup';
import Steps from './Steps';
import Benefits from './Benefits';
import Types from './Types';
import FAQs from './FAQs';

function SignupPage() {
    return ( 
        <>
        <Hero />
        <Signup />
        <Steps />
        <Benefits />
        <Types />
        <FAQs />
        <OpenAccount />
        </>
     );
}

export default SignupPage;