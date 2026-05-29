export default function SanXuatVatChat() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-3xl font-medium mb-1">
          Sản Xuất Vật Chất
        </h2>
        <p className="text-sm text-muted-foreground">
          Cơ sở của sự tồn tại và phát triển xã hội
        </p>
      </div>

      {/* Definition box */}
      <div className="p-3 bg-black text-white rounded-xl mb-4">
        <p className="text-xs text-white/70 uppercase tracking-wider mb-1">
          Định nghĩa
        </p>
        <p className="text-sm text-white/90 leading-snug">
          SX là hoạt động không ngừng sáng tạo ra các giá trị
          vật chất và tinh thần nhằm mục đích thỏa mãn nhu cầu
          tồn tại và phát triển. Quá trình sản xuất xã hội bao
          gồm sản xuất và tái sản xuất ra đời sống hiện thực.
        </p>
      </div>

      {/* 2 columns */}
      <div className="grid grid-cols-2 gap-3 mb-4 items-stretch">
        {/* Col 1: Sự sản xuất xã hội */}
        <div className="border border-black rounded-xl p-3 flex flex-col">
          <h3 className="text-xs font-medium uppercase tracking-wide border-b border-black pb-1 mb-2">
            Sự sản xuất xã hội
          </h3>
          <p className="text-xs text-muted-foreground mb-2">
            SX &amp; tái SX đời sống hiện thực gồm 3 phương
            diện:
          </p>

          <div className="flex flex-col gap-2 flex-1">
            <div className="p-2 border border-black rounded-lg flex-1 flex flex-col justify-center">
              <p className="text-xs font-medium">
                Sản xuất vật chất
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Cái chính của tình huống — quyết định toàn bộ sự
                vận động, phát triển của đời sống xã hội
              </p>
            </div>

            <div className="p-2 border border-black rounded-lg flex-1 flex flex-col justify-center">
              <p className="text-xs font-medium">
                Sản xuất tinh thần
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Tạo ra giá trị tinh thần — các quy định văn hóa
                Google CEO muốn áp dụng
              </p>
            </div>

            <div className="p-2 border border-black rounded-lg flex-1 flex flex-col justify-center">
              <p className="text-xs font-medium">
                Sản xuất con người
              </p>
              <div className="mt-1 space-y-0.5">
                <p className="text-xs text-muted-foreground">
                  • Cá nhân / gia đình: sinh đẻ, nuôi dạy
                </p>
                <p className="text-xs text-muted-foreground">
                  • Xã hội: tăng trưởng dân số, phát triển con
                  người
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Col 2: Sản xuất vật chất */}
        <div className="border border-black rounded-xl p-3 flex flex-col">
          <h3 className="text-xs font-medium uppercase tracking-wide border-b border-black pb-1 mb-2">
            Sản xuất vật chất
          </h3>
          <p className="text-xs text-muted-foreground leading-snug mb-2">
            Quá trình con người lao động tác động trực tiếp hay
            gián tiếp vào tự nhiên, cải biến các dạng vật chất
            để tạo của cải xã hội thỏa mãn nhu cầu tồn tại và
            phát triển.
          </p>

          <div className="flex flex-col gap-2 flex-1">
            <div className="p-2 border border-black rounded-lg flex-1 flex flex-col justify-center">
              <p className="text-xs font-medium">
                Tư liệu sinh hoạt
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Tiền đề trực tiếp tạo ra tư liệu sinh hoạt —
                lương thực, nhà ở, hàng tiêu dùng
              </p>
            </div>
            <div className="p-2 border border-black rounded-lg flex-1 flex flex-col justify-center">
              <p className="text-xs font-medium">
                Hoạt động lịch sử
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Tiền đề của mọi hoạt động lịch sử — không SX
                thì không có chính trị, văn hóa, khoa học
              </p>
            </div>
            <div className="p-2 border border-black rounded-lg flex-1 flex flex-col justify-center">
              <p className="text-xs font-medium">
                Sáng tạo bản thân con người
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Lao động sản xuất hình thành tư duy, ngôn ngữ
                và xã hội loài người
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}