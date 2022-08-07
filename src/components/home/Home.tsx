import react from 'react'
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

import lighthouse from '../../images/lighthouse.jpg';
import './Home.scss';

export const Home = () => {
    const navigate = useNavigate();
    const handleOnClick = () => { navigate('/quiz') }

    return (
        <div className='home'>
            <div className='home__header'>
                <div className='welcome-text'>
                    Portへようこそ！
                </div>
                <img src={lighthouse} className="background-image" alt="lighthouse-image" />
            </div>
            <div className='home__body'>
                <div className='home__body__content'>
                    <Button className='quiz-button' variant="contained" onClick={handleOnClick}>クイズを始める！</Button>
                </div>
                <a className="image-credit" href="https://www.freepik.com/vectors/summer-time">Background image credit: Summer time vector created by rawpixel.com - www.freepik.com</a>
            </div>
        </div>
    )
}