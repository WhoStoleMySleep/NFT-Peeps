import './App.scss'
import Collection from './components/Collection/Collection';
import Content from './components/Content/Content';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Team from './components/Team/Team';

const App = () => {
  return (
    <>
      <Header />   
      <main>
        <Hero />
        <Collection />
        <Content />
        <Team />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default App;
