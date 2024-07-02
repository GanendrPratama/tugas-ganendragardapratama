'use client';

import React, { useEffect, useState } from 'react';
import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  import { MantineLogo } from '@mantinex/mantine-logo';
  import { useDisclosure } from '@mantine/hooks';
  import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
  } from '@tabler/icons-react';
  import { useRouter } from 'next/navigation';
  import PocketBase from 'pocketbase';
  import classes from './HeaderMegaMenu.module.css';
  import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
  import DashboardButton from '../LoginButtons/DashBoardButton';
  import LoginButtons from '../LoginButtons/LoginButtons';

  const pb = new PocketBase('http://127.0.0.1:8090');

  const mockdata = [
    {
      icon: IconCode,
      title: 'Open source',
      description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
      icon: IconCoin,
      title: 'Free for everyone',
      description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
      icon: IconBook,
      title: 'Documentation',
      description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
      icon: IconFingerprint,
      title: 'Security',
      description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
      icon: IconChartPie3,
      title: 'Analytics',
      description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
      icon: IconNotification,
      title: 'Notifications',
      description: 'Combusken battles with the intensely hot flames it spews',
    },
  ];

  export function HeaderMegaMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthChecked, setIsAuthChecked] = useState(false);
  
    useEffect(() => {
      setIsAuthenticated(pb.authStore.isValid);
      setIsAuthChecked(true);
    }, []);

    const handleLogout = () => {
      pb.authStore.clear();
      setIsAuthenticated(false);
    };
  
    const links = mockdata.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group noWrap align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));
  
    return (
      <Box pb={120}>
        <header className={classes.header}>
          <Group position="apart" h="100%">
            <MantineLogo size={30} />
  
            <div>
              <ColorSchemeToggle />
            </div>
  
            <Group h="100%" spacing={0} display={{ sm: 'flex', xs: 'none' }}>
              <a href="/" className={classes.link}>
                Home
              </a>
            </Group>
  
            <Group display={{ sm: 'flex', xs: 'none' }}>
              {isAuthChecked && (
                isAuthenticated ? (
                  <>
                    <DashboardButton />
                    <Button onClick={handleLogout}>Logout</Button>
                  </>
                ) : (
                  <LoginButtons />
                )
              )}
            </Group>
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} display={{ sm: 'none', xs: 'block' }} />
          </Group>
        </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          display={{ sm: 'none', xs: 'block' }}
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
  
            <a href="/" className={classes.link}>
              Home
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
  
            <Divider my="sm" />
            <Group position="center" grow pb="xl" px="md">
              {isAuthChecked && (
                isAuthenticated ? (
                  <>
                    <DashboardButton />
                    <Button onClick={handleLogout}>Logout</Button>
                  </>
                ) : (
                  <LoginButtons />
                )
              )}
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }