import { BsArrowUpRight } from 'react-icons/bs';

const services = [
    {
        name: 'Business Strategy',
        description: 'something something',
    },
    {
        name: 'Copywriting',
        description: 'something something',
    },
    {
        name: 'Collaboration',
        description: 'something something',
    },
    {
        name: 'Numbers and Data oriented',
        description: 'something something',
    },
]

const Services = () => {
    return <div class='section mx-3' id='services'>
        <div className="container mx-auto">
            <div class='font-title text-2xl'>The values of my Work</div>

            <div>
                {services.map((service, index) => {
                    const { name, description } = service;
                    return (<div key={index} class='border-b border-yellow-300'>
                        <div>{name}</div>
                        <div>{description}</div>
                    </div>);
                })}
            </div>
        </div>
    </div>;
};

export default Services;