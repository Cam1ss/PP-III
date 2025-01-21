import React from "react";
import Footer from '../../components/footer.js';
import Header from '../../components/header.js';
import Comentarios from "../Users/Users.jsx";

const demos = {
  soundcloud:
    '<iframe width="100%" style="height:170vh" scrolling="no" frameborder="no" src="https://mareshbard.github.io/Festivale/"></iframe>',

  plotly:
    '<iframe src="https://codesandbox.io/embed/q7jmjyplvq?fontsize=14" title="Plotly All Graph Types" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>',
};

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

export default function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Iframe iframe={demos["soundcloud"]} />
        <Comentarios />
      </>
      <Footer />
    </div>
  );
}
