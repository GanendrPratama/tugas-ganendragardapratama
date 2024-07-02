'use client'
import { Button } from '@mantine/core';
import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';
import React from 'react';

const pb = new PocketBase('http://127.0.0.1:8090');

export default function DashboardButton () {
    const router = useRouter();
    return (
        <>
            <Button variant="default" onClick={() => router.push(`/dashboard/${pb.authStore.model.id}`)}>Dashboard</Button>
        </>
    );
}
