import { Fragment, useState, useContext } from "react"
import Link from "next/link"
import { Checkbox, Label, Button, TextInput, Tooltip } from "flowbite-react"

import { BsInfoCircle } from "react-icons/bs"
import { SiEthereum } from "react-icons/si"
import { BsCheck2 } from "react-icons/bs"
import { LuCopy } from "react-icons/lu"


const Payment = () => {

        const [quantity, setQuantity] = useState(1)
        const [price, setPrice] = useState(150000)
        const [total, setTotal] = useState(price)

        return (
                <div>
                        <div className="bg-[#f5f5f5] py-5">
                                <div className="container">
                                        <div className="px-8 py-8 pb-0 mb-4 bg-white rounded">
                                                <div className="">
                                                        <div className="flex items-center mb-4">
                                                                <p className="flex-1">Sản phẩm</p>
                                                                <p className="w-40 text-center text-center">Đơn giá</p>
                                                                <p className="w-24 text-center">Số lượng</p>
                                                                <p className="w-40 text-center">Thành tiền</p>
                                                        </div>
                                                        <div className="flex gap-4 mb-4 items-center">
                                                                <p className="text-[color:var(--primary-color)] text-xl font-medium">PNG SOFT</p>
                                                                <span>|</span>
                                                                <button>Chat ngay</button>
                                                        </div>
                                                        <div className="flex mb-4 gap-4">
                                                                <div className="flex gap-2 items-center">
                                                                        <div className="bg-no-repeat bg-center bg-cover w-24 h-24 rounded" style={{ backgroundImage: 'url("https://cdn2.ivivu.com/2023/04/12/14/ivivu-dali.gif")' }}></div>
                                                                        <div className="flex-1">
                                                                                <p className="text-lg">Tour Trung Quốc 6N5Đ : Hà Nội - Hà Khẩu - Đại Lý - Lệ Giang - Shangrila</p>
                                                                                <p className="text-[#ccc] text-sm">Loại: Tour</p>
                                                                        </div>
                                                                </div>
                                                                <div className="h-24 flex flex-col justify-between">
                                                                        <div className="flex gap-3">
                                                                                <div className="w-24">Người lớn</div>
                                                                                <div className="flex">
                                                                                        <p className="w-40 text-center">1555000đ</p>
                                                                                        <p className="w-24 text-center">1</p>
                                                                                        <p className="w-40 text-center">15500</p>
                                                                                </div>

                                                                        </div>
                                                                        <div className="flex gap-3">
                                                                                <div className="w-24">Trẻ em</div>
                                                                                <div className="flex">
                                                                                        <p className="w-40 text-center">1555000đ</p>
                                                                                        <p className="w-24 text-center">1</p>
                                                                                        <p className="w-40 text-center">15500</p>
                                                                                </div>

                                                                        </div>
                                                                </div>
                                                        </div>

                                                </div>
                                                <div className="border-y flex justify-end gap-60 py-4 text-sm">
                                                        <button>Voucher của Shop</button>
                                                        <button>Chọn Voucher</button>
                                                </div>
                                                <p className="py-3 text-end border-b ">Tổng số tiền (3 sản phẩm): <span>183000đ</span></p>

                                                <div className="flex py-3 justify-between">
                                                        <div className="flex items-center w-4/12 gap-4 pr-8 border-r">
                                                                <Label>Lời nhắn:</Label>
                                                                <TextInput className="flex-1" placeholder="Lưu ý cho người bán"></TextInput>
                                                        </div>
                                                        <button className="py-2 px-4 bg-[color:var(--primary-color)] text-white font-bold rounded-xl">Thanh toán</button>
                                                </div>
                                        </div>

                                </div>
                        </div>
                </div>

        )
}
export default Payment