import React from "react";
import HeaderLink from "../../components/Header/HeaderLink";
import Header from "../../components/Header";
import RequireAuth from "../../helpers/requireAuth";
import {getCookie} from "cookies-next";
import initStripe from "stripe";

class Welcome extends React.Component {
  render() {
    // const { loading, error } = this.props;
    const {params, plans = []} = this.props;
    let investigatorId = params?.investigatorId;
    if (investigatorId === undefined) {
      investigatorId = getCookie("uuid");
    }
    return (
      <>
        <Header priceData={plans[0]?.price} idData={plans[0]?.id}/>
        <article>
          <section className="dashboard-section">
            <div className="grid-x grid-margin-x medium-margin-collapse">
              <div className="cell auto">
                <section className="text-editor-section">
                  <div className="top-row-text-editor">
                    <div className="text-center padding-top20">
                      <div className="welcome-title">Welcome to On The Case!</div>
                      <div className="sub-title-wel">
                        Start your new case below.
                      </div>
                    </div>
                  </div>
                </section>
                <div className="text-editor bg-transperent">
                  <div className="welcome-box">
                    <div className="heading-title">
                      Automate your day-to-day tasks. More accessibility. More
                      focus
                    </div>
                    <div className="welcome-box-icon">
                      <img src={'/images/welcomeicon/bx-briefcase-alt 2.png'} alt="bxbriefcase" className=""/>
                      <img src={'/images/welcomeicon/bx-file-plus 2.png'} alt="addedite" className=""/>
                      <img src={'/images/welcomeicon/bx-contact 2.png'} alt="involediconwel" className=""/>
                      <img src={'/images/welcomeicon/bx-task 2.png'} alt="correct" className=""/>
                      <img src={'/images/welcomeicon/bx-edit 2.png'} alt="fileicon" className=""/>
                    </div>
                    <div className="grid-x grid-margin-x align-center">
                      <div className="small-9 medium-9 large-9">
                        <HeaderLink href={`/createnewcase/${investigatorId}/`} className="button-aqua width-auto">
                          CREATE YOUR NEW CASE
                        </HeaderLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </>
    );
  }
}

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

    console.log(sortedPlans, 'pl');
    return {
      props: {
        plans: sortedPlans
      }
    }
  } catch (error) {
    console.log(error, 'err');
    return {
      props: {
        plans: []
      }
    }

  }
}

// export function mapDispatchToProps(dispatch) {
//   return {};
// }

// const mapStateToProps = createStructuredSelector({
//   token: makeSelectToken(),
//   uuid: makeSelectUUID(),
//   role: makeSelectRole(),
//   loading: makeSelectLoading(),
//   error: makeSelectError()
// });

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps
// );

// const withReducer = injectReducer({ key: "welcome", reducer });
// const withSaga = injectSaga({ key: "welcome", saga });

export default RequireAuth(Welcome)
// compose(
//   withReducer,
//   withSaga,
//   withConnect
// )(Welcome);
