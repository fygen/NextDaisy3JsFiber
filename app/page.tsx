import Loading from './loading';
import { Navbar } from './navbar';
import Link from 'next/link';
import Scene from './model/page'

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