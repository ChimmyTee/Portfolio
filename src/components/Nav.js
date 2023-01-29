import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
    return <nav class='fixed bottom-4 lg:bottom-8 w-full overflow-hidden z-50'>
        <div class='container mx-auto'>
            <div class='w-full bg-black/20 h-[96px] backdrop-blur-2xl
            rounded-full max-w-[460px] mx-auto px-5 flex items-center justify-between text-2xl text-red'>
                <Link class='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                    <BiHomeAlt />
                </Link>
                <Link class='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                    <BiUser />
                </Link>
                <Link class='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                    <BsClipboardData />
                </Link>
                <Link class='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
                    <BsBriefcase />
                </Link>

            </div>
        </div>
    </nav>;
};

export default Nav;
