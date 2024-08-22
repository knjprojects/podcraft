import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
type Props = {};

const GsapFRom = (props: Props) => {
  useGSAP(() => {
    gsap.from("#green-div", {
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
      <div id="green-div" className="bg-green-400">
        Im a moving green box, gsapfrom
      </div>
    </div>
  );
};

export default GsapFRom;
