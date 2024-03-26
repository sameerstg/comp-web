import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className='w-full justify-around py-4 px-2'>
            <div>

            </div>
            <div className='flex items-end justify-end gap-4 text-3xl'>

                <div>Home</div>
                <Link href={'portfolio'}>
                    <div>Portfolio</div>
                </Link>
                <div>Services</div>
                <div>About Us</div>
            </div>

        </div>
    )
}

export default Navbar