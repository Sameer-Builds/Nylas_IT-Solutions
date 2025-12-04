import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CarouselButtons({ onPrev, onNext }) {
    return (
        <div className="flex justify-center gap-5">
            <button
                onClick={onPrev}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center
                bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.1)]
                hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transition">
                <ChevronLeft size={22} className="text-white" />
            </button>

            <button
                onClick={onNext}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center
                bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.1)]
                hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transition">
                <ChevronRight size={22} className="text-white" />
            </button>
        </div>
    );
}

export default CarouselButtons;
