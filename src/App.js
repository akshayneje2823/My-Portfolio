import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Pages/Navbar/Navbar'
import useMediaQuery from './Hooks/useMediaQuery';
import DotGroup from './Pages/DotGroup/DotGroup';
import Landing from './Pages/Landing';
import LineGradient from './Pages/LineGradient'
import MySkills from './Pages/MySkills';
import Projects from './Pages/Projects'
function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isAboveMediaScreens = useMediaQuery("(min-width:1060px)");

  useEffect(() => {

    const handleScroll = () => {
      if (window.screenY === 0) setIsTopOfPage(true);
      if (window.screenY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)

  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        {
          isAboveMediaScreens && <DotGroup isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        }
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      {/* <LineGradient /> */}
      <div className='w-5/6 mx-auto md:h-full'>
        <MySkills />
      </div>
      <div className='w-5/6 mx-auto'>
        <Projects />
      </div>
    </div>
  );
}

export default App;
