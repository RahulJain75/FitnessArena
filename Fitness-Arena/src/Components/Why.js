import React, { useState } from "react";

function Why() {
     const [currentIndex, setCurrentIndex] = useState(0);

     const items = [
          {
               title: "Modern Equipment",
               description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          },
          {
               title: "Healthy Nutrition Plan",
               description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          },
          {
               title: "Best Training Plan",
               description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          },
          {
               title: "Unique to Your Needs",
               description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. "
          }
     ];

     const handlePrev = () => {
          setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
     };

     const handleNext = () => {
          setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
     };

     return (
          <div className="why">
               <h3>WHY CHOOSE US?</h3>
               <h1>PUSH YOUR LIMITS FORWARD</h1>
               <div className="slider-container">
                    <button className="slider-button left" onClick={handlePrev}>
                         &#10094;
                    </button>
                    <div
                         className="slider-wrapper"
                         style={{
                              transform: `translateX(-${currentIndex * 100}%)`
                         }}
                    >
                         {items.map((item, index) => (
                              <div className="item" key={index}>
                                   <h1>{item.title}</h1>
                                   <p>{item.description}</p>
                              </div>
                         ))}
                    </div>
                    <button className="slider-button right" onClick={handleNext}>
                         &#10095;
                    </button>
               </div>
          </div>
     );
}

export default Why;







// import React from "react";

// function Why(){
//     return(<div className="why">
//         <h3>WHY CHOSE US ?</h3>
//         <h1>PUSH YOUR LIMITS FORWARD</h1>
//         <div className="why1">
//             <div className="item"><h1>Modern Equipment</h1>
//                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
//             </div>
//             <div className="item"><h1>Healthy Nutrition Plan</h1>
//                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
//             </div>
//             <div className="item"><h1>Best Training Plan</h1>
//                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
//             </div>
//             <div className="item"><h1>Unique to your needs</h1>
//                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
//             </div>
//         </div>
//     </div>)
// }
// export default Why;