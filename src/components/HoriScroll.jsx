import { useEffect, useRef } from "react";
import { animate, scroll, spring } from "motion";
import { ReactLenis } from "lenis/react";

const HoriScrollWithBannerText = () => {
  const ulRef = useRef();
  useEffect(() => {
    const ul = ulRef.current;
    if (!ul) return;

    const items = document.querySelectorAll("li");

    if (items.length === 0) return;

    if (ul) {
      const controls = animate(
        ul,
        {
          transform: ["none", `translateX(-${items.length - 1}00vw)`],
        },
        { easing: spring() }
      );
      scroll(controls, { target: document.querySelector("section") });
    }
    const segmentLength = 1 / items.length;
    items.forEach((item, i) => {
      //   console.log(item, "item intem");
      const header = item.querySelector("h4");

      if (!header) return "Radhe Radhe";
      scroll(animate([header], { x: [800, -800] }), {
        target: document.querySelector("section"),
        offset: [
          [i * segmentLength, 1],
          [(i + 1) * segmentLength, 0],
        ],
      });
    });
  }, []);
  return (
    <ReactLenis root>
      <main>
        <article>
          <header className="text-white relative  w-full bg-slate-950  grid place-content-center  h-[80vh]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="text-6xl font-bold text-center tracking-tight">
              I know You Love to Scroll <br />
              So Scroll
            </h1>
          </header>
          <section className="h-[500vh] w-screen relative">
            <ul ref={ulRef} className="flex w-screen sticky top-0">
              <li className="h-screen min-w-[600px] bg-red-400 flex flex-col justify-center overflow-hidden  items-center">
                <h4 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                  PASSION
                </h4>
                <img
                  src="https://plus.unsplash.com/premium_photo-1674489620667-eaf4a0094996?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFzc2lvbnxlbnwwfHwwfHx8MA%3D%3D"
                  className="2xl:w-[550px] w-[380px] absolute bottom-0"
                  width={500}
                  height={500}
                  alt="Passion"
                />
              </li>
              <li className="h-screen w-screen bg-blue-400 flex flex-col justify-center overflow-hidden  items-center">
                <h4 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                  WORK
                </h4>
                <img
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHx8MA%3D%3D"
                  className="2xl:w-[550px] w-[380px] absolute bottom-0"
                  width={500}
                  height={500}
                  alt="Work"
                />
              </li>
              <li className="h-screen w-screen bg-orange-400 flex flex-col justify-center overflow-hidden  items-center">
                <h4 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                  MOTIVATION
                </h4>
                <img
                  src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdGl2YXRpb258ZW58MHx8MHx8fDA%3D"
                  className="2xl:w-[550px] w-[380px] absolute bottom-0"
                  width={500}
                  height={500}
                  alt="image"
                />
              </li>
              <li className="h-screen w-screen bg-yellow-400 flex flex-col justify-center overflow-hidden  items-center">
                <h4 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                  INSPIRATION
                </h4>
                <img
                  src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zcGlyYXRpb258ZW58MHx8MHx8fDA%3D"
                  className="2xl:w-[550px] w-[380px] absolute bottom-0"
                  width={500}
                  height={500}
                  alt="image"
                />
              </li>
              <li className="h-screen w-screen bg-green-400 flex flex-col justify-center overflow-hidden  items-center">
                <h4 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                  BELIVE
                </h4>
                <img
                  src="https://images.unsplash.com/photo-1511465390398-532913e8328d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW90aXZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                  className="2xl:w-[550px] w-[380px] absolute bottom-0"
                  width={500}
                  height={500}
                  alt="image"
                />
              </li>
            </ul>
          </section>
          <footer className="bg-red-600 text-white grid place-content-center h-[80vh]">
            <p>
              Created By{" "}
              <a target="_blank" href="https://github.com/shubham23mamgain">
                Shubham Mamgain
              </a>
            </p>
          </footer>
        </article>
        <div className="progress fixed left-0 right-0  h-2 rounded-full bg-red-600 bottom-[50px] scale-x-0"></div>
      </main>
    </ReactLenis>
  );
};

export default HoriScrollWithBannerText;

// import { useEffect, useRef, useState } from "react";
// import { animate, scroll, spring } from "motion";
// import { ReactLenis } from "lenis/react";

// const HoriScrollWithBannerText = () => {
//   const ulRef = useRef();
//   const [items, setItems] = useState([]);
//   const [controls, setControls] = useState(null);

//   useEffect(() => {
//     const ul = ulRef.current;
//     if (!ul) return;

//     const itemElements = document.querySelectorAll("li");
//     setItems(itemElements); // Store the list items

//     if (itemElements.length === 0) return;

//     const segmentLength = 1 / itemElements.length;
//     const controls = animate(
//       ul,
//       {
//         transform: ["none", `translateX(-${itemElements.length - 1}00vw)`],
//       },
//       { easing: spring() }
//     );
//     setControls(controls);

//     // Scroll behavior for individual headers
//     itemElements.forEach((item, i) => {
//       const header = item.querySelector("h2");
//       if (!header) return;

//       scroll(animate([header], { x: [800, -800] }), {
//         target: document.querySelector("section"),
//         offset: [
//           [i * segmentLength, 1],
//           [(i + 1) * segmentLength, 0],
//         ],
//       });
//     });
//   }, []);

//   return (
//     <ReactLenis root>
//       <main>
//         <article>
//           <header className="text-white relative w-full bg-slate-950 grid place-content-center h-[80vh]">
//             <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

//             <h1 className="text-6xl font-bold text-center tracking-tight">
//               I know You Love to Scroll <br />
//               So Scroll
//             </h1>
//           </header>

//           <section className="h-[500vh] relative">
//             <ul ref={ulRef} className="flex flex-nowrap">
//               {Array.isArray(items) &&
//                 items.length > 0 &&
//                 items.map((item, index) => (
//                   <li
//                     key={index}
//                     className="h-screen w-screen bg-red-400 flex flex-col justify-center overflow-hidden items-center"
//                   >
//                     <h2 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
//                       {item.textContent}
//                     </h2>
//                     <img
//                       src={item.src}
//                       className="2xl:w-[550px] w-[380px] absolute bottom-0"
//                       width={500}
//                       height={500}
//                       alt="Passion"
//                     />
//                   </li>
//                 ))}
//             </ul>
//           </section>

//           <footer className="bg-red-600 text-white grid place-content-center h-[80vh]">
//             <p>
//               Created By{" "}
//               <a target="_blank" href="https://github.com/shubham23mamgain">
//                 Shubham Mamgain
//               </a>
//             </p>
//           </footer>
//         </article>

//         <div className="progress fixed left-0 right-0 h-2 rounded-full bg-red-600 bottom-[50px] scale-x-0"></div>
//       </main>
//     </ReactLenis>
//   );
// };

// export default HoriScrollWithBannerText;
