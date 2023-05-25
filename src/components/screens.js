import React from 'react'
import './screenstyle.css'

export const BigScreen = () => {
    return (
        <div className="big-screen">
            {/* <p>Whoops! I'm in big screen mode.</p>
            <p>This is the base of the pyramid</p> */}
        </div>
    )
}
export const Desktop = () => {
    return (
        <div className="desktop">
            {/* <p>Whoops! I'm in desktop mode.</p>
            <p>But if you see anything below me, i am now in Laptop mode</p> */}
        </div>
    )
}
export const Laptop = () => {
    return (
        <div className="laptop">
            {/* <p>Whoops! I'm in laptop mode.</p>
            <p>But if you see anything below me, i am now in Big Screen mode</p> */}
        </div>
    )
}
export const TabletMobile = () => {
    return (
      <div className="tablet-mobile">
        {/* <p>Whoops! I'm in tablet-mobile mode.</p>
        <p>But if you see anything below me, i am now in Desktop mode</p> */}
      </div>
    );
  };
  export const Mobile = () => {
    return (
        <div className="mobile">
            {/* <p>Whoops! I'm in mobile mode.</p> */}
        </div>
    )
}