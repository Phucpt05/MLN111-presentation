export default function QuyLuat1() {
  const cycle = [
    {
      stage: 'Giai đoạn 1 — Phù hợp',
      desc: 'QHSX là "hình thức phát triển" của LLSX, tạo địa bàn đầy đủ cho LLSX phát triển → năng suất tăng, sản xuất mở rộng.',
      highlight: null,
      filled: true,
    },
    {
      stage: 'Giai đoạn 2 — Mâu thuẫn phát sinh',
      desc: 'LLSX tiếp tục vận động, phát triển không ngừng. QHSX "đứng im" tương đối → bắt đầu lạc hậu so với LLSX.',
      highlight: null,
      filled: false,
    },
    {
      stage: 'Giai đoạn 3 — Không phù hợp',
      desc: 'QHSX trở thành "xiềng xích" kìm hãm LLSX. Xung đột, khủng hoảng, đòi hỏi phải thay đổi.',
      highlight: 'Nhà máy gạch men: văn hóa Google kìm hãm SX → thua lỗ 2,3 tỷ',
      filled: true,
    },
    {
      stage: 'Giai đoạn 4 — Phù hợp mới',
      desc: 'Con người nhận thức và giải quyết mâu thuẫn, thiết lập QHSX mới phù hợp với trình độ LLSX đã phát triển → nấc thang cao hơn.',
      highlight: null,
      filled: false,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Label + heading */}
      <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
        LLSX và QHSX
      </p>
      <h2 className="text-4xl font-medium mb-6 leading-tight">
        Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {/* LEFT: 2 stacked cards */}
        <div className="flex flex-col gap-4">
          {/* Card 1 — Phát biểu quy luật */}
          <div className="bg-zinc-900 text-white rounded-xl p-5">
            <p className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-3">
              Quy luật cơ bản nhất
            </p>
            <p className="text-sm text-zinc-200 leading-relaxed mb-4">
              LLSX và QHSX là hai mặt của một phương thức sản xuất có tác động biện chứng, trong đó{' '}
              <span className="text-orange-400 font-medium">LLSX quyết định QHSX</span>, còn{' '}
              <span className="text-orange-400 font-medium">QHSX tác động trở lại</span> đối với LLSX.
            </p>
            <div className="border-t border-zinc-700 pt-3">
              <p className="text-xs italic text-zinc-400">
                "Tới một giai đoạn phát triển nào đó, các LLSX vật chất mâu thuẫn với những QHSX hiện có...Khi đó bắt đầu thời đại một cuộc cách mạng xã hội." — C.Mác
              </p>
            </div>
          </div>

          {/* Card 2 — Hai chiều tác động */}
          <div className="border-2 border-black rounded-xl p-5">
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
              Tác động hai chiều của QHSX
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-muted/40 rounded-lg">
                <span className="text-lg flex-shrink-0">↑</span>
                <div>
                  <p className="text-sm font-medium mb-0.5">Khi phù hợp</p>
                  <p className="text-xs text-muted-foreground">
                    Thúc đẩy LLSX phát triển — nền SX mở rộng, KH&CN được áp dụng nhanh, người lao động nhiệt tình hăng hái
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 border border-red-200 bg-red-50 rounded-lg">
                <span className="text-lg flex-shrink-0 text-red-600">↓</span>
                <div>
                  <p className="text-sm font-medium text-red-600 mb-0.5">Khi không phù hợp</p>
                  <p className="text-xs text-muted-foreground">
                    Kìm hãm, thậm chí phá hoại LLSX — năng suất giảm, xung đột, khủng hoảng, đòi hỏi phải thay đổi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Vòng vận động biện chứng */}
        <div>
          <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Vòng vận động biện chứng
          </p>
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
            <div className="space-y-5">
              {cycle.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className={`w-4 h-4 rounded-full flex-shrink-0 mt-0.5 z-10 border-2 border-black ${item.filled ? 'bg-black' : 'bg-white'}`} />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide mb-1">{item.stage}</p>
                    <p className="text-sm text-muted-foreground leading-snug">{item.desc}</p>
                    {item.highlight && (
                      <div className="mt-2 border-l-2 border-red-500 pl-3">
                        <p className="text-xs text-red-600 font-medium">{item.highlight}</p>
                      </div>
                    )}
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
