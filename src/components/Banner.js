import mochi_ice_cream from '../assets/mochi_ice_cream.jpg';

import ai_selfie from '../assets/AI_Selfie.jpg';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';

// import { motion } from 'framer-motion';

// import { fadeIn } from '../variants';


const Banner = () => {
    return <div class='section mx-3' id='home'>
        <div class='container mx-auto'>
            <div>

                <div class='flex flex-col gap-4 text-center lg:text-left lg:flex-row'>
                    <div class='flex justify-center lg:hidden'>
                        <figure class='w-2/3'>
                            <img src={ai_selfie} alt='' />
                            <figcaption class='text-center bg-yellow-600 bg-opacity-50'>AI generated portrait of myself</figcaption>
                        </figure>
                    </div>
                    <div class='flex flex-col'>
                        <h1 class='text-2xl font-bold mb-4'>About Me</h1>
                        <h1 class='text-2xl'>I am
                            <TypeAnimation sequence={[
                                ' Creative',
                                2000,
                                ' Analytical',
                                2000,
                                ' Passionate',
                                2000,
                            ]} className='font-title text-4xl' speed={50} wrapper='span' repeat={Infinity} />
                        </h1>
                        <p class='mb-3 lg:w-5/6'>Recently graduated from 'Generation Australia' Web Developer Bootcamp. <br></br>
                            <br></br>
                            I aspire to be a web developer who makes beautiful and intuitive websites that users will love.<br></br>
                            <br></br>
                            My upbringing has been filled with a vast array of technologies, such as gaming,
                            warehousing management software, excel accounting, meter reading software, financial instruments, e-commerce, computer hardware,
                            audio interfaces, etc.

                        </p>

                        <div class='flex justify-center text-4xl gap-x-2 m-2'>
                            <a target="_blank" href='https://www.linkedin.com/in/jimmy-tran-7b0562b8'>
                                <FaLinkedin />
                            </a>
                            <a target="_blank" href='https://github.com/ChimmyTee'>
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                    <div class='hidden lg:block'>
                        <figure>
                            <img src={ai_selfie} alt='' />
                            <figcaption class='text-center bg-yellow-600 bg-opacity-50'>AI generated portrait of myself</figcaption>
                        </figure>
                    </div>
                </div>




            </div>
        </div>
    </div>;
};

export default Banner;
