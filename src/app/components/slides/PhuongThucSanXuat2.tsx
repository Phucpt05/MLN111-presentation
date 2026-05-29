export default function PhuongThucSanXuat2() {
  const rows = [
    {
      label: 'Công cụ lao động',
      google: 'Máy tính, server, phần mềm',
      factory: 'Lò nung, băng chuyền, máy tạo hình',
      factoryRed: false,
    },
    {
      label: 'Đối tượng lao động',
      google: 'Dữ liệu, ý tưởng, code',
      factory: 'Đất sét, men, nguyên liệu vật chất',
      factoryRed: false,
    },
    {
      label: 'Loại lao động',
      google: 'Trí tuệ, sáng tạo phi tuyến',
      factory: 'Thể chất + kỹ thuật tuần tự',
      factoryRed: false,
    },
    {
      label: 'Sản phẩm lỗi',
      google: 'Có thể "rollback", vá sau',
      factory: 'Mất vĩnh viễn, không hoàn tác',
      factoryRed: true,
    },
    {
      label: 'Yêu cầu thời gian',
      google: 'Linh hoạt, async',
      factory: 'Bắt buộc — lò nung không đợi',
      factoryRed: true,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Label + heading */}
      <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
        Áp dụng vào tình huống
      </p>
      <h2 className="text-4xl font-medium mb-6 leading-tight">
        Phương thức sản xuất trong nhà máy gạch men
      </h2>

      {/* Table */}
      <div className="rounded-xl overflow-hidden border border-border">
        {/* Table header */}
        <div className="grid grid-cols-3 bg-zinc-900 text-white">
          <div className="px-5 py-3">
            <p className="text-xs font-medium tracking-widest uppercase text-zinc-400">
              So sánh: LLSX của hai công ty
            </p>
          </div>
          <div className="px-5 py-3 border-l border-zinc-700">
            <p className="text-sm font-medium">Google</p>
          </div>
          <div className="px-5 py-3 border-l border-zinc-700">
            <p className="text-sm font-medium text-orange-400">Nhà Máy Gạch</p>
          </div>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-3 border-t border-border ${i % 2 === 0 ? 'bg-white' : 'bg-muted/30'}`}
          >
            <div className="px-5 py-4">
              <p className="text-xs font-medium text-muted-foreground">{row.label}</p>
            </div>
            <div className="px-5 py-4 border-l border-border">
              <p className="text-sm text-foreground">{row.google}</p>
            </div>
            <div className="px-5 py-4 border-l border-border">
              <p className={`text-sm font-medium ${row.factoryRed ? 'text-red-600' : 'text-foreground'}`}>
                {row.factory}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Conclusion bar */}
      <div className="mt-4 p-4 bg-zinc-900 text-white rounded-xl">
        <span className="text-xs font-medium tracking-widest uppercase text-orange-400 mr-2">
          Kết luận quan trọng:
        </span>
        <span className="text-sm text-zinc-200">
          LLSX khác nhau → đòi hỏi QHSX (cách tổ chức lao động, văn hóa) khác nhau.
          Đây là nền tảng của quy luật tiếp theo.
        </span>
      </div>
    </div>
  );
}
