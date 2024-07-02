'use client';

import React, { useState } from 'react';
import { useForm, hasLength, isEmail } from '@mantine/form';
import { PasswordInput, TextInput, Button, Group } from '@mantine/core';
import PocketBase from 'pocketbase';

export default function SignInForm() {
  const [username, setusername] = useState('');
  const [fullName, setfullName] = useState('');
  const [email, setemail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [userPw, setuserPw] = useState('');

  const pb = new PocketBase('http://127.0.0.1:8090');

  const signUpForm = useForm({
    mode: 'uncontrolled',
    initialValues: {
      userID: '',
      fullName: '',
      email: '',
      phoneNumber: undefined,
      userPw: '',
    },
    validate: {
      userID: hasLength({ min: 5, max: 20 }, 'User ID must be 5-20 characters long'),
      fullName: hasLength({ min: 2 }, 'Full Name must be at least 2 characters long'),
      email: isEmail('Invalid email'),
      phoneNumber: hasLength({ min: 8, max: 15 }, 'Please enter a valid phone number'),
      userPw: hasLength({ min: 6 }, 'Password must be at least 6 characters long'),
    },
  });

  const addUser = async () => {
    try {
      
      const userData = {
        "username": username,
        "email": email,
        "emailVisibility": true,
        "password": userPw,
        "passwordConfirm": userPw,
        "fullName": fullName,
        "phoneNumber": phoneNumber,
        "role": 'User',
      }

      const record = await pb.collection('seaSalonUsers').create(userData);


      // Clear form values
      setusername('');
      setfullName('');
      setemail('');
      setphoneNumber('');
      setuserPw('');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <form onSubmit={addUser}>
      <TextInput
        label="UserID"
        placeholder="User ID"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        withAsterisk
      />
      <TextInput
        label="Full Name"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setfullName(e.target.value)}
        withAsterisk
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        withAsterisk
        mt="md"
      />
      <TextInput
        label="Phone Number"
        placeholder="0123456789"
        value={phoneNumber}
        onChange={(e) => setphoneNumber(e.target.value)}
        withAsterisk
        mt="md"
      />

      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        description="Must include at least six characters long"
        required
        value={userPw}
        onChange={(e) => setuserPw(e.target.value)}
      />

      <Group justify="center" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
