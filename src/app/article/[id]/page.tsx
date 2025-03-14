import Image from "next/image";
// interface ArticleDetailProps {
//   params: { id: string };
// }
import SideBarRight from "@/components/SideBarRight";
interface ArticleDetailProps {
  params: Promise<{ id: string }>;
}
const articles = [
  {
    id: "1",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    content: "Nội dung chi tiết về BOM trong sản xuất...",
    category: "Quản lý sản xuất",
    imageUrl: "/images/bom-la-gi.png",
    date: "17/11/2022",
  },
  {
    id: "2",
    title: "Cách tối ưu hoá quy trình sản xuất bằng ERP",
    category: "Quản lý sản xuất",
    content: "Giới thiệu về cách tối ưu hoá quy trình...",
    imageUrl: "/images/bom-la-gi.png",
    date: "05/12/2023",
  },
];

// Hàm này giúp Next.js biết các giá trị hợp lệ cho `params.id`
export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}
const ArticleDetail = async ({ params }: ArticleDetailProps) => {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return <p className="text-center text-gray-500">Bài viết không tồn tại!</p>;
  }

  return (
    <div className="max-w-[1440px] w-full mx-auto ">
      <div className="mt-8 mb-12">
        <p className="text-gray-500 text-sm">
          Trang chủ &gt; Tài nguyên &gt;{" "}
          <span className="font-semibold">Blog</span>
        </p>
      </div>
      <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2 max-w-[900px] pr-6">
          <span className="text-[#0F4F9E] text-xs font-medium px-2 py-1 bg-[#E5F0FF] rounded-lg  inline-block">
            {article.category}
          </span>
          <h2 className="font-extrabold text-[#050505] text-4xl my-4">
            {article.title}
          </h2>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full w-[64] h-[64] flex items-center justify-center border border-[#F1F5F7]">
                <Image
                  src="/images/logo-icon2.png"
                  alt="icon-logo"
                  width={33}
                  height={33}
                  className="h-[33] w-[33] object-cover"
                />
              </div>
              <div className="flex-col flex items-start">
                <div className="text-[#667F93] text-sm font-medium">
                  Tác giả
                </div>
                <div className="text-[#33404A] text-base font-bold">
                  FOSO Creator
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-2 pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M19.5 3.41003H17.25V2.66003C17.25 2.46112 17.171 2.27036 17.0303 2.1297C16.8897 1.98905 16.6989 1.91003 16.5 1.91003C16.3011 1.91003 16.1103 1.98905 15.9697 2.1297C15.829 2.27036 15.75 2.46112 15.75 2.66003V3.41003H8.25V2.66003C8.25 2.46112 8.17098 2.27036 8.03033 2.1297C7.88968 1.98905 7.69891 1.91003 7.5 1.91003C7.30109 1.91003 7.11032 1.98905 6.96967 2.1297C6.82902 2.27036 6.75 2.46112 6.75 2.66003V3.41003H4.5C4.10218 3.41003 3.72064 3.56807 3.43934 3.84937C3.15804 4.13068 3 4.51221 3 4.91003V19.91C3 20.3079 3.15804 20.6894 3.43934 20.9707C3.72064 21.252 4.10218 21.41 4.5 21.41H19.5C19.8978 21.41 20.2794 21.252 20.5607 20.9707C20.842 20.6894 21 20.3079 21 19.91V4.91003C21 4.51221 20.842 4.13068 20.5607 3.84937C20.2794 3.56807 19.8978 3.41003 19.5 3.41003ZM6.75 4.91003V5.66003C6.75 5.85895 6.82902 6.04971 6.96967 6.19036C7.11032 6.33102 7.30109 6.41003 7.5 6.41003C7.69891 6.41003 7.88968 6.33102 8.03033 6.19036C8.17098 6.04971 8.25 5.85895 8.25 5.66003V4.91003H15.75V5.66003C15.75 5.85895 15.829 6.04971 15.9697 6.19036C16.1103 6.33102 16.3011 6.41003 16.5 6.41003C16.6989 6.41003 16.8897 6.33102 17.0303 6.19036C17.171 6.04971 17.25 5.85895 17.25 5.66003V4.91003H19.5V7.91003H4.5V4.91003H6.75ZM19.5 19.91H4.5V9.41003H19.5V19.91Z"
                    fill="#667F93"
                  />
                </svg>
                <span className="text-base font-medium text-[#667F93]">
                  cập nhật vào {article.date}
                </span>
              </div>
              <div className="flex items-center gap-2 pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M12 2.66003C10.0716 2.66003 8.18657 3.23186 6.58319 4.30321C4.97982 5.37455 3.73013 6.89729 2.99218 8.67887C2.25422 10.4605 2.06114 12.4209 2.43735 14.3122C2.81355 16.2035 3.74215 17.9408 5.10571 19.3043C6.46928 20.6679 8.20656 21.5965 10.0979 21.9727C11.9892 22.3489 13.9496 22.1558 15.7312 21.4179C17.5127 20.6799 19.0355 19.4302 20.1068 17.8268C21.1782 16.2235 21.75 14.3384 21.75 12.41C21.7473 9.82501 20.7192 7.34665 18.8913 5.51876C17.0634 3.69087 14.585 2.66276 12 2.66003ZM12 20.66C10.3683 20.66 8.77326 20.1762 7.41655 19.2697C6.05984 18.3631 5.00242 17.0747 4.378 15.5672C3.75358 14.0597 3.5902 12.4009 3.90853 10.8005C4.22685 9.2002 5.01259 7.73019 6.16637 6.5764C7.32016 5.42262 8.79017 4.63688 10.3905 4.31856C11.9909 4.00023 13.6497 4.16361 15.1571 4.78803C16.6646 5.41245 17.9531 6.46987 18.8596 7.82658C19.7661 9.18329 20.25 10.7783 20.25 12.41C20.2475 14.5973 19.3775 16.6943 17.8309 18.2409C16.2843 19.7876 14.1873 20.6576 12 20.66ZM18 12.41C18 12.6089 17.921 12.7997 17.7803 12.9404C17.6397 13.081 17.4489 13.16 17.25 13.16H12C11.8011 13.16 11.6103 13.081 11.4697 12.9404C11.329 12.7997 11.25 12.6089 11.25 12.41V7.16003C11.25 6.96112 11.329 6.77036 11.4697 6.6297C11.6103 6.48905 11.8011 6.41003 12 6.41003C12.1989 6.41003 12.3897 6.48905 12.5303 6.6297C12.671 6.77036 12.75 6.96112 12.75 7.16003V11.66H17.25C17.4489 11.66 17.6397 11.7391 17.7803 11.8797C17.921 12.0204 18 12.2111 18 12.41Z"
                    fill="#667F93"
                  />
                </svg>
                <span className="text-base font-medium text-[#667F93]">
                  10 phút chưa đọc
                </span>
              </div>
            </div>
          </div>
          <Image
            src="/images/quytrinh5s.png"
            alt="article-image"
            width={900}
            height={600}
            className="rounded-lg w-full h-[600px] object-cover"
          />
          <figcaption className="text-[#667F93] text-sm mt-2 text-center">
            Quy trình 5s là gì?
          </figcaption>

          <div className=" border-green-500 pl-4 italic text-gray-700 relative py-6">
            <span className="absolute top-1.5 -left-3 text-green-500 text-5xl font-serif">
              “
            </span>
            <p className="text-center">
              Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây
              dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho
              bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo nên
              thành công của quy trình bạn nhé.
            </p>
          </div>

          <div>
            <h2 className="title-detail">1.Quy trình 5s là gì</h2>
            <p className="content-desc-detail">
              Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản
              xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật
              Bản. 
            </p>
            <p className="content-desc-detail">
              Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận
              dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ
              S đầu trong tiếng Nhật:
            </p>
            <ul className="custom-list pl-6 mb-3">
              <li className="text-[#231F20] text-base font-medium">
                <span className="text-[#15AA7A]">Seiri </span> (Ngăn nắp)
              </li>
              <li className="text-[#231F20] text-base font-medium">
                <span className="text-[#15AA7A]">Sesiso </span> (Sạch sẽ)
              </li>

              <li className="text-[#231F20] text-base font-medium">
                <span className="text-[#15AA7A]">Seiso </span> (Trật tự)
              </li>
              <li className="text-[#231F20] text-base font-medium">
                <span className="text-[#15AA7A]">Seiton </span> (Kỷ luật)
              </li>
              <li className="text-[#231F20] text-base font-medium">
                <span className="text-[#15AA7A]">Seiketsu </span> (Tiêu chuẩn
                hóa)
              </li>
            </ul>
            <h2 className="title-detail">
              2 Cải thiện rõ nét môi trường làm viêc
            </h2>
            <p className="content-desc-detail">
              Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi
              bước của quy trình với mục đích cải tiến môi trường làm việc của
              doanh nghiệp.
            </p>
            <p className="content-desc-detail">
              Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp
              sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi
              làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt
              theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết.
            </p>
            <p className="content-desc-detail">
              Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói
              quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên
              một văn hóa doanh nghiệp tích cực.
            </p>
            <Image
              src="/images/taisao.png"
              alt="article-image"
              width={900}
              height={600}
              className="rounded-lg w-full h-[600px] object-cover"
            />
            <figcaption className="text-[#667F93] text-sm mt-2 text-center">
              Tại sao doanh nghiệp cần quy trình 5S?
            </figcaption>

            <div>
              <h2 className="title-detail">
                3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
              </h2>
              <p className="content-desc-detail">
                Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp
                trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng
                minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các
                lý do vì sao bạn nên lựa chọn quy trình:
              </p>
              <h3 className="title-detail-small">
                3.1 Cải thiện rõ nét môi trường làm việc
              </h3>
              <p className="content-desc-detail">
                Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn
                gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm
                việc hiệu quả cho từng cá nhân trong doanh nghiệp.
              </p>
              <h3 className="title-detail-small">
                3.2 Tiết kiệm thời gian đáng kể
              </h3>
              <p className="content-desc-detail">
                Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được
                thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ
                dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ
                đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng. 
              </p>
              <h3 className="title-detail-small">
                3.3 Tăng năng suất làm việc
              </h3>
              <p className="content-desc-detail">
                Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết,
                tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm
                và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm
                thời gian và tăng năng suất làm việc.
              </p>
              <h3 className="title-detail-small">3.4 Tiết kiệm chi phí</h3>
              <p className="content-desc-detail">
                Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và
                sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu
                chi phí vận hành đáng kể cho doanh nghiệp của mình.
              </p>
              <h3 className="title-detail-small">
                3.5 Tăng chất lượng sản phẩm
              </h3>
              <p className="content-desc-detail">
                5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ
                đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản
                xuất không mong muốn.
              </p>
            </div>
            <Image
              src="/images/cacbuocquytrinh.png"
              alt="article-image"
              width={900}
              height={600}
              className="rounded-lg w-full h-[600px] object-cover"
            />
            <figcaption className="text-[#667F93] text-sm mt-2 text-center">
              Quy trình 5s gồm các bước
            </figcaption>
            <div>
              <h2 className="title-detail">4. Quy trình 5S gồm các bước</h2>
              <p className="content-desc-detail">
                5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường
                hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao
                gồm năm bước cơ bản sau:
              </p>
              <h3 className="title-detail-small">4.1 Seiri (Ngăn nắp)</h3>
              <p className="content-desc-detail">
                Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp,
                nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để
                tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm
                thời gian.
              </p>
              <h3 className="title-detail-small">4.2 Seiton (Sắp xếp)</h3>
              <p className="content-desc-detail">
                Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết
                bị, tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm
                kiếm và sử dụng chúng một cách dễ dàng.
              </p>
              <h3 className="title-detail-small">4.3 Seiso (Vệ sinh)</h3>
              <p className="content-desc-detail">
                Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân
                trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ.
                Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây
                nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.
              </p>
              <h3 className="title-detail-small">
                4.4 Seiketsu (Tiêu chuẩn hóa)
              </h3>
              <p className="content-desc-detail">
                Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước
                này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách
                thức sử dụng các dụng cụ, thiết bị, tài liệu.{" "}
              </p>
              <h3 className="title-detail-small">4.5 Shitsuke (Kỷ luật)</h3>
              <p className="content-desc-detail">
                Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng
                vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S
                trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật
                và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì
                và tuân thủ theo quy trình.
              </p>
            </div>
            <Image
              src="/images/cacbuocthuchien.png"
              alt="article-image"
              width={900}
              height={600}
              className="rounded-lg w-full h-[600px] object-cover"
            />
            <figcaption className="text-[#667F93] text-sm mt-2 text-center">
              Các bước thực hiện quy trình 5s
            </figcaption>
            <div>
              <h2 className="title-detail">
                5. Quy trình được thực hiện như sau:
              </h2>
              <p className="content-desc-detail">
                Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp
                trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng
                minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các
                lý do vì sao bạn nên lựa chọn quy trình:
              </p>
              <h3 className="title-detail-small">5.1 Giai đoạn chuẩn bị</h3>
              <p className="content-desc-detail">
                Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng
                ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc
                phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ
                hiệu quả hơn.
              </p>
              <h3 className="title-detail-small">5.2 Triển khai rộng rãi </h3>
              <p className="content-desc-detail">
                Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy
                trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến
                thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.
              </p>
              <h3 className="title-detail-small">
                5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
              </h3>
              <p className="content-desc-detail">
                Đây là bước có thể khiến mọi người không hào hứng trong các bước
                của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo
                không khí hào hứng cho từng cá nhân.
              </p>
              <h3 className="title-detail-small">
                5.4 Sàng lọc, sắp xếp và đánh giá
              </h3>
              <p className="content-desc-detail">
                Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ
                doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc
                thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn
                và dễ dàng tìm kiếm sau này.
              </p>
              <h3 className="title-detail-small">5.5 Đánh giá </h3>
              <p className="content-desc-detail">
                Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá
                trình cải tiến và xem xét cần cải tiến phương diện nào hay không
                trong quá trình thực hiện quy trình 5S
              </p>
              <h2 className="title-detail">
                6. Quy trình 5S có giống với Kaizen?
              </h2>
              <p className="content-desc-detail">
                Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay
                không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng
                giữa chúng có mối quan hệ chặt chẽ với nhau.
              </p>
              <div className="py-6">
                <p className="pl-9 pt-3 pb-2 border-l-[3px] border-l-[#15AA7A] italic text-xl font-medium text-[#33404A] max-w-[778px]  ">
                  Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục
                  trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi
                  tích cực, mang tính liên tục và bền vững. 
                </p>
                <p className="pl-9 pt-3 pb-2 border-l-[3px] border-l-[#15AA7A] italic text-xl font-medium mt-6 text-[#33404A] max-w-[778px] ">
                  Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải
                  tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ,
                  sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc
                </p>
              </div>
              <p className="content-desc-detail">
                Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy
                tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm
                việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước
                đầu tiên trong quá trình cải tiến liên tục của phương pháp
                Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải
                tiến tiếp theo. 
              </p>
              <h2 className="title-detail">7. Đối tượng nào nên áp dụng 5S?</h2>
              <p className="content-desc-detail">
                Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng
                rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác
                nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản
                xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các
                doanh nghiệp nhỏ.
              </p>
              <p className="content-desc-detail">
                Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức
                tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng
                hiệu quả.
              </p>
            </div>
            <Image
              src="/images/yeutotaonen.png"
              alt="article-image"
              width={900}
              height={600}
              className="rounded-lg w-full h-[600px] object-cover"
            />
            <figcaption className="text-[#667F93] text-sm mt-2 text-center">
              Các yếu tố tạo nên thành công cho quy trình 5S
            </figcaption>
            <div>
              <h2 className="title-detail">
                8. Các yếu tố tạo nên thành công cho quy trình 5S
              </h2>
              <p className="content-desc-detail">
                Và những nhân tố quyết định đến quá trình thành công của quy
                trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là
                từ phía:
              </p>

              <ul className="pl-6">
                <li className="text-[#231F20] text-base font-medium">
                  Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp.
                  Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có
                  áp dụng quy tắc này hay không.
                </li>
                <li className="text-[#231F20] text-base font-medium">
                  Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh
                  đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch
                  thực hiện triển khai 5S. 
                </li>
                <li className="text-[#231F20] text-base font-medium">
                  kế hoạch thực hiện triển khai 5S.  Sự tự nguyện tham gia của
                  toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích
                  nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức,
                  của doanh nghiệp.
                </li>
              </ul>
              <p className="content-desc-detail">
                Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng
                cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt
                tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và
                với những thông tin bổ ích như trên, FOSO mong rằng phần nào
                giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc
                trong tương lai.
              </p>
            </div>
          </div>

          <div className="flex-col justify-center custom-card py-6 gap-6 w-full">
            <div>
              <p className="text-center text-xl font-extrabold text-[#33404A]">
                Bạn thấy bài viết như thế nào
              </p>
              <p className="text-base  text-center text-[#33404A]">
                4 phản hồi
              </p>
            </div>
            <div className="flex justify-center gap-10 mt-6">
              <div className="flex flex-col items-center active px-4">
                <Image
                  src="/images/thumpup.png"
                  alt="article-image"
                  width={48}
                  height={48}
                  className="rounded-lg w-full h-[48px] object-cover"
                />
                <span className="py-1 font-bold text-base">1</span>
                <p className="text-sm text-[#33404A]">Hữu ích</p>
              </div>
              <div className="flex flex-col items-center px-4">
                <Image
                  src="/images/heart.png"
                  alt="article-image"
                  width={48}
                  height={48}
                  className="rounded-lg w-[48] h-[48px] object-cover"
                />
                <span className="py-1 font-bold text-base">1</span>
                <p className="text-sm text-[#33404A]">Hữu ích</p>
              </div>
              <div className="flex flex-col items-center px-4">
                <Image
                  src="/images/favorite.png"
                  alt="article-image"
                  width={48}
                  height={48}
                  className="rounded-lg w-[48] h-[48px] object-cover"
                />
                <span className="py-1 font-bold text-base">1</span>
                <p className="text-sm text-[#33404A]">Hữu ích</p>
              </div>
              <div className="flex flex-col items-center px-4">
                <Image
                  src="/images/hushed.png"
                  alt="article-image"
                  width={48}
                  height={48}
                  className="rounded-lg w-[48] h-[48px] object-cover"
                />
                <span className="py-1 font-bold text-base">1</span>
                <p className="text-sm text-[#33404A]">Hữu ích</p>
              </div>
              <div className="flex flex-col items-center px-4">
                <Image
                  src="/images/pouting.png"
                  alt="article-image"
                  width={48}
                  height={48}
                  className="rounded-lg w-[48] h-[48px] object-cover"
                />
                <span className="py-1 font-bold text-base">1</span>
                <p className="text-sm text-[#33404A]">Hữu ích</p>
              </div>
            </div>
          </div>
        </section>
        <aside className="flex flex-col max-w-[366px]">
          <div className="flex justify-between">
            <h2 className="font-extrabold text-[#050505] text-2xl">
              Nội Dung Bài Viết
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M20.2969 16.2059C20.1924 16.3108 20.0682 16.394 19.9314 16.4508C19.7947 16.5076 19.6481 16.5368 19.5 16.5368C19.3519 16.5368 19.2053 16.5076 19.0686 16.4508C18.9318 16.394 18.8076 16.3108 18.7031 16.2059L12.0009 9.50375L5.29687 16.2059C5.08553 16.4173 4.79888 16.536 4.5 16.536C4.20111 16.536 3.91447 16.4173 3.70312 16.2059C3.49178 15.9946 3.37305 15.708 3.37305 15.4091C3.37305 15.1102 3.49178 14.8235 3.70312 14.6122L11.2031 7.11219C11.3076 7.00731 11.4318 6.92409 11.5686 6.86731C11.7053 6.81053 11.8519 6.7813 12 6.7813C12.1481 6.7813 12.2947 6.81053 12.4314 6.86731C12.5682 6.92409 12.6924 7.00731 12.7969 7.11219L20.2969 14.6122C20.4018 14.7167 20.485 14.8409 20.5418 14.9776C20.5985 15.1144 20.6278 15.261 20.6278 15.4091C20.6278 15.5571 20.5985 15.7037 20.5418 15.8405C20.485 15.9772 20.4018 16.1014 20.2969 16.2059Z"
                fill="#15AA7A"
              />
            </svg>
          </div>
          <div className="flex flex-col mb-6">
            <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
              1. Quy trình 5s là gì
            </a>
            <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
              2. Lợi ích quy trình 5S đem lại
            </a>
            <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
              3. Tại sao doanh nghiệp nên áp dụng quy trình 5S
            </a>
            <div className="pl-4 flex flex-col">
              <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
                3.1 Cải thiện rõ nét môi trường làm việc
              </a>
              <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
                3.2 Tiết kiệm thời gian đáng kể
              </a>
              <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
                3.3 Tăng năng suất làm việc
              </a>
              <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
                3.4 Tiết kiệm chi phí
              </a>
              <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
                3.5 Tăng chất lượng sản phẩm
              </a>
            </div>
            <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
              4. Quy trình 5S gồm các bước
            </a>
            <div className="pl-4 flex flex-col">
              <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
                4.1 Seiri (Ngăn nắp)
              </a>
              <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
                4.2 Seiton (Sắp xếp)
              </a>
              <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
                4.3 Seiso (Vệ sinh)
              </a>
              <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
                4.4 Seiketsu (Tiêu chuẩn hóa)
              </a>
              <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
                4.5 Shitsuke (Kỷ luật)
              </a>
            </div>
            <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
              5. Quy trình được thực hiện như sau
            </a>
            <div className="pl-4 flex flex-col">
              <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
                5.1 Giai đoạn chuẩn bị
              </a>
              <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
                5.2 Triển khai rộng rãi
              </a>
              <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
                5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
              </a>
              <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
                5.4 Sàng lọc, sắp xếp và đánh giá
              </a>
              <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
                5.5 Đánh giá
              </a>
            </div>
            <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
              6. Quy trình 5S có giống với Kaizen
            </a>
            <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
              7. Đối tượng nào nên áp dụng 5S
            </a>
            <a href="#" className="text-lg text-[#33404A] mt-4 font-medium">
              8. Các yếu tố tạo nên thành công cho quy trình 5S
            </a>
          </div>
          <SideBarRight />
        </aside>
      </div>
    </div>
  );
};

export default ArticleDetail;
