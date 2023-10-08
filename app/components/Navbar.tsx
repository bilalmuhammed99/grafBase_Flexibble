import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { NavLinks } from '../constans'
import AuthProviders from './AuthProviders'

const Navbar = () => {
    const session = null;
  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href={"/"}>
                <Image src={"/logo.svg"} width={115} height={43} alt='Flexibble'/>
            </Link>
            <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
        </div>
        <div>
           <div className='flexCenter gap-4'>
            { session ? (<>
                UserPhoto
            <Link href="/create-project">
              shareWork
            </Link> </>) :( <AuthProviders/> )}
        </div>
 
        </div>
    </nav>
  )
}

export default Navbar