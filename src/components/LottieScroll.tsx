import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "@lottiefiles/lottie-player";

gsap.registerPlugin(ScrollTrigger);

export const LottieScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const playerEl = playerRef.current;
    const container = containerRef.current;
    if (!playerEl || !container) return;

    const mm = gsap.matchMedia();

    const setup = (context: any) => {
      let lottieInstance: any;
      let sections:any;

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
          { id: "experties", from: 60, to: 60, style: { left: "140vw", top: "30%" , zoom: "0.4" } },
          { id: "technology", from: 120, to: 120, style: { left: "140vw", top: "25%", zoom: "0.4" } },
          { id: "challenges", from: 180, to: 180, style: { left: "100vw", top: "40%", zoom: "0.4" } },
          { id: "contact", from: 240, to: 300, style: { left: "140vw", top: "30%", zoom: "0.4" } },
        ];
      }

      const onReady = () => {
        lottieInstance = playerEl.getLottie();
        lottieInstance.stop();
        gsap.set(container, sections[0].style);

        sections.forEach((section:any, index:number) => {
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
                lottieInstance.goToAndStop(nextSection.from, true);
                gsap.set(container, nextSection.style);
              },
              onLeaveBack: () => {
                lottieInstance.goToAndStop(section.from, true);
                gsap.set(container, section.style);
              },
            },
          });

          tl.to(frameObj, {
            frame: nextSection.from,
            ease: "none",
            onUpdate: () => {
              lottieInstance.goToAndStop(frameObj.frame, true);
            },
          })
            .to(container, {
              left: nextSection.style.left,
              top: nextSection.style.top,
              ease: "none",
            }, 0)
            .to({}, { duration: 0.3 });
        });
      };

      playerEl.addEventListener("ready", onReady);

      return () => {
        playerEl.removeEventListener("ready", onReady);
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
  }, []); // keep empty to only set up once, matchMedia will handle changes

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
      <lottie-player
        ref={playerRef}
        id="player"
        src="https://lottie.host/a39ee86f-0a72-4e42-97af-7bb0fc35d78d/CjNb7XqNEf.json"
        background="transparent"
        speed="1"
      />
    </div>
  );
};
