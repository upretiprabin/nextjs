import React from 'react'
import Header from '../../components/Header'
import initStripe from 'stripe';
import {loadStripe} from '@stripe/stripe-js';
import { getData, postData } from "../../helpers/serverHelper";
import cookie from 'react-cookies';
import {getCookie} from "cookies-next";

const Subscription = ({plans=[]}) => {
    // const selector 
    const buyPlan = async(planId) => {
        const customerId = getCookie('customerId');
        // const processSubscription = (planId) => async () => {
          try {
            // customerId
            const  data  = await postData({url: '/checkout/session?customerId='+customerId+'&priceId='+planId, req: {}});
            console.log(data.sessionId,'on ch');
            const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
            await stripe.redirectToCheckout({ sessionId: data.sessionId });
          } catch (error) {
           console.log(error,'err'); 
          }
          // await stripe.redirectToCheckout({ sessionId: data.id });
        // };
      }
  return (
    <>
    <Header priceData={plans[0].price} idData={plans[0].id}/>
    <div className='alignCenter'>
        <h1>Subscribe to our membership</h1>
    <div className='grid-x grid-margin-x'>
    {plans.map((plan) => (
        // <div key={plan.id} className="w-80 h-40 rounded shadow px-6 py-4">
        //   <h2 className="text-xl">{plan.name}</h2>
        //   <p className="text-gray-500">
        //     ${plan.price / 100} / {plan.interval}
        //   </p>
        // </div>
           <div className="card-price" onClick={()=>buyPlan(plan.id)}>
             <label className='label-price'>{plan.name}</label>
             {/* <img src={'/images/star-selected.png'} alt='star' className='star'/> */}
             <h4>${plan.price / 100} / {plan.interval}</h4>
             <h5>Features</h5>
             <ul>
               <li><img src={'/images/Star.png'} alt='star' className='img-icons'/> Long Feature One</li>
               <li><img src={'/images/Star.png'} alt='star' className='img-icons'/> Feature Two</li>
               <li><img src={'/images/Star.png'} alt='star' className='img-icons'/> Long Feature Three</li>
             </ul>
           </div>
        ))}
    </div>
    </div>
    </>
  )
}



export const getServerSideProps = async(ctx)=>{
  
    try {
      // console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
      const stripe = initStripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
      const { data: prices } = await stripe.prices.list();
  
      const plans = await Promise.all(
        prices.map(async (price) => {
          const product = await stripe.products.retrieve(price.product);
          return {
            id: price.id,
            name: product.name,
            price: price.unit_amount,
            interval: price.recurring.interval,
            currency: price.currency,
          };
        })
      );
  
  
    const sortedPlans = plans.sort((a, b) => a.price - b.price);
  
  console.log(sortedPlans);
  return {
    props:{
      plans: sortedPlans
    }
  }
  } catch (error) {
    // console.log(error,'err');
      return {
        props:{
          plans: []
        }
      }
      
    }
  }


export default Subscription