import './Testimonials.scss'
import React from 'react';
import { Icon ,Segment} from 'semantic-ui-react';
import face1 from '../../assets/face1.png';
import face2 from '../../assets/face2.png';
import face3 from '../../assets/face3.png';
import face4 from '../../assets/face4.png';

class Testimonials extends React.Component {
  render() {
    const TestimonialsHeader = (props)=>{
      return (
        <div className="TestimonialsHeader">
          <div className="headerIcon">
            <Icon name='lock'/>
          </div>
          <p className="headerTitle">Trusted by 2 million users</p>
          <p className="headerContent">We believe that payments is a problem rooted in code, not finance. We obsessively seek out elegant, composable abstractions that enable robust, scalable, flexible integrations. </p>
        </div>
      );
    };
    
    const TestimonialCard = (props)=>{
      const {src, name, text} = props;
      return(
        <Segment className="TestimonialCard" raised>
          <img className="TestimonialPicture" src={src} alt="face"/>
          <div  className="TestimonialContent">
            <p className="name">{name}</p>
            <p className="testimonial">{text}</p>
          </div>
        </Segment>
      );
    }
    
    return (
      <div className="Testimonials">
        <TestimonialsHeader />
        <div className="TestimonialCards "> 
          <TestimonialCard src={face1} name="Charlie Shrem" 
          text="Catch mouse and gave it as a present chew the plant but scratch me there, elevator butt. Always ensure to lay down in  such."/>
          <TestimonialCard src={face2} name="Bentley Bellinger"
          text="Catch mouse and gave it as a present chew the plant but scratch me there, elevator butt. Always ensure to lay down in  such."/>
          <TestimonialCard src={face3} name="Paul Dishkant"
          text="Catch mouse and gave it as a present chew the plant but scratch me there, elevator butt. Always ensure to lay down in  such."/>
          <TestimonialCard src={face4} name="Jesse Lazenby"
          text="Catch mouse and gave it as a present chew the plant but scratch me there, elevator butt. Always ensure to lay down in  such."/>
        </div>
      </div>
    );
  };
}

export default Testimonials;