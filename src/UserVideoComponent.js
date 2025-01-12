import React, { Component } from 'react';
import OpenViduVideoComponent from './OvVideo';
import './UserVideo.css';
import styled from 'styled-components';

// function UserVideoComponent ({streamManager}) {
//   console.log(streamManager)
//   const getNicknameTag = () => {
//     return JSON.parse(streamManager.stream.connection.data).clientData
//   }

//   return(
//     <>
//     {streamManager !== undefined ? (
//           <VideoBox>
//             <div className="streamcomponent">
//               <OpenViduVideoComponent
//                 streamManager={streamManager}
//               />
//               <Text>{getNicknameTag()}</Text>
//             </div>
//           </VideoBox>
//         ) : null}
//     </>
//   )
// }

export default class UserVideoComponent extends Component {
  getNicknameTag() {
    // Gets the nickName of the user
    console.log(this.props.streamManager)
    return JSON.parse(this.props.streamManager.stream.connection.data)
      .clientData;
  }

  render() {
    return (
      <>
        {this.props.streamManager !== undefined ? (
          <VideoBox className={this.props.speaking ? 'speaking' : ''}>
            <div className="streamcomponent">
              <OpenViduVideoComponent
                streamManager={this.props.streamManager}
              />
              <Text>
                {this.getNicknameTag()}
              </Text>
            </div>
          </VideoBox>
        ) : null}
      </>
    );
  }
}

// export default UserVideoComponent;

const VideoBox = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 250px;
  margin: 30px auto 30px auto;
  overflow: hidden;
  background-color: #ffe179;
  @media screen and (max-width: 1251px) {
    width: 200px;
    height: 200px;
    border-radius: 200px;
    margin: 30px auto 0px auto;
  }
  &.speaking {
    border: 5px solid green;
  }
`;

const Text = styled.div`
  margin: 0px 0px 0px 20px;
  font-family: 'yg-jalnan';
  @media screen and (max-width: 1251px) {
    margin: -55px 0px 0px 0px;
  }
`;
