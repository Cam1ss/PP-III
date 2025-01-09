import React from "react";

const demos = {
  soundcloud:
    '<iframe width="100%" style="height:100vh" scrolling="no" frameborder="no" src="http://localhost/Projetos/"></iframe>',

  plotly:
    '<iframe src="https://codesandbox.io/embed/q7jmjyplvq?fontsize=14" title="Plotly All Graph Types" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>'
};

//codesandbox.io/s/react-iframe-demo-g3vst codePen =
function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

export default () => {
  return (
    <div className="App">
      <Iframe iframe={demos["soundcloud"]} />,
    </div>
  );
}


