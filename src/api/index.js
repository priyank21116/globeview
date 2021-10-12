import axios from 'axios'
import React from 'react'

const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlaceData =  async (ne,sw) => {


      try {
            const response = await axios.get(URL,{
                  params: {
                    bl_latitude: sw.lat,
                    tr_latitude: ne.lat,
                    bl_longitude: sw.lng,
                    tr_longitude: ne.lng,
                  //   restaurant_tagcategory_standalone: '10591',
                  //   restaurant_tagcategory: '10591',
                  //   limit: '30',
                  //   currency: 'USD',
                  //   open_now: 'false',
                  //   lunit: 'km',
                  //   lang: 'en_US'
                  },
                  headers: {
                    'x-rapidapi-key': '4246a716e8msh288f1cf3412885dp1677d4jsn34f00660fd76',
                    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
                  }
                })
            console.log(" API CALL::::REstaurant list",response)
            const{ data :{data}} = response

            return data

      } catch (error) {
            console.log(error)      
      }
}

export default getPlaceData
