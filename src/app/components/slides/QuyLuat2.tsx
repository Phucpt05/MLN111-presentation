export default function QuyLuat2() {
  const violations = [
    {
      qhsx: 'Quan hệ sở hữu',
      applied: 'Flat hierarchy — CEO tự quyết, bỏ qua HĐQT và quy trình phê duyệt',
      llsx: 'Dây chuyền SX cần kỷ luật thống nhất từ trên xuống',
      red: true,
    },
    {
      qhsx: 'Quan hệ tổ chức quản lý',
      applied: 'Giờ tự do, bỏ đồng phục, không chấm công — mô hình tri thức sáng tạo',
      llsx: 'Lò nung nhiệt độ cao không thể chờ, ca kíp nhiều ca phải cố định',
      red: true,
    },
    {
      qhsx: 'Quan hệ phân phối',
      applied: '20%-time, thưởng sáng kiến cá nhân — khuyến khích tự chủ phi tuyến',
      llsx: 'Công nhân cần lương theo ca, KPI sản lượng và chất lượng gạch',
      red: true,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Label + heading */}
      <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
        LLSX và QHSX
      </p>
      <h2 className="text-4xl font-medium mb-6 leading-tight">
        Vi phạm quy luật — Phân tích tình huống
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {/* LEFT: 2 stacked cards */}
        <div className="flex flex-col gap-4">
          {/* Card 1 — LLSX thực tế */}
          <div className="bg-zinc-900 text-white rounded-xl p-5">
            <p className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-3">
              LLSX thực tế của nhà máy
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-orange-400 flex-shrink-0" />
                <p className="text-sm text-zinc-200">
                  <span className="font-medium text-white">Người lao động:</span> Đông đảo công nhân lao động chân tay, ca kíp nghiêm ngặt, kỹ năng thủ công chuyên biệt
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-zinc-500 flex-shrink-0" />
                <p className="text-sm text-zinc-200">
                  <span className="font-medium text-white">CCLĐ:</span> Lò nung nhiệt độ cao, máy ép, băng chuyền — công nghệ trung bình, quy trình cơ khí cố định
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-zinc-500 flex-shrink-0" />
                <p className="text-sm text-zinc-200">
                  <span className="font-medium text-white">Tính chất:</span> SX liên tục 24/7, lỗi không thể rollback, kiểm soát chất lượng nghiêm ngặt
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 — Kết quả vi phạm */}
          <div className="border-2 border-red-500 rounded-xl p-5">
            <p className="text-xs font-medium tracking-widest uppercase text-red-600 mb-3">
              Kết quả vi phạm quy luật
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                <p className="text-sm text-foreground">Lò nung tắt nhiều lần mỗi tuần → <span className="font-medium text-red-600">thiệt hại nặng mỗi mẻ nung</span></p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                <p className="text-sm text-foreground">Tỷ lệ lỗi sản phẩm <span className="font-medium text-red-600">tăng vọt nhiều lần</span> so với ban đầu</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                <p className="text-sm text-foreground">Nhiều tai nạn lao động, nhiều đơn hàng lớn bị trả về</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                <p className="text-sm text-foreground"><span className="font-medium text-red-600">Thua lỗ toàn diện</span> — HĐQT hủy toàn bộ "cải cách"</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: 3 quan hệ vi phạm */}
        <div>
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Phân tích 3 quan hệ sản xuất bị vi phạm
          </p>
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
            <div className="space-y-5">
              {violations.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-4 h-4 rounded-full bg-black flex-shrink-0 mt-0.5 z-10" />
                  <div className="flex-1">
                    <p className="text-xs font-medium uppercase tracking-wide mb-1">{item.qhsx}</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 border border-red-200 bg-red-50 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wide" style={{fontSize: '10px'}}>QHSX áp dụng</p>
                        <p className="text-xs text-red-700">{item.applied}</p>
                      </div>
                      <div className="p-2 border border-border bg-muted/30 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wide" style={{fontSize: '10px'}}>LLSX đòi hỏi</p>
                        <p className="text-xs text-foreground">{item.llsx}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Conclusion node */}
              <div className="flex gap-4 items-start">
                <div className="w-4 h-4 rounded-full border-2 border-black bg-white flex-shrink-0 mt-0.5 z-10" />
                <div className="border-l-2 border-red-500 pl-3 py-1">
                  <p className="text-xs font-medium uppercase tracking-wide text-red-600 mb-0.5">Vi phạm quy luật cơ bản nhất</p>
                  <p className="text-xs text-muted-foreground">
                    QHSX (văn hóa Google) không phù hợp LLSX (SX công nghiệp) → QHSX trở thành "xiềng xích" kìm hãm → thất bại tất yếu theo quy luật khách quan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
