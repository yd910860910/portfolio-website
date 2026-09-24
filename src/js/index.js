import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(pointer: fine)").matches;
if (finePointer) {
  const cursor = document.querySelector(".cursor");
  window.addEventListener("pointermove", ({clientX,clientY}) => { cursor.classList.add("is-visible"); gsap.to(cursor,{x:clientX,y:clientY,duration:.16,ease:"power2.out"}); });
  document.querySelectorAll("a, .project").forEach((item) => { item.addEventListener("pointerenter",()=>cursor.classList.add("is-large")); item.addEventListener("pointerleave",()=>cursor.classList.remove("is-large")); });
}
if (!reducedMotion) {
  const intro=gsap.timeline({defaults:{ease:"power4.out"}});
  intro.from(".site-header",{y:-28,opacity:0,duration:.7}).from(".hero-kicker",{y:20,opacity:0,duration:.55},"-=.3").from(".title-line b",{yPercent:112,duration:1.05,stagger:.12},"-=.35").from(".hero-index, .hero-profile",{opacity:0,x:24,duration:.7,stagger:.08},"-=.65").from(".hero-bottom",{opacity:0,y:16,duration:.55},"-=.4");
  gsap.to(".title-line:first-child b",{xPercent:3,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}});
  gsap.to(".title-line--second b",{xPercent:-3,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}});
  gsap.utils.toArray("[data-project]").forEach((row)=>gsap.from(row.children,{y:42,opacity:0,duration:.8,stagger:.08,ease:"power3.out",scrollTrigger:{trigger:row,start:"top 82%"}}));
  gsap.utils.toArray("[data-reveal]").forEach((item)=>gsap.from(item,{y:40,opacity:0,duration:.85,ease:"power3.out",scrollTrigger:{trigger:item,start:"top 86%"}}));
  gsap.from("[data-contact]",{xPercent:-7,opacity:0,duration:1,ease:"power4.out",scrollTrigger:{trigger:"[data-contact]",start:"top 82%"}});
}
