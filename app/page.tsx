import { Modal } from './(components)/modal';
import Scene from './model/page'

import { Loading } from './(components)/loading';
import { Navbar } from './(components)/navbar';
import Link from 'next/link';

export const metadata = {
    title: 'Home',
    description: 'EverythingApp',
};

export default function Page() {
    return (
        <main >
            <Navbar />
            <Link className='bg-blue-800 hover:bg-red-800' href="/model">
                model
            </Link>
            <Loading />
        </main>
    )
}