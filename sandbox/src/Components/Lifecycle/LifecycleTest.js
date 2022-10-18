import React from 'react';


class LifecycleTest extends React.Component {
  render() {
    return <div>Hey Test your lifecycle
    
    </div>;
  }

  componentDidMount()
  {
      console.log("Component did mount!!!");
  }

  componentWillUnmount()
  {
    console.log("Component Will Unmount!!!");
  }
}


export default LifecycleTest;
