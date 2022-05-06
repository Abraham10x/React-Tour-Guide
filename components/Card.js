import React from 'react'

export default function Card (props) {
    console.log(props)
    return (
        <div className='card'>
            <img className='card--img' src={props.imageUrl}/>
            <div className='card--info'>
                <div className='card--location-info'>
                    <img className='location-icon' src="./images/location-icon.svg"/>
                    <p className='country'>{props.location}</p>
                    <a className='country-link' href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className='card--title'>{props.title}</h1>
                <h4 className='card--date'>{props.startDate} - {props.endDate}</h4>
                <p className='card--description'>{props.description}
                </p>        
            </div>
        </div>
    )
}