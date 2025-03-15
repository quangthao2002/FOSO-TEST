"use client";
import { useState } from "react";
import Image from "next/image";

const items = [
  { id: 1, src: "/images/thumpup.png", label: "Hữu ích" },
  { id: 2, src: "/images/heart.png", label: "Yêu thích" },
  { id: 3, src: "/images/favorite.png", label: "Thú vị" },
  { id: 4, src: "/images/hushed.png", label: "Bất ngờ" },
  { id: 5, src: "/images/yawning.png", label: "Nhàm chán" },
  { id: 6, src: "/images/pouting.png", label: "Tức giận" },
];

export default function ReactionButtons() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="flex items-center gap-6 px-4">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col items-center px-4 py-2 cursor-pointer rounded-lg transition-all duration-200 ${
            selectedIndex === index
              ? "border-2 border-[#10805B]"
              : "border-transparent"
          }`}
          onClick={() => setSelectedIndex(index)}
        >
          <Image
            src={item.src}
            alt={item.label}
            width={48}
            height={48}
            className="rounded-lg w-[48px] h-[48px] object-cover"
          />
          <span
            className={`py-1 font-bold text-base ${
              selectedIndex === index ? "text-[#10805B]" : "text-[#33404A]"
            }`}
          >
            1
          </span>
          <p
            className={`text-sm font-medium ${
              selectedIndex === index ? "text-[#10805B]" : "text-[#33404A]"
            }`}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
