'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

import { CiEdit } from "react-icons/ci"
import { BiUser, BiPlus } from "react-icons/bi"

import Content from "~/components/profile";
import { useRouter } from "next/router";
const Profile = () => {
        const params = useRouter()
        console.log(params);

        let indexTab
        // if (params == "wallet") {
        //         indexTab = "2"
        // }
        // else {
        //         indexTab = "1"
        // }
        const [tab, setTab] = useState(indexTab)



        const handleTab = (e: any) => {
                console.log(typeof (e.currentTarget.getAttribute('id')));
                setTab(e.currentTarget.getAttribute('id'))
        }
        return (
                <div className="bg-[#F1F3F6]">
                        <div className="container py-5">
                                <div className="flex gap-5">
                                        <div className="w-[220px] py-5">
                                                <div className="flex gap-3 overflow-hidden h-[80px] border-b">
                                                        <img
                                                                className="w-[48px] h-[48px] rounded-full"
                                                                src="data:image/jpeg;base64,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"
                                                                alt="Nguyen The Duong"
                                                        />
                                                        <div className="overflow-hidden">
                                                                <p className="overflow-hidden" title="nguyentheduongyb">nguyentheduongyb</p>
                                                                <button className="flex items-center gap-2">
                                                                        <CiEdit />
                                                                        <span>Sửa hồ sơ</span>
                                                                </button>
                                                        </div>
                                                </div>
                                                <div className="mt-8">
                                                        <div>
                                                                <div onClick={handleTab} id="1" className="flex gap-4 items-center mb-2 cursor-pointer hover:text-[var(--text-primary)]">
                                                                        <Link href="/account/profile" className="flex items-center gap-4">

                                                                                <BiUser />
                                                                                <span>Tài khoản của tôi</span>
                                                                        </Link>
                                                                </div>
                                                                <ul className="pl-10 text-[12px]">
                                                                        <li onClick={handleTab} id="1" className={`mb-2 ${tab == 1 ? 'text-[var(--text-primary)]' : ''} font-bold cursor-pointer hover:text-[var(--text-primary)]`}><Link href="/account/profile">Hồ Sơ</Link></li>
                                                                        <li onClick={handleTab} id="2" className={`mb-2 ${tab == 2 ? 'text-[var(--text-primary)]' : ''} font-bold cursor-pointer hover:text-[var(--text-primary)]`}><Link href="/account/wallet">Phương thức thanh toán</Link></li>
                                                                        <li onClick={handleTab} id="3" className={`mb-2 ${tab == 3 ? 'text-[var(--text-primary)]' : ''} font-bold cursor-pointer hover:text-[var(--text-primary)]`}><Link href="/account/address">Địa chỉ</Link></li>
                                                                        <li onClick={handleTab} id="4" className={`mb-2 ${tab == 4 ? 'text-[var(--text-primary)]' : ''} font-bold cursor-pointer hover:text-[var(--text-primary)]`}><Link href="/account/changepassword">Đổi mật khẩu</Link></li>
                                                                </ul>
                                                        </div>
                                                        <div onClick={handleTab} id="5" className={`${tab == 5 ? 'text-[var(--text-primary)]' : ''} flex gap-4 items-center mb-2 cursor-pointer hover:text-[var(--text-primary)]`}>
                                                                <Link className="flex items-center gap-4" href="/account/order">
                                                                        <BiUser />
                                                                        <span>Đơn mua</span>
                                                                </Link>

                                                        </div>
                                                        <div onClick={handleTab} id="6" className={`${tab == 6 ? 'text-[var(--text-primary)]' : ''} flex gap-4 items-center mb-2 cursor-pointer hover:text-[var(--text-primary)]`}>
                                                                <Link className="flex items-center gap-4" href="/account/notification">
                                                                        <BiUser />
                                                                        <span>Thông báo</span>
                                                                </Link>

                                                        </div>
                                                        <div onClick={handleTab} id="7" className={`${tab == 7 ? 'text-[var(--text-primary)]' : ''} flex gap-4 items-center mb-2 cursor-pointer hover:text-[var(--text-primary)]`}>
                                                                <Link className="flex items-center gap-4" href="/account/voucher">
                                                                        <BiUser />
                                                                        <span>Vourcher</span>
                                                                </Link>

                                                        </div>
                                                </div>
                                        </div>
                                        <Content tab={tab} />
                                </div >
                        </div >
                </div>

        );
}
export default Profile;
Profile.Layout = "Default"
