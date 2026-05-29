import { useState } from "react";

function NodeCircle({
  cx,
  cy,
  r,
  strokeWidth,
  label,
  sub,
  descLine1,
  descLine2,
  hovered,
  pinned,
  onEnter,
  onLeave,
  onClick,
}) {
  const showDesc = hovered || pinned;
  return (
    <g
      style={{ cursor: "pointer" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="white"
        stroke="#18181b"
        strokeWidth={showDesc ? strokeWidth * 1.8 : strokeWidth}
        style={{ transition: "stroke-width .15s" }}
      />
      <text
        x={cx}
        y={cy - 6}
        textAnchor="middle"
        fontSize={r > 40 ? 13 : 10}
        fill="#ea580c"
        fontWeight="600"
      >
        {label}
      </text>
      <text
        x={cx}
        y={cy + 7}
        textAnchor="middle"
        fontSize="7.5"
        fill="#52525b"
      >
        {sub}
      </text>
      <text
        x={cx}
        y={cy + r + 18}
        textAnchor="middle"
        fontSize="7"
        fill="#71717a"
        style={{
          opacity: showDesc ? 1 : 0,
          transition: "opacity .2s",
          pointerEvents: "none",
        }}
      >
        {descLine1}
      </text>
      <text
        x={cx}
        y={cy + r + 29}
        textAnchor="middle"
        fontSize="7"
        fill="#71717a"
        style={{
          opacity: showDesc ? 1 : 0,
          transition: "opacity .2s",
          pointerEvents: "none",
        }}
      >
        {descLine2}
      </text>
    </g>
  );
}

export default function PhuongThucSanXuat1() {
  const [hovered, setHovered] = useState(null);
  const [pinned, setPinned] = useState(new Set());

  const toggle = (key) =>
    setPinned((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  const np = (key) => ({
    hovered: hovered === key,
    pinned: pinned.has(key),
    onEnter: () => setHovered(key),
    onLeave: () => setHovered(null),
    onClick: () => toggle(key),
  });

  return (
    <div className="w-full max-w-6xl mx-auto">
      <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
        LLSX và QHSX
      </p>
      <h2 className="text-4xl font-medium mb-4 leading-tight">
        Phương thức sản xuất
      </h2>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-zinc-900 text-white rounded-xl p-4">
          <p className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">
            Định nghĩa
          </p>
          <p className="text-sm text-zinc-200 leading-relaxed">
            Cách thức con người tiến hành SX vật chất ở những
            giai đoạn lịch sử nhất định — là sự thống nhất giữa{" "}
            <span className="text-orange-400 font-medium">
              lực lượng sản xuất
            </span>{" "}
            với một trình độ nhất định và{" "}
            <span className="text-orange-400 font-medium">
              quan hệ sản xuất
            </span>{" "}
            tương ứng.
          </p>
        </div>
        <div className="border-2 border-black rounded-xl p-4 flex items-center">
          <p className="text-xs italic text-muted-foreground">
            "Người ta không thể sản xuất được nếu không kết hợp với nhau theo một cách nào đó để hoạt động chung và để trao đổi hoạt động với nhau. Muốn sản xuất được, người ta phải có những mối liên hệ và quan hệ nhất định với nhau; và quan hệ của họ với giới tự nhiên, tức là việc sản xuất"
            — C.Mác (tr 158)
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-border overflow-hidden">
        <svg
          viewBox="0 0 720 460"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker
              id="arrow"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L8,3 z" fill="#71717a" />
            </marker>
          </defs>
          <rect width="720" height="460" fill="white" />

          {/* Edges */}
          <line
            x1="118"
            y1="118"
            x2="196"
            y2="195"
            stroke="#71717a"
            strokeWidth="1.2"
            markerEnd="url(#arrow)"
          />
          <line
            x1="118"
            y1="342"
            x2="196"
            y2="255"
            stroke="#71717a"
            strokeWidth="1.2"
            markerEnd="url(#arrow)"
          />
          <path
            d="M 282 182 Q 355 120 428 182"
            fill="none"
            stroke="#71717a"
            strokeWidth="1.2"
            markerEnd="url(#arrow)"
          />
          <text
            x="355"
            y="118"
            textAnchor="middle"
            fontSize="8"
            fill="#a1a1aa"
            fontStyle="italic"
          >
            quyết định
          </text>
          <path
            d="M 428 268 Q 355 330 282 268"
            fill="none"
            stroke="#71717a"
            strokeWidth="1.2"
            markerEnd="url(#arrow)"
          />
          <text
            x="355"
            y="348"
            textAnchor="middle"
            fontSize="8"
            fill="#a1a1aa"
            fontStyle="italic"
          >
            tác động trở lại
          </text>
          <line
            x1="582"
            y1="82"
            x2="510"
            y2="196"
            stroke="#71717a"
            strokeWidth="1.2"
            markerEnd="url(#arrow)"
          />
          <line
            x1="582"
            y1="230"
            x2="514"
            y2="230"
            stroke="#71717a"
            strokeWidth="1.2"
            markerEnd="url(#arrow)"
          />
          <line
            x1="582"
            y1="378"
            x2="510"
            y2="264"
            stroke="#71717a"
            strokeWidth="1.2"
            markerEnd="url(#arrow)"
          />

          {/* Nodes */}
          <NodeCircle
            cx={85}
            cy={115}
            r={34}
            strokeWidth={1.2}
            label="NLD"
            sub="Người lao động"
            descLine1="Chủ thể sáng tạo,"
            descLine2="có tri thức & kỹ năng"
            {...np("NLD")}
          />
          <NodeCircle
            cx={85}
            cy={340}
            r={34}
            strokeWidth={1.2}
            label="TLSX"
            sub="Tư liệu SX"
            descLine1="Công cụ & đối tượng"
            descLine2="lao động"
            {...np("TLSX")}
          />
          <NodeCircle
            cx={245}
            cy={230}
            r={46}
            strokeWidth={1.8}
            label="LLSX"
            sub="Lực lượng sản xuất"
            descLine1="Kết hợp NLD + TLSX,"
            descLine2="tạo ra sức sản xuất"
            {...np("LLSX")}
          />
          <NodeCircle
            cx={465}
            cy={230}
            r={46}
            strokeWidth={1.8}
            label="QHSX"
            sub="Quan hệ sản xuất"
            descLine1="Quan hệ kinh tế - vật chất"
            descLine2="giữa người với người"
            {...np("QHSX")}
          />
          <NodeCircle
            cx={620}
            cy={68}
            r={34}
            strokeWidth={1.2}
            label="QHSH"
            sub="Quan hệ sở hữu"
            descLine1="Sở hữu TLSX —"
            descLine2="quan hệ xuất phát"
            {...np("QHSH")}
          />
          <NodeCircle
            cx={620}
            cy={230}
            r={34}
            strokeWidth={1.2}
            label="QHTC"
            sub="Quan hệ tổ chức"
            descLine1="Tổ chức, quản lý &"
            descLine2="phân công lao động"
            {...np("QHTC")}
          />
          <NodeCircle
            cx={620}
            cy={378}
            r={34}
            strokeWidth={1.2}
            label="QHPP"
            sub="Quan hệ phân phối"
            descLine1="Phân phối sản phẩm —"
            descLine2="kích thích lợi ích"
            {...np("QHPP")}
          />
        </svg>

        <div className="border-t border-border bg-zinc-900 text-white px-4 py-3">
          <span className="text-xs font-medium tracking-widest uppercase text-orange-400 mr-2">
            Nguyên tắc then chốt:
          </span>
          <span className="text-sm text-zinc-200">
            CCLĐ quyết định năng suất lao động → trình độ LLSX.
            Quan hệ sở hữu TLSX quyết định bản chất QHSX. LLSX
            và QHSX thống nhất trong phương thức sản xuất.
          </span>
        </div>
      </div>
    </div>
  );
}