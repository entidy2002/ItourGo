import Link from "next/link";

import Search from "~/components/Search";
import Navbar from "./Navbar";
import Cart from "~/components/popper/Cart";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md"
import { BsSearch } from "react-icons/bs"
import { FaUser, FaSignOutAlt, FaUserCircle } from "react-icons/fa"
import { IoMdWallet, IoIosSettings } from "react-icons/io"
import { AiOutlineUser } from "react-icons/ai"
import { CgShoppingCart } from "react-icons/cg"

const Header = () => {
        const userMenu1 = [
                {
                        icon: <FaUser />,
                        title: 'Xem Profile',
                        to: '/account/profile',
                },
                {
                        icon: <IoMdWallet />,
                        title: 'Ví',
                        to: '/account/wallet',
                },
                {
                        icon: <IoIosSettings />,
                        title: 'Cài đặt',
                        to: '/settings',
                },
                {
                        icon: <FaSignOutAlt />,
                        title: 'Đăng xuất',
                        separate: true,
                },
        ];
        return (
                <div className="w-full bg-white sticky top-0 z-[40]">
                        <Navbar />
                        <div className="w-full h-[94px]">
                                <div className="flex items-center h-full container justify-between">
                                        <Link href="/"><img className="h-[92px]" src="/itourgo.jpg" alt="" /></Link>
                                        <div className="flex gap-4 text-[15px]">
                                                <Link href="/" className="dropdown-hover uppercase flex items-center gap-1 relative py-3 text-[color:var(--primary-color)]">Home<MdKeyboardArrowDown fontSize={22} />
                                                        <ul className="dropdown-menu hidden w-52 absolute top-[100%] bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] text-black">
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white">Homepage Default</li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white">Homepage Default</li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white">Homepage Default</li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white dropdown-subhover relative">
                                                                        <div className="flex items-center justify-between">
                                                                                <span>Homepage Default</span>
                                                                                <MdOutlineKeyboardArrowRight fontSize={22} />
                                                                        </div>
                                                                        <div className="dropdown-submenu hidden w-48 absolute left-[100%] top-0 bg-white">
                                                                                <div className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] text-black hover:text-white">Homepage subnav</div>
                                                                                <div className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] text-black hover:text-white">Homepage subnav</div>
                                                                                <div className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] text-black hover:text-white">Homepage subnav</div>
                                                                        </div>
                                                                </li>
                                                        </ul>
                                                </Link>
                                                <Link href="/" className="dropdown-hover uppercase flex items-center gap-1 relative py-3">About Us</Link>
                                                <Link href="/" className="dropdown-hover uppercase flex items-center gap-1 relative py-3">Destination<MdKeyboardArrowDown fontSize={22} />
                                                        <ul className="dropdown-menu w-52 hidden overflow-hidden absolute top-[100%] bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-sm text-">
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white">Homepage Default</li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white">Homepage Default</li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white">Homepage Default</li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white">Homepage Default</li>
                                                        </ul>
                                                </Link>
                                                <Link href="/" className="dropdown-hover uppercase flex items-center gap-1 relative py-3">Tours<MdKeyboardArrowDown fontSize={22} />
                                                        <ul className="dropdown-menu hidden w-52 absolute top-[100%] bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] text-black">
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white">Homepage Default</li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white">Homepage Default</li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white">Homepage Default</li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white dropdown-subhover relative">
                                                                        <div className="flex items-center justify-between">
                                                                                <span>Homepage Default</span>
                                                                                <MdOutlineKeyboardArrowRight fontSize={22} />
                                                                        </div>
                                                                        <div className="dropdown-submenu hidden w-48 absolute left-[100%] top-0 bg-white">
                                                                                <div className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] text-black hover:text-white">Homepage subnav</div>
                                                                                <div className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] text-black hover:text-white">Homepage subnav</div>
                                                                                <div className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] text-black hover:text-white">Homepage subnav</div>
                                                                        </div>
                                                                </li>
                                                        </ul>
                                                </Link>
                                                <Link href="/" className="dropdown-hover uppercase flex items-center gap-1 relative py-3">Pages<MdKeyboardArrowDown fontSize={22} />
                                                        <ul className="dropdown-menu hidden w-52 absolute top-[100%] bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] text-black">
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white">Homepage Default</li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white">Homepage Default</li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white">Homepage Default</li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white dropdown-subhover relative">
                                                                        <div className="flex items-center justify-between">
                                                                                <span>Homepage Default</span>
                                                                                <MdOutlineKeyboardArrowRight fontSize={22} />
                                                                        </div>
                                                                        <div className="dropdown-submenu hidden w-48 absolute left-[100%] top-0 bg-white">
                                                                                <div className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] text-black hover:text-white">Homepage subnav</div>
                                                                                <div className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] text-black hover:text-white">Homepage subnav</div>
                                                                                <div className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] text-black hover:text-white">Homepage subnav</div>
                                                                        </div>
                                                                </li>
                                                        </ul>
                                                </Link>
                                                <Link href="/" className="dropdown-hover uppercase flex items-center gap-1 relative py-3">blog<MdKeyboardArrowDown fontSize={22} />
                                                        <ul className="dropdown-menu hidden w-52 absolute top-[100%] bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)] text-black">
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white">Homepage Default</li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white">Homepage Default</li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white">Homepage Default</li>
                                                                <li className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] hover:text-white dropdown-subhover relative">
                                                                        <div className="flex items-center justify-between">
                                                                                <span>Homepage Default</span>
                                                                                <MdOutlineKeyboardArrowRight fontSize={22} />
                                                                        </div>
                                                                        <div className="dropdown-submenu hidden w-48 absolute left-[100%] top-0 bg-white">
                                                                                <div className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] text-black hover:text-white">Homepage subnav</div>
                                                                                <div className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] text-black hover:text-white">Homepage subnav</div>
                                                                                <div className="p-3 border-b last:border-b-0 border-dotted hover:bg-[color:var(--primary-color)] text-black hover:text-white">Homepage subnav</div>
                                                                        </div>
                                                                </li>
                                                        </ul>
                                                </Link>
                                                <button className="p-2">
                                                        <BsSearch className="hover:" />
                                                </button>

                                        </div>
                                        <div className="flex items-center">
                                                <Cart items={userMenu1}>
                                                        <Link href="/user/cart">
                                                                <CgShoppingCart className="text-[color:var(--secondary-color)]" fontSize={32} />
                                                        </Link>

                                                </Cart>
                                                <Link href="/auth/login" className="flex items-center py-3 px-8 bg-transparent uppercase text-[#777777] gap-1">
                                                        <AiOutlineUser />
                                                        <span>Login / Register</span>
                                                </Link>
                                                <Link href="/account/profile" className="rounded-xl px-6 py-3 text-white bg-[color:var(--primary-color)]">Book now</Link>
                                        </div>
                                </div>
                        </div>
                </div >
        )
}
export default Header;