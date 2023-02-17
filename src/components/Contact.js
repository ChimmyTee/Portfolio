import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Contact = () => {
    return <div class='section mx-3' id='contact'>
        <div class='container mx-auto'>
            <div className="flex flex-col lg:flex-row">
                <div class='lg:w-2/6 flex flex-col justify-center'>
                    <h1 class='font-bold text-2xl'>Let's have a chat</h1>
                    <p>whether its a business enquiry or a story</p>
                </div>
                <motion.form
                    variants={fadeIn('left', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    class='flex-1 border border-zinc-300 rounded-md lg:w-4/6 lg:ml-8 px-3'>
                    <input type='text' placeholder='Name' class='bg-transparent outline-none border-b border-zinc-300 focus:border-zinc-400 px-1 py-3 w-full' />
                    <input type='text' placeholder='Your email' class='bg-transparent outline-none border-b border-zinc-300 focus:border-zinc-400 px-1 py-3 w-full' />
                    <textarea type='text' placeholder='Message' class='bg-transparent outline-none border border-zinc-300 focus:border-zinc-400 px-1 py-3 mt-4 w-full' />
                    <div class='flex justify-end'>
                        <button class='btn m-4'>Send</button>
                    </div>
                    {/* </form> */}
                </motion.form>
            </div>
        </div>
    </div>;
};

export default Contact;