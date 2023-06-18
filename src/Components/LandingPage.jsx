import { useEffect, useState } from 'react'
import './LandingPage.scss'
import { IoIosPartlySunny } from 'react-icons/io'
import axios from 'axios';
import { WiHail } from 'react-icons/wi'


function LandingPage() {

    const [weather, setWeather] = useState('Clouds');
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchWeather = async (latitude, longitude) => {
            try {
                const res = await axios.get(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${latitude}&lon=${longitude}`)

                setWeather(res.data);
                console.log(res);

            } catch (error) {
                console.error('Error fetching weather data:', error);
            } finally {
                setLoading(false);
            }
        }

        function location() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeather(latitude, longitude);
                })
            } else {
                alert('Browser does not support geolocation')
            }
        }

        location();
    }, []);

    return (
        <div className='landing'>
            <div className='text-landing'>
                F<WiHail />rcasting Telling
                <br />
                <div>Weather App</div>

                <div className='info-weather'>
                    {loading ? (
                        <p>Loading...</p>
                    ) : weather ? (
                        <div>
                            <h3>{weather.name}</h3>
                            <p style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>{weather.main.temp} <span>°C</span></p>
                            <p style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>{weather.weather[0].main}</p>
                            <img style={{ display: "flex", alignItems: "center", justifyContent: "center" }} src={weather.weather[0].icon} alt={<IoIosPartlySunny />} />
                        </div>
                    ) : (
                        <p>No weather data available</p>
                    )}
                </div>
            </div>
        </div >
    )
}

export default LandingPage
