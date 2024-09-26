import React from 'react'

const SingleMediaCard = ({ el, imageSrc }) => {
    return (
        <div key={el.id} >
            <img
                style={{ height: "320px", width: "220px" }}
                src={imageSrc}
                alt="movieImage"
            />
            <h3> {el.original_title || el.name}</h3>
            <p>{el.release_date || el.first_air_date}</p>
        </div >
    )
}

export default SingleMediaCard
