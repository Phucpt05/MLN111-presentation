export default function PhanTich() {
  const chain = [
    {
      step: 'Xuất phát — LLSX đặc thù',
      desc: 'Nhà máy gạch men có LLSX mang tính công nghiệp: lao động thủ công ca kíp, lò nung liên tục, quy trình cơ khí cứng nhắc, lỗi không thể rollback.',
      filled: true,
    },
    {
      step: 'Vi phạm 1 — QHSX sai (Slide 7)',
      desc: 'Văn hóa "tự do sáng tạo" là QHSX của lao động tri thức. Áp đặt lên LLSX công nghiệp → vi phạm cả 3 quan hệ: sở hữu, tổ chức quản lý, phân phối.',
      filled: true,
    },
    {
      step: 'Vi phạm 2 — KTTT sai (Slide 8)',
      desc: 'Tư tưởng quản trị Google là KTTT không phản ánh đúng CSHT nhà máy. CSHT (quan hệ SX công nghiệp) không thay đổi nhưng KTTT bị ép thay đổi đột ngột.',
      filled: true,
    },
    {
      step: 'Hệ quả tất yếu',
      desc: 'QHSX kìm hãm LLSX → năng suất giảm, tai nạn lao động, lỗi sản phẩm tăng vọt. KTTT ngược chiều CSHT → kìm hãm toàn bộ hoạt động kinh tế.',
      filled: false,
      red: true,
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
        Phân tích tổng hợp
      </p>
      <h2 className="text-3xl font-medium mb-2 leading-tight">
        Tại sao văn hóa "Tự do sáng tạo" thất bại khi áp dụng lên dây chuyền sản xuất gạch men?
      </h2>

      <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
        Chuỗi nhân quả
      </p>

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
        <div className="space-y-5">
          {chain.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className={`w-4 h-4 rounded-full flex-shrink-0 mt-0.5 z-10 border-2 ${
                item.red ? 'bg-red-600 border-red-600' : item.filled ? 'bg-black border-black' : 'bg-white border-black'
              }`} />
              <div>
                <p className={`text-xs font-medium uppercase tracking-wide mb-1 ${item.red ? 'text-red-600' : ''}`}>
                  {item.step}
                </p>
                <p className="text-sm text-muted-foreground leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}

          {/* Answer node */}
          <div className="flex gap-4 items-start">
            <div className="w-4 h-4 rounded-full border-2 border-black bg-white flex-shrink-0 mt-0.5 z-10" />
            <div className="bg-zinc-900 text-white rounded-xl p-4 flex-1">
              <p className="text-xs font-medium uppercase tracking-wide text-orange-400 mb-1">Trả lời</p>
              <p className="text-sm text-zinc-200 leading-snug">
                Văn hóa "tự do sáng tạo" thất bại vì nó vừa vi phạm quy luật QHSX phù hợp LLSX,
                vừa là KTTT không phản ánh đúng CSHT — hai quy luật khách quan tác động đồng thời,
                không thể bác bỏ bằng ý chí chủ quan của nhà lãnh đạo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
