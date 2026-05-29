export default function KetLuan() {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-medium mb-4">Kết Luận</h2>
        <p className="text-xl text-muted-foreground">
          Tổng kết bài học từ tình huống thực tế
        </p>
      </div>

      <div className="p-10 bg-black text-white rounded-2xl">
        <h3 className="text-3xl font-medium mb-8 text-center">
          Kết luận chính
        </h3>
        <div className="space-y-5 text-lg">
          <div className="flex items-start gap-4">
            <span className="text-3xl font-medium flex-shrink-0">
              1
            </span>
            <p className="text-white/90 pt-1">
              Hình thái kinh tế - xã hội được quyết định bởi
              phương thức sản xuất, phát triển theo quy luật
              khách quan lịch sử - tự nhiên
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-3xl font-medium flex-shrink-0">
              2
            </span>
            <p className="text-white/90 pt-1">
              Quan hệ sản xuất phải phù hợp với trình độ lực
              lượng sản xuất - đây là quy luật cơ bản không thể
              vi phạm
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-3xl font-medium flex-shrink-0">
              3
            </span>
            <p className="text-white/90 pt-1">
              Kiến trúc thượng tầng (văn hóa doanh nghiệp) phải
              phù hợp với cơ sở hạ tầng (đặc thù sản xuất thực
              tế)
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-12">
        <div className="p-8 border-2 border-destructive bg-destructive/5 rounded-xl">
          <h4 className="text-2xl font-medium mb-4 text-destructive">
            Sai lầm của nhà máy
          </h4>
          <p className="text-muted-foreground text-lg">
            Áp dụng văn hóa công nghệ (Google) vào sản xuất công
            nghiệp, vi phạm quy luật QHSX phù hợp LLSX → Thất
            bại tất yếu
          </p>
        </div>

        <div className="p-8 border-2 border-black rounded-xl">
          <h4 className="text-2xl font-medium mb-4">
            Phương án đúng đắn
          </h4>
          <p className="text-muted-foreground text-lg">
            Xây dựng văn hóa phù hợp đặc thù ngành sản xuất: kỷ
            luật, quy trình chuẩn, tối ưu hóa năng suất
          </p>
        </div>
      </div>

      <div className="p-10 bg-muted/50 rounded-2xl text-center mt-12">
        <h4 className="text-2xl font-medium mb-4">
          Bài học lớn nhất
        </h4>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Trong quản trị doanh nghiệp, cần vận dụng triết học
          Mác - Lênin để phân tích mối quan hệ giữa điều kiện
          vật chất (LLSX) và tổ chức xã hội (QHSX), tránh áp
          dụng máy móc các mô hình không phù hợp với thực tế.
        </p>
      </div>

      <div className="text-center pt-12">
        <p className="text-4xl font-medium mb-3">Cảm ơn!</p>
        <p className="text-lg text-muted-foreground">
          Nhóm trình bày - Môn Triết học Mác - Lênin
        </p>
      </div>
    </div>
  );
}