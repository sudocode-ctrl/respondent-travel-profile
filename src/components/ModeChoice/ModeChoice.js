import React, { useEffect, useContext, useState } from 'react'
import sample_db_0km from '../../db_JSON/sample_db_0km.json'
import sample_db_5km from '../../db_JSON/sample_db_5km.json'
import sample_db_10km from '../../db_JSON/sample_db_10km.json'
import sample_db_15km from '../../db_JSON/sample_db_15km.json'
import sample_db_20km from '../../db_JSON/sample_db_20km.json'
import sample_db_25km from '../../db_JSON/sample_db_25km.json'
import { useNavigate } from 'react-router-dom'
import formContext from '../../context/FormContext'
import './ModeChoice.css'
import bus_icon from '../../images/busicon.jfif';
import bus_icon2 from '../../images/busicon2.png';
import car_icon from '../../images/car_icon.png';
import cab_icon from '../../images/cab_icon.png';
import crowd_icon from '../../images/crowd_icon.png';
import delay_icon from '../../images/delay_icon.png';
import nonac_icon from '../../images/nonac-icon.jfif';
import seats_icon from '../../images/seats_icon.png';
import train_icon from '../../images/train_icon.png';
import ac_icon from '../../images/ac_seat_icon.jfif';
import std_icon from '../../images/std_icon.jfif';
import ord_icon from '../../images/ord_icon.png';
import some_seats from '../../images/some_seats.png';
const ModeChoice = () => {
    const navigate = useNavigate();
    const context = useContext(formContext);
    const { mode, setMode, dist, setDist } = context;
    var tempdata;
    const [data, setData] = useState({});
    useEffect(() => {
        console.log(dist)
        if (dist == "< 5 km") {

            setData(sample_db_0km)

        }
        else if (dist == "5 - 10 km") {

            setData(sample_db_5km)
        }
        else if (dist == "10- 15 km") {

            setData(sample_db_10km)
        }
        else if (dist == "15- 20 km") {

            setData(sample_db_15km)
        }
        else if (dist == "20- 25 km") {

            setData(sample_db_20km)
        }
        else if (dist == "> 25 km") {

            setData(sample_db_25km)
        }
        // console.log(data.Data[0])



    })

    useEffect(() => {
        console.log(data)
        console.log(tempdata)
    }, [data])


    return (
        <div className='home'>
            <div className="title">
                Mode Choice
            </div>
            {data.Data && <div className="tab">
                <table>
                    <tbody>
                        <tr className='first'>

                            <td className="oneone one">
                                Bus Route 1
                                <div>
                                    <input type="radio" />
                                </div>
                            </td>
                            <td className="onetwo two">
                                Bus Route 2
                                <div>
                                    <input type="radio" />
                                </div>
                            </td>
                            <td className="onethree three">
                                {dist != "< 5 km" ? "Metro" : "Walk / Bicycle"}
                                <div>
                                    <input type="radio" />
                                </div>
                            </td>
                            <td className="onefour four">
                                {mode == "Own Two-wheeler" ? "Own Two-wheeler" : "Own Car"}
                                <div>
                                    <input type="radio" />
                                </div>
                            </td>
                            <td className="onefive five">
                                {mode == "Auto" ? "Auto" : "Ola / Uber car"}
                                <div>
                                    <input type="radio" />
                                </div>
                            </td>
                        </tr>


                        <tr className="second">
                            <td className='second' colSpan={5}>Total travel time spent while inside the vehicle(s)</td>
                        </tr>

                        <tr className="third">


                            <td className="threeone one">
                                {(data.Data[0]["mode_1.trans"] ? data.Data[0]["mode_1.trans"] : "")
                                    && <span className='trans'> <img className="icon" src={bus_icon} alt="" /> -&gt;{(data.Data[0]["mode_1.trans"] ? data.Data[0]["mode_1.trans"] : "")}-&gt;</span>}

                                <img className="icon" src={bus_icon} alt="" />


                                <div>{data.Data[0]["mode_1.ivtt"]} min</div>
                            </td>
                            <td className="threetwo two">
                                {(data.Data[0]["mode_2.trans"] ? data.Data[0]["mode_2.trans"] : "")
                                    && <span className='trans'> <img className="icon" src={bus_icon2} alt="" /> -&gt;{(data.Data[0]["mode_1.trans"] ? data.Data[0]["mode_1.trans"] : "")} -&gt;</span>}


                                <img className="icon" src={bus_icon2} alt="" />
                                <div>{data.Data[0]["mode_2.ivtt"]} min</div>
                            </td>
                            <td className="threethree three">
                                {(data.Data[0]["mode_3.trans"] ? data.Data[0]["mode_3.trans"] : (data.Data[0]["mode_4.trans"] ? data.Data[0]["mode_4.trans"] : "")) && <span><img className="icon" src={train_icon} alt="" /> -&gt; {(data.Data[0]["mode_3.trans"] ? data.Data[0]["mode_3.trans"] : (data.Data[0]["mode_4.trans"] ? data.Data[0]["mode_4.trans"] : ""))} -&gt;</span>}
                                <img className="icon" src={train_icon} alt="" />
                                <div>{data.Data[0]["mode_3.ivtt"] ? data.Data[0]["mode_3.ivtt"] : data.Data[0]["mode_4.ivtt"]} min</div>
                            </td>
                            <td className="threefour four">
                                {(mode == "Own Two-wheeler" ? (data.Data[0]["mode_9.trans"] ? data.Data[0]["mode_9.trans"] : "") : (data.Data[0]["mode_8.trans"] ? data.Data[0]["mode_8.trans"] : "")) && <span><img className="icon" src={car_icon} alt="" /> -&gt; {(mode == "Own Two-wheeler" ? (data.Data[0]["mode_9.trans"] ? data.Data[0]["mode_9.trans"] : "") : (data.Data[0]["mode_8.trans"] ? data.Data[0]["mode_8.trans"] : ""))}-&gt; </span>}
                                <img className="icon" src={car_icon} alt="" />
                                <div>{mode == "Own Two-wheeler" ? data.Data[0]["mode_9.ivtt"] : data.Data[0]["mode_8.ivtt"]} min</div>
                            </td>
                            <td className="threefive five">
                                {(mode == "Auto" ? (data.Data[0]["mode_7.trans"] ? data.Data[0]["mode_7.trans"] : "") : (data.Data[0]["mode_6.trans"] ? data.Data[0]["mode_6.trans"] : "")) && <span><img className="icon" src={cab_icon} alt="" /> -&gt; {(mode == "Auto" ? (data.Data[0]["mode_7.trans"] ? data.Data[0]["mode_7.trans"] : "") : (data.Data[0]["mode_6.trans"] ? data.Data[0]["mode_6.trans"] : ""))}-&gt;</span>}
                                <img className="icon" src={cab_icon} alt="" />
                                <div>{mode == "Auto" ? data.Data[0]["mode_7.ivtt"] : data.Data[0]["mode_6.ivtt"]} min</div>
                            </td>
                        </tr>
                        <tr className="second">
                            <td className='second' colSpan={5}>Total travel time spent outside  the vehicle(s)</td>
                        </tr>
                        <tr className="fourth">

                            <td className="fourone one">

                                <div>{(data.Data[0]["mode_1.walktime"]) + (data.Data[0]["mode_1.waittime"])} min</div>
                            </td>
                            <td className="fourtwo two">

                                <div>{(data.Data[0]["mode_2.walktime"]) + (data.Data[0]["mode_2.waittime"])} min</div>
                            </td>
                            <td className="fourthree three">

                                <div>{(data.Data[0]["mode_3.walktime"] ? data.Data[0]["mode_3.walktime"] : data.Data[0]["mode_4.walktime"]) + (data.Data[0]["mode_3.waittime"] ? data.Data[0]["mode_3.waittime"] : data.Data[0]["mode_4.waittime"])} min</div>
                            </td>
                            <td className="fourfour four">

                                <div>{(mode == "Own Two-wheeler" ? data.Data[0]["mode_9.waittime"] : data.Data[0]["mode_8.waittime"]) + (mode == "Own Two-wheeler" ? data.Data[0]["mode_9.waittime"] : data.Data[0]["mode_8.waittime"])} min</div>
                            </td>
                            <td className="fourfive five">

                                <div>{(mode == "Auto" ? data.Data[0]["mode_7.walktime"] : data.Data[0]["mode_6.walktime"]) + (mode == "Auto" ? data.Data[0]["mode_7.waittime"] : data.Data[0]["mode_6.waittime"])} min</div>
                            </td>
                        </tr>
                        <tr className="second">
                            <td className='second' colSpan={5}>Possible delay due to traffic congestion or other uncertainties</td>
                        </tr>
                        <tr className="fifth">

                            <td className="fiveone one">
                                {(data.Data[0]["mode_1.tvariab"]) >= 5 ? <img className="icon" src={delay_icon} alt="" /> : ""}
                                <div>... up to {(data.Data[0]["mode_1.tvariab"])} min more</div>
                            </td>
                            <td className="fivetwo two">
                                {(data.Data[0]["mode_2.tvariab"]) >= 5 ? <img className="icon" src={delay_icon} alt="" /> : ""}
                                <div>... up to {(data.Data[0]["mode_2.tvariab"])} min more</div>
                            </td>
                            <td className="fivethree three">
                                {(data.Data[0]["mode_3.tvariab"] ? data.Data[0]["mode_3.tvariab"] : data.Data[0]["mode_4.tvariab"]) >= 5 ? <img className="icon" src={delay_icon} alt="" /> : ""}
                                <div>... up to {(data.Data[0]["mode_3.tvariab"] ? data.Data[0]["mode_3.tvariab"] : data.Data[0]["mode_4.tvariab"])} min more</div>
                            </td>
                            <td className="fivefour four">
                                {(mode == "Own Two-wheeler" ? data.Data[0]["mode_9.tvariab"] : data.Data[0]["mode_8.tvariab"]) >= 5 ? <img className="icon" src={delay_icon} alt="" /> : ""}
                                <div>... up to {(mode == "Own Two-wheeler" ? data.Data[0]["mode_9.tvariab"] : data.Data[0]["mode_8.tvariab"])} min more</div>
                            </td>
                            <td className="fivefive five">
                                {(mode == "Auto" ? data.Data[0]["mode_7.tvariab"] : data.Data[0]["mode_6.tvariab"]) >= 5 ? <img className="icon" src={delay_icon} alt="" /> : ""}
                                <div>... up to {(mode == "Auto" ? data.Data[0]["mode_7.tvariab"] : data.Data[0]["mode_6.tvariab"])} min more</div>
                            </td>
                        </tr>
                        <tr className="second">
                            <td className='second' colSpan={5}>Total one-way cost of travels</td>
                        </tr>
                        <tr className="sixth">

                            <td className="sixone one">

                                <div>Rs {(data.Data[0]["mode_1.tcost"])} </div>
                            </td>
                            <td className="sixtwo two">

                                <div>Rs {(data.Data[0]["mode_2.tcost"])} </div>
                            </td>
                            <td className="sixthree three">

                                <div>Rs {(data.Data[0]["mode_3.tcost"] ? data.Data[0]["mode_3.tcost"] : data.Data[0]["mode_4.tcost"])} </div>
                            </td>
                            <td className="sixfour four">

                                <div>Rs {mode == "Own Two-wheeler" ? data.Data[0]["mode_9.tcost"] : data.Data[0]["mode_8.tcost"]} </div>
                            </td>
                            <td className="sixfive five">

                                <div>Rs {(mode == "Auto" ? data.Data[0]["mode_7.tcost"] : data.Data[0]["mode_6.tcost"])} </div>
                            </td>
                        </tr>
                        <tr className="second">
                            <td className='second' colSpan={5}>Extent of Crowding in the vehicle</td>
                        </tr>
                        <tr className="seventh">

                            <td className="sevenone one">
                                {(data.Data[0]["mode_1.crowd"]) == 1 ? <img className="icon" src={seats_icon} alt="" /> : (data.Data[0]["mode_1.crowd"]) == 2 ? <img className="icon" src={some_seats} alt="" /> : (data.Data[0]["mode_1.crowd"]) == 3 ? <> <img className="icon" src={some_seats} alt="" />  <img className="icon" src={std_icon} alt="" /> </> : (data.Data[0]["mode_1.crowd"]) == 4 ? <> <img className="icon" src={some_seats} alt="" />  <img className="icon" src={std_icon} alt="" />  <img className="icon" src={std_icon} alt="" />  <img className="icon" src={std_icon} alt="" /> </> : ""}
                                <div>{(data.Data[0]["mode_1.crowd"]) == 1 ? "Many seats are available" : (data.Data[0]["mode_1.crowd"]) == 2 ? "Some seats are available" : (data.Data[0]["mode_1.crowd"]) == 3 ? "Seats are full space for standing available" : (data.Data[0]["mode_1.crowd"]) == 4 ? "Fully crowded or packed" : ""} </div>
                            </td>
                            <td className="seventwo two">
                                {(data.Data[0]["mode_2.crowd"]) == 1 ? <img className="icon" src={seats_icon} alt="" /> : (data.Data[0]["mode_2.crowd"]) == 2 ? <img className="icon" src={some_seats} alt="" /> : (data.Data[0]["mode_2.crowd"]) == 3 ? <> <img className="icon" src={some_seats} alt="" />  <img className="icon" src={std_icon} alt="" /> </> : (data.Data[0]["mode_2.crowd"]) == 4 ? <> <img className="icon" src={some_seats} alt="" />  <img className="icon" src={std_icon} alt="" />  <img className="icon" src={std_icon} alt="" />  <img className="icon" src={std_icon} alt="" /> </> : ""}
                                <div>{(data.Data[0]["mode_2.crowd"]) == 1 ? "Many seats are available" : (data.Data[0]["mode_2.crowd"]) == 2 ? "Some seats are available" : (data.Data[0]["mode_2.crowd"]) == 3 ? "Seats are full space for standing available" : (data.Data[0]["mode_2.crowd"]) == 4 ? "Fully Crowded or packed" : ""} </div>
                            </td>
                            <td className="seventhree three">
                                {(data.Data[0]["mode_3.crowd"] ? data.Data[0]["mode_3.crowd"] : data.Data[0]["mode_4.crowd"]) == 1 ? <img className="icon" src={seats_icon} alt="" /> : (data.Data[0]["mode_3.crowd"] ? data.Data[0]["mode_3.crowd"] : data.Data[0]["mode_4.crowd"]) == 2 ? <img className="icon" src={some_seats} alt="" /> : (data.Data[0]["mode_3.crowd"] ? data.Data[0]["mode_3.crowd"] : data.Data[0]["mode_4.crowd"]) == 3 ? <> <img className="icon" src={some_seats} alt="" />  <img className="icon" src={std_icon} alt="" /> </> : (data.Data[0]["mode_3.crowd"] ? data.Data[0]["mode_3.crowd"] : data.Data[0]["mode_4.crowd"]) == 4 ? <> <img className="icon" src={some_seats} alt="" />  <img className="icon" src={std_icon} alt="" />  <img className="icon" src={std_icon} alt="" />  <img className="icon" src={std_icon} alt="" /> </> : ""}
                                <div> {(data.Data[0]["mode_3.crowd"] ? data.Data[0]["mode_3.crowd"] : data.Data[0]["mode_4.crowd"]) == 1 ? "Many seats are available" : (data.Data[0]["mode_3.crowd"] ? data.Data[0]["mode_3.crowd"] : data.Data[0]["mode_4.crowd"]) == 2 ? "Some seats are available" : (data.Data[0]["mode_3.crowd"] ? data.Data[0]["mode_3.crowd"] : data.Data[0]["mode_4.crowd"]) == 3 ? "Seats are full space for standing available" : (data.Data[0]["mode_3.crowd"] ? data.Data[0]["mode_3.crowd"] : data.Data[0]["mode_4.crowd"]) == 4 ? "Fully Crowded or packed" : ""} </div>
                            </td>
                            <td className="sevenfour four">


                            </td>
                            <td className="sevenfive five">


                            </td>
                        </tr>
                        <tr className="second">
                            <td className='second' colSpan={5}>Service type</td>
                        </tr>

                        <tr className="eigth">

                            <td className="eightone one">
                                {(data.Data[0]["mode_1.serv"]) == 1 ? <img className="icon" src={ord_icon} alt="" /> : (data.Data[0]["mode_1.serv"]) == 2 ? <img className="icon" src={nonac_icon} alt="" /> : (data.Data[0]["mode_1.serv"]) == 3 ? <img className="icon" src={ac_icon} alt="" /> : ""}
                                <div>{(data.Data[0]["mode_1.serv"]) == 1 ? "Ordinary" : (data.Data[0]["mode_1.serv"]) == 2 ? "Express Non AC" : (data.Data[0]["mode_1.serv"]) == 3 ? "Express AC" : ""} </div>
                            </td>
                            <td className="eighttwo two">
                                {(data.Data[0]["mode_2.serv"]) == 1 ? <img className="icon" src={ord_icon} alt="" /> : (data.Data[0]["mode_2.serv"]) == 2 ? <img className="icon" src={nonac_icon} alt="" /> : (data.Data[0]["mode_2.serv"]) == 3 ? <img className="icon" src={ac_icon} alt="" /> : ""}
                                <div>{(data.Data[0]["mode_2.serv"]) == 1 ? "Ordinary" : (data.Data[0]["mode_2.serv"]) == 2 ? "Express Non AC" : (data.Data[0]["mode_2.serv"]) == 3 ? "Express AC" : ""} </div>
                            </td>
                            <td className="eightthree three">
                                {(data.Data[0]["mode_3.serv"] ? data.Data[0]["mode_3.crowd"] : data.Data[0]["mode_4.crowd"]) == 1 ? <img className="icon" src={ord_icon} alt="" /> : (data.Data[0]["mode_3.serv"] ? data.Data[0]["mode_3.crowd"] : data.Data[0]["mode_4.crowd"]) == 2 ? <img className="icon" src={nonac_icon} alt="" /> : (data.Data[0]["mode_3.serv"] ? data.Data[0]["mode_3.crowd"] : data.Data[0]["mode_4.crowd"]) == 3 ? <img className="icon" src={ac_icon} alt="" /> : ""}
                                <div> {(data.Data[0]["mode_3.serv"] ? data.Data[0]["mode_3.crowd"] : data.Data[0]["mode_4.crowd"]) == 1 ? "Ordinary" : (data.Data[0]["mode_3.serv"] ? data.Data[0]["mode_3.crowd"] : data.Data[0]["mode_4.crowd"]) == 2 ? "Express Non AC" : (data.Data[0]["mode_3.serv"] ? data.Data[0]["mode_3.crowd"] : data.Data[0]["mode_4.crowd"]) == 3 ? "Express AC" : ""} </div>
                            </td>
                            <td className="eightfour four">


                            </td>
                            <td className="eightfive five">


                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>}
        </div>
    )
}

export default ModeChoice