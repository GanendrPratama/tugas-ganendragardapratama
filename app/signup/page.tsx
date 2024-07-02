import { Center, Title } from '@mantine/core';
import SignInForm from '@/components/SignInForm/SignInForm';

export default function HomePage() {
    return (
        <>
        <Center>
            <Title>
                Join Us!
            </Title>
        </Center>

        <SignInForm />
        </>
    );
}
