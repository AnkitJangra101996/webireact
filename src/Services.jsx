import React from 'react';
import Card from './Component/Card';
import Sdata from './Component/Sdata';

function Services(props) {
    return (
        <>
            <section className="ServiceSection pt-4 pb-4">
                <div className="ServiceContainer">
                    <h3 className="text-center" style={{ color: '#FFF'}}>Our <span style={{ color: '#FFF', fontSize:'2rem' }} > Services</span></h3>
                </div>
                <div className="container-fluid mt-4 mb-4">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                {
                                    Sdata.map((val, indx) => {
                                        return (
                                            <Card key={indx} imgsrc={val.imgsrc} title={val.title} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Services
