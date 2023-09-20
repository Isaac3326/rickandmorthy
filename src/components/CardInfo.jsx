import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import '../assets/styles/cardInfo.css'

const CardInfo = ({ urlResident }) => {
    const [resident, getResident] = useFetch(urlResident)

    useEffect(() => {
        getResident()
    }, [])

    return (
        
            <article className='card'>
                <div className='card__header'>
                    <p className='card__status'> <span className='status__resident'></span>  {resident?.status}</p>
                    <img src={resident?.image} className='card__img' alt="" />
                </div>
                <div className='card__spec'>
                    <h2 className='card__name'>{resident?.name}</h2>
                    <p className='card__specie parrafo'>Specie</p>
                    <h2 className='card__spec__name'>{resident?.species}</h2>
                    <p className='parrafo'>Origin</p>
                    <h2>{resident?.origin.name}</h2>
                    <p className='parrafo'>Eppisodes where appear</p>
                    <h2>{resident?.episode.length}</h2>
                </div>
            </article>

        

    )
}

export default CardInfo