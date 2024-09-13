import React, { useEffect,} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { inValid } from './store/reducer'



const LogoutPage = () => {
    // const [state, setState] = useState(false)
    const navigate = useNavigate()


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(inValid())
        navigate('/')

    }, [])

    return (
        <>
        </>
    )
}

export default LogoutPage

