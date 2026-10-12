"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { services } from "@/lib/data";

export default function ServicesSlider() {
  return (
    <div className="wrap-wide">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: true }}
        loop
        spaceBetween={18}
        slidesPerView={1.15}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1600: { slidesPerView: 5 },
        }}
      >
        {services.map((s) => (
          <SwiperSlide key={s.slug}>
            <Link href={`/services/${s.slug}`} className="service-card">
              <Image src={`/images/${s.img}`} alt={s.title} width={465} height={780} />
              <div className="content">
                <span className="badge">DETAILING XPERTZ</span>
                <h3>{s.title}</h3>
                <p>{s.tagline}</p>
                <span className="btn outline" style={{ padding: "9px 22px", fontSize: "11px" }}>
                  EXPLORE SERVICE
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
