import React, { useState, useEffect} from 'react'
import { Grid, CssBaseline } from '@material-ui/core'

import {getPlaceData} from './api/index'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

const App = () => {
      const [places, setPlaces] = useState([])
      const [coordinates, setCoordinates] = useState({})
      const [bounds, setBounds] = useState({})


      useEffect(()=>{
            navigator.geolocation.getCurrentPosition(({coords :{ latitude, longitude}})=>{
                  setCoordinates({ lat:latitude , lng:longitude})
            })
      },[])

      useEffect(() => {
          getPlaceData(bounds.ne, bounds.sw).then((data)=>{
                console.log("bounsds:::",bounds)
                setPlaces(data)
                console.log("PLACESSS APP,js:::",places)
          })

      }, [coordinates,bounds])
      return (
            <>
                  <CssBaseline />
                  <Header />
                  <Grid container spacing={3} style={{ widows: '100%' }}>
                        <Grid item xs={12} md={4}>
                              <List places={places} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                              <Map 
                                    setCoordinates ={setCoordinates}
                                    setBounds={setBounds}
                                    coordinates={coordinates}
                              />
                        </Grid>
                  </Grid>
            </>
      )
}

export default App
