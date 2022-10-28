import Link from 'next/link';
import Image from 'next/image'
import React from 'react';

export default function gabe() {
    return (
        <>
            <h1>Gabe Corsini</h1>
            <p>
                <Image src="images/gabe.jpg" alt="Gabe Corsini" />
            </p>
            <footer>
                <Link href="/">Home</Link>
            </footer>
        </>
    );
}