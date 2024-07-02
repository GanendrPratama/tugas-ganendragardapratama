'use client';

import { Grid, Center, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel'
import { CarouselCard } from '@/components/CarouselCard/CarouselCard';
import { Welcome } from '../components/Welcome/Welcome';
import { DirectionAwareHover } from '@/components/DirectionAwareHover/DirectionAwareHover';
import { ArticleCard } from '@/components/ArticleCard/ArticleCard';

export default function HomePage() {
  return (
    <>
      <Welcome />

      <Title>
        Our Services:
      </Title>

      <Center>
      <Grid>
        <Grid.Col span={4}>
          <ArticleCard />
        </Grid.Col>
        <Grid.Col span={4}>
          <ArticleCard />
        </Grid.Col>
        <Grid.Col span={4}>
          <ArticleCard />
        </Grid.Col>
      </Grid>
      </Center>
    </>
  );
}
