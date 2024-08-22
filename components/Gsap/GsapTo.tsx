import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
type Props = {};

const GsapTo = (props: Props) => {
  useGSAP(() => {
    gsap.to("#blue-div", {
      duration: 2,
      x: 100,
      y: 1,
      rotation: 360,
      ease: "elastic", //"bounce.out",//power1.inOut
      yoyo: true,
      repeat: -1,
    });
  }, []);
  return (
    <div>
      {" "}
      <div id="blue-div" className="bg-blue-400 h-20 w-20">
        Im a moving box, gsapto
      </div>
    </div>
  );
};

export default GsapTo;
