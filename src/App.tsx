import './App.scss'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Collection from './components/Collection/Collection';
import Content from './components/Content/Content';
import Roadmap from './components/Roadmap/Roadmap';
import Team from './components/Team/Team';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />   
      <main>
        <Hero />
        <Collection />
        <Content />
        <Roadmap />
        <Team />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default App;
