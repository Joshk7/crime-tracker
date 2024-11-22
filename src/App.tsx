import React, { } from 'react';
import './App.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

function App() {
  return (
    <div className="container">
        <section className="heading">
            <header>
                <h1 className="title">Crimes In St. Paul</h1>
                <MapContainer className='map' center={[51.505, -0.09]} zoom={11} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                </MapContainer>
            </header>

        </section>
    </div>
  );
}

export default App;
