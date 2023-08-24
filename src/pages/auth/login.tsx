'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { ToggleSwitch, Button, TextInput } from 'flowbite-react';


const Login = () => {

        return (
                <div className="text-black h-screen grid grid-cols-2">
                        <div className="flex items-center justify-center">
                                <form className="w-[48%] flex flex-col">
                                        <div className='mb-10'>
                                                <h1 className="font-bold text-3xl">Đăng nhập</h1>
                                                <p className="text-[#67748E]">Nhập email và mật khẩu của bạn để đăng nhập</p>
                                                {/* {error ? <p className="text-red-500 mt-4">Tài khoản hoặc mật khẩu không chính xác !!!</p> : ''} */}
                                        </div>
                                        <div className="mb-5">
                                                <TextInput
                                                        placeholder="Email"
                                                        required
                                                        type="email"
                                                // {...register("email")}
                                                />
                                        </div>
                                        <div className="mb-5">
                                                <TextInput
                                                        name="password"
                                                        placeholder="Password"
                                                        required
                                                        type="password"
                                                // {...register("password")}
                                                />
                                        </div>
                                        {/* <ToggleSwitch
                                                checked={false}
                                                className="mb-3 text-black"
                                        // onChange={() => { setCheck(!check) }}
                                        /> */}
                                        <Button type="submit">
                                                Đăng nhập
                                        </Button>
                                        <div className="mt-5 text-[#67748e] text-center"><p>Bạn chưa có tài khoản? <Link href="/auth/register" className="cursor-pointer text-[color:var(--primary-color)]">Đăng ký</Link></p></div>
                                </form>
                        </div>
                        <div className="flex items-center justify-center relative">
                                <div className="w-[715px] bg-gradient-to-l from-[#7928ca] to-[#ff0080] h-[90vh] rounded-[12px] flex items-center justify-center" >
                                        <div className='bg-no-repeat bg-cover bg-center w-full h-full absolute opacity-40' style={{ backgroundImage: 'url("https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/shapes/pattern-lines.svg")' }}></div>
                                        <div className="w-full flex justify-center items-center flex-col text-center px-3">
                                                {/* <img className="max-w-[500px] w-full relative" src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/illustrations/chat.png" alt="chat-img" /> */}
                                                {/* <h4 className="mt-5 text-white font-weight-bolder">"Crypto Currency là dạng tiền mã hoá (tiền điện tử)"</h4> */}
                                                <p className="text-white">Nó được tạo ra bởi các dự án phát hành trên Blockchain. Bạn có thể sử dụng tiền mã hóa để mua bán các sản phẩm như tiền thật.</p>
                                        </div>
                                </div>
                        </div>
                        {/* {loading && <PreLoader />} */}
                </div>
        )

}
export default Login
Login.Layout = "nolayout"