import "./Features.scss";
import React from 'react';
import { Icon } from 'semantic-ui-react';

class Features extends React.Component {
  render() {
    const FeatureCard = (props)=>{
      const { icon, name, detail } = props;
      return (
        <div className="FeatureCard">
          <span className="FeatureIcon">
            <Icon name={icon}/>
          </span>
          <p className="FeatureName">{name}</p>
          <p className="Featuredetail">{detail}</p>
          <p className="FeatureLink">Learn More <Icon name="arrow right"/></p>
        </div>
      );
    }
    
    return(
      <div className="Features">
        <FeatureCard icon="dollar" name="REASONABLE FEES"
        detail="Stripe is an always-improving toolchain that gains new features every month. Our world-class engineering team constantly iterates upon every facet of the Stripe stack. And from Apple Pay to Bitcoin, building on Stripe means you get early access to the latest technologies."
        />
        <FeatureCard icon="sync" name="EASY VERIFICATION"
        detail="We help power 100,000+ businesses in 100+ countries and across nearly every industry. Headquartered in San Francisco, Stripe has 9 global offices and hundreds of people working to help transform how modern businesses are built and run."
        />
        <FeatureCard icon="clock outline" name="QUICK TRANSACTIONS"
        detail="Stripe is an always-improving toolchain that gains new features every month. Our world-class engineering team constantly iterates upon every facet of the Stripe stack. And from Apple Pay to Bitcoin, building on Stripe means you get early access to the latest technologies."
        />
        <FeatureCard icon="question" name="INSTANT SUPPORT"
        detail="We help power 100,000+ businesses in 100+ countries and across nearly every industry. Headquartered in San Francisco, Stripe has 9 global offices and hundreds of people working to help transform how modern businesses are built and run."
        />
      </div>
    );
  }
}

export default Features;