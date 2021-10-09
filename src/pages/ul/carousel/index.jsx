import { Carousel,Card } from 'antd';
import React from 'react'
import '../ui.less'
const Carousels = () => {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    return ( 
        <div style={{width:"100%"}}>
    <Card title="图片背景轮播">
    <Carousel >
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
                <Carousel autoplay className='autoCarousel'>
                    <div>
                        <img src="/assets/carousel-img/carousel-1.jpg" alt="" />
                    </div>
                    <div>
                    <img src="/assets/carousel-img/carousel-2.jpg" alt="" />
                    </div>
                    <div>
                    <img src="/assets/carousel-img/carousel-3.jpg" alt="" />
                    </div>
                </Carousel>
    </Card>
        </div>
     );
}
 
export default Carousels;