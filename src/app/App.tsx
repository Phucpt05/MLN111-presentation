import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SlideLayout from "./components/SlideLayout";
import Hero from "./components/slides/Hero";
import ComicSlide from "./components/slides/ComicSlide";
import SanXuatVatChat from "./components/slides/SanXuatVatChat";
import TinhHuong from "./components/slides/TinhHuong";
import PhuongThucSanXuat1 from "./components/slides/PhuongThucSanXuat1";
import PhuongThucSanXuat2 from "./components/slides/PhuongThucSanXuat2";
import QuyLuat1 from "./components/slides/QuyLuat1";
import QuyLuat2 from "./components/slides/QuyLuat2";
import CoSoHaTang from "./components/slides/CoSoHaTang";
import PhanTich from "./components/slides/PhanTich";
import QuaTrinhLichSu from "./components/slides/QuaTrinhLichSu";
import BaiHoc from "./components/slides/BaiHoc";
import GiaiPhap from "./components/slides/GiaiPhap";
import KetLuan from "./components/slides/KetLuan";

export default function App() {
  const slides = [
    {
      path: "/",
      element: <Hero />,
      title: "Trang chủ",
      section: null,
    },
    {
      path: "/comic",
      element: <ComicSlide />,
      title: "Comic",
      section: 0,
    },
    {
      path: "/san-xuat",
      element: <SanXuatVatChat />,
      title: "Sản xuất vật chất",
      section: 0,
    },
    {
      path: "/tinh-huong",
      element: <TinhHuong />,
      title: "Tình huống",
      section: 0,
    },
    {
      path: "/phuong-thuc-1",
      element: <PhuongThucSanXuat1 />,
      title: "Phương thức SX (1)",
      section: 1,
    },
    {
      path: "/phuong-thuc-2",
      element: <PhuongThucSanXuat2 />,
      title: "Phương thức SX (2)",
      section: 1,
    },
    {
      path: "/quy-luat-1",
      element: <QuyLuat1 />,
      title: "Quy luật QHSX (1)",
      section: 1,
    },
    {
      path: "/quy-luat-2",
      element: <QuyLuat2 />,
      title: "Quy luật QHSX (2)",
      section: 1,
    },
    {
      path: "/co-so-ha-tang",
      element: <CoSoHaTang />,
      title: "CSHT & KTTT",
      section: 2,
    },
    {
      path: "/phan-tich",
      element: <PhanTich />,
      title: "Phân tích",
      section: 2,
    },
    // { path: '/qua-trinh', element: <QuaTrinhLichSu />, title: 'Quá trình lịch sử', section: 3 },
    {
      path: "/bai-hoc",
      element: <BaiHoc />,
      title: "Bài học",
      section: 3,
    },
    {
      path: "/giai-phap",
      element: <GiaiPhap />,
      title: "Giải pháp",
      section: 3,
    },
    // {
    //   path: "/ket-luan",
    //   element: <KetLuan />,
    //   title: "Kết luận",
    //   section: 3,
    // },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {slides.map((slide, index) => (
          <Route
            key={slide.path}
            path={slide.path}
            element={
              <SlideLayout
                currentIndex={index}
                totalSlides={slides.length}
                slides={slides}
              >
                {slide.element}
              </SlideLayout>
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}