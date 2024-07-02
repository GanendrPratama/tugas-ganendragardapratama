import { Button } from "@mantine/core";

export default function goToReview() {
    const gotoReview = () => {
        // Navigate to the review page
        window.location.href = `/review/${pb.authStore.model.id}`;
    };
    return (
        <Button onClick={gotoReview}>Review our stuffs</Button>
    )
}