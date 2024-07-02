import PocketBase from 'pocketbase';
import { Center, Grid, Text, Title, Button } from '@mantine/core';
import classes from './page.module.css';
import goToReview from '@/components/GoToReviews/GoToReviews';

const pb = new PocketBase('http://127.0.0.1:8090');

async function getUser(id: string) {
    try {
        const user = await pb.collection('seaSalonUsers').getOne(id, {
            expand: 'relField1,relField2.subRelField',
        });
        return user;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        return null;
    }
}

interface DashboardPageProps {
    params: {
        id: string;
    };
}

export default async function DashboardPage({ params }: DashboardPageProps) {
    const user = await getUser(params.id);

    if (!user) {
        // Handle not found case here (e.g., show an error message)
        return <div>User not found</div>;
    }

    return (
        <div>
            <Center>
                <Title className={classes.title} ta="center" mt={100}>
                    <Text inherit variant="gradient" component="span" gradient={{ from: 'purple', to: 'pink' }}>
                        Welcome {user.username}
                    </Text>{' '}
                    <Text inherit variant="gradient" component="span" gradient={{ from: 'purple', to: 'pink' }}>
                        What's your plan today?
                    </Text>
                </Title>
            </Center>

            <Grid>
                <goToReview />
            </Grid>
        </div>
    );
}
