import React from 'react';
import './App.css';
import { MainPage } from './MainPage/MainPage';
import { SecondPage } from './SecondPage/SecondPage';
import { InfoBox } from './InfoBox/InfoBox';
import { ThirdPage } from './ThirdPage/ThirdPage';
import { Testimonials } from './Testimonials/Testimonials';
import { Pricing } from "./Pricing/Pricing";
import { Meeting } from './Meeting/Meeting';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <div>
      <MainPage />
      <SecondPage />
      <InfoBox />
      <ThirdPage />
      <Testimonials />
      <Pricing />
      <Meeting />
      <Footer />
    </div>
  );
}

export default App;
