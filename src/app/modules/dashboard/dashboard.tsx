import Card from '@/components/core/card'
import React from 'react'

const DashboardModules = () => {
    const data = [
        {
            title : "Title 1",
            description : "Description 1",
        },
        {
            title : "Title 2",
            description : "Description 2",
        },
        {
            title : "Title 3",
            description : "Description 3",
        },
        {
            title : "Title 4",
            description : "Description 4",
        },
    ]
  return (
    <div>
        {
            data.map((item, index)=>{
                return (
                    <Card key={index} data={item} />
                )
            })
        }
    </div>
  )
}

export default DashboardModules
