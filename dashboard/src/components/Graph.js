import React from 'react'
import graph from '../components/images/graph.png';

function Graph() {
  return (
    <>
      <div className="main">
        <div className="graphContainer">
          <div className="newnavbar">
            <div className="newlogo">
              <h3>Your School</h3>
            </div>
            <div className="newitems">
              <ul>
                <li>New Signups</li>
                <li>Revenue</li>
                <li>Product Sales</li>
                <li>Active learns</li>
                <li>Last 7 Days</li>
              </ul>
            </div>

          </div>
        </div>
        <div className="rightbox">
          <div className="dataContainer">
            <img src={graph} alt="" className="graphimg" />
          </div>
          <div className="freaturescontainer">
            <div className="firstrow">
              <div className="user">
                <img src="" alt="" />
                <p>New User <br /> <span className="center">1</span></p>
              </div>
              <div className="user bottom">
                <img src="" alt="" />
                <p>New User <br /> <span className="center">1</span></p>
              </div>

            </div>
            <div className="secondrow">
              <div className="time">
                <img src="" alt="" />
                <p>New User <br /> <span className="center">1</span></p>
              </div>
              <div className="time bottom">
                <img src="" alt="" />
                <p>New User <br /> <span className="center">1</span></p>
              </div>

            </div>
            <div className="secondrow">
              <div className="time">
                <img src="" alt="" />
                <p>New User <br /> <span className="center">1</span></p>
              </div>
              <div className="time bottom">
                <img src="" alt="" />
                <p>New User <br /> <span className="center">1</span></p>
              </div>

            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Graph