import { logoutAccount } from '@/lib/actions/user.actions'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
    const router = useRouter()

    const handleLogout = async () => {
        const loggedOut = await logoutAccount()

        if(loggedOut) router.push('/sign-in')
    }
    return (
        <footer className='footer'>
            <div className={type === 'mobile' ? 'footer-name-mobile' : 'footer-name'}>
                <p className='text-xl font-bold text-gray-700'>
                    {user?.name}
                </p>
            </div>
            <div className={type === 'mobile' ? 'footer-email-mobile' : 'footer-email'}>
                <h1 className='text-14 truncate font-semibold text-gray-700'>{user?.name}</h1>
                <p className='text-14 truncate font-normal text-gray-600'>{user?.email}</p>
            </div>
            <div className='footer-image' onClick={handleLogout}>
                <Image
                    src='/icons/logout.svg'
                    fill
                    alt='logout'
                />
            </div>
        </footer>
    )
}

export default Footer