import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Pages/Navbar/Navbar'
import useMediaQuery from './Hooks/useMediaQuery';
import DotGroup from './Pages/DotGroup/DotGroup';
import Landing from './Pages/Landing';

function App() {
  const [selectedPages, setSelectedPages] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isAboveMediaScreens = useMediaQuery("(min-width:1060px)");

  useEffect(() => {

    const handleScroll = () => {
      if (window.screenY === 0) setIsTopOfPage(true);
      if (window.screenY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)

  }, [])
  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPages} setSelectedPages={setSelectedPages} />
      <div className="w-5/6 mx-auto md:h-full">
        {
          isAboveMediaScreens && <DotGroup isTopOfPage={isTopOfPage} selectedPage={selectedPages} setSelectedPages={setSelectedPages}/>
        }
      </div>
      <Landing setSelectedPages={setSelectedPages}/>
    </div>
  );
}

export default App;
