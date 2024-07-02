import PocketBase from 'pocketbase';
import { useForm, isEmail, hasLength } from '@mantine/form';
import { PasswordInput, TextInput, Button, Group } from '@mantine/core';
import React from 'react';

export default function LogInForm() {
  const pb = new PocketBase('http://127.0.0.1:8090');

  const logInForm = useForm({
    initialValues: {
      email: '',
      userPw: '',
    },
    validate: {
      email: isEmail('Invalid email'),
      userPw: hasLength({ min: 6 }, 'Invalid password'),
    },
  });

  const authUser = async (values) => {
    try {
      const authData = await pb.collection('seaSalonUsers').authWithPassword(
        values.email,
        values.userPw
      );

      console.log(pb.authStore.isValid);
      console.log(pb.authStore.token);
      console.log(pb.authStore.model.id);

      window.location.href = `/dashboard/${pb.authStore.model.id}`;
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  return (
    <form onSubmit={logInForm.onSubmit(authUser)}>
      <TextInput
        label="Your email"
        placeholder="Your email"
        {...logInForm.getInputProps('email')}
        withAsterisk
        mt="md"
      />

      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        description="Must include at least six characters long"
        required
        {...logInForm.getInputProps('userPw')}
      />

      <Group position="center" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
