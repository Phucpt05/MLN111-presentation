export default function Hero() {
  return (
    <div className="w-full max-w-5xl mx-auto text-center space-y-12">
      <div className="space-y-6">
        <h1 className="text-7xl font-medium tracking-tight">
          HÌNH THÁI KINH TẾ - XÃ HỘI
        </h1>
        <p className="text-2xl text-muted-foreground">
          Theo Triết học Mác - Lênin
        </p>
      </div>

      <div className="mt-16 p-10 bg-muted/50 rounded-2xl border border-border">
        <p className="text-xl font-medium mb-3">
          Case Study: Nhà máy gạch men áp dụng văn hóa Google
        </p>
        <p className="text-muted-foreground">
          Phân tích thất bại qua lăng kính lý thuyết hình thái kinh tế - xã hội Mác - Lênin
        </p>
      </div>

      <div className="mt-12 text-sm text-muted-foreground">
        <p>Nhấn → hoặc Space để tiếp tục</p>
      </div>
    </div>
  );
}
