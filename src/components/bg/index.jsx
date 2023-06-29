import { useEffect, useRef, useState } from "react";
import "./index.sass"
import Matter from "matter-js";
import { Engine, Render, Bodies, World, Runner, Body } from 'matter-js';
import { parseSVG } from 'svg-path-parser';
import anime from "animejs";
import { HiOutlineHeart as HeartOutline, HiHeart as Heart } from "react-icons/hi";

export default function Bg () {
    const ref = useRef();
    const [scr, setScr] = useState({w: window.innerWidth, h: window.innerHeight});
    const [anm, setAnm] = useState(null);
    const [anm2, setAnm2] = useState(null);
    useEffect(()=> {
        if (!ref.current) return;
        generate(ref.current);
    }, [ref]);
    function generate(spc) {
        
        setAnm(setInterval(()=> {
            anime({
                targets: ".heart1, .heart2",
                rotate: () => anime.random(-45, 45),
                translateX: function () {
                    const x = anime.random(0, scr.w);
                    return x;
                },
                translateY: function () {
                    const y = anime.random(0, scr.h);
                    return y;
                },
                opacity: [0, 1, 0],
                duration: 1000,
                easing: "easeInOutQuad"
            })
        }, 1000));
        setAnm2(setInterval(()=> {
            anime({
                targets: ".heart3, .heart4",
                rotate: () => anime.random(-45, 45),
                translateX: function () {
                    const x = anime.random(0, scr.w);
                    return x;
                },
                translateY: function () {
                    const y = anime.random(0, scr.h);
                    return y;
                },
                opacity: [0, 1, 0],
                duration: 1200,
                easing: "easeInOutQuad"
            })
        }, 1500));
        
    }
    return (
        <div className="bg" ref={ref}>
            <div className="tone"></div>
            <HeartOutline className="heart1" />
            <Heart className="heart2" />
            <HeartOutline className="heart3" />
            <Heart className="heart4" />
            {/* <div className="img"></div> */}
            {/* <HeartGenerator /> */}
        </div>
    )
}


function HeartGenerator () {
  const ref = useRef();
  return (
      <div className="Generator" ref={ref}>

      </div>
  )
}

// function load(e) {
//     const THICCNESS = 16;
//     const SVG_PATH_SELECTOR = "svg";
//     const SVG_WIDTH_IN_PX = 100;
//     const SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH = 0.3;
//     // module aliases
//     let { Engine, Render, Runner, Bodies, Composite, Body, Svg, Vector, Vertices } = Matter;

//     let engine = Engine.create();
//     engine.world.gravity.y = 0.000001;

//     // create a renderer
//     var render = Render.create({
//         element: e,
//         engine: engine,
//         options: {
//         width: e.clientWidth,
//         height: e.clientHeight,
//         background: "transparent",
//         wireframes: false,
//         showAngleIndicator: false
//         }
//     });
    
//     // create two boxes and a ground
//     // var boxA = Bodies.rectangle(400, 200, 80, 80);
//     // var boxB = Bodies.rectangle(450, 50, 80, 80);
    
//     for (let i = 0; i < 100; i++) {
//         let circle = Bodies.circle(i, 10, 30, {
//         friction: 0.3,
//         frictionAir: 0.00001,
//         restitution: 1
//         });
//         Composite.add(engine.world, circle);
//     }

//     function createSvgBodies() {
//         const paths = document.querySelectorAll(SVG_PATH_SELECTOR);
//         paths.forEach((path, index) => {
//           let vertices = Svg.pathToVertices(path);
//           let scaleFactor =
//             (matterContainer.clientWidth * SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH) /
//             SVG_WIDTH_IN_PX;
//           vertices = Vertices.scale(vertices, scaleFactor, scaleFactor);
//           let svgBody = Bodies.fromVertices(
//             index * SVG_WIDTH_IN_PX + 200,
//             0,
//             [vertices],
//             {
//               friction: 0.3,
//               frictionAir: 0.00001,
//               restitution: 0.8,
//               render: {
//                 fillStyle: "#464655",
//                 strokeStyle: "#464655",
//                 lineWidth: 1
//               }
//             }
//           );
//           Composite.add(engine.world, svgBody);
//         });
//       }
      
//       function scaleBodies() {
//         const allBodies = Composite.allBodies(engine.world);
      
//         allBodies.forEach((body) => {
//           if (body.isStatic === true) return; // don't scale walls and ground
//           const { min, max } = body.bounds;
//           const bodyWidth = max.x - min.x;
//           let scaleFactor =
//             (matterContainer.clientWidth * SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH) /
//             bodyWidth;
      
//           Body.scale(body, scaleFactor, scaleFactor);
//         });
//       }

    
//     var ground = Bodies.rectangle(
//         e.clientWidth / 2,
//         e.clientHeight + THICCNESS / 2,
//         27184,
//         THICCNESS,
//         { isStatic: true }
//     );
    
//     let leftWall = Bodies.rectangle(
//         0 - THICCNESS / 2,
//         e.clientHeight / 2,
//         THICCNESS,
//         e.clientHeight * 5,
//         {
//         isStatic: true
//         }
//     );
    
//     let rightWall = Bodies.rectangle(
//         e.clientWidth + THICCNESS / 2,
//         e.clientHeight / 2,
//         THICCNESS,
//         e.clientHeight * 5,
//         { isStatic: true }
//     );
    
//     // add all of the bodies to the world
//     Composite.add(engine.world, [ground, leftWall, rightWall]);
    
//     let mouse = Matter.Mouse.create(render.canvas);
//     let mouseConstraint = Matter.MouseConstraint.create(engine, {
//         mouse: mouse,
//         constraint: {
//         stiffness: 0.1,
//         render: {
//             visible: false
//         }
//         }
//     });
    
//     Composite.add(engine.world, mouseConstraint);
    
//     // allow scroll through the canvas
//     mouseConstraint.mouse.element.removeEventListener(
//         "mousewheel",
//         mouseConstraint.mouse.mousewheel
//     );
//     mouseConstraint.mouse.element.removeEventListener(
//         "DOMMouseScroll",
//         mouseConstraint.mouse.mousewheel
//     );
    
//     // run the renderer
//     Render.run(render);
    
//     // create runner
//     var runner = Runner.create();
    
//     // run the engine
//     Runner.run(runner, engine);
    
//     function handleResize(e) {
//         // set canvas size to new values
//         render.canvas.width = e.clientWidth;
//         render.canvas.height = e.clientHeight;
    
//         // reposition ground
//         Matter.Body.setPosition(
//         ground,
//         Matter.Vector.create(
//             e.clientWidth / 2,
//             e.clientHeight + THICCNESS / 2
//         )
//         );
    
//         // reposition right wall
//         Matter.Body.setPosition(
//         rightWall,
//         Matter.Vector.create(
//             e.clientWidth + THICCNESS / 2,
//             e.clientHeight / 2
//         )
//         );
//     }
    
//     window.addEventListener("resize", () => handleResize(e));
// }
