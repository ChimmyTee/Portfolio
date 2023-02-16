import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header class='py-8 grid grid-cols-2 border-b-2'>
            <div class='container mx-4'>
                <h1 class='font-title text-4xl tracking-wider'>
                    JIMMY TRAN
                </h1>
                <h1 class='font-title text-2xl tracking-wider indent-11 text-yellow-500 max-sm:indent-3'>
                    Junior Web Developer
                </h1>
            </div>
            <div class='grid justify-items-end'>
                <Link to='contact' smooth={true}>
                    <button class='btn mr-4'>Work with Me</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;