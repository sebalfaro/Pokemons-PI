import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import './LandingPage.css'

const LandingPage = () => {
  return (
    <main className="landing_main">

      <section className="landing_section">
      <div className="landing_logo">
        <Logo width={800} height={400} size='big'/>
      </div>
      <div className="landing_info">
          <p>A complete guide of Pokemons!</p>
        <div className="landing_button">
          <Link to={"/pokemons"}>GET IN</Link>
        </div>
      </div>
      </section>
    </main>
  );
};

export default LandingPage;
