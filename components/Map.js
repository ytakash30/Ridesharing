
import { useEffect, useContext } from 'react'
import mapboxgl from 'mapbox-gl'
// import { UberContext } from '../context/uberContext'

const style = {
  wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = "pk.eyJ1IjoieXRha2FzaDAyIiwiYSI6ImNsdGNycHNtcjFmZzgyanFmM2hubGowbWQifQ.8ShSn1K2WqOVnmaCTNuf3A"

const Map = () => {
//   const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [18.4638768, 73.8376894],
      zoom: 3,
    })
},[])

//     if (pickupCoordinates) {
//       addToMap(map, pickupCoordinates)
//     }

//     if (dropoffCoordinates) {
//       addToMap(map, dropoffCoordinates)
//     }

//     if (pickupCoordinates && dropoffCoordinates) {
//       map.fitBounds([dropoffCoordinates, pickupCoordinates], {
//         padding: 400,
//       })
//     }
//   }, [pickupCoordinates, dropoffCoordinates])

//   const addToMap = (map, coordinates) => {
//     const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
//   }

  return <div className={style.wrapper} id='map' />
}

export default Map
