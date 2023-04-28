import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import starSelected from '!file-loader?name=[name].[ext]!../../images/star-selected.png';
// import star from '!file-loader?name=[name].[ext]!../../images/Star.png';
import Header from "../components/Header/index2";
// import Footer from "../../components/Footer";
import Link from "next/link";
// import "./style.css"
import initStripe from 'stripe';
import Head from "next/head";

// class Pricing extends React.Component {
const Pricing = ({plans = []}) => {

  // const { item, match } = this.props;
  // if (item !== undefined) {
  return (
    <>
      <Head>
        <title>OnTheCase | Pricing</title>
        <meta property="keywords"
              content="Private investigator,Investigations,PI services,Private investigation,Investigator,Detective services,Background check,Infidelity investigations,Surveillance,Skip tracing,Asset search,Corporate investigation,Investigative services,Criminal investigation,Locate missing persons,Process serving,Legal investigation,Fraud investigation,Insurance investigation,Investigative agency,Private investigator case management software,Investigation case management software,PI case management system,Investigation management software,Case management for private investigators,Investigator case management tool,Private investigation case management,Digital case management for investigators,PI case management software solutions,Case tracking software for private investigators"></meta>
      </Head>
      <Header/>
      <section className='relative pricing'>
        <div className="first_component">
          <h1><strong>Our Price: $100 per user per month</strong></h1>
          <p>It&apos;s Simple. No complicated pricing tiers, no hidden fees, and no contracts.</p>
        </div>
        <section className='grid-container'>
          <div className="content_component">
            <h2><strong>Your Agency has 10+ investigators?</strong></h2>
            <p>We offer free personalized help to every customer, regardless of size,
              but we know that sometimes larger firms have more specific requirements.
              If you&apos;d like to talk through your needs, please email us at <a>info@onthecase.com</a>.</p>
            <br/>
            <br/>
            <h3><strong>Our Pricing Philosophy</strong></h3>
            <p>When we say that we&apos;re Simple to use, that applies to everything we do, including the pricing.
              Unlike other case management software, we don&apos;t have multiple pricing tiers, data storage limits,
              upgrading/downgrading plans etc.
              It&apos;s just $100/user/month. You can add unlimited cases, unlimited data, access all our features. Best of
              all, you can use it free for 30 days to make
              sure you like it. We don&apos;t even ask for your credit card when you
              sign up, so if you don&apos;t like it, there&apos;s nothing to cancel.</p>
            <br/>
            <div className='text-center'>
              <Link href={'/featuresDescription'}><span className="link">View Features</span></Link>
              {/*<Link to={'/register'}><span className="link active">30 Day Free Trial</span></Link>*/}
            </div>
          </div>
          <div className="alignCenter">
            <div className="grid-x grid-margin-x">

              {plans.map((plan) => (
                // <div key={plan.id} className="w-80 h-40 rounded shadow px-6 py-4">
                //   <h2 className="text-xl">{plan.name}</h2>
                //   <p className="text-gray-500">
                //     ${plan.price / 100} / {plan.interval}
                //   </p>
                // </div>
                <div className="card-price">
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
          {/*  <div className="cell medium-6 large-6 small-12">*/}
          {/*  </div>*/}

          {/*  <div className="cell medium-6 large-6 small-12">*/}
          {/*    <div className="card-price">*/}
          {/*      <label className='label-price'>ESSENTIAL </label>*/}
          {/*      <img src={starSelected} alt='star' className='star'/>*/}
          {/*      <h4>$58</h4>*/}
          {/*      <h5>Features</h5>*/}
          {/*      <ul>*/}
          {/*        <li><img src={star} alt='star' className='img-icons'/> Long Feature One</li>*/}
          {/*        <li><img src={star} alt='star' className='img-icons'/> Feature Two</li>*/}
          {/*        <li><img src={star} alt='star' className='img-icons'/> Long Feature Three</li>*/}
          {/*      */}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*</div>*/}
          {/*<div className="alignCenter">*/}
          {/*<div className="grid-x grid-margin-x">*/}

          {/*  <div className="cell medium-6 large-6 small-12">*/}
          {/*    <div className="card-price">*/}
          {/*      <label className='label-price'>EXECUTIVE </label>*/}
          {/*      <img src={starSelected} alt='star' className='star'/>*/}
          {/*      <h4>$105</h4>*/}
          {/*      <h5>Features</h5>*/}
          {/*      <ul>*/}
          {/*        <li><img src={star} alt='star' className='img-icons'/> Long Feature One</li>*/}
          {/*        <li><img src={star} alt='star' className='img-icons'/> Feature Two</li>*/}
          {/*        <li><img src={star} alt='star' className='img-icons'/> Long Feature Three</li>*/}
          {/*        <li><img src={star} alt='star' className='img-icons'/> Feature Four</li>*/}
          {/*        <li><img src={star} alt='star' className='img-icons'/> Long Feature Three</li>*/}
          {/*        <li><img src={star} alt='star' className='img-icons'/> Long Feature One</li>*/}
          {/*    */}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="cell medium-6 large-6 small-12">*/}
          {/*    <div className="card-price">*/}
          {/*      <label className='label-price'>ENTERPRISE </label>*/}
          {/*      <img src={starSelected} alt='star' className='star'/>*/}
          {/*      <h4>$195</h4>*/}
          {/*      <h5>Features</h5>*/}
          {/*      <ul>*/}
          {/*        <li><img src={star} alt='star' className='img-icons'/> Long Feature One</li>*/}
          {/*        <li><img src={star} alt='star' className='img-icons'/> Feature Two</li>*/}
          {/*        <li><img src={star} alt='star' className='img-icons'/> Long Feature Three</li>*/}
          {/*        <li><img src={star} alt='star' className='img-icons'/> Long Feature One</li>*/}
          {/*        <li><img src={star} alt='star' className='img-icons'/> Feature Two</li>*/}
          {/*        <li><img src={star} alt='star' className='img-icons'/> Long Feature Three</li>*/}
          {/*        <li><img src={star} alt='star' className='img-icons'/> Feature Two</li>*/}
          {/*        <li><img src={star} alt='star' className='img-icons'/> Long Feature Three</li>*/}
          {/*        <li><img src={star} alt='star' className='img-icons'/> Feature Four</li>*/}
          {/*        <li><img src={star} alt='star' className='img-icons'/> Long Feature Three</li>*/}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*</div>*/}
          <div className="blue-box">
            <h3>Try OnTheCase FREE for 30 Days</h3>
            <p>Try OnTheCase case management software for 30 days. Easy Setup. No Credit card required. Cancel Any
              Time.</p>
            <div className='text-center'>
              <Link href={'/register'}><span className="white-btn">30 Day Free Trial</span></Link>
            </div>
          </div>
        </section>

      </section>
      {/* <Footer/> */}
    </>
  );
}
// return <div/>;
// }
// }

Pricing.propTypes = {
//   item: PropTypes.object,
//   match: PropTypes.object,
//   onDeleteRequest: PropTypes.func
};
export const getServerSideProps = async (ctx) => {

  try {
    // console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    const stripe = initStripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
    const {data: prices} = await stripe.prices.list();

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
      props: {
        plans: sortedPlans
      }
    }
  } catch (error) {
    // console.log(error,'err');
    return {
      props: {
        plans: []
      }
    }

  }
}


export default Pricing;


