import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Contact = () => {
    return <div class='section mx-3' id='contact'>
        <div class='container mx-auto'>
            <div className="flex flex-col lg:flex-row">
                <motion.div 
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    class='lg:w-2/6 flex flex-col justify-center'>
                    <h1 class='font-title, text-2xl'>Let's have a chat</h1>
                    <p>I enjoy working on valuable projects and overall fun to work with</p>
                </motion.div>
                <form class='flex-1 border border-slate-400 rounded-2xl lg:w-4/6 lg:ml-8 px-3'>
                    <input type='text' placeholder='Name' class='bg-transparent outline-none border-b border-slate-300 focus:border-yellow-400 py-3 w-full' />
                    <input type='text' placeholder='Your email' class='bg-transparent outline-none border-b border-slate-300 focus:border-yellow-400 py-3 w-full' />
                    <textarea type='text' placeholder='Message' class='bg-transparent outline-none border-b border-slate-300 focus:border-yellow-400 py-3 mt-12 w-full' />
                    <div class='flex justify-end'>
                        <button class='m-4 border-gray-400'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    </div>;
};

export default Contact;