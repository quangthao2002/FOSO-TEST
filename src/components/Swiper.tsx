"use client"; // Chỉ component này chạy trên client

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { articles } from "@/data/articles/articlesData";
import ArticleCard from "@/components/ArticleCard";
import { Autoplay } from "swiper/modules";

export default function SwiperComponent() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      navigation
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={1000}
    >
      {articles.map((article) => (
        <SwiperSlide key={article.id}>
          <ArticleCard {...article} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
