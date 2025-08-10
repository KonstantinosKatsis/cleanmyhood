import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HoodsCarousel({ hoods }) {
    return (
        <div className="max-w-5xl mx-auto py-8 px-4">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {hoods.map((hood, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-lFmAvBcHv3lfofE0-RN_AmzZboq4IXLGA&s"
                                alt={hood.name}
                                className="h-40 w-full object-cover"
                            />

                            <div className="p-4 flex-1 flex flex-col">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {hood.name}
                                </h3>
                                <p className="text-sm text-gray-500 mb-2">
                                    {hood.location || "Athens, Greece"}
                                </p>
                                <p className="text-gray-600 flex-1">
                                    {hood.description ||
                                        "Join us in keeping this area clean and beautiful. Every little effort counts!"}
                                </p>
                                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                                    Click Me
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
