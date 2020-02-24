import React, { Component } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

class NavBar extends Component {
    render() {
        return (
          <TransformWrapper
            defaultScale={1}
            defaultPositionX={200}
            defaultPositionY={100}
          >
            {({ zoomIn, zoomOut, resetTransform, pinch, ...rest }) => (
                <TransformComponent
                onPinchingStop={resetTransform}>
                  <img src="./img/j.jpg" alt="test" style={{width: "50%", height: "50%"}}/>
                  <div>Example text</div>
                </TransformComponent>
            )}
          </TransformWrapper>
        );
      }
    }

export default NavBar;