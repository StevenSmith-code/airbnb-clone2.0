
import { Background, Parallax } from 'react-parallax';

function Banner() {

    

    const img = 'https://wallpapercave.com/wp/wp5223856.jpg'
    return (

        <Parallax
      blur={0}
      strength={200}
      bgImage={img}
    >
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]  xl:h-[600px]  2xl:h-[700px]"> 
            
                     
                    {/* <Image 
                    src='https://mocah.org/thumbs/5391839-person-man-guy-male-back-standing-high-mountain-mountain-view-hiking-adventure-horizon-hike-silhouette-mountain-line-mountain-risge-mountain-ridge-mountain-top-mountain-layers-sky-free-images.jpg'
                    layout="fill"
                    objectFit="cover"
                    />    */}
            <div className="absolute top-1/2 w-full text-center text-white lg:text-black">
                <p className="text-md left-[32%] sm:text-lg lg:text-2xl absolute left-[42%] bottom-[180px] text-gray-700 xl:left-[41%]">Not sure where to go? Perfect.</p>

                <button className="lg: text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-5 hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
            </div>   
        </div>
        </Parallax>
    )
}

export default Banner
