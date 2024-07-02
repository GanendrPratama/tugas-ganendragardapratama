import { Title, Text } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
      <Text inherit variant='gradient' component='span' gradient={{ from: 'purple', to: 'pink' }}>
          Beauty
        </Text>
        {' '}
        and{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Elegance
        </Text>
        {' '}
        Redefined
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
      SEA Salon offers haircuts, styling, manicures, pedicures, and rejuvenating facials. Discover beauty and elegance redefined with us! 😊
      </Text>
    </>
  );
}
