import { useState, useRef } from "react";

type TooltipProps = {
  children: React.ReactNode;
  content: string;
};

export const Tooltip = ({ children, content }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    const tooltipHeight = tooltipRef.current?.offsetHeight || 0;
    const offsetX = 5;
    const offsetY = 5;
    setPosition({
      x: event.clientX + offsetX,
      y: event.clientY - tooltipHeight - offsetY,
    });
  };

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      className="relative inline-block"
    >
      {children}
      {visible && (
        <div
          ref={tooltipRef}
          style={{ left: position.x, top: position.y }}
          className="fixed bg-neutral-900 border border-neutral-800 rounded-md text-xs px-2 py-0.5 text-white z-50"
        >
          {content}
        </div>
      )}
    </div>
  );
};
