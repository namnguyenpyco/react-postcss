import React, { Component } from 'react';

class Mixins extends Component {
    render() {
        return(
            <div>
                {/* <div className="box-2 u-clearfix">50</div> */}
                {/* <div className="image-container"><span className="image"></span></div> */}
                <ul className="grid-6 mixins u-clearfix">
                        <li>01</li>
                        <li>02</li>
                        <li>03</li>
                        <li>04</li>
                        <li>05</li>
                        <li>06</li>
                </ul>
            </div>
        )
    }
}

export default Mixins;