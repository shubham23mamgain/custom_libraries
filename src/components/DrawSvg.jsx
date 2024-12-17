import { useEffect, useRef } from "react";
import Vector from "../assets/Vector.jsx";
import styled, { keyframes } from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const VectorContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Bounce = keyframes`
from { translateX(-50%) scale(0.5);}
to { translateX(-50%) scale(1);}
`;

const Ball = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color:#acedef
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  animation: ${Bounce} 0.5s linear infinite alternate; 
`;

{
  /*   */
}

const DrawSvg = () => {
  const ref = useRef(null);

  const ballRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let element = ref.current;
    let svg = document.getElementsByClassName("svg-path")[0];

    const length = svg.getTotalLength();

    svg.style.strokeDasharray = length;

    svg.style.strokeDashoffset = length;

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom center",
        onUpdate: (self) => {
          const draw = length * self.progress;
          svg.style.strokeDashoffset = length - draw;
        },

        onToggle: (self) => {
          if (self.isActive) {
            console.log("Scrolling is active");
            ballRef.current.style.display = "none";
          } else {
            console.log("Scrolling not active");
            ballRef.current.style.display = "inline-block";
          }
        },
      },
    });

    console.log(length);

    () => {
      if (t1) t1.kill();
    };
  }, []);
  return (
    <>
      <Ball ref={ballRef} />
      <VectorContainer ref={ref}>
        <Vector />
      </VectorContainer>
    </>
  );
};

export default DrawSvg;
