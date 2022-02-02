import ReviewCard from "../ReviewCard/ReviewCard";
import { ReviewsContainer } from './ReviewsList.styled';
export default function ReviewsList({reviews}) {

    return (
        <>
            <ReviewsContainer>
                <ReviewCard reviews = {reviews}/>
            </ReviewsContainer>
        </>
    )
}
