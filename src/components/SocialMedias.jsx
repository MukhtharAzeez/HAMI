import IconX from '../assets/social/IconX.webp'
import IconTg from '../assets/social/iconTg.webp'
// import IconDex from '../assets/social/IconDex.webp'
// import IconDexTool from '../assets/social/iconDEXTOOL.webp'
// import IconInsta from '../assets/social/insta-1.webp'
// import IconTikTok from '../assets/social/tiktok.webp'

function SocialMedias() {
    let images = [
        IconX, IconTg
    ]
  return (
    <div className="w-full lg:w-[60%] flex gap-10 justify-center flex-wrap mt-[60px]">
        {
            images.map((image, index) => {
                return (
                    <img key={index} src={image} alt="" className="w-[81px] h-[81px] "/>
                )
            })
        }
    </div>
  )
}

export default SocialMedias