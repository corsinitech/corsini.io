import Link from 'next/link';
import Image from 'next/image';
import andrewPic from '../../public/images/andrew.jpg';

export default function andrew() {
    return (
        <>
            <h1>Andrew Corsini</h1>
            <Image src={andrewPic} alt="Andrew Corsini" width={300} height={300} />
            <Link href="/">Home</Link>
        </>
    );
} 
