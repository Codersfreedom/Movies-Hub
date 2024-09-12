import { Link } from "react-router-dom"
import { SMALL_IMAGE_PATH } from "../utils/constants"


const Card = ({content,type}) => {
    
    return (
        <Link to={`/${type}/${content.id}`} className='flex h-80 w-52 max-sm:h-56 max-sm:w-32 max-sm:gap-2 flex-col gap-3 group pb-3  '>
            <div className='w-full h-4/5  rounded-lg hover:border-white overflow-hidden '>


                <img className='object-cover transition-transform duration-300 ease-in-out group-hover:scale-125    rounded-md h-full w-full' src={SMALL_IMAGE_PATH + content.poster_path} alt="poster" />


            </div>


            <div className="max-sm:text-sm">
                {content.title || content.name}

            </div>


        </Link>
    )
}

export default Card
