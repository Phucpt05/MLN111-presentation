interface NavigationProps {
  slides: Array<{
    path: string;
    title: string;
    section: number | null;
  }>;
  currentPath: string;
  onNavigate: (index: number) => void;
}

export default function Navigation({ slides, currentPath, onNavigate }: NavigationProps) {
  const mainSections = [
    { name: 'Sản Xuất Vật Chất', section: 0 },
    { name: 'LLSX và QHSX', section: 1 },
    { name: 'CSHT và KTTT', section: 2 },
    { name: 'Hình thái KT - XH', section: 3 }
  ];

  const currentSlideIndex = slides.findIndex(s => s.path === currentPath);
  const currentSection = currentSlideIndex >= 0 ? slides[currentSlideIndex].section : null;

  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavigate(0)}
          className="font-medium hover:opacity-70 transition-opacity"
        >
          HÌNH THÁI KINH TẾ - XÃ HỘI
        </button>

        <div className="flex gap-8">
          {mainSections.map((section) => {
            const sectionIndex = slides.findIndex(s => s.section === section.section);
            return (
              <button
                key={section.name}
                onClick={() => {
                  if (sectionIndex !== -1) onNavigate(sectionIndex);
                }}
                className={`text-sm transition-all ${
                  currentSection === section.section
                    ? 'text-black font-medium border-b-2 border-black pb-1'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {section.name}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
