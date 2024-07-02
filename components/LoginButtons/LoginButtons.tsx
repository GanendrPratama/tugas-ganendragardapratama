'use client';

import { Button } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function LoginButtons() {
    const router = useRouter();
    return (
        <>
            <Button variant="default" onClick={() => router.push('/login')}>Log in</Button>
            <Button onClick={() => router.push('/signup')}>Sign up</Button>
        </>
    );
}
