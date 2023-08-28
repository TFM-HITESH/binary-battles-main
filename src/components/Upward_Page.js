'use client';
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


function Upward_Page() {

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
  
    gsap.registerPlugin(ScrollTrigger);


    useEffect(() => {
        const pin = gsap.fromTo(
          sectionRef.current,
          {
            translateX: 0,
            translateY: 0,
          },
          {
            translateY: "100vh",
            ease: "none",
            duration: 1,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top top",
              end: "2000 top",
              scrub: 0.6,
              pin: true,
            },
          }
        );
        return () => {
          {/* A return function for killing the animation on component unmount */ }
          pin.kill();
        };
      }, []);


  return (
    <section className="scroll-section-outer">
        <div ref={triggerRef}>
            <div ref={sectionRef} className="scroll-section-inner-right">

                <div className="scroll-section">
                    <h3>Section 1</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Upward_Page