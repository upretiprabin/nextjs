import React from 'react'
import Header from '../../components/Header'
// import Header from '../../../app/components/Header'
import Client from '../../containers/Client'
import RequireAuth from '../../helpers/requireAuth'
import initStripe from "stripe";

const ClientDetailsPage = ({plans=[]}) => {
  return (
    <>
    <Header priceData={plans[0]?.price} idData={plans[0]?.id}/>
    <Client/>
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

console.log(sortedPlans,'pl');
return {
  props:{
    plans: sortedPlans
  }
}
} catch (error) {
  console.log(error,'err');
    return {
      props:{
        plans: []
      }
    }
    
  }
}

export default RequireAuth(ClientDetailsPage)