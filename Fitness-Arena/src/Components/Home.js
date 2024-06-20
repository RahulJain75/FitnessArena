import React from 'react'
import GymImages from '../Components/GymImages';

import Plans from '../Components/Plans';
import Poster from '../Components/Poster';
import Why from '../Components/Why';
import TrainerCarousel from './TrainerCarousel';

export default function Home() {
    return (
        <div>
            <>
                <Poster />
                <GymImages />
                <Why />
                {/* <Quotes /> */}
                <Plans />
                {/* <Images /> */}
                <TrainerCarousel/>

                
            </>

        </div>
    )
}
