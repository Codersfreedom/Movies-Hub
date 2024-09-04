import { Link } from "react-router-dom"
import { SMALL_IMAGE_PATH } from "../utils/constants"


const Card = ({content}) => {
    
    return (
        <Link to={`/${content.media_type}/${content.id}`} className='flex h-80 w-52 flex-col gap-3 group  '>
            <div className='w-full h-4/5  rounded-lg hover:border-white overflow-hidden '>


                <img className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-125    rounded-md h-full w-full' src={SMALL_IMAGE_PATH + content.poster_path} alt="poster" />


            </div>


            <div>
                {content.title || content.name}

            </div>


        </Link>
    )
}

export default Card
