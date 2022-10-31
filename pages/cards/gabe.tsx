import Link from 'next/link';
import Image from 'next/image';
import gabePic from '../../public/images/gabe.jpg';

export default function gabe() {
    return (
        <>
            <h1>Gabe Corsini</h1>
            <Image src={gabePic} alt="Gabe Corsini" width={300} height={300}/>
            <Link href="/">Home</Link>
        </>
    );
}
