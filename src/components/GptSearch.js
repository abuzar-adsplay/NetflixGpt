import { BG_URL } from '../utils/constants'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10 h-3/6 appearance-none' >
        <img src={BG_URL} alt=""/>
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>      
    </div>
  )
}

export default GptSearch
