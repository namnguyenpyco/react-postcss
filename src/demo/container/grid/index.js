import React, { Component } from 'react';

class Grid extends Component {
    render() {
        return (
            <div className="grid">
                <section className="row u-clearfix">
                    <p>Simple Grid Structure</p>
                    <ul className="grid-6 u-clearfix">
                        <li>01</li>
                        <li>02</li>
                        <li>03</li>
                        <li>04</li>
                        <li>05</li>
                        <li>06</li>
                    </ul>
                </section>

                <section className="row u-clearfix">
                    <p>Using offsets</p>
                    <ul className="grey offset u-clearfix">
                        <li>01</li>
                        <li>02</li>
                    </ul>
                </section>

                <section className="row u-clearfix">
                    <p>Nesting Grids</p>
                    <ul className="nesting u-clearfix">
                        <li>01</li>
                        <li>02</li>
                        <li>
                            <div>01</div>
                            <div>02</div>
                        </li>
                    </ul>
                </section>

                <section className="row u-clearfix">
                    <p>Aligning divs</p>
                    <ul className="align u-clearfix">
                        <li>01</li>
                    </ul>
                </section>

                <section className="row u-clearfix">
                    <p>The LostGrid Cycle</p>
                    <ul className="cycle u-clearfix">
                        <li>
                            1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem rem nam dolore repellendus provident,
                            voluptas necessitatibus vel cupiditate delectus, doloremque incidunt accusantium quia! Nisi molestiae totam
                            natus, in assumenda accusantium.
                        </li>
                        <li>
                            2 - Lorem ipsum dolor sit amet.
                        </li>
                        <li>
                            3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. At sunt harum ut rerum id quae voluptas velit
                            iusto quasi distinctio.
                        </li>
                        <li>
                            4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, sequi?
                        </li>
                        <li>
                            5 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nisi deserunt, dolorem accusamus sint ipsam
                            dolor quae ab animi assumenda architecto placeat possimus fugit doloribus vel, corporis amet aliquam maiores!
                        </li>
                        <li>
                            6 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </li>
                    </ul>
                </section>

                <section className="row u-clearfix">
                    <p>Vertical Grids</p>
                    <ul className="vertical u-clearfix">
                        <li>01</li>
                        <li>02</li>
                        <li>03</li>
                    </ul>
                </section>

                <section className="row u-clearfix">
                    <p>Waffle Grids</p>
                    <ul className="waffle u-clearfix">
                        <li>01</li>
                        <li>02</li>
                        <li>03</li>
                        <li>04</li>
                        <li>05</li>
                        <li>06</li>
                        <li>07</li>
                        <li>08</li>
                        <li>09</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
                    </ul>
                </section>

            </div>
        )
    }
}

export default Grid;