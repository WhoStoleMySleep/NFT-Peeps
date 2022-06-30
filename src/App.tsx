import './App.scss'
import Collection from './components/Collection/Collection';
import Content from './components/Content/Content';
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
      </main>
    </>
  );
}

export default App;
