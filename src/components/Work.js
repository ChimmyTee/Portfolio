import { motion } from 'framer-motion';

import { fadeIn } from '../variants';
import renaiHRImg from '../assets/RenaiHR_snippet.JPG';
import shoppingCartImg from '../assets/ShoppingCart_snippet.JPG';
import toDoListImg from '../assets/ToDoList_snippet.JPG';
import airbnbImg from '../assets/Airbnb_snippet.JPG';

const Work = () => {
    return <div class='section mx-3' id='work'>
        <div class='container mx-auto'>
            <div class='flex flex-col lg:flex-row gap-x-10'>
                <div class='flex-1 flex flex-col gap-y-12 mb-10'>
                    <div>
                        <h1 class='text-2xl font-bold'>My Latest Work</h1>
                        <p class='max-w-sm mb-2'>This portfolio is made using React and Tailwind CSS.<br></br><br></br>
                            Projects in the pipeline:
                            <div class='indent-4 font-bold'>
                                <li>Personal CMS Blog</li>
                                <li>Python Trading Bot</li>
                                <li>Dashboard for Scheduling</li>
                            </div>
                        </p>
                        {/* <button class='btn'>View all projects</button> */}
                    </div>

                    <div class='group relative overflow-hidden border-2 border-zinc-200 rounded-xl'>
                        <div class='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img class='group-hover:scale-95 transition-all duration-500' src={renaiHRImg} alt='' />

                        <div class="w-14 h-14 absolute -bottom-full left-80 text-white 
                            group-hover:bottom-32 transition-all duration-700 z-50 lg:group-hover:bottom-32">
                            <svg fill="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon fill-rule="evenodd" points="14 19 14 21 3 21 3 10 5 10 5 17.586 18.293 4.293 19.707 5.707 6.414 19"></polygon> </g></svg>
                        </div>

                        <div class='w-full absolute -bottom-full left-80 text-white 
                            group-hover:bottom-44 transition-all duration-700 z-50 lg:group-hover:bottom-44'><p>Click title to view live site</p></div>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-14 h-14 text-white
                         absolute -bottom-full left-72 group-hover:bottom-32 transition-all duration-500 z-50">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
                        </svg> */}
                        <a target="_blank" href='https://chimmytee.github.io/renaisshr360/'>
                            <div class='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-3xl text-white hover:underline underline-offset-4'>Recruitment Agency</div>
                        </a>
                        <div class='w-4/5 absolute -bottom-full left-12 text-white 
                            group-hover:bottom-12 transition-all duration-700 z-50 lg:group-hover:bottom-16'><p>Real client website, currently in progress (built with Bootstrap 5)</p></div>

                    </div>
                    <div class='group relative overflow-hidden border-2 border-zinc-200 rounded-xl'>
                        <div class='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img class='group-hover:scale-95 transition-all duration-500' src={toDoListImg} alt='' />
                        <a target="_blank" href='https://raissa-damasceno.github.io/To-Do-List-App/'>
                            <div class='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-3xl text-white hover:underline underline-offset-4'>To Do List</div>
                        </a>
                        <div class='w-4/5 absolute -bottom-full left-12 text-white 
                            group-hover:bottom-12 transition-all duration-700 z-50 lg:group-hover:bottom-14'>Group project (demonstrated amazing teamwork) </div>
                    </div>

                </div>
                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    class='flex-1 flex flex-col gap-y-10'>
                    <div class='group relative overflow-hidden border-2 border-zinc-200 rounded-xl'>
                        <div class='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img class='group-hover:scale-95 transition-all duration-500' src={airbnbImg} alt='' />
                        <a target="_blank" href='https://airbnb-clone-chimmytee.vercel.app/'>
                            <div class='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-3xl text-white hover:underline underline-offset-4'>Airbnb Clone</div>
                        </a>
                        <div class='w-4/5 absolute -bottom-full left-12 text-white 
                            group-hover:bottom-12 transition-all duration-700 z-50 lg:group-hover:bottom-16'><p>Advanced exercise to practice React (built with Nextjs and Tailwind)</p></div>
                    </div>
                    <div class='group relative overflow-hidden border-2 border-zinc-200 rounded-xl'>
                        <div class='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img class='group-hover:scale-95 transition-all duration-500' src={shoppingCartImg} alt='' />
                        <a target="_blank" href='https://chimmytee.github.io/shopping-cart-generation/'>
                            <div class='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-3xl text-white hover:underline underline-offset-4'>Shopping Cart</div>
                        </a>
                        <div class='w-4/5 absolute -bottom-full left-12 text-white 
                            group-hover:bottom-12 transition-all duration-700 z-50 lg:group-hover:bottom-14'>Assessment project (built with vanilla Javascript)</div>
                    </div>

                </motion.div>
            </div>

            <div class='projects'>

            </div>

        </div>
    </div>;
};

export default Work;
