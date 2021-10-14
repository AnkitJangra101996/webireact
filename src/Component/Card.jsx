import React from 'react'

function Card(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card shadow-sm">
                    <img src={props.imgsrc} className="card-img-top" alt="..." width="100%" className="px-3 pt-3" />
                    <div className="card-body">
                        <h4 className="card-text text-center">{props.title}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
