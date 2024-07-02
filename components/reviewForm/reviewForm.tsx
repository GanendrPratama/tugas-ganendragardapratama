'use client';

import PocketBase from 'pocketbase';
import { useForm } from '@mantine/form'; // Import useForm from Mantine
import { Select, TextInput, Button, Group } from '@mantine/core';
import React from 'react';

const pb = new PocketBase('http://127.0.0.1:8090');

export default function ReviewForm() {

    const addReview = async (values) => {
        try {
            const review = {
                "username": values.username,
                "comments": values.comments,
                "rating": values.rating,
            }
            const add = await pb.collection('reviews').create(review)
            console.log('Form submitted:', values);
            window.location.href = `/review/${pb.authStore.model.id}/reviewSuccess`
        } catch (error) {
            console.error('Failed to send review:', error);
        }
    }

    const reviewForm = useForm({
        initialValues: {
            username: '',
            comments: '',
            rating: '',
        },
    });

    return (
        <form onSubmit={reviewForm.onSubmit(addReview)}>
            <TextInput
                label="Your name"
                placeholder="Your name"
                {...reviewForm.getInputProps('username')}
                withAsterisk
                mt="md"
            />

            <Select
                label="Review"
                placeholder="Pick from one to five"
                {...reviewForm.getInputProps('rating')}
                data={['1', '2', '3', '4', '5']}
                mt="md"
            />

            <TextInput
                label="Comments"
                placeholder="Add comments"
                {...reviewForm.getInputProps('comments')}
                mt="md"
            />

            <Group position="center" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </form>
    );
}
