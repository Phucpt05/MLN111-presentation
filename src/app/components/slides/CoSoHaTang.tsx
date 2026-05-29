import { ArrowDown, ArrowUp } from "lucide-react";

export default function CoSoHaTang() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Label + heading */}
      <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
        CSHT và KTTT
      </p>
      <h2 className="text-4xl font-medium mb-5 leading-tight">
        Cơ sở hạ tầng & Kiến trúc thượng tầng
      </h2>

      <div className="grid grid-cols-2 gap-6 items-start">
        {/* LEFT: definitions table */}
        <div className="rounded-xl overflow-hidden border border-border">
          {/* CSHT */}
          <div className="bg-zinc-900 text-white px-4 py-2">
            <p className="text-xs font-medium tracking-widest uppercase text-zinc-400">
              Cơ sở hạ tầng (CSHT)
            </p>
          </div>
          <div className="border-b border-border bg-white px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1">
              Định nghĩa
            </p>
            <p className="text-sm text-foreground">
              Toàn bộ những quan hệ sản xuất của một xã hội
              trong sự vận động hiện thực của chúng — hợp thành
              cơ cấu kinh tế của xã hội đó.
            </p>
          </div>
          <div className="border-b border-border bg-muted/30 px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1">
              Cấu trúc
            </p>
            <div className="space-y-1">
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-black flex-shrink-0" />
                <p className="text-sm text-foreground">
                  <span className="font-medium">
                    QHSX thống trị
                  </span>{" "}
                  — đặc trưng cho CSHT xã hội đó
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-zinc-400 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  QHSX tàn dư (của xã hội cũ còn lại)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-zinc-400 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  QHSX mầm mống (của xã hội mới)
                </p>
              </div>
            </div>
          </div>

          {/* Divider with arrows */}
          <div className="bg-white px-4 py-3 flex items-center justify-center gap-8 border-b border-border">
            <div className="flex flex-col items-center gap-1">
              <p className="text-xs font-medium text-black">
                CSHT quyết định KTTT
              </p>
              <ArrowDown className="w-5 h-5 text-black" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <ArrowUp className="w-5 h-5 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">
                KTTT tác động trở lại
              </p>
            </div>
          </div>

          {/* KTTT */}
          <div className="bg-zinc-900 text-white px-4 py-2">
            <p className="text-xs font-medium tracking-widest uppercase text-zinc-400">
              Kiến trúc thượng tầng (KTTT)
            </p>
          </div>
          <div className="border-b border-border bg-white px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1">
              Định nghĩa
            </p>
            <p className="text-sm text-foreground">
              Toàn bộ quan điểm, tư tưởng xã hội với những thiết
              chế tương ứng hình thành trên một cơ sở hạ tầng
              nhất định.
            </p>
          </div>
          <div className="bg-muted/30 px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">
              Cấu trúc theo mức độ liên hệ với CSHT
            </p>
            <div className="space-y-3">
              {/* Nhóm trực tiếp */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-black flex-shrink-0" />
                  <p className="text-xs font-medium">
                    Nhóm trực tiếp: Chính trị, Pháp lý
                  </p>
                </div>
                <p className="text-xs text-muted-foreground ml-4">
                  Công cụ quyền lực của giai cấp thống trị, liên hệ trực tiếp với CSHT.
                  Kinh tế đổi → luật pháp và thể chế thay đổi ngay.
                </p>
              </div>

              {/* Nhóm gián tiếp */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-zinc-400 flex-shrink-0" />
                  <p className="text-xs font-medium">
                    Nhóm gián tiếp: Triết học, Nghệ thuật, Tôn giáo, Đạo đức
                  </p>
                </div>
                <p className="text-xs text-muted-foreground ml-4">
                  "Đi vòng" qua chính trị/pháp luật hoặc kế thừa lịch sử.
                  Độc lập tương đối cao, thay đổi chậm hơn.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: relationship + case study */}
        <div className="flex flex-col gap-4">
          {/* Quote */}
          <div className="border-2 border-black rounded-xl p-4">
            <p className="text-xs italic text-muted-foreground leading-relaxed">
              "Toàn bộ những quan hệ sản xuất ấy hợp thành cơ cấu kinh tế của xã hội, tức là cái cơ sở hiện thực trên đó dựng lên một kiến trúc thượng tầng pháp lý và chính trị và những hình thái ý thức xã hội nhất định tương ứng với cơ sở hiện thực đó"
              — C.Mác (tr 166)
            </p>
          </div>

          {/* Dialectical relationship */}
          <div className="rounded-xl overflow-hidden border border-border">
            <div className="bg-zinc-900 text-white px-4 py-2">
              <p className="text-xs font-medium tracking-widest uppercase text-zinc-400">
                Quan hệ biện chứng — Quy luật phát triển cơ bản
              </p>
            </div>

            <div className="border-b border-border bg-white px-4 py-3">
              <p className="text-xs italic text-muted-foreground mb-2 leading-snug">
                CSHT và KTTT là hai mặt cơ bản của xã hội gắn bó hữu cơ, quan hệ biện chứng:
                CSHT quyết định KTTT, còn KTTT tác động trở lại to lớn, mạnh mẽ đối với CSHT.
              </p>
            </div>

            <div className="border-b border-border bg-muted/30 px-4 py-3">
              <div className="flex items-center gap-2 mb-2">
                <ArrowDown className="w-4 h-4 flex-shrink-0" />
                <p className="text-xs font-medium uppercase tracking-wide">
                  Vai trò quyết định: CSHT → KTTT
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                  <p className="text-xs text-foreground">
                    Quan hệ vật chất quyết định quan hệ tinh thần → tính tất yếu kinh tế quyết định tính tất yếu chính trị, xã hội
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                  <p className="text-xs text-foreground">
                    Quyết định nguồn gốc, cơ cấu, tính chất và sự vận động phát triển của KTTT
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                  <p className="text-xs text-foreground">
                    Mọi hiện tượng KTTT (chính trị, pháp luật, đảng phái, triết học, đạo đức) không giải thích được từ chính bản thân nó — xét đến cùng phụ thuộc CSHT
                  </p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-2 mt-2">
                  <p className="text-xs text-orange-900">
                    <span className="font-medium">Cảnh báo duy tâm:</span> Dùng chính trị giải thích chính trị, đạo đức giải thích đạo đức = rơi vào vòng quẩn quanh. Vật chất có trước, ý thức có sau.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-border bg-white px-4 py-3">
              <div className="flex items-center gap-2 mb-2">
                <ArrowUp className="w-4 h-4 flex-shrink-0" />
                <p className="text-xs font-medium uppercase tracking-wide">
                  Tác động trở lại: KTTT → CSHT
                </p>
              </div>
              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    Cùng chiều → thúc đẩy CSHT phát triển
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    Ngược chiều → kìm hãm CSHT (nhà nước là bộ phận tác động mạnh nhất)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 px-4 py-3">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">
                Liên hệ tình huống
              </p>
              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                  <p className="text-xs text-foreground">
                    <span className="font-medium">CSHT:</span> Quan hệ SX nhà máy gạch — lao động ca kíp, sở hữu tư nhân, phân phối theo sản lượng
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  <p className="text-xs text-foreground">
                    <span className="font-medium">KTTT áp đặt:</span> Văn hóa Google (tư tưởng quản trị) không phản ánh đúng CSHT → kìm hãm SX
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