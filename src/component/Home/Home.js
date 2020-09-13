import React from 'react';
import Product from '../Product/Product';
import './Home.css';


const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt=""/>
                <div className="home__row">
                    {/* product */}
                    <Product
                        id={1}
                        title='Acer Aspire TC-885-UA92 Desktop, 9th Gen Intel Core i5-9400, 12GB DDR4, 512GB SSD, 8X DVD, 802.11AC Wifi, USB 3.1 Type C, Windows 10 Home, Black'
                        price={29.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/61UgXsi%2BmcL._AC_SL1500_.jpg' 
                        rating={5} />
                    <Product
                        id={2}
                        title='CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-9400F 2.9GHz, NVIDIA GeForce GTX 1660 6GB, 8GB DDR4, 240GB SSD, 1TB HDD, WiFi Ready & Win 10 Home (GXiVR8060A8, Black)'
                        price={20.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/71FdRV1bK9L._AC_SL1500_.jpg' 
                        rating={4} />
                </div>
                <div className="home__row">
                    {/* product */}
                    <Product
                        id={3}
                        title='AmazonBasics Nylon Braided Lightning to USB Cable - MFi Certified Apple iPhone Charger, Dark Gray, 6-Foot'
                        price={10.00} 
                        image='https://images-na.ssl-images-amazon.com/images/I/61Xgh3kNA3L._AC_SL1500_.jpg' 
                        rating={4} />
                    <Product
                        id={4}
                        title='YOKERSU for iPhone Charger, Nylon Braided Lightning Cable Fast Charging 2Pack 6FT Data Sync Transfer Cord with Port Plug Wall Charger(UL Listed)Compatible...'
                        price={15.50} 
                        image='https://images-na.ssl-images-amazon.com/images/I/51pEr8KvgWL._AC_.jpg' 
                        rating={5} />
                    <Product
                        id={5}
                        title='
                        iPhone Chargers iPad Chargers, MAILESI 10W 2 Port Plug Travel Wall Charger Adapter with 2-Pack 6.6-Feet Lightning Cables Charge Sync Compatible with iPhones'
                        price={15.50}
                        image='https://images-na.ssl-images-amazon.com/images/I/61k6rCSkRgL._AC_SL1000_.jpg'
                        rating={5} />
                    {/* product */}
                </div>
                <div className="home__row">
                    {/* product */} 
                    <Product
                        id={6}
                        title='
                        CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-9400F 2.9GHz, NVIDIA GeForce GTX 1660 6GB, 8GB DDR4, 240GB SSD, 1TB HDD, WiFi Ready & Win 10 Home...'
                        price={749.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/71fVpfx5oiL._AC_SL1500_.jpg'
                        rating={5} />
                </div>
            </div>
        </div>
    );
};

export default Home;