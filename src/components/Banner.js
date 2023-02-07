import mochi_ice_cream from '../assets/mochi_ice_cream.jpg'

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';

// import { motion } from 'framer-motion';

// import { fadeIn } from '../variants';


const Banner = () => {
    return <div class='section mx-3' id='home'>
        <div class='container mx-auto'>
            <div>

                <div class='flex flex-row gap-4 text-center lg:text-left'>
                    <div class='flex flex-col'>
                        <h1>Why am I <span>special</span></h1>
                        <h1 class='text-2xl'>I am a
                            <TypeAnimation sequence={[
                                ' Developer',
                                2000,
                                ' Designer',
                                2000,
                                ' Youtuber',
                                2000,
                            ]} className='font-title text-4xl' speed={50} wrapper='span' repeat={Infinity} />
                        </h1>
                        <p class='mb-3'>Something something something
                            fdsaf dsaf dsaf gfdsh fef eaf fdsaf ? eaf
                            fdsafds a jklfdsjfie j foeiwa jl;fd
                        </p>

                        <div class='flex justify-center text-4xl gap-x-2'>
                            <a href='#'>
                                <FaLinkedin />
                            </a>
                            <a href='#'>
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                    <div><img src={mochi_ice_cream} alt='' /></div>
                </div>




            </div>
        </div>
    </div>;
};

export default Banner;
