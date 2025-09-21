import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Card } from ".";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function HoodsCarousel({ hoods }) {
    return (
        <div className="max-w-5xl mx-auto py-8 px-4 cursor-grab">
            <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {hoods.map((hood, index) => (
                    <SwiperSlide key={index}>
                        <Card hood={hood} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
