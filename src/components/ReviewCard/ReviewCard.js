export default function ReviewCard({reviews}) {

    return (
        <>
            {reviews.length !==0 ? (
                reviews.map( review => {
                    return <li key ={ review.id }>
                                <h3>{ review.author }</h3>
                                <p>Created at { review.created_at }</p>                           
                                <p>{ review.content }</p>
                            </li>
                }))
                : (<p>We haven't had any reviews yet</p>)}
        </>

    )
}
