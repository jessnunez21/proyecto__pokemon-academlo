import axios from "axios";
import { useState } from "react";
import { useNavigate} from "react-router-dom";



const useFetch = (url)=>{

    const [infoApi, setInfoApi] = useState()
const [hasError, setHasError] = useState(false)

const navigate = useNavigate()
    const getApi  = ()=>{
        axios.get(url)
        .then(res => {setInfoApi(res.data)
            setHasError(false)
        })
        .catch(error => {setHasError(true)
        
            // setTimeout(() => {
            //     setHasError(false)
            //      navigate(`/pokedex`)
            // }, 3000);
        })
    }
   
    return [infoApi, getApi, hasError, setInfoApi]
}
export default useFetch