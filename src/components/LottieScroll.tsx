


import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import animationData from '../../public/lotties/lottie-animation.json';

gsap.registerPlugin(ScrollTrigger);

interface AnimationSection {
  id: string;
  from: number;
  to: number;
  style: {
    left: string;
    top: string;
    zoom?: string;
  };
}

export const LottieScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !lottieRef.current) return;

    const mm = gsap.matchMedia();

    const setup = (context: { conditions?: { isDesktop?: boolean; isTablet?: boolean } }) => {
      let sections: AnimationSection[];

      if (context.conditions?.isDesktop) {
        sections = [
          { id: "home", from: 0, to: 0, style: { left: "-10%", top: "-10%" } },
          { id: "experties", from: 60, to: 60, style: { left: "80%", top: "10%" } },
          { id: "technology", from: 120, to: 120, style: { left: "-10%", top: "25%" } },
          { id: "challenges", from: 180, to: 180, style: { left: "45vw", top: "15%" } },
          { id: "contact", from: 240, to: 300, style: { left: "-10%", top: "20%" } },
        ];
      } else if (context.conditions?.isTablet) {
        sections = [
          { id: "home", from: 0, to: 0, style: { left: "-13%", top: "-10%" } },
          { id: "experties", from: 60, to: 60, style: { left: "75%", top: "10%" } },
          { id: "technology", from: 120, to: 120, style: { left: "-14%", top: "25%" } },
          { id: "challenges", from: 180, to: 180, style: { left: "45vw", top: "15%" } },
          { id: "contact", from: 240, to: 300, style: { left: "-14%", top: "20%" } },
        ];
      } else {
        // Mobile
        sections = [
          { id: "home", from: 0, to: 0, style: { left: "150vw", top: "0%", zoom: "0.4" } },
          { id: "experties", from: 60, to: 60, style: { left: "140vw", top: "30%", zoom: "0.4" } },
          { id: "technology", from: 120, to: 120, style: { left: "140vw", top: "25%", zoom: "0.4" } },
          { id: "challenges", from: 180, to: 180, style: { left: "100vw", top: "40%", zoom: "0.4" } },
          { id: "contact", from: 240, to: 300, style: { left: "140vw", top: "30%", zoom: "0.4" } },
        ];
      }

      // Initialize animation
      lottieRef.current?.goToAndStop(sections[0].from, true);
      gsap.set(container, sections[0].style);

      sections.forEach((section, index) => {
        const el = document.getElementById(section.id);
        const nextSection = sections[index + 1];
        if (!el || !nextSection) return;

        const frameObj = { frame: section.from };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: 0.7,
            onLeave: () => {
              lottieRef.current?.goToAndStop(nextSection.from, true);
              gsap.set(container, nextSection.style);
            },
            onLeaveBack: () => {
              lottieRef.current?.goToAndStop(section.from, true);
              gsap.set(container, section.style);
            },
          },
        });

        tl.to(frameObj, {
          frame: nextSection.from,
          ease: "none",
          onUpdate: () => {
            lottieRef.current?.goToAndStop(frameObj.frame, true);
          },
        }).to(
          container,
          {
            left: nextSection.style.left,
            top: nextSection.style.top,
            ease: "none",
          },
          0
        )
        .to({}, { duration: 0.3 });
        ;
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    };

    mm.add(
      {
        isDesktop: "(min-width: 1600px)",
        isTablet: "(min-width: 641px) and (max-width: 1599px)",
        isMobile: "(max-width: 640px)",
      },
      setup
    );

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div
      className="lottie-wrap"
      ref={containerRef}
      style={{
        position: "fixed",
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <Lottie
      id="player"
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={false}
        loop={false}
      />
    </div>
  );
};