export default function BaiHoc() {
  const lessons = [
    {
      label: 'Bài học 1 — Quy luật LLSX & QHSX',
      title: 'QHSX phải xuất phát từ LLSX thực tế',
      dark: true,
      points: [
        'Phân tích kỹ trình độ LLSX (loại lao động, công nghệ, quy trình) trước khi thiết kế QHSX',
        'QHSX phù hợp → thúc đẩy LLSX; QHSX không phù hợp → trở thành "xiềng xích" kìm hãm',
        'Thay đổi QHSX mà không thay đổi LLSX là vi phạm quy luật khách quan — thất bại tất yếu',
      ],
    },
    {
      label: 'Bài học 2 — Quy luật CSHT & KTTT',
      title: 'KTTT phải phản ánh đúng CSHT',
      dark: false,
      points: [
        'Văn hóa doanh nghiệp (KTTT) không thể tự thay đổi nếu quan hệ SX công nghiệp (CSHT) không đổi',
        'Áp đặt KTTT trái chiều CSHT → mâu thuẫn tất yếu bùng phát, kìm hãm kinh tế',
        'Muốn thay đổi văn hóa bền vững phải bắt đầu từ thay đổi CSHT (cơ cấu kinh tế, quan hệ SX)',
      ],
    },
    {
      label: 'Bài học 3 — Tính khách quan của quy luật',
      title: 'Không thể bác bỏ quy luật bằng ý chí',
      dark: false,
      points: [
        'Quy luật LLSX–QHSX và CSHT–KTTT là quy luật khách quan, hoạt động độc lập với mong muốn chủ quan',
        'CEO/nhà lãnh đạo không thể "copy" mô hình thành công từ ngành khác rồi áp đặt nguyên vẹn',
        'Nhận thức sai quy luật → vận dụng duy ý chí → hậu quả kinh tế không thể tránh khỏi',
      ],
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
        Bài học quản trị
      </p>
      <h2 className="text-3xl font-medium mb-1 leading-tight">
        Có thể "copy" văn hóa doanh nghiệp mà không thay đổi mô hình sản xuất được không?
      </h2>
      <p className="text-sm text-red-600 font-medium mb-6">
        Không — vì đó là vi phạm đồng thời hai quy luật khách quan của triết học Mác–Lênin.
      </p>

      <div className="flex flex-col gap-4">
        {lessons.map((l, i) => (
          <div key={i} className={l.dark ? 'bg-zinc-900 text-white rounded-xl p-5' : 'border-2 border-black rounded-xl p-5'}>
            <p className={`text-xs font-medium tracking-widest uppercase mb-1 ${l.dark ? 'text-zinc-400' : 'text-muted-foreground'}`}>
              {l.label}
            </p>
            <p className={`text-xs font-medium mb-3 ${l.dark ? 'text-orange-400' : 'text-foreground'}`}>
              {l.title}
            </p>
            <div className="space-y-1.5">
              {l.points.map((pt, j) => (
                <div key={j} className="flex items-start gap-2">
                  <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${l.dark ? 'bg-zinc-500' : 'bg-black'}`} />
                  <p className={`text-sm leading-snug ${l.dark ? 'text-zinc-200' : 'text-muted-foreground'}`}>{pt}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
