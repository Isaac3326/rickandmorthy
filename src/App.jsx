import useFetch from './hooks/useFetch.js'
import './App.css'
import { useEffect } from 'react'
import CardInfo from './components/CardInfo.jsx'

function App() {


  const url = 'https://rickandmortyapi.com/api/location/3'
  const [infoLocation, getInfoLocation] = useFetch(url)

  useEffect(() => {
    getInfoLocation()

  }, [])

  return (

    <div className='principal'>
      <img src="../Rick and Morthy.jpg" className='img' alt="" />
      <div className='principal__card'>
        {
          infoLocation?.residents.map(urlResident => (
            <CardInfo
              key={urlResident}
              urlResident={urlResident}
            />
          ))
        }
      </div>
    </div>



  )
}

export default App
