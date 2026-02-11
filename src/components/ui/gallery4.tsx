"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const Gallery4 = ({
  title = "Our Work",
  description = "Explore the projects we've built for our clients.",
  items,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between lg:mb-16">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/60">
              Featured Work
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="max-w-lg text-foreground/60">{description}</p>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-foreground/10 text-foreground shadow-sm transition-all hover:bg-foreground/20 disabled:opacity-40"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-foreground/10 text-foreground shadow-sm transition-all hover:bg-foreground/20 disabled:opacity-40"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 px-6">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-[320px] pl-5 lg:basis-[400px]"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl"
                >
                  <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white">
                      <h3 className="mb-2 text-xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="mb-6 line-clamp-2 text-sm text-white/70">
                        {item.description}
                      </p>
                      <span className="flex items-center text-sm text-white/80">
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex items-center justify-center gap-3 px-6">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-foreground scale-110"
                  : "bg-foreground/30 hover:bg-foreground/50"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
