export default function GiaiPhap() {
  const solutions = [
    {
      no: '01',
      title: 'Chẩn đoán LLSX trước',
      desc: 'Đánh giá toàn diện: loại lao động (thủ công/tri thức), công nghệ, quy trình, tính liên tục của SX. Nhà máy gạch → LLSX công nghiệp → cần QHSX tương ứng.',
    },
    {
      no: '02',
      title: 'Xây dựng QHSX phù hợp',
      desc: 'Ca kíp nghiêm ngặt, kỷ luật dây chuyền, lương theo sản lượng và chất lượng. Sáng kiến cải tiến quy trình (không phải tự do cá nhân vô kỷ luật).',
    },
    {
      no: '03',
      title: 'Nâng cấp LLSX song song',
      desc: 'Đầu tư công nghệ, đào tạo chuyên môn công nhân, cải tiến công cụ lao động. Nếu muốn văn hóa tri thức hơn → trước tiên phải chuyển đổi bản thân LLSX.',
    },
    {
      no: '04',
      title: 'Thay đổi từ CSHT lên KTTT',
      desc: 'Không áp đặt văn hóa từ trên xuống. Cải cách quan hệ SX (CSHT) trước → văn hóa doanh nghiệp (KTTT) sẽ hình thành phù hợp theo sau, bền vững hơn.',
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
        Bài học quản trị
      </p>
      <h2 className="text-3xl font-medium mb-2 leading-tight">
        Giải pháp — đúng quy luật
      </h2>
      <p className="text-xs text-muted-foreground mb-6">
        Muốn thay đổi văn hóa doanh nghiệp bền vững, phải đi từ CSHT lên KTTT — không thể ngược lại.
      </p>

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
        <div className="space-y-5">
          {solutions.map((s, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-4 h-4 rounded-full bg-black flex-shrink-0 mt-0.5 z-10" />
              <div className="flex-1">
                <p className="text-xs font-medium uppercase tracking-wide mb-1">
                  <span className="text-muted-foreground mr-1">{s.no}</span> {s.title}
                </p>
                <p className="text-sm text-muted-foreground leading-snug">{s.desc}</p>
              </div>
            </div>
          ))}

          {/* Conclusion node */}
          <div className="flex gap-4 items-start">
            <div className="w-4 h-4 rounded-full border-2 border-black bg-white flex-shrink-0 mt-0.5 z-10" />
            <div className="bg-zinc-900 text-white rounded-xl p-4 flex-1">
              <p className="text-xs font-medium uppercase tracking-wide text-orange-400 mb-1">Kết luận</p>
              <p className="text-sm text-zinc-200 leading-snug">
                Văn hóa doanh nghiệp bền vững không thể "copy" — phải được xây dựng từ CSHT (quan hệ SX thực tế).
                Mọi cải cách quản trị phải bắt đầu từ việc hiểu đúng và tôn trọng LLSX đặc thù của ngành.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
