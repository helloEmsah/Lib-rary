import React, { Component } from "react";
import { ReactReader } from "react-reader";

class Test extends Component {



  render() {
    return (
      <div style={{ position: "relative", height: "100%"}}>
        {" "}
        <ReactReader
          url={"../Dummy/JavaScript.epub"}
          showToc={true}

          title={"Alice in wonderland"}
        />
      </div>
    );
  }
}

export default Test
