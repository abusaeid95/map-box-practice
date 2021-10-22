import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

mapboxgl.accessToken = "pk.eyJ1IjoiYWJ1c2FlaWQ5NSIsImEiOiJja3YyMDY3MGU4MXV1MnFxNnY3aHdscmNwIn0.OGFQBQXT9KdN68mG1c6agA";

const MapDirection = () => {
    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.405739, 23.777758],
            zoom: 13
            });
             
            map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
            );
    },[])
    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

export default MapDirection;