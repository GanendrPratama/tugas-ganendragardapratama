'use client';

import { Center, Title } from '@mantine/core';
import React from 'react';
import LogInForm from '../../components/logInForm/logInForm';

export default function loginPage() {
    return (
        <>
            <Center>
                <Title>
                    Welcome to SeaSalon!
                </Title>
            </Center>

            <LogInForm />
        </>
    )
}