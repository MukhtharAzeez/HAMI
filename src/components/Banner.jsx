import Michi1 from "../assets/michi-1.jpeg";
import SocialMedias from "./SocialMedias";
import './animate.css'

function Banner() {
  return (
    <div className="w-full flex flex-col items-center pt-[50px] md:pt-[100px]">
      <h1 className="text-black font-bitter text-[49px] md:text-[125px] font-black animate-scale">
        $hami
      </h1>

      <img
        src={Michi1}
        alt=""
        className="w-[400px] h-[400px] border-[10px] border-black rounded-2xl object-cover mt-[50px] md:mt-[100px]"
      />

      {/* <div className=" w-[80%] px-[50px] py-[20px] bg-[#FFFFFF82] rounded-[8px] shadow-[3px_1px_10px_0px_rgba(0,0,0,0.14)] flex justify-center mt-[60px]">
        <h2 className="text-black font-bitter text-[23px] md:text-[45px] font-extrabold leading-[30px] md:leading-[53px] tracking-[1.7px] text-center">
          the most memeable cat on the internet
        </h2>
      </div>

      <h2 className="text-black font-comic text-[28px] font-semibold mt-[60px] hidden md:block text-center !p-4 md:p-0">
        CA: 5mbK36SZ7J19An8jFochhQS4of8g6BwUjbeCSxBSoWdp
      </h2>

      <div className="flex justify-around  flex-wrap w-[95%] xl:w-[70%] mt-[45px] mb-[60px] gap-10">
        <div className="flex justify-center items-center hover:scale-90 transition-all transform duration-500 cursor-pointer flex-1 md:flex-grow-0 min-w-[300px] leading-8 font-bitter text-[23px]  md:text-[35px] font-extrabold uppercase  text-[#FFFFFF] bg-black border-[3px] border-[#FFFFFF] rounded-full shadow-[5px_5px_6px_2px_rgba(0,0,0,0.11)] py-[25px] px-[60px]">
          BUY HERE
        </div>

        <div className="flex justify-center items-center hover:scale-90 transition-all transform duration-500 cursor-pointer min-w-[350px] flex-1 md:flex-0 leading-8 font-bitter  text-[23px] md:text-[35px] font-extrabold uppercase  text-black bg-transparent border-[3px] border-black  rounded-full shadow-[5px_5px_6px_2px_rgba(0,0,0,0.11)] py-[25px] px-[60px]">
          Hami MEME MAKER
        </div>
      </div> */}

      <SocialMedias />
    </div>
  );
}

export default Banner;
