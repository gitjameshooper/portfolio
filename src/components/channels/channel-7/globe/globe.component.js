import React, { useState } from "react";
import ReactGlobe from "react-globe";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const Globe = React.memo(function Earth(props) {
  const [globe, setGlobe] = useState(null);
  const markers = [
    {
      id: "marker0",
      city: "Austin, TX",
      color: "red",
      coordinates: [30.2672, -97.7431],
      flagSrc: "./../assets/img/flags/usa.png",
      value: 100,
    },
    {
      id: "marker1",
      city: "Denver, CO",
      color: "red",
      coordinates: [39.7392, -104.9903],
      flagSrc: "./../assets/img/flags/usa.png",
      value: 100,
    },
    {
      id: "marker2",
      city: "Chattanooga, TN",
      color: "red",
      coordinates: [35.0456, -85.3097],
      flagSrc: "./../assets/img/flags/usa.png",
      value: 100,
    },
    {
      id: "marker3",
      city: "Singapore",
      color: "red",
      coordinates: [1.3521, 103.8198],
      flagSrc: "./../assets/img/flags/singapore.png",
      value: 100,
    },
    {
      id: "marker4",
      city: "Thailand",
      color: "red",
      coordinates: [8.0863, 98.9063],
      flagSrc: "./../assets/img/flags/thailand.png",
      value: 100,
    },
    {
      id: "marker5",
      city: "San Salvador",
      color: "red",
      coordinates: [13.6929, -89.2182],
      flagSrc: "./../assets/img/flags/el-salvador.svg",
      value: 100,
    },
    {
      id: "marker6",
      city: "San Diego, CA",
      color: "red",
      coordinates: [32.7157, -117.1611],
      flagSrc: "./../assets/img/flags/usa.png",
      value: 100,
    },
    {
      id: "marker7",
      city: "Barcelona, Spain",
      color: "red",
      coordinates: [41.3851, 2.1734],
      flagSrc: "./../assets/img/flags/spain.png",
      value: 100,
    },
    {
      id: "marker8",
      city: "Geneva, Switzerland",
      color: "red",
      coordinates: [46.2044, 6.11432],
      flagSrc: "./../assets/img/flags/switzerland.jpg",
      value: 100,
    },
    {
      id: "marker9",
      city: "Florence, Italy",
      color: "red",
      coordinates: [43.7696, 11.2558],
      flagSrc: "./../assets/img/flags/italy.png",
      value: 100,
    },
    {
      id: "marker10",
      city: "Amalfi Coast, Italy",
      color: "red",
      coordinates: [40.634, 14.6027],
      flagSrc: "./../assets/img/flags/italy.png",
      value: 100,
    },
    {
      id: "marker11",
      city: "Munich, Germany",
      color: "red",
      coordinates: [48.1351, 11.582],
      flagSrc: "./../assets/img/flags/germany.png",
      value: 100,
    },
    {
      id: "marker12",
      city: "Prague, Czech Republic",
      color: "red",
      coordinates: [50.0755, 14.4378],
      flagSrc: "./../assets/img/flags/czech.jpg",
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
      onMouseOverMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
    />
  );
});
export default Globe;
