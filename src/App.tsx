
import { useEffect, useState } from 'react';
import './App.css';
import Player from './components/player';
import Sidebar from './components/sidebar';

function App() {
  const [isPhone, setIsPhone]= useState<boolean>(false);

  //will not handle dynamic resizing, but that should not be necessary. 
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsPhone(true);
    }
  }, []);
  return (
    <div className="flex flex-col justify-center items-center bg-red-600 w-full h-[100vh]"> 
      <div className="flex flex-row justify-center items-center bg-slate-600 w-full h-full">
        <Sidebar />
        <div className="relative w-[80%] md:w-[60%] md:h-[50%] h-[90%] bg-green-600">
          {isPhone 
          ? 
          <> 
            <div className="absolute flex flex-col items-center justify-center left-[-10%] bg-yellow-400 h-full">
              <Player />
              <Player />
            </div>
            <div className="absolute flex flex-col items-center justify-center left-[100%] bg-yellow-400 h-full">
              <Player />
              <Player />
            </div>
          </> 
          : <>
              <Player className="left-[50%] top-[-10%]" />
              <Player className="left-[50%] top-[100%]" />
              <Player className="left-[-10%] top-[50%]" />
              <Player className="left-[100%] top-[50%]" />
            </>}
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
