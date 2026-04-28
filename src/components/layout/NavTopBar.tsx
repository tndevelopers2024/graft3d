import React from 'react'
import { Button } from '../ui/Button'
import Link from 'next/link'

const NavTopBar = () => {
    return (
        <div className='w-full bg-primary text-white py-2 lg:py-3.5 px-4 text-[11px] font-medium tracking-wide relative overflow-hidden'>
            {/* Desktop View */}
            <div className='hidden lg:flex max-w-[1400px] mx-auto justify-center items-center gap-6'>

                {/* Contact */}
                <a href="tel:+919380814247" className='flex items-center gap-2 text-[14px] font-bold hover:underline'>
                    <span>Contact : +91 93808 14247</span>
                </a>

                <div className='h-5 w-[1px] bg-white/100'></div>

                {/* Email */}
                <a href="mailto:sales@graft3d.com" className='flex items-center gap-2 text-[14px] font-bold hover:underline'>
                    <span>Email: sales@graft3d.com</span>
                </a>

                <div className='h-5 w-[1px] bg-white/100'></div>

                {/* Live Online Button */}
                <Button
                    asChild
                    variant="white"
                    className='text-primary text-[14px] font-bold px-3 py-1 rounded font-semibold hover:bg-opacity-90 transition-colors h-auto'
                >
                    <Link href="/book-demo">Meet us Live Online</Link>
                </Button>


                {/* Work Hours */}
                <div className='flex items-center gap-2 ml-4 text-[14px] font-bold '>
                    <span>Work Hours : Mon to Sat : 09:30- 18:30</span>
                </div>

                {/* Cart Icon */}
                <Link href="/cart" className='relative ml-4 cursor-pointer hover:opacity-80 transition-opacity block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag">
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <span className='absolute -top-1.5 -right-1.5 bg-white text-primary text-[9px] font-bold h-3.5 w-3.5 flex items-center justify-center rounded-sm'>
                        1
                    </span>
                </Link>

            </div>

            {/* Mobile View */}
            <div className='flex lg:hidden items-center justify-between w-full'>
                {/* Marquee Text */}
                <div className='flex-1 overflow-hidden whitespace-nowrap relative mask-linear-gradient'>
                    <div className='animate-marquee inline-block'>
                        <span className='mx-4 text-[12px]'>
                            Contact : +91 93808 14247 &nbsp;|&nbsp; Email: sales@graft3d.com &nbsp;|&nbsp; Work Hours : Mon to Sat : 09:30- 18:30 &nbsp;|&nbsp; Meet us Live Online
                        </span>
                        <span className='mx-4 text-[12px]'>
                            Contact : +91 93808 14247 &nbsp;|&nbsp; Email: sales@graft3d.com &nbsp;|&nbsp; Work Hours : Mon to Sat : 09:30- 18:30 &nbsp;|&nbsp; Meet us Live Online
                        </span>
                    </div>
                </div>

                {/* Cart Icon (Fixed) */}
                <Link href="/cart" className='relative flex-shrink-0 ml-3 cursor-pointer hover:opacity-80 transition-opacity block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag">
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <span className='absolute -top-1.5 -right-1.5 bg-white text-primary text-[9px] font-bold h-3.5 w-3.5 flex items-center justify-center rounded-sm'>
                        1
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default NavTopBar