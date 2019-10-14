import React from "react";

import Info from "./Info";
import Citations from "./Citations";
import Nav from "./Nav";
import Resources from "./Resources";
import useResponsiveBreakpoints from "./utils/useResponsiveBreakpoints";
import "./App.css";

function App() {
  const targetRef = React.useRef(null);
  const size = useResponsiveBreakpoints(targetRef, [
    { small: 200 },
    { medium: 400 },
    { large: 600 }
  ]);

  return (
    <React.Fragment>
      <Nav />
      <div className="row">
        <div className="lg-5 col">
          <div className="paper">
            <Info />
          </div>
          <Resources />
          <Citations />
        </div>
        <div className="lg-7 col">
          <div className="paper">
            <div className="row">
              <div className="col-fill col" style={{ overflow: "hidden" }}>
                Try horizontally resizing the box below and see the media query
                name change between small, medium and large
                <div style={{ overflow: "hidden", width: "100%" }}>
                  <div
                    ref={targetRef}
                    className="border"
                    style={{
                      backgroundColor: "aliceblue",
                      padding: "1rem",
                      resize: "horizontal",
                      overflow: "hidden",
                      maxWidth: "100%",
                      minWidth: "4rem"
                    }}
                  >
                    {size}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
