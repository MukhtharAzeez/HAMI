import './App.css'
import Banner from './components/Banner';
import Header from './components/Header'
import Memes from './components/Memes';

function App() {

  return (
    <div className="max-w-[1280px] mx-auto font-body text-base font-normal leading-6">
      <div className="w-full h-[100vh]">
        <Header />
        <Banner />
        <Memes />
        <div className='w-full flex justify-center'>
          <h2 className="text-black font-montserrat text-[17px] font-semibold mb-[30px]">
            ©2024 $HAMI, All Right Reserved.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App
