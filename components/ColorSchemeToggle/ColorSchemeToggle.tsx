'use client';

import { Switch, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Switch
      size="md"
      color="dark.4"
      checked={colorScheme === 'dark'}
      onChange={toggleColorScheme}
      onLabel="Dark"
      offLabel="Light"
    />
  );
}
