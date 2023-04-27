import React, { useContext, useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import formContext from '../../context/FormContext';
const Home = () => {
    const navigate = useNavigate();
    const context = useContext(formContext);
    const { mode, setMode, dist, setDist } = context;

    const handleSubmit = () => {
        console.log(mode)
        console.log(dist)
        navigate('/modechoice')
    }
    const onModeChange = (e) => {
        setMode(e.target.value);
    }
    const onDistChange = (e) => {
        setDist(e.target.value);
    }
    return (
        <div>
            <div className="home">


                <h2>Respondent Travel profile</h2>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        All questions are compulsary
                        <div className="questions">
                            <ul>
                                <li className='que'>
                                    Q1: <div className="ques">    What is your most frequently used means of travel from your home to work location?
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="opt">
                                                <input type="radio" value={"Bus"} checked={mode == "Bus"} onChange={onModeChange} className='radiobtn' />  <div className="option">Bus</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="opt">
                                                <input type="radio" value={"Metro"} checked={mode == "Metro"} onChange={onModeChange} className='radiobtn' /><div className="option">Metro</div>

                                            </div>
                                        </li>
                                        <li>
                                            <div className="opt">

                                                <input type="radio" value={"Own Two-wheeler"} checked={mode == "Own Two-wheeler"} onChange={onModeChange} className='radiobtn' /><div className="option">Own Two-wheeler</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="opt">
                                                <input type="radio" value={"Own Car"} checked={mode == "Own Car"} onChange={onModeChange} className='radiobtn' /><div className="option">Own Car</div>

                                            </div>
                                        </li>
                                        <li>
                                            <div className="opt">
                                                <input type="radio" value={"Walk / Bicycle"} checked={mode == "Walk / Bicycle"} onChange={onModeChange} className='radiobtn' /><div className="option">Walk / Bicycle</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="opt">
                                                <input type="radio" value={"Auto"} checked={mode == "Auto"} onChange={onModeChange} className='radiobtn' /><div className="option">Auto</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="opt">
                                                <input type="radio" value={"App based ride hailing cab services including Ola / Uber"} checked={mode == "App based ride hailing cab services including Ola / Uber"} onChange={onModeChange} className='radiobtn' /><div className="option"> <p className='op'> App based ride hailing cab services including Ola / Uber
                                                </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul>
                                <li className='que'>
                                    Q2: <div className="ques">   What is the total distance between your home and workplace? </div>
                                    <ul>
                                        <li>
                                            <div className="opt">
                                                <input type="radio" value={"< 5 km"} checked={dist == "< 5 km"} onChange={onDistChange} className='radiobtn' />  <div className="option">&lt; 5 km</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="opt">
                                                <input type="radio" value={"5 - 10 km"} checked={dist == "5 - 10 km"} onChange={onDistChange} className='radiobtn' /><div className="option">5 - 10 km</div>

                                            </div>
                                        </li>
                                        <li>
                                            <div className="opt">

                                                <input type="radio" value={"10- 15 km"} checked={dist == "10- 15 km"} onChange={onDistChange} className='radiobtn' /><div className="option">10- 15 km</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="opt">
                                                <input type="radio" value={"15- 20 km"} checked={dist == "15- 20 km"} onChange={onDistChange} className='radiobtn' /><div className="option">15- 20 km</div>

                                            </div>
                                        </li>
                                        <li>
                                            <div className="opt">
                                                <input type="radio" value={"20- 25 km"} checked={dist == "20- 25 km"} onChange={onDistChange} className='radiobtn' /><div className="option">20- 25 km</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="opt">
                                                <input type="radio" value={"> 25 km"} checked={dist == "> 25 km"} onChange={onDistChange} className='radiobtn' /><div className="option">&gt; 25 km</div>
                                            </div>
                                        </li>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='sub-btn'>
                            <button disabled={!(mode && dist)} className='btn' type='submit' >Submit</button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    )
}

export default Home