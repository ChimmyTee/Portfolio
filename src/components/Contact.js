import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Contact = () => {
    return <div class='section mx-3' id='contact'>
        <div class='container mx-auto'>
            <div className="flex flex-col lg:flex-row">
                <div class='flex flex-col justify-center lg:w-2/6'>
                    <h1 class='font-bold text-2xl'>Let's have a chat</h1>
                    <p>whether its a business enquiry or a story.</p>
                </div>
                <motion.form
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.3 }}
                    action="https://formsubmit.co/4fb1373c183fdd5f0ea635f2d61db7d7" method="POST"
                    class='flex-1 border border-zinc-300 rounded-md lg:w-4/6 lg:ml-8 px-3'>
                    <input type='text' name="name" placeholder='Name' class='bg-transparent outline-none border-b border-zinc-300 focus:border-zinc-400 px-1 py-3 w-full' />
                    <input type='email' name="email" placeholder='Your email' class='bg-transparent outline-none border-b border-zinc-300 focus:border-zinc-400 px-1 py-3 w-full' />
                    <textarea type='text' name="message" placeholder='Message' class='bg-transparent outline-none border border-zinc-300 focus:border-zinc-400 px-1 py-3 mt-4 w-full' />
                    <input type="hidden" name="_next" value="https://chimmytee.github.io/Portfolio" />
                    <div class='flex justify-end'>
                        <button type="submit" class='btn m-4'>Send</button>
                    </div>
                </motion.form>

                {/* <motion.form 
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    class='flex-1 border border-zinc-300 rounded-md lg:w-4/6 lg:ml-8 px-3'>
                    <input type='text' name="name" placeholder='Name' class='bg-transparent outline-none border-b border-zinc-300 focus:border-zinc-400 px-1 py-3 w-full' />
                    <input type='email' name="email" placeholder='Your email' class='bg-transparent outline-none border-b border-zinc-300 focus:border-zinc-400 px-1 py-3 w-full' />
                    <textarea type='text' name="message" placeholder='Message' class='bg-transparent outline-none border border-zinc-300 focus:border-zinc-400 px-1 py-3 mt-4 w-full' />
                </motion.form> */}
            </div>
        </div>
    </div>
};

export default Contact;