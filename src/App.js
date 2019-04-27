import React from 'react';
import './CSS/base.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
// import featuresInfo from './features-info';
// import FeatureCard from './Components/FeatureCard';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      {/* <FeatureCard featuresInfo={featuresInfo} /> */}
    </div>
  );
}

export default App;
