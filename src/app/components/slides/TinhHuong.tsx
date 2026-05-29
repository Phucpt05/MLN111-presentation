export default function TinhHuong() {
  const timeline = [
    {
      period: 'Tháng 1',
      content: 'Áp dụng giờ tự do, bỏ đồng phục kỷ luật, lắp bàn bi-a khu giải lao.',
      highlight: null,
    },
    {
      period: 'Tháng 2–3',
      content: 'Phần lớn công nhân đến trễ. Lò nung phải tắt nhiều lần mỗi tuần.',
      highlight: 'Thiệt hại nặng mỗi mẻ nung',
    },
    {
      period: 'Tháng 4',
      content: 'Nhiều tai nạn lao động do thiếu bảo hộ. Máy vận hành sai quy trình.',
      highlight: null,
    },
    {
      period: 'Tháng 5–6',
      content: 'Lỗi sản phẩm tăng vọt. Nhiều đơn hàng lớn bị trả về. Doanh thu giảm mạnh.',
      highlight: null,
    },
    {
      period: 'Tháng 7',
      content: 'Hội đồng quản trị buộc hủy toàn bộ "cải cách".',
      highlight: 'Thua lỗ toàn diện',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Label + heading */}
      <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
        Tình huống khởi động
      </p>
      <h2 className="text-4xl font-medium mb-6 leading-tight">
        Chuyện gì xảy ra ở Nhà máy Gạch Tinh Hoa?
      </h2>

      {/* Two-column body */}
      <div className="grid grid-cols-2 gap-6">
        {/* LEFT: 2 stacked cards */}
        <div className="flex flex-col gap-4">
          {/* Card 1 — Bối cảnh ban đầu */}
          <div className="bg-zinc-900 text-white rounded-xl p-5">
            <p className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-3">
              Bối cảnh ban đầu
            </p>
            <p className="text-sm text-zinc-200 leading-relaxed">
              Nhà máy gạch men truyền thống{' '}
              <span className="text-orange-400 font-medium">nhiều năm hoạt động</span>. Hàng trăm công
              nhân làm nhiều ca. Lò nung nhiệt độ cao chạy liên tục. Sản lượng lớn, tỷ lệ lỗi thấp và ổn định.
            </p>
          </div>

          {/* Card 2 — Kỳ vọng */}
          <div className="border-2 border-black rounded-xl p-5">
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
              Kỳ vọng của ban lãnh đạo
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-black flex-shrink-0" />
                <p className="text-sm text-foreground">Môi trường sáng tạo → công nhân chủ động, tích cực hơn</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-black flex-shrink-0" />
                <p className="text-sm text-foreground">Giờ tự do → tăng động lực, giảm nghỉ việc</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-black flex-shrink-0" />
                <p className="text-sm text-foreground">Văn hóa flat → phá bỏ rào cản, giao tiếp cởi mở</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-black flex-shrink-0" />
                <p className="text-sm text-foreground">Mô hình Google → năng suất và lợi nhuận tăng vọt</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Timeline */}
        <div>
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Diễn biến
          </p>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div
                    className={`w-4 h-4 rounded-full flex-shrink-0 mt-0.5 z-10 border-2 ${
                      item.highlight ? 'bg-black border-black' : 'bg-white border-black'
                    }`}
                  />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide mb-0.5">
                      {item.period}
                    </p>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {item.content}{' '}
                      {item.highlight && (
                        <span className="text-red-600 font-medium">{item.highlight}.</span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
