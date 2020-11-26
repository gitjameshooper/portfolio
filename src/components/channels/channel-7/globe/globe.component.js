import React, { useState } from "react";
import ReactGlobe from "react-globe";

const Globe = React.memo(function Earth(props) {
  const [globe, setGlobe] = useState(null);
  const markers = [
    {
      id: "marker1",
      city: "Austin",
      color: "red",
      coordinates: [30.2672, -97.7431],
      value: 100,
    },
    {
      id: "marker2",

      city: "Chattanooga",
      color: "red",
      coordinates: [35.0456, -85.3097],
      value: 100,
    },
    {
      id: "marker3",
      city: "Singapore",
      color: "red",
      coordinates: [1.3521, 103.8198],
      value: 100,
    },
    {
      id: "marker4",
      city: "Thailand",
      color: "red",
      coordinates: [8.0863, 98.9063],
      value: 100,
    },
    {
      id: "marker5",
      city: "San Salvador",
      color: "red",
      coordinates: [13.6929, -89.2182],
      value: 100,
    },
    {
      id: "marker6",
      city: "Thailand",
      color: "red",
      coordinates: [8.0863, 98.9063],
      value: 100,
    },
    {
      id: "marker7",
      city: "Barcelona, Spain",
      color: "red",
      coordinates: [41.3851, 2.1734],
      flagSrc: "./../assets/img/barcelona/flag.png",
      value: 100,
    },
    {
      id: "marker8",
      city: "Geneva, Switerland",
      color: "red",
      coordinates: [46.2044, 6.11432],
      value: 100,
    },
    {
      id: "marker9",
      city: "Florence, Italy",
      color: "red",
      coordinates: [43.7696, 11.2558],
      value: 100,
    },
    {
      id: "marker10",
      city: "Amalfi Coast, Italy",
      color: "red",
      coordinates: [40.634, 14.6027],
      value: 100,
    },
    {
      id: "marker11",
      city: "Munich, Germany",
      color: "red",
      coordinates: [48.1351, 11.582],
      value: 100,
    },
    {
      id: "marker12",
      city: "Prague, Czech Republic",
      color: "red",
      coordinates: [50.0755, 14.4378],
      value: 100,
    },
  ];
  const options = {
    ambientLightColor: "blue",
    cameraRotateSpeed: 0.5,
    // cameraAutoRotateSpeed: 4,
    enableCameraAutoRotate: false,
    focusAnimationDuration: 2000,
    focusEasingFunction: ["Linear", "None"],
    pointLightColor: "white",
    pointLightIntensity: 1,
    globeGlowColor: "blue",
    markerTooltipRenderer: (marker) => `${marker.city}`,
  };
  return (
    <ReactGlobe
      height="100vh"
      globeCloudsTexture={null}
      initialCoordinates={[30.3521, 0.8198]}
      markers={markers}
      options={options}
      width="100%"
      onClickMarker={(marker, markerObject, event) => {
        console.log(props);
        setTimeout(() => {
          console.log(globe);
          props.setModal({ city: marker.city, flagSrc: marker.flagSrc });
        }, 3000);

        console.log(marker, markerObject, event);
      }}
      onGetGlobe={(a) => {
        console.log(a);
      }}
      // onMouseOutMarker={(marker, markerObject, event) => {
      //   setModal(false);
      //   console.log(marker, markerObject, event);
      // }}
      onGlobeTextureLoaded={() => console.log("globe loaded")}
      // onMouseOverMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
    />
  );
});
export default Globe;
