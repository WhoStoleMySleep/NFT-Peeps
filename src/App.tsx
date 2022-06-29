import './App.scss'
import Collection from './components/Collection/Collection';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

const App = () => {
  return (
    <>
      <Header />   
      <Hero />
      <Collection />
      <Content />
    </>
  );
}

export default App;
