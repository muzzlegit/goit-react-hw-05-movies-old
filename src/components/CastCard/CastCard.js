import { CastContainer, CastItem, CastImg, CastTitle, CastSubTitle, CastText} from './CastCard.styled';

export default function CastCard({ cast }) {
    return (
        <CastContainer>
            {cast.length !==0 ? (
                cast.map( ({id, name, profile_path, character, popularity}) => {
                    return <CastItem key ={ id }>
                                {profile_path && <CastImg src ={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt ={name}/>}
                                <CastTitle>{ name }</CastTitle>
                                <CastSubTitle>Character:
                                     <CastText>
                                        { character }
                                    </CastText></CastSubTitle>                           
                                <CastSubTitle>Popularity: 
                                     <CastText>
                                         { popularity }
                                    </CastText>
                                </CastSubTitle>
                            </CastItem>
                }))
                : (<p>We haven't had any casts yet</p>)}
        </CastContainer>

    )
}
