'use client'
import React from 'react'
import Link from 'next/link';
import { BsDiscord, BsGithub, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
        return (
                <footer className="w-full bg-white mt-5 border-t border-t-[#A3B3BC] text-[#A3B3BC]">
                        <div className="container flex justify-between py-6 gap-12">
                                <div className="w-3/5">
                                        {/* Về ItourGo */}
                                        <div className='flex gap-12'>
                                                <div>
                                                        <p className="uppercase text-black">Về ItourGo</p>
                                                        <div className='flex flex-col gap-2 text-sm mt-2'>
                                                                <Link href="/">Chúng tôi</Link>
                                                                <Link href="/">ItourGo Blog</Link>
                                                                <Link href="/">Tư vấn miễn phí</Link>
                                                        </div>
                                                </div>
                                                <div>
                                                        <p className="uppercase text-black">Thông Tin Cần Biết</p>
                                                        <div className='flex flex-col gap-2 text-sm mt-2'>
                                                                <Link href="/">Điều kiện và điều khoản</Link>
                                                                <Link href="/">Quy chế hoạt động</Link>
                                                                <Link href="/">Câu hỏi thường gặp</Link>
                                                        </div>
                                                </div>
                                                <div>
                                                        <p className="uppercase text-black">Đối tượng liên kết</p>
                                                        <div className='flex flex-col gap-2 text-sm mt-2'>
                                                                <Link href="/">Vietnam Airlines</Link>
                                                                <Link href="/">VNExpress</Link>
                                                        </div>
                                                </div>
                                                <div>
                                                        <p className="uppercase text-black">Được chứng nhận</p>
                                                        <div className='flex flex-col gap-2 text-sm mt-2'>
                                                                <Link href="/"><img className='w-full' src="https://www.ivivu.com/du-lich/content/img/bocongthuong.png" alt="" /></Link>
                                                        </div>
                                                </div>
                                        </div>
                                        {/* Thương hiệu */}
                                        <div className='flex gap-12 items-center'>
                                                <div className='flex items-center gap-2'>
                                                        <div className='h-[48px]'>
                                                                <img className="w-full" src="https://www.ivivu.com/du-lich/content/img/ico-wta-winner-shield-2021.png" alt="" />
                                                        </div>
                                                        <p className='flex-1'>Đại lý Du lịch Trực tuyến Hàng đầu Việt Nam</p>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                        <div className='h-[48px]'>
                                                                <img className="w-full" src="https://www.ivivu.com/du-lich/content/img/ico-hra.png" alt="" />
                                                        </div>
                                                        <p className='flex-1'>Đại lý Du lịch Trực tuyến Hàng đầu Việt Nam</p>

                                                </div>
                                                <div className='flex items-center gap-2'>
                                                        <div className='h-[48px]'>
                                                                <img className="w-full" src="https://www.ivivu.com/du-lich/content/img/ico-apea.png" alt="" />
                                                        </div>
                                                        <p className='flex-1'>Đại lý Du lịch Trực tuyến Hàng đầu Việt Nam</p>
                                                </div>
                                        </div>
                                </div>
                                <div className="flex-1"></div>

                        </div>

                </footer>
        )
}

export default Footer
