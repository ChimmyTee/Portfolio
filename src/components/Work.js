import { motion } from 'framer-motion';

import { fadeIn } from '../variants';
import renaiHRImg from '../assets/RenaiHR_snippet.JPG';
import shoppingCartImg from '../assets/ShoppingCart_snippet.JPG';
import toDoListImg from '../assets/ToDoList_snippet.JPG';

const Work = () => {
    return <div class='section' id='work'>
        <div class='container mx-auto border-2'>
            <div class='flex flex-col lg:flex-row gap-x-10'>
                <div class='flex-1 flex flex-col gap-y-12 mb-10'>
                    <div>
                        <h1>My Latest Work</h1>
                        <p class='max-w-sm mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime non fugit vel aliquid facilis vero, architecto ad, dolores illo consequatur accusamus voluptates rerum earum. Consectetur magnam facere repellendus quo molestiae?</p>
                        <button class='btn'>View all projects</button>
                    </div>

                    <div class='group relative overflow-hidden border-2 border-black rounded-xl'>
                        <div class='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img class='group-hover:scale-95 transition-all duration-500' src={renaiHRImg} alt='' />
                        <div class='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-3xl text-white'>UI/UX Design</div>
                        <div class='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 text-white'>Project Title</div>
                    </div>
                </div>

                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    class='flex-1 flex flex-col gap-y-10'>
                    <div class='group relative overflow-hidden border-2 border-black rounded-xl'>
                        <div class='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img class='group-hover:scale-95 transition-all duration-500' src={shoppingCartImg} alt='' />
                        <div class='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-3xl text-white'>UI/UX Design</div>
                        <div class='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 text-white'>Project Title</div>
                    </div>
                    <div class='group relative overflow-hidden border-2 border-black rounded-xl'>
                        <div class='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img class='group-hover:scale-95 transition-all duration-500' src={toDoListImg} alt='' />
                        <div class='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-3xl text-white'>UI/UX Design</div>
                        <div class='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 text-white'>Project Title</div>
                    </div>
                </motion.div>
            </div>

            <div class='projects'>

            </div>

        </div>
    </div>;
};

export default Work;
