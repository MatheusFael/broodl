"use client"
import React from 'react'
import { useAuth } from '@/context/authContext'
import Button from './Button'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


export default function Logout() {
    const { logout, currentUser } = useAuth()
    const pathname = usePathname()
    console.log(pathname) 
    if (!currentUser){
        return null 
    }

    if (pathname === "/") {
        return (
            <Link href="/dashboard">
                <Button text="Go to dashboard" />
            </Link>
        )
    }
   return (
     <Button text="Logout" clickHandler={logout} />
   )
}