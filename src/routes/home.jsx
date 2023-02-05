import '../css/main.css'
import RenderHeader from '../components/header';
import RenderGridSection from '../components/grid-section';
import RenderFooter from '../components/footer';

function Home() {


  
  return (
    <div className="home">
      <RenderHeader />

      <RenderGridSection />
      
      <RenderFooter />
    </div>
  );
}

export default Home;
