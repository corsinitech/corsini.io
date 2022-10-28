import Link from 'next/link';
import Image from 'next/image'
import React from 'react';

export default function andrew() {
    return (
        <>
            <h1>Andrew Corsini</h1>
            <p>
                <Image src="images/andrew.jpg" alt="andrew Corsini" />
            </p>
            <footer>
                <Link href="/">Home</Link>
            </footer>
        </>
    );
} 