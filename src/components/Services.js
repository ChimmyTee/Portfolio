import { BsArrowUpRight } from 'react-icons/bs';

const services = [
    {
        name: 'IU/UX Design',
        description: 'something something',
        link: 'Learn more',
    },
    {
        name: 'Marketing',
        description: 'something something',
        link: 'Learn more',
    },
    {
        name: 'Product Branding',
        description: 'something something',
        link: 'Learn more',
    }
]

const Services = () => {
    return <div class='section' id='services'>
        <div className="container mx-auto">
            <div class='font-title text-2xl'>The values of my Work</div>

            <div>
                {services.map((service, index) => {
                    return <div>service[index].name</div>
                })}
            </div>
        </div>
    </div>;
};

export default Services;