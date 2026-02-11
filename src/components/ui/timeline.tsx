"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.scrollHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div className="max-w-3xl pb-10">
        <h3 className="text-sm uppercase tracking-[0.3em] text-foreground/60">
          Timeline
        </h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70">
          How we take software from vision to scale.
        </p>
      </div>

      <div ref={ref} className="relative pb-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-12 md:pt-20 md:gap-8"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-28 self-start max-w-xs md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center border border-border">
                <div className="h-4 w-4 rounded-full bg-foreground/80" />
              </div>
              <h4 className="hidden md:block text-lg md:pl-16 md:text-2xl font-semibold text-foreground/70">
                {item.title}
              </h4>
            </div>

            <div className="relative pl-16 pr-2 md:pl-4 w-full">
              <h4 className="md:hidden block text-lg mb-3 text-left font-semibold text-foreground/70">
                {item.title}
              </h4>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute left-3 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-foreground/20 to-transparent"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
