import { useEffect, useRef } from "react";

type InfiniteScrollProps = {
  children: React.ReactNode;
};

export default function InfiniteScroll({ children }: InfiniteScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    let scrollPosition = 0;
    const speed = 0.7;

    const animate = () => {
      scrollPosition += speed;

      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex gap-12 overflow-hidden w-full max-w-full"
      style={{ scrollBehavior: "auto" }}
    >
      {children}
    </div>
  );
}
