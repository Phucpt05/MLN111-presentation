export default function QuaTrinhLichSu() {
  const stages = [
    { name: 'Cộng sản\nnguyên thủy', desc: 'Không có giai cấp' },
    { name: 'Chiếm hữu\nnô lệ', desc: 'Chủ nô — Nô lệ' },
    { name: 'Phong\nkiến', desc: 'Lãnh chúa — Nông dân' },
    { name: 'Tư bản\nchủ nghĩa', desc: 'Tư bản — Công nhân' },
    { name: 'Cộng sản\nchủ nghĩa', desc: 'Không có giai cấp' },
  ];

  const elements = [
    {
      label: 'Lực lượng sản xuất',
      desc: 'Nền tảng vật chất của xã hội — tiêu chuẩn khách quan phân biệt các thời đại kinh tế. Yếu tố xét đến cùng quyết định sự vận động, phát triển của hình thái kinh tế - xã hội.',
    },
    {
      label: 'Quan hệ sản xuất (CSHT)',
      desc: 'Quan hệ khách quan, cơ bản, chi phối và quyết định mọi quan hệ xã hội. Tiêu chuẩn quan trọng nhất để phân biệt bản chất các chế độ xã hội khác nhau.',
    },
    {
      label: 'Kiến trúc thượng tầng',
      desc: 'Sự thể hiện các mối quan hệ giữa người với người trong lĩnh vực tinh thần — tiêu biểu cho bộ mặt tinh thần của đời sống xã hội.',
    },
  ];

  const properties = [
    {
      title: 'Tính lịch sử - tự nhiên',
      desc: 'Phát triển theo quy luật khách quan do lực lượng sản xuất quyết định — không phụ thuộc ý chí con người. Mỗi hình thái có thời kỳ sinh ra, phát triển và bị thay thế.',
    },
    {
      title: 'Tuần tự và "bỏ qua"',
      desc: 'Lịch sử nhân loại phát triển tuần tự qua các giai đoạn. Song một số quốc gia, dân tộc có thể phát triển rút ngắn, bỏ qua một hay vài hình thái — cốt lõi là sự tăng trưởng nhảy vọt của lực lượng sản xuất.',
    },
    {
      title: 'Giá trị khoa học bền vững',
      desc: 'Lý luận hình thái kinh tế - xã hội là cơ sở phương pháp luận khoa học, bác bỏ các quan điểm phiến diện (Fukuyama, Huntington, Toffler) tuyệt đối hóa một yếu tố, xóa nhòa bản chất chế độ xã hội.',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      <div>
        <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
          Hình thái kinh tế - xã hội
        </p>
        <h2 className="text-4xl font-medium leading-tight">
          Là quá trình lịch sử - tự nhiên
        </h2>
      </div>

      {/* Khái niệm */}
      <div className="bg-zinc-900 text-white rounded-xl p-5">
        <p className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">Khái niệm</p>
        <p className="text-sm text-zinc-200 leading-relaxed">
          Hình thái kinh tế - xã hội là một phạm trù cơ bản của chủ nghĩa duy vật lịch sử dùng để chỉ{' '}
          <span className="text-orange-400 font-medium">xã hội ở từng nấc thang lịch sử nhất định</span>{' '}
          với một kiểu quan hệ sản xuất đặc trưng cho xã hội đó, phù hợp với một trình độ nhất định của
          lực lượng sản xuất và một kiến trúc thượng tầng tương ứng được xây dựng trên quan hệ sản xuất đặc trưng ấy.
        </p>
      </div>

      {/* 5 stages */}
      <div>
        <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
          Tiến trình 5 hình thái kinh tế - xã hội
        </p>
        <div className="grid grid-cols-5 gap-3">
          {stages.map((stage, idx) => (
            <div key={idx} className="relative">
              <div className="p-4 border-2 border-black rounded-xl text-center h-full flex flex-col justify-between">
                <p className="font-medium text-xs mb-2 whitespace-pre-line leading-tight">{stage.name}</p>
                <p className="text-xs text-muted-foreground">{stage.desc}</p>
              </div>
              {idx < 4 && (
                <div className="absolute top-1/2 -right-2 w-3 h-0.5 bg-black transform -translate-y-1/2 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 3 yếu tố cơ bản */}
      <div>
        <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
          3 yếu tố cơ bản cấu thành hình thái kinh tế - xã hội
        </p>
        <div className="grid grid-cols-3 gap-4">
          {elements.map((el, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden border border-border">
              <div className="bg-zinc-900 text-white px-4 py-2">
                <p className="text-xs font-medium tracking-widest uppercase text-zinc-400">{el.label}</p>
              </div>
              <div className="bg-white px-4 py-3">
                <p className="text-xs text-foreground leading-relaxed">{el.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3 tính / giá trị */}
      <div className="grid grid-cols-3 gap-4">
        {properties.map((p, idx) => (
          <div key={idx} className="border-2 border-black rounded-xl p-4">
            <p className="text-xs font-medium uppercase tracking-wide mb-2">{p.title}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="border border-border rounded-xl px-5 py-3">
        <p className="text-xs italic text-muted-foreground">
          "Tôi coi sự phát triển của các hình thái kinh tế - xã hội là một quá trình lịch sử - tự nhiên." — C.Mác
        </p>
      </div>
    </div>
  );
}
