// import Michi1 from '../assets/michi-1.jpeg'
import Michi5 from "../assets/Hero.png";

function Header() {
  return (
    <div className="w-full h-[150px] px-8 flex justify-between items-center">
      <img
        src={Michi5}
        alt=""
        className="w-[105px] border-4 border-black rounded-full object-cover "
      />

      <h2 className="text-black font-bitter text-[29px] font-extrabold tracking-[0.05em]">
        hami
      </h2>
    </div>
  );
}

export default Header