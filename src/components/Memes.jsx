import Michi1 from "../assets/michi-1.jpeg";
import Michi2 from "../assets/michi-2.jpeg";
import Michi3 from "../assets/michi-3.jpeg";
import Michi4 from "../assets/michi-4.jpeg";
import Michi5 from "../assets/michi-5.jpeg";
import Michi6 from "../assets/michi-6.jpeg";
import Michi7 from "../assets/michi-7.jpeg";
import Michi8 from "../assets/michi-8.jpeg";

function Memes() {
    const images = [Michi1, Michi2, Michi3, Michi4, Michi5, Michi6, Michi7, Michi8]
  return (
    <div className="w-full flex justify-center mb-[60px]">
      <div className="w-[95%] sm:w-[90%] flex items-center mt-[30px] md:mt-[60px] flex-col">
        <h2 className="text-black font-bitter text-[40px] md:text-[60px] lg:text-[90px] font-extrabold leading-[53px] tracking-[1.7px] mb-[60px]">
          hami memes
        </h2>

        <div className="w-full flex justify-center mt-[30px] flex-wrap">
          {images.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt=""
                className="w-full sm:w-[250px] md:w-[280px] md:h-[280px] object-cover border-4 border-black"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Memes