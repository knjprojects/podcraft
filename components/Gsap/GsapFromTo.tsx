import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
type Props = {};

const GsapFromTo = (props: Props) => {
  useGSAP(() => {
    //from to requires 2 objects, the initial object position and the to, the regular to/from object
    gsap.fromTo(
      "#purple-div",
      {
        x: 0,
        y: 0,
        rotation: 0,
        /*ease: "elastic", //"bounce.out",//power1.inOut
        yoyo: true,
        repeat: -1,*/
        borderRadius: "0%",
      },
      {
        duration: 2,
        x: 250,

        rotation: 360,
        ease: "bounce.out", //"bounce.out",//power1.inOut
        yoyo: true,
        repeat: -1,
        borderRadius: "100%",
      }
    );
  }, []);
  return (
    <div>
      {" "}
      <div id="purple-div" className="bg-purple-400 h-20 w-16"></div>
    </div>
  );
};

export default GsapFromTo;
