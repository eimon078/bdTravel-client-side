import React from 'react';
import { Carousel } from 'react-bootstrap';

const TopHome = () => {
    const imgStyle = {
        height: "500px",
        width: "800px"
    }
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        style={imgStyle}
                        className="d-block w-100"
                        src="https://farm4.staticflickr.com/3680/9760927662_17ff9a403e_b.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="top-50 fw-bolder opacity-75">
                        <h3 className="fs-1">Subscribe to the bdTravel</h3>
                        <p>Travel on demand throughout the Inspirato Collection, paying nightly rates as you go.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={imgStyle}
                        className="d-block w-100"
                        src="https://tourrom.com/wp-content/uploads/2019/01/Discover-sajek-valley.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="top-50 fw-bolder opacity-75">
                        <h3 className="fs-1">Dedicated staff and five-star service</h3>
                        <p>Enjoy world-class hospitality from start to finish</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={imgStyle}
                        className="d-block w-100"
                        src="https://tourrom.com/wp-content/uploads/2019/01/Sunset-from-the-Helipad-sajek-valley.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="top-50 fw-bolder opacity-75">
                        <h3 className="fs-1">Luxury travel with no nightly rates, taxes, or fees</h3>
                        <p>Choose your desired trip and place your Pass in use for a specified number of Pass Days towards your reservation.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TopHome;