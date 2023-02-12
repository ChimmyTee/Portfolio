import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Contact = () => {
    return <div class='section' id='contact'>
        <div class='container mx-auto'>
            <div className="flex flex-col lg:flex-row">
                <div class='w-2/6'>
                    <h1 class='font-title, text-2xl'>Let's have a chat</h1>
                    <p>I enjoy working on valuable projects and overall fun to work with</p>
                </div>
                <form>form</form>
            </div>
        </div>
    </div>;
};

export default Contact;
