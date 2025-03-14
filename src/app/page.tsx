import Image from "next/image";
import ArticleCard from "@/components/ArticleCard";
import SideBarRight from "@/components/SideBarRight";

const articles = [
  {
    id: "1",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    category: "Quản lý sản xuất",
    date: "17/11/2022",
    readTime: "5",
    imageUrl: "/images/bom-la-gi.png",
  },
  {
    id: "2",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất2? ",
    category: "ERP",
    date: "05/12/2023",
    readTime: "3",
    imageUrl: "/images/bom-la-gi.png",
  },
  {
    id: "3",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất2? ",
    category: "ERP",
    date: "05/12/2023",
    readTime: "3",
    imageUrl: "/images/bom-la-gi.png",
  },

  {
    id: "4",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất2? ",
    category: "ERP",
    date: "05/12/2023",
    readTime: "3",
    imageUrl: "/images/bom-la-gi.png",
  },
  {
    id: "5",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất2? ",
    category: "ERP",
    date: "05/12/2023",
    readTime: "3",
    imageUrl: "/images/bom-la-gi.png",
  },
  {
    id: "6",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất2? ",
    category: "ERP",
    date: "05/12/2023",
    readTime: "9",
    imageUrl: "/images/bom-la-gi.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative pt-10 pb-16 text-center">
        <p className="text-gray-500 text-sm">
          Trang chủ &gt; Tài nguyên &gt;{" "}
          <span className="font-semibold">Blog</span>
        </p>
        <h1 className="mt-4 text-4xl font-light text-gray-800">
          Blog{" "}
          <span className="text-green-600 font-bold bg-linear-text">FOSO</span>{" "}
          – <br />
          Cập Nhật Tin Tức{" "}
          <span className="font-extrabold text-gray-900">Mới Nhất</span>
        </h1>
        <p className="mt-3 text-gray-500 text-lg">
          Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
        </p>
        <Image
          src="/images/calendar.png"
          alt="Calendar"
          width={195}
          height={188}
          className="absolute left-30 top-16 object-contain w-[195px] h-[188px]"
        />
        <Image
          src="/images/hand_writing.png"
          alt="Calendar"
          width={195}
          height={158}
          className="absolute right-30 top-16  object-contain w-[195px] h-[158px]"
        />
      </div>
      <main className="max-w-[1440px] w-full mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2 max-w-[1042px]">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Tất Cả Bài Viết
          </h2>
          <div className="bg-linear-banner-top w-full h-[318] relative rounded-3xl mb-12 overflow-hidden">
            <div className="absolute left-[59] top-[60px]">
              <div className="flex flex-col gap-8 items-start">
                <p className="text-[#fff] font-bold text-4xl  max-w-[386px]">
                  Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát
                  triển!
                </p>
                <div className="flex border-white border-[1.5px] rounded-2xl px-6 py-3.5 justify-between">
                  <p className="text-white text-sm font-bold">Tham gia ngay</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M14.344 4.50012V11.8126C14.344 12.0364 14.2551 12.251 14.0968 12.4092C13.9386 12.5675 13.724 12.6564 13.5002 12.6564C13.2764 12.6564 13.0618 12.5675 12.9036 12.4092C12.7454 12.251 12.6565 12.0364 12.6565 11.8126V6.53918L5.09717 14.0971C4.93866 14.2556 4.72368 14.3446 4.49951 14.3446C4.27535 14.3446 4.06036 14.2556 3.90185 14.0971C3.74335 13.9386 3.6543 13.7236 3.6543 13.4994C3.6543 13.2753 3.74335 13.0603 3.90185 12.9018L11.4612 5.34387H6.18771C5.96394 5.34387 5.74933 5.25498 5.59109 5.09674C5.43286 4.93851 5.34396 4.7239 5.34396 4.50012C5.34396 4.27635 5.43286 4.06173 5.59109 3.9035C5.74933 3.74527 5.96394 3.65637 6.18771 3.65637H13.5002C13.724 3.65637 13.9386 3.74527 14.0968 3.9035C14.2551 4.06173 14.344 4.27635 14.344 4.50012Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <Image
              src="/images/group1.png"
              alt="Hero Image"
              width={472}
              height={399}
              className="absolute top-6 right-2  object-cover"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                category={article.category}
                imageUrl={article.imageUrl}
                date={article.date}
                readTime={article.readTime}
              />
            ))}
          </div>
        </section>
        {/* Sidebar */}
        <aside className="rounded-lg max-w-[366px]">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Tìm Kiếm</h3>
          <div className="relative inline-block w-full">
            <input
              type="text"
              placeholder="Tìm kiếm bài viết"
              className="w-full py-3 pl-6 pr-2 rounded-xl shadow-custom-input h-[72px] outline:none placeholder-[#ACB3C7] "
            />
            <button className="p-3 absolute inset-y-0 right-3 top-3 bottom-3  bg-[#15AA7A] rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M21.5308 20.8794L16.8368 16.1863C18.1973 14.5529 18.8757 12.4578 18.7309 10.3369C18.5861 8.21608 17.6293 6.23268 16.0593 4.79935C14.4894 3.36602 12.4274 2.59312 10.3021 2.64142C8.17687 2.68972 6.15205 3.5555 4.64888 5.05867C3.14571 6.56184 2.27993 8.58666 2.23163 10.7119C2.18333 12.8372 2.95623 14.8992 4.38956 16.4691C5.82289 18.039 7.80629 18.9959 9.92715 19.1407C12.048 19.2855 14.1431 18.6071 15.7765 17.2466L20.4696 21.9406C20.5393 22.0103 20.622 22.0656 20.713 22.1033C20.8041 22.141 20.9017 22.1604 21.0002 22.1604C21.0988 22.1604 21.1963 22.141 21.2874 22.1033C21.3784 22.0656 21.4612 22.0103 21.5308 21.9406C21.6005 21.8709 21.6558 21.7882 21.6935 21.6972C21.7312 21.6061 21.7506 21.5085 21.7506 21.41C21.7506 21.3115 21.7312 21.2139 21.6935 21.1228C21.6558 21.0318 21.6005 20.9491 21.5308 20.8794ZM3.75021 10.91C3.75021 9.57498 4.14609 8.26994 4.88779 7.1599C5.62949 6.04987 6.6837 5.18471 7.9171 4.67382C9.1505 4.16293 10.5077 4.02925 11.8171 4.2897C13.1264 4.55015 14.3292 5.19303 15.2732 6.13703C16.2172 7.08104 16.8601 8.28377 17.1205 9.59314C17.381 10.9025 17.2473 12.2597 16.7364 13.4931C16.2255 14.7265 15.3603 15.7807 14.2503 16.5224C13.1403 17.2641 11.8352 17.66 10.5002 17.66C8.71061 17.658 6.99488 16.9462 5.72944 15.6808C4.46399 14.4153 3.7522 12.6996 3.75021 10.91Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">
            Danh Mục
          </h3>
          <ul className="space-y-2">
            <li className="border-b border-[#F1F1F1] pb-2 flex items-center justify-between">
              <a href="#" className="text-[#33404A] hover:underline">
                Công nghệ
              </a>
              <span className="text-gray-500 text-sm ml-2">12</span>
            </li>
            <li className="border-b border-[#F1F1F1] pb-2 flex items-center justify-between">
              <a href="#" className="text-[#33404A] hover:underline">
                Thiết kế website
              </a>
              <span className="text-gray-500 text-sm ml-2">12</span>
            </li>
            <li className="border-b border-[#F1F1F1] pb-2 flex items-center justify-between">
              <a href="#" className="text-[#33404A] hover:underline">
                Thiết kế App Mobile
              </a>
              <span className="text-gray-500 text-sm ml-2">12</span>
            </li>
            <li className="border-b border-[#F1F1F1] pb-2 flex items-center justify-between">
              <a href="#" className="text-[#33404A] hover:underline">
                Quản Lý Sản Xuất
              </a>
              <span className="text-gray-500 text-sm ml-2">12</span>
            </li>
            <li className="border-b border-[#F1F1F1] pb-2 flex items-center justify-between">
              <a href="#" className="text-[#33404A] hover:underline">
                Quản Lý bán hàng
              </a>
              <span className="text-gray-500 text-sm ml-2">12</span>
            </li>
            <li className="border-b border-[#F1F1F1] pb-2 flex items-center justify-between">
              <a href="#" className="text-[#33404A] hover:underline">
                Báo chí nói về FOSO
              </a>
              <span className="text-gray-500 text-sm ml-2">12</span>
            </li>
          </ul>
          <SideBarRight />
        </aside>
      </main>
    </div>
  );
}
