import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import starSelected from '!file-loader?name=[name].[ext]!../../images/star-selected.png';
import star from '!file-loader?name=[name].[ext]!../../images/Star.png';
import Header from "../../components/Header/index2";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "./style.css"

export class Pricing extends React.Component {
  render() {
    const { item, match } = this.props;
    // if (item !== undefined) {
      return (
<>
<Header/>
        <section className='relative pricing'>
          <div className="first_component">
            <h1><strong>Our Price: $100 per user per month</strong></h1>
            <p>It's Simple. No complicated pricing tiers, no hidden fees, and no contracts.</p>
          </div>
          <section className='grid-container'>
            <div className="content_component">
              <h2><strong>Your Agency has 10+ investigators?</strong></h2>
              <p>We offer free personalized help to every customer, regardless of size,
                but we know that sometimes larger firms have more specific requirements. 
                If you'd like to talk through your needs, please email us at <a>info@onthecase.com</a>.</p>
              <br/>
              <br/>
              <h3><strong>Our Pricing Philosophy</strong></h3>
              <p>When we say that we're Simple to use, that applies to everything we do, including the pricing.
                Unlike other case management software, we don't have multiple pricing tiers, data storage limits, upgrading/downgrading plans etc.
                It's just $100/user/month. You can add unlimited cases, unlimited data, access all our features. Best of all, you can use it free for 30 days to make
                sure you like it.  We don't even ask for your credit card when you
                sign up, so if you don't like it, there's nothing to cancel.</p>
              <br/>
              <div className='text-center'>
                <Link to={'/featuresDescription'}><span className="link">View Features</span></Link>
                {/*<Link to={'/register'}><span className="link active">30 Day Free Trial</span></Link>*/}
              </div>
            </div>
            {/*<div className="alignCenter">*/}
            {/*<div className="grid-x grid-margin-x">*/}
            {/*  <div className="cell medium-6 large-6 small-12">*/}
            {/*    <div className="card-price">*/}
            {/*      <label className='label-price'>ENTRY </label>*/}
            {/*      <img src={starSelected} alt='star' className='star'/>*/}
            {/*      <h4>$35</h4>*/}
            {/*      <h5>Features</h5>*/}
            {/*      <ul>*/}
            {/*        <li><img src={star} alt='star' className='img-icons'/> Long Feature One</li>*/}
            {/*        <li><img src={star} alt='star' className='img-icons'/> Feature Two</li>*/}
            {/*        <li><img src={star} alt='star' className='img-icons'/> Long Feature Three</li>*/}
            {/*      </ul>*/}
            {/*    </div>*/}
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
              <p>Try OnTheCase case management software for 30 days. Easy Setup. No Credit card required. Cancel Any Time.</p>
              <div className='text-center'>
               <Link to={'/register'}><span className="white-btn">30 Day Free Trial</span></Link>
              </div>
            </div>
          </section>

        </section>
        <Footer/>
        </>
      );
     }
    // return <div/>;
  // }
}

Pricing.propTypes = {
  item: PropTypes.object,
  match: PropTypes.object,
  onDeleteRequest: PropTypes.func
};

export default connect()(Pricing);
