import React from 'react'
import Header from '../../../components/Header'
import MyClients from '../../../containers/MyClients'
import initStripe from 'stripe'
import RequireAuth from '../../../helpers/requireAuth'

const MyClientPage = ({plans=[]}) => {
  return (
    <>
    <Header priceData={plans.length>0? plans[0].price:null} idData={plans.length>0? plans[0].id:null}/>
    <MyClients/>
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

export default RequireAuth(MyClientPage)