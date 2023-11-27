import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[600px]"
            >
                <SwiperSlide><img className='w-full' src="https://img.freepik.com/free-photo/couple-walking-beach_23-2148111706.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src="https://media.istockphoto.com/id/1365865879/photo/happy-face-at-the-beach.jpg?s=612x612&w=0&k=20&c=NOOEN-pgXsY2xYsGDUNV0xRdH11uxkIlk61oPodgvwY=" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src="https://media.istockphoto.com/id/672865682/photo/love-is-the-best.webp?b=1&s=170667a&w=0&k=20&c=s9iUTkkhfT5TOiLPczimtXlE2gnaeTB1O1D4PwLCK4k=" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full' src="https://img.freepik.com/free-photo/attractive-happy-couple-laughing-traveling-summer-by-sea-man-woman-wearing-sunglasses_285396-2287.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;