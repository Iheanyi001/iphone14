"use client"

import { useEffect, useState } from "react"
import { redirect } from 'next/navigation'

export default function Home() {
  const [loader, setLoader] = useState(true);

  useEffect(()=>{
    //redirect
    const setTimeoutLoader = () => setTimeout(()=>{
      setLoader(!loader)
    }, 5000);

    return ()=>{
      setTimeoutLoader();
      redirect('https://facebook.com', 'replace'); 
      }
  },[])
  return (
    <div>
      {loader && (<div className="iphone">
      <div className="ispinnerContainer">
      <div className="ispinner ispinner-large">
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
      </div>
      </div>


        <div className="inner" id="bg">
            <div className="dynamic_island" id="d_island">
                <div className="content">
                    <div className="details">
                        <div className="imgBox">
                            <img src="https://picsum.photos/200/300?random=1"/>
                        </div>
                        <p>Alex Calling</p>
                    </div>
                    <div className="action">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <ion-icon name="call-outline" className="red">
                            </ion-icon>
                        </a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <ion-icon name="call-outline" className="green">
                            </ion-icon>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <i className="btn btn1"></i>
        <i className="btn btn2"></i>
        <i className="btn btn3"></i>
        <i className="rightButton"></i>
    </div>)}
    </div>
    
  )
}
