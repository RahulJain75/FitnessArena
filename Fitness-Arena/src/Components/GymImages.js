import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function GymImages() {
    return (
        <div className="carousel-wrapper">
            <Carousel
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                stopOnHover={true}
                transitionTime={500}
                swipeable={true}
                emulateTouch={true}
                dynamicHeight={true}
                className="carousel"
            >
                <div>
                    <img
                        src="https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg"
                        alt="Legend 1"
                    />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img
                        src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?cs=srgb&dl=pexels-william-choquette-1954524.jpg&fm=jpg"
                        alt="Legend 2"
                    />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img
                        src="https://media.gettyimages.com/id/1183038884/photo/view-of-a-row-of-treadmills-in-a-gym-with-people.jpg?s=612x612&w=gi&k=20&c=-udh0-LUuB1Mr1rF7D4nbuaUOJ_x6JvZCYoLdfOJF3w="
                        alt="Legend 3"
                    />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}
