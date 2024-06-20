// TrainerCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const trainers = [
    { name: 'Rock', photo: '../Images/rock.png' },
    { name: 'John Cema', photo: '../Images/JohnCena.png' },
    { name: 'Leaf Beef Patty', photo: '../Images/LeanBeefPatty.png' },
    { name: 'Arnold', photo: '../Images/Arnold.png' },
];

const TrainerCarousel = () => {
    return (
        <div className="trainer-carousel-container">
            <h2>Meet Our Trainers</h2>
            <Carousel
                showArrows={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                centerMode={true}
                centerSlidePercentage={50}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button type="button" onClick={onClickHandler} title={label} className="control-arrow control-prev">
                            &lt;
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} title={label} className="control-arrow control-next">
                            &gt;
                        </button>
                    )
                }
            >
                {trainers.map((trainer, index) => (
                    <div key={index} className="trainer-card-wrapper">
                        <div className="trainer-card">
                            <img src={trainer.photo} alt={trainer.name} className="trainer-photo" />
                            <div className="trainer-info">
                                <h3>{trainer.name}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default TrainerCarousel;


