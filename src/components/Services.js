import { BsArrowUpRight } from 'react-icons/bs';

const services = [
    {
        name: 'Business Strategy',
        description: 'I ensure that each website is easy to use, effective, or streamlined to improve sales. SEO is applied where possible.',
    },
    {
        name: 'Copywriting',
        description: 'I enjoy writing good copy as it positively impacts the value of visiting the website',
    },
    {
        name: 'Collaboration',
        description: 'I am respectful to my peers and well equipped with tools to communicate effectively.',
    },
    {
        name: 'Numbers and Data',
        description: 'I believe that keeping track of key numbers and data is valuable for analysis, whether its for performance, persuasion, reflection or making quick decisions.',
    },
]

const Services = () => {
    return <div class='section mx-3' id='services'>
        <div className="container mx-auto">
            <div class='font-bold text-2xl mb-7'>Values I strive to achieve in my websites</div>

            <div>
                {services.map((service, index) => {
                    const { name, description } = service;
                    return (<div key={index} class='border-b border-zinc-300 mb-5'>
                        <div class='font-bold'>{name}</div>
                        <div class='mb-2'>{description}</div>
                    </div>);
                })}
            </div>
        </div>
    </div>;
};

export default Services;