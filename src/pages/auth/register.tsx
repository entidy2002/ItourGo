'use client'

import Link from 'next/link';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';


const Register = () => {

        return (
                <div className="text-black h-screen grid grid-cols-2">
                        <div className="flex items-center justify-center">
                                <form className="flex max-w-md flex-col gap-4 w-[48%]">
                                        <div className='mb-6'>
                                                <h1 className="font-bold text-3xl">Đăng ký</h1>
                                                <p className="text-[#67748E]">Nhập email và mật khẩu của bạn để đăng ký</p>
                                        </div>
                                        <div>
                                                <div className="mb-2 block">
                                                        <Label
                                                                htmlFor="username"
                                                                value="User Name"
                                                        />
                                                </div>
                                                <TextInput
                                                        id="username"
                                                        placeholder="User Name"
                                                        required
                                                        shadow
                                                        type="text"
                                                // {...register("username")}
                                                />
                                        </div>
                                        <div>
                                                <div className="mb-2 block">
                                                        <Label
                                                                htmlFor="email"
                                                                value="Your email"
                                                        />
                                                </div>
                                                <TextInput
                                                        id="email"
                                                        placeholder="Email"
                                                        required
                                                        shadow
                                                        type="email"
                                                // {...register("email")}

                                                />
                                        </div>
                                        <div>
                                                <div className="mb-2 block">
                                                        <Label
                                                                htmlFor="password"
                                                                value="Your password"
                                                        />
                                                </div>
                                                <TextInput
                                                        id="password"
                                                        required
                                                        shadow
                                                        type="password"
                                                // {...register("password")}

                                                />
                                        </div>
                                        <div>
                                                <div className="mb-2 block">
                                                        <Label
                                                                htmlFor="repeat-password"
                                                                value="Repeat password"
                                                        />
                                                </div>
                                                <TextInput
                                                        id="confirmPassword"
                                                        required
                                                        shadow
                                                        type="password"
                                                // {...register("confirmPassword")}
                                                />
                                        </div>
                                        <div className="flex items-center gap-2">
                                                <Checkbox id="agree" />
                                                <Label
                                                        className="flex"
                                                        htmlFor="agree"
                                                >
                                                        <p>
                                                                Đồng ý với điều khoản
                                                        </p>

                                                </Label>
                                        </div>
                                        <Button type="submit">
                                                Đăng ký
                                        </Button>
                                        <div className="mt-5 text-[#67748e] text-center"><p>Bạn đã có tài khoản? <Link href="/auth/login" className="cursor-pointer text-[color:var(--primary-color)]">Đăng nhập</Link></p></div>

                                </form>
                        </div>
                        <div className="flex items-center justify-center relative">
                                <div className="w-[715px] bg-gradient-to-l from-[#7928ca] to-[#ff0080] h-[90vh] rounded-[12px] flex items-center justify-center" >
                                        <div className='bg-no-repeat bg-cover bg-center w-full h-full absolute opacity-40' style={{ backgroundImage: 'url("https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/shapes/pattern-lines.svg")' }}></div>
                                        <div className="w-full flex justify-center items-center flex-col text-center">
                                                <img className="max-w-[500px] w-full relative" src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/illustrations/chat.png" alt="chat-img" />
                                                {/* <h4 className="mt-5 text-white font-weight-bolder">"Attention is the new currency"</h4> */}
                                                <p className="text-white">The more effortless the writing looks, the more effort the writer actually put into the process.</p>
                                        </div>
                                </div>
                        </div>
                        {/* {loading && <PreLoader />} */}

                </div>
        )

}
export default Register
Register.Layout = "nolayout"
