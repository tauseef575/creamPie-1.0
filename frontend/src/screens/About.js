import React from "react";
import { Container } from "react-bootstrap";
// import Announcement from '../components/Announcement';
// import Newsletter from '../components/Newsletter';
import "../screens/about.css";
// import { Footer } from '../components/Footer';

export default function About() {
  return (
    <React.Fragment>
      {/* <Announcement /> */}
      {/* <Container className='cont'> */}
      <section>
        <section className="section about-section">
          <h1 className="section-title">about us</h1>
          <small class="text-muted">
            CreamyCreations Bakery is a converted cow barn, rustic on the
            outside and perfection on the inside. The breads were all local
            grain and the variation was amazing. There were plaits and cobs,
            buns and cakes, soda breads and flat breads so much and etc. There
            were plaits and cobs, buns and cakes, soda. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Harum aperiam cum blanditiis
            aliquam quam excepturi labore soluta debitis omnis eligendi.
          </small>
        </section>
      </section>
      {/* <Newsletter /> */}
      {/* <Footer /> */}
      {/* </Container> */}
    </React.Fragment>
  );
}
// export default About;
