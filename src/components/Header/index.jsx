import React,{useState,useEffect,useLayoutEffect} from 'react';
import { Row, Col ,message } from 'antd';
import "./index.less";
import Utils from '../../Utils/utils';
import axios from 'axios';
const Header = () => {
    const [userName] = useState("PaceMak1r");
    const ShowDateTime = () => {
        let [sysTime, setSysTime] = useState();
        useLayoutEffect(() => {
            let ShowTime = setInterval(() => {
                let sysShowTime = Utils.formDate(new Date().getTime());
                setSysTime(sysShowTime);
            }, 1000)
            return () => {
                clearInterval(ShowTime);
            }
        }, [])
        return  {sysTime} ;
    }
    // 获取天气
    const ShowWeather = () => {
        let [weather, setWeather] = useState(null);
        useEffect(() => {
            axios.get("https://devapi.qweather.com/v7/weather/now?location=101091101&key=74599e45e4ba43829c8d857edabdcf44")
                .then(res => {
                    if (res.data.code == '200') {
                        setWeather(res.data)
                    }
                })
                .catch(error => {
                    message.error(error.message)
                })
        }, [])
        return { weather };

    }
    // debugger
    let { sysTime } = ShowDateTime();
    let { weather } = ShowWeather();
    // console.log(weather)
    return ( 
        <div className="header">
            {/* 用户名退出 */}
            <Row className="header-top">
                <Col span={24}>
                 <span>欢迎 {userName}</span>
                 <a href="#">退出</a>
                </Col>
                 </Row>
                {/* 面包屑 */}
                <Row className="breadcrumb">
                  <Col span={4} className="breadcrumb-title">
                      首页
                      <span className="sjx">

                      </span>
                  </Col>
                  {/* 时间和天气 */}
                  <Col span={20} className="weather">
                   <span className="date">{ sysTime }</span>
                   <span className="weatherImg">
                   <img src={`/assets/TianQibw-64/${weather?weather.now.icon:"1"}.png`} alt="" />
                   </span>
                   <span className="weather-detail">{ weather?weather.now.text:"" }</span>
                  </Col>
                </Row>
           
        </div>
     );
}
 
export default Header;