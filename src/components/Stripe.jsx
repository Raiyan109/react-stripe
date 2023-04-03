import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('pk_test_51L1OriC6jSgZhdi8qkAiIGespYE6i96T7HuAWIKypgpRFOCfOhhRlqNPTLmInenVmKn5srcAjElwfRYf0oUEUT5E00NRA1jfwh')

const Stripe = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    );
};

export default Stripe;