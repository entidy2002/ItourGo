'use client'
import Link from 'next/link';
import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';
import { BsCalendarWeek } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { FaHotel } from "react-icons/fa"
const Home = () => {
  return (
    <div>

      {/* banner */}
      <div className="relative mb-[200px] py-12 w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/direngine/images/bg_1.jpg.webp")' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-12">
            <div className="">
              <h4 className="mb-8 text-white text-5xl font-bold">Explore The World</h4>
              <h1 className="mb-8 text-[#D0E3F0] text-lg font-semibold">Start Planning Your Dream Trip Today!</h1>
              <p className="mb-8">Find great places to stay, eat, shop, or visit from local experts</p>

              <form action="">
                <div className="w-full grid grid-cols-2 gap-8">
                  <TextInput
                    id="destination"
                    placeholder="Destination"
                    required
                    type="text"
                    sizing="lg"
                  />
                  <Select
                    id="countries"
                    required
                    sizing="lg"
                  >
                    <option>
                      United States
                    </option>
                    <option>
                      Canada
                    </option>
                    <option>
                      France
                    </option>
                    <option>
                      Germany
                    </option>
                  </Select>
                </div>
                <Button className="w-full mt-6" size="lg"><span className="flex items-center gap-2"><BsSearch />Search Now</span></Button>
              </form>

              <div className="flex h-[52px] gap-4 mt-12">
                <button className="px-6 h-full flex gap-2 bg-white items-center rounded"><FaHotel /><span className="font-semibold">Hotel</span></button>
                <button className="px-6 h-full flex gap-2 bg-white items-center rounded"><FaHotel /><span className="font-semibold">Restaurant</span></button>
                <button className="px-6 h-full flex gap-2 bg-white items-center rounded"><FaHotel /><span className="font-semibold">Transport</span></button>
                <button className="px-6 h-full flex gap-2 bg-white items-center rounded"><FaHotel /><span className="font-semibold">Vourcher</span></button>
              </div>



            </div>

            <div>
              <img className="w-full" src="https://htmldesigntemplates.com/html/travelin/images/travel.png" alt="" />
            </div>
          </div>
        </div>
        <div className="absolute w-full left-0 bottom-[-120px]">
          <div className="w-5/6 mx-auto">
            <div className="grid grid-cols-5 gap-6 flex justify-around">
              <Link href="/tour/day-la-bai-viet-1" className=" hover:text-[color:var(--primary-color)]">
                <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                  <div className="rounded-2xl overflow-hidden">
                    <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/V2aYSJ.jpg" alt="" />
                  </div>
                  <h5 className="px-4 pb-2 pt-4 font-semibold">Hiking & Trekking</h5>
                </div>
              </Link>
              <Link href="/tour/day-la-bai-viet-1" className=" hover:text-[color:var(--primary-color)]">
                <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                  <div className="rounded-2xl overflow-hidden">
                    <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/V2aYSJ.jpg" alt="" />
                  </div>
                  <h5 className="px-4 pb-2 pt-4 font-semibold">Hiking & Trekking</h5>
                </div>
              </Link>
              <Link href="/tour/day-la-bai-viet-1" className=" hover:text-[color:var(--primary-color)]">
                <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                  <div className="rounded-2xl overflow-hidden">
                    <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/V2aYSJ.jpg" alt="" />
                  </div>
                  <h5 className="px-4 pb-2 pt-4 font-semibold">Hiking & Trekking</h5>
                </div>
              </Link>
              <Link href="/tour/day-la-bai-viet-1" className=" hover:text-[color:var(--primary-color)]">
                <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                  <div className="rounded-2xl overflow-hidden">
                    <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/V2aYSJ.jpg" alt="" />
                  </div>
                  <h5 className="px-4 pb-2 pt-4 font-semibold">Hiking & Trekking</h5>
                </div>
              </Link>
              <Link href="/tour/day-la-bai-viet-1" className=" hover:text-[color:var(--primary-color)]">
                <div className="rounded-2xl border-white bg-white border-[10px] w-full hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                  <div className="rounded-2xl overflow-hidden">
                    <img className="w-full" src="https://cdn.tourradar.com/s3/content-pages/391/438x292/V2aYSJ.jpg" alt="" />
                  </div>
                  <h5 className="px-4 pb-2 pt-4 font-semibold">Hiking & Trekking</h5>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Top destination */}
      <div className="container">
        <div className="text-center">
          <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-6">Top Destination</h1>
          <h3 className="text-5xl font-medium mb-8">Explore Top Destinations</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        <div className="flex gap-8 mt-12">
          <div className="w-2/5">
            <Link href="/tour/day-la-bai-viet-1" className="w-full h-full overflow-hidden relative rounded-2xl">
              <div className="bg-no-repeat bg-center bg-cover h-full w-full overflow-hidden rounded-2xl" style={{ backgroundImage: 'url("https://htmldesigntemplates.com/html/travelin/images/destination/destination1.jpg")' }}></div>
              <div className="absolute left-0 top-0 flex flex-col justify-end w-full h-full p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className='text-2xl text-[color:var(--primary-color)] font-bold line-clamp-1'>Italy</h3>
                    <p className='text-3xl text-white font-medium line-clamp-1'>Caspian Valley</p>
                  </div>
                  <p className="px-3 py-1 bg-cyan-500 rounded-xl text-white">
                    18 hour
                  </p>
                </div>

              </div>
            </Link>
          </div>
          <div className="flex-1">
            <div className="flex grid grid-cols-2 gap-8">
              <Link href="/tour/day-la-bai-viet-1" className="w-full pt-[100%] overflow-hidden relative rounded-2xl bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://htmldesigntemplates.com/html/travelin/images/destination/destination17.jpg")' }}>
                <div className="absolute left-0 top-0 flex flex-col justify-end w-full h-full p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className='text-2xl text-[color:var(--primary-color)] font-bold line-clamp-1'>Italy</h3>
                      <p className='text-3xl text-white font-medium line-clamp-1'>Caspian Valley</p>
                    </div>
                    <p className="px-3 py-1 bg-cyan-500 rounded-xl text-white">
                      18 hour
                    </p>
                  </div>

                </div>
              </Link>

              <Link href="/tour/day-la-bai-viet-1" className="w-full pt-[100%] overflow-hidden relative rounded-2xl bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://htmldesigntemplates.com/html/travelin/images/destination/destination17.jpg")' }}>
                <div className="absolute left-0 top-0 flex flex-col justify-end w-full h-full p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className='text-2xl text-[color:var(--primary-color)] font-bold line-clamp-1'>Italy</h3>
                      <p className='text-3xl text-white font-medium line-clamp-1'>Caspian Valley</p>
                    </div>
                    <p className="px-3 py-1 bg-cyan-500 rounded-xl text-white">
                      18 hour
                    </p>
                  </div>

                </div>
              </Link>

              <Link href="/tour/day-la-bai-viet-1" className="w-full pt-[100%] overflow-hidden relative rounded-2xl bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://htmldesigntemplates.com/html/travelin/images/destination/destination17.jpg")' }}>
                <div className="absolute left-0 top-0 flex flex-col justify-end w-full h-full p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className='text-2xl text-[color:var(--primary-color)] font-bold line-clamp-1'>Italy</h3>
                      <p className='text-3xl text-white font-medium line-clamp-1'>Caspian Valley</p>
                    </div>
                    <p className="px-3 py-1 bg-cyan-500 rounded-xl text-white">
                      18 hour
                    </p>
                  </div>

                </div>
              </Link>
              <Link href="/tour/day-la-bai-viet-1" className="w-full pt-[100%] overflow-hidden relative rounded-2xl bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("https://htmldesigntemplates.com/html/travelin/images/destination/destination1.jpg")' }}>
                <div className="absolute left-0 top-0 flex flex-col justify-end w-full h-full p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className='text-2xl text-[color:var(--primary-color)] font-bold line-clamp-1'>Italy</h3>
                      <p className='text-3xl text-white font-medium line-clamp-1'>Caspian Valley</p>
                    </div>
                    <p className="px-3 py-1 bg-cyan-500 rounded-xl text-white">
                      18 hour
                    </p>
                  </div>

                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>


      {/* Best Tours Packages */}
      <div className="container pt-12">
        <div>
          <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-6">Top Pick</h1>
          <h3 className="text-5xl font-medium mb-8">Best Tour Packages  </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        <div className="flex grid grid-cols-3 gap-8 mt-12">
          <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="relative">
              <img className="w-full" src="https://htmldesigntemplates.com/html/travelin/images/trending/trending2.jpg" alt="" />
              <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
              </div>
            </div>
            <div className="">
              <div className="p-4">
                <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                  <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Croatia</h3>
                  <h4 className='text-3xl font-semibold'>Piazza Castello</h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum</p>
                </div>

              </div>

              <div className="p-4 flex gap-2">
                <span>$170.00</span>
                <i>|</i>
                <span>Per person</span>
              </div>
            </div>
          </Link>

          <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="relative">
              <img className="w-full" src="https://htmldesigntemplates.com/html/travelin/images/trending/trending2.jpg" alt="" />
              <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
              </div>
            </div>
            <div className="">
              <div className="p-4">
                <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                  <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Croatia</h3>
                  <h4 className='text-3xl font-semibold'>Piazza Castello</h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum</p>
                </div>

              </div>

              <div className="p-4 flex gap-2">
                <span>$170.00</span>
                <i>|</i>
                <span>Per person</span>
              </div>
            </div>
          </Link>
          <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="relative">
              <img className="w-full" src="https://htmldesigntemplates.com/html/travelin/images/trending/trending2.jpg" alt="" />
              <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
              </div>
            </div>
            <div className="">
              <div className="p-4">
                <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                  <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Croatia</h3>
                  <h4 className='text-3xl font-semibold'>Piazza Castello</h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum</p>
                </div>

              </div>

              <div className="p-4 flex gap-2">
                <span>$170.00</span>
                <i>|</i>
                <span>Per person</span>
              </div>
            </div>
          </Link>
          <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="relative">
              <img className="w-full" src="https://htmldesigntemplates.com/html/travelin/images/trending/trending2.jpg" alt="" />
              <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
              </div>
            </div>
            <div className="">
              <div className="p-4">
                <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                  <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Croatia</h3>
                  <h4 className='text-3xl font-semibold'>Piazza Castello</h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum</p>
                </div>

              </div>

              <div className="p-4 flex gap-2">
                <span>$170.00</span>
                <i>|</i>
                <span>Per person</span>
              </div>
            </div>
          </Link>
          <Link href="/tour/day-la-bai-viet-1" className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="relative">
              <img className="w-full" src="https://htmldesigntemplates.com/html/travelin/images/trending/trending2.jpg" alt="" />
              <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
              </div>
            </div>
            <div className="">
              <div className="p-4">
                <div className="flex flex-col gap-4 pb-4 border-b border-dotted">
                  <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Croatia</h3>
                  <h4 className='text-3xl font-semibold'>Piazza Castello</h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum</p>
                </div>

              </div>

              <div className="p-4 flex gap-2">
                <span>$170.00</span>
                <i>|</i>
                <span>Per person</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Tour Guides */}
      <div className="container pt-12">
        <div className='text-center'>
          <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-6">Tour Guides</h1>
          <h3 className="text-5xl font-medium mb-8">Meet Our Excellent Guides</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        <div className="flex grid grid-cols-4 gap-8 mt-12">
          <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="bg-no-repeat bg-center bg-cover w-full pt-[109%]" style={{ backgroundImage: 'url("https://htmldesigntemplates.com/html/travelin/images/team/img4.jpg")' }}>

            </div>
            <div className="bg-[#029E9D] text-center text-white py-2">
              <h1 className="text-2xl font-medium">Solden Kolas</h1>
              <h3 className="text-lg font-medium">Asst Manager</h3>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="bg-no-repeat bg-center bg-cover w-full pt-[109%]" style={{ backgroundImage: 'url("https://htmldesigntemplates.com/html/travelin/images/team/img4.jpg")' }}>

            </div>
            <div className="bg-[#029E9D] text-center text-white py-2">
              <h1 className="text-2xl font-medium">Solden Kolas</h1>
              <h3 className="text-lg font-medium">Asst Manager</h3>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="bg-no-repeat bg-center bg-cover w-full pt-[109%]" style={{ backgroundImage: 'url("https://htmldesigntemplates.com/html/travelin/images/team/img4.jpg")' }}>

            </div>
            <div className="bg-[#029E9D] text-center text-white py-2">
              <h1 className="text-2xl font-medium">Solden Kolas</h1>
              <h3 className="text-lg font-medium">Asst Manager</h3>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="bg-no-repeat bg-center bg-cover w-full pt-[109%]" style={{ backgroundImage: 'url("https://htmldesigntemplates.com/html/travelin/images/team/img4.jpg")' }}>

            </div>
            <div className="bg-[#029E9D] text-center text-white py-2">
              <h1 className="text-2xl font-medium">Solden Kolas</h1>
              <h3 className="text-lg font-medium">Asst Manager</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="container pt-12">
        <div className="w-full border rounded-lg grid grid-cols-4 overflow-hidden gap-[1px]">
          <div><img className='w-full py-6 px-12 border' src="https://htmldesigntemplates.com/html/travelin/images/cl-5.png" alt="" /></div>
          <div><img className='w-full py-6 px-12 border' src="https://htmldesigntemplates.com/html/travelin/images/cl-5.png" alt="" /></div>
          <div><img className='w-full py-6 px-12 border' src="https://htmldesigntemplates.com/html/travelin/images/cl-5.png" alt="" /></div>
          <div><img className='w-full py-6 px-12 border' src="https://htmldesigntemplates.com/html/travelin/images/cl-5.png" alt="" /></div>
          <div><img className='w-full py-6 px-12 border' src="https://htmldesigntemplates.com/html/travelin/images/cl-5.png" alt="" /></div>
          <div><img className='w-full py-6 px-12 border' src="https://htmldesigntemplates.com/html/travelin/images/cl-5.png" alt="" /></div>
          <div><img className='w-full py-6 px-12 border' src="https://htmldesigntemplates.com/html/travelin/images/cl-5.png" alt="" /></div>
          <div><img className='w-full py-6 px-12 border' src="https://htmldesigntemplates.com/html/travelin/images/cl-5.png" alt="" /></div>

        </div>
      </div>

      {/* Blog */}
      <div className="container pt-12">
        <div className='text-center'>
          <h1 className="text-2xl text-[color:var(--primary-color)] font-bold mb-6">Our Blogs Offers</h1>
          <h3 className="text-5xl font-medium mb-8">Recent Articles & Posts</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        <div className="flex grid grid-cols-3 gap-8 mt-12">
          <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="relative">
              <img className="w-full" src="https://htmldesigntemplates.com/html/travelin/images/trending/trending10.jpg" alt="" />
              <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
              </div>
            </div>
            <div className="">
              <div className="p-4">
                <div className="flex flex-col gap-4 pb-4">
                  <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Techology</h3>
                  <h4 className='text-3xl font-semibold'>how a developer dou at deutsche bank keep remote alive</h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum</p>
                </div>

              </div>
              <div className="flex justify-between p-4">
                <div className="p-4 flex gap-2 items-center">
                  <div className="bg-center w-[36px] h-[36px] bg-cover bg-no-repeat rounded-full" style={{ backgroundImage: 'url("https://htmldesigntemplates.com/html/travelin/images/reviewer/2.jpg")' }}></div>
                  <p>Sollmond Nell</p>
                </div>
                <div className='flex items-center'>
                  <button className=' bg-[#029E9D] px-6 py-2 rounded-full text-white'>Read More</button>
                </div>
              </div>

            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="relative">
              <img className="w-full" src="https://htmldesigntemplates.com/html/travelin/images/trending/trending10.jpg" alt="" />
              <div className='absolute top-0 left-0 w-[150px] h-[150px]'>
                {/* <span className='absolute rotate-[135deg] block text-center text-2xl font-bold text-yellow-500 uppercase w-[220px] py-6'>20% OFF</span> */}
              </div>
            </div>
            <div className="">
              <div className="p-4">
                <div className="flex flex-col gap-4 pb-4">
                  <h3 className='text-[color:var(--primary-color)] text-fg font-semibold'>Techology</h3>
                  <h4 className='text-3xl font-semibold'>how a developer dou at deutsche bank keep remote alive</h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum</p>
                </div>

              </div>
              <div className="flex justify-between p-4">
                <div className="p-4 flex gap-2 items-center">
                  <div className="bg-center w-[36px] h-[36px] bg-cover bg-no-repeat rounded-full" style={{ backgroundImage: 'url("https://htmldesigntemplates.com/html/travelin/images/reviewer/2.jpg")' }}></div>
                  <p>Sollmond Nell</p>
                </div>
                <div className='flex items-center'>
                  <button className=' bg-[#029E9D] px-6 py-2 rounded-full text-white'>Read More</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
