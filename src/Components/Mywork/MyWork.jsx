// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./MyWork.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import myWork_data from "../../assets/myWork_data"
import arrow_icon from "../../assets/arrow_icon.svg"
const MyWork = () => {
  return (
    <div id='work' className='myWork'>
    <div className='myWork-title'>
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt=''></img>
    </div>
    <div className='myWork-container'>
      {myWork_data.map((work,index)=>{
        return <img key={index} src={work.w_img} alt=''></img>
      })}
    </div>
    <div className='myWork-showMore'>
      <p>Show More</p>
      <img src={arrow_icon} alt=''></img>
    </div>
      
    </div>
  )
};

export default MyWork;
