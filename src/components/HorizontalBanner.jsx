// // import { useEffect, useRef } from "react";
// // import { animate, scroll, spring } from "motion";
// // import { ReactLenis } from "lenis/react";
// // export default function HoriBanner() {
// //   const ulRef = useRef();
// //   useEffect(() => {
// //     const ul = ulRef.current;
// //     if (!ul) return;
// //     const items = document.querySelectorAll("li");

// //     if (items.length === 0) return;
// //     if (ul) {
// //       const controls = animate(
// //         ul,
// //         {
// //           transform: ["none", `translateX(-${items.length - 1}00vw)`],
// //         },
// //         { easing: spring() }
// //       );
// //       scroll(controls, { target: document.querySelector("section") });
// //     }
// //     const segmentLength = 1 / items.length;
// //     items.forEach((item, i) => {
// //       const header = item.querySelector("h4");

// //       if (!header) return "Radhe Radhe";
// //       scroll(animate([header], { x: [800, -800] }), {
// //         target: document.querySelector("section"),
// //         offset: [
// //           [i * segmentLength, 1],
// //           [(i + 1) * segmentLength, 0],
// //         ],
// //       });
// //     });
// //   }, []);
// //   return (
// //     <ReactLenis root>
// //       <main>
// //         <article>
// //           <header className="text-white relative  w-full bg-slate-950  grid place-content-center  h-[80vh]">
// //             <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

// //             <h1 className="text-6xl font-bold text-center tracking-tight">
// //               I know You Love to Scroll <br />
// //               So Scroll
// //             </h1>
// //           </header>
// //           <section className="h-[500vh] w-screen relative bg-yellow-900">
// //             <ul ref={ulRef} className="flex sticky top-0 w-screen">
// //               <li className="h-screen  bg-red-400 flex flex-col justify-center overflow-hidden  items-center">
// //                 <h4 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
// //                   PASSION
// //                 </h4>
// //                 <img
// //                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCrVsbP_6dfHEPA08vj3kJz_HYvEAFrfDxzw&s"
// //                   className="2xl:w-[550px] w-[380px] absolute bottom-0"
// //                   width={500}
// //                   height={500}
// //                   alt="image"
// //                 />
// //               </li>
// //               <li className="h-screen w-screen bg-blue-400 flex flex-col justify-center overflow-hidden  items-center">
// //                 <h4 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
// //                   WORK
// //                 </h4>
// //                 <img
// //                   src="https://c4.wallpaperflare.com/wallpaper/853/443/669/quote-typography-inspirational-motivational-wallpaper-preview.jpg"
// //                   className="2xl:w-[550px] w-[380px] absolute bottom-0"
// //                   width={500}
// //                   height={500}
// //                   alt="image"
// //                 />
// //               </li>
// //               <li className="h-screen w-screen bg-orange-400 flex flex-col justify-center overflow-hidden  items-center">
// //                 <h4 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
// //                   MOTIVATION
// //                 </h4>
// //                 <img
// //                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLjMMCTevaxZK8DZsqGXLo7qpvvp_1kwXrlA&s"
// //                   className="2xl:w-[550px] w-[380px] absolute bottom-0"
// //                   width={500}
// //                   height={500}
// //                   alt="image"
// //                 />
// //               </li>
// //               <li className="h-screen w-screen bg-yellow-400 flex flex-col justify-center overflow-hidden  items-center">
// //                 <h4 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
// //                   INSPIRATION
// //                 </h4>
// //                 <img
// //                   src="https://asset.gecdesigns.com/img/wallpapers/inspirational-quote-wallpaper-for-daily-motivation-sr15012408-1705328449714-cover.webp"
// //                   className="2xl:w-[550px] w-[380px] absolute bottom-0"
// //                   width={500}
// //                   height={500}
// //                   alt="image"
// //                 />
// //               </li>
// //               <li className="h-screen w-screen bg-green-400 flex flex-col justify-center overflow-hidden  items-center">
// //                 <h4 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
// //                   BELIVE
// //                 </h4>
// //                 <img
// //                   src="https://i.etsystatic.com/43642086/r/il/d04944/6328088135/il_570xN.6328088135_bn96.jpg"
// //                   className="2xl:w-[550px] w-[380px] absolute bottom-0"
// //                   width={500}
// //                   height={500}
// //                   alt="image"
// //                 />
// //               </li>
// //             </ul>
// //           </section>
// //           <footer className="bg-red-600 text-white grid place-content-center h-[80vh]">
// //             <p>
// //               Created By{" "}
// //               <a target="_blank" href="https://twitter.com/mattgperry">
// //                 Matt Perry
// //               </a>
// //             </p>
// //           </footer>
// //         </article>
// //         <div className="progress fixed left-0 right-0  h-2 rounded-full bg-red-600 bottom-[50px] scale-x-0"></div>
// //       </main>
// //     </ReactLenis>
// //   );
// // }

// import { useEffect, useRef } from "react";
// import { animate, scroll, spring } from "motion";
// import { ReactLenis } from "lenis/react";

// export default function HoriBanner() {
//   const ulRef = useRef();

//   useEffect(() => {
//     const ul = ulRef.current;
//     if (!ul) return;

//     const items = document.querySelectorAll("li");

//     if (items.length === 0) return;

//     // Calculate `translateX` based on number of items
//     const controls = animate(
//       ul,
//       {
//         transform: [`translateX(0)`, `translateX(-400vw)`],
//       },
//       { easing: spring() }
//     );

//     scroll(controls, { target: document.querySelector("section") });

//     const segmentLength = 1 / items.length;
//     items.forEach((item, i) => {
//       const header = item.querySelector("h4");

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
//           {/* Header Section */}
//           <header className="text-white relative w-full bg-slate-950 grid place-content-center h-[80vh]">
//             <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
//             <h1 className="text-6xl font-bold text-center tracking-tight">
//               I know You Love to Scroll <br />
//               So Scroll
//             </h1>
//           </header>

//           {/* Scrolling Section */}
//           <section className="h-[500vh] min-w-[500] relative bg-yellow-900">
//             <ul
//               ref={ulRef}
//               className="flex sticky top-0 left-500 w-screen overflow-hidden"
//             >
//               {[
//                 {
//                   color: "red",
//                   text: "PASSION",
//                   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCrVsbP_6dfHEPA08vj3kJz_HYvEAFrfDxzw&s",
//                 },
//                 {
//                   color: "blue",
//                   text: "WORK",
//                   img: "https://c4.wallpaperflare.com/wallpaper/853/443/669/quote-typography-inspirational-motivational-wallpaper-preview.jpg",
//                 },
//                 {
//                   color: "orange",
//                   text: "MOTIVATION",
//                   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLjMMCTevaxZK8DZsqGXLo7qpvvp_1kwXrlA&s",
//                 },
//                 {
//                   color: "yellow",
//                   text: "INSPIRATION",
//                   img: "https://asset.gecdesigns.com/img/wallpapers/inspirational-quote-wallpaper-for-daily-motivation-sr15012408-1705328449714-cover.webp",
//                 },
//                 {
//                   color: "green",
//                   text: "BELIEVE",
//                   img: "https://i.etsystatic.com/43642086/r/il/d04944/6328088135/il_570xN.6328088135_bn96.jpg",
//                 },
//               ].map((item, index) => (
//                 <li
//                   key={index}
//                   className={`h-screen w-screen bg-${item.color}-400 flex flex-col justify-center items-center overflow-hidden`}
//                 >
//                   <h4 className="text-[clamp(5rem, 10vw, 20rem)] font-semibold relative bottom-5 inline-block text-black">
//                     {item.text}
//                   </h4>
//                   <img
//                     src={item.img}
//                     className="2xl:w-[550px] w-[380px] absolute bottom-0"
//                     width={500}
//                     height={500}
//                     alt={item.text}
//                     onError={(e) => (e.target.style.display = "none")}
//                   />
//                 </li>
//               ))}
//             </ul>
//           </section>

//           {/* Footer Section */}
//           <footer className="bg-red-600 text-white grid place-content-center h-[80vh]">
//             <p>
//               Created By{" "}
//               <a
//                 target="_blank"
//                 href="https://twitter.com/mattgperry"
//                 rel="noreferrer"
//               >
//                 Matt Perry
//               </a>
//             </p>
//           </footer>
//         </article>

//         <div className="progress fixed left-0 right-0 h-2 rounded-full bg-red-600 bottom-[50px] scale-x-0"></div>
//       </main>
//     </ReactLenis>
//   );
// }
