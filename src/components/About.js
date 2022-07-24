import React from 'react'
// import {useState} from 'react'
import img from './imgs/img.jpg'

export default function About({ mode }) {

    // const [mode, setMode] = useState('Dark Mode');
    // const [darkStyle, setdarkStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const handleDarkWhiteClick = () => {
    //     if(mode === 'Light Mode'){
    //         setdarkStyle({color: 'black', backgroundColor: 'white'});
    //         setMode('Dark Mode');
    //     }else {
    //         setdarkStyle({color: 'white', backgroundColor: 'black'});
    //         setMode('Light Mode');
    //     }
    // }

    let darkStyle = {
        color: mode!=='light'?'white':'black',
        backgroundColor: mode!=='light'?'hwb(222deg 10% 46%)':'white',
    }

    return (
        <div>
            <div className="card" style={darkStyle}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3 my-2">
                            <div className="card h-100">
                                <div className="card-body">
                                    <img src={img} style={{width: '100%', height: '100%'}} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 my-2">
                            <h2>Bhavanshu Dalwadi</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis non nostrum hic quod nemo veritatis quaerat labore neque placeat qui quasi incidunt suscipit minima, ab ea et ullam consequatur vel porro alias doloremque eveniet! Aspernatur dolor quae optio iste itaque ab explicabo quos, libero delectus id repudiandae dolore tenetur accusantium vitae amet minima consectetur expedita ex, nulla qui. Labore, magnam? Cum modi inventore dignissimos in architecto maxime ab laudantium, a ipsam obcaecati tempora rem blanditiis? Nemo architecto quisquam, similique in ipsa saepe commodi animi, sunt nobis neque cum consectetur fugit non nesciunt sit iure quasi, tempore debitis? Quis, harum accusantium?</p>
                            {/* <button className="btn btn-primary mt-3" onClick={handleDarkWhiteClick}>{mode}</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
