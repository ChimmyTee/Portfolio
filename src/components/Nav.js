import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText} from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
    return <nav class='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
        <div class='container mx-auto'>
            <div class='w-full bg-slate-300 h-[96px] backdrop-blur-2xl
            rounded-full max-w-[460px] mx-auto px-5 flex items-center justify-around text-2xl'>
                <Link to='home' activeClass='active' smooth={true} spy={true} offset={-200} class='cursor-pointer w-[60px] h-[60px] flex items-center justify-around'>
                    <BiHomeAlt />
                </Link>
                <Link to='about' activeClass='active' smooth={true} spy={true} class='cursor-pointer w-[60px] h-[60px] flex items-center justify-around'>
                    <BiUser />
                </Link>
                <Link to='services' activeClass='active' smooth={true} spy={true} class='cursor-pointer w-[60px] h-[60px] flex items-center justify-around'>
                    <BsClipboardData />
                </Link>
                <Link to='work' activeClass='active' smooth={true} spy={true} class='cursor-pointer w-[60px] h-[60px] flex items-center justify-around'>
                    <BsBriefcase />
                </Link>
                <Link to='contact' activeClass='active' smooth={true} spy={true} class='cursor-pointer w-[60px] h-[60px] flex items-center justify-around'>
                    <BsChatSquareText />
                </Link>

            </div>
        </div>
    </nav>;
};

export default Nav;
