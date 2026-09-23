import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  const intro = gsap.timeline({ defaults: { ease: "power4.out" } });

  intro
    .from(".site-header", { y: -32, opacity: 0, duration: 0.7 })
    .from(".hero-name", { y: 24, opacity: 0, duration: 0.6 }, "-=0.35")
    .from(
      "[data-hero-line]",
      { yPercent: 115, opacity: 0, duration: 1.05, stagger: 0.12 },
      "-=0.42",
    )
    .from(".hero-aside", { x: 40, opacity: 0, duration: 0.8 }, "-=0.72")
    .from(".hero-footer", { y: 24, opacity: 0, duration: 0.6 }, "-=0.5");

  gsap.to(".hero-line:first-child", {
    xPercent: 4,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  gsap.to(".hero-line--second", {
    xPercent: -4,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  gsap.utils.toArray("[data-section-title]").forEach((title) => {
    gsap.from(title, {
      yPercent: 35,
      opacity: 0,
      duration: 0.9,
      ease: "power4.out",
      scrollTrigger: { trigger: title, start: "top 85%" },
    });
  });

  gsap.utils.toArray("[data-project]").forEach((project) => {
    gsap.from(project.children, {
      y: 42,
      opacity: 0,
      duration: 0.8,
      stagger: 0.07,
      ease: "power3.out",
      scrollTrigger: { trigger: project, start: "top 78%" },
    });
  });

  gsap.utils.toArray("[data-reveal]").forEach((item) => {
    if (item.closest(".hero") || item.classList.contains("site-header")) return;
    gsap.from(item, {
      y: 32,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: item, start: "top 86%" },
    });
  });

  gsap.from("[data-contact-title]", {
    xPercent: -8,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: { trigger: "[data-contact-title]", start: "top 82%" },
  });
}
