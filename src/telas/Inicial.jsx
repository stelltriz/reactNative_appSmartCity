import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Cabecalho } from '../componentes/Cabecalho';
import MapView, { Marker } from 'react-native-maps';

export const Inicial = () => {
  const [location, setLocation] = useState({
    latitude: -22.9141396,
    longitude: -47.0681575,
    latitudeDelta: 0.014,
    longitudeDelta: 0.014
  });

  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const response = await fetch('http://192.168.56.1/api/sensores/');
        const data = await response.json();
        setMarkers(data);
      } catch (error) {
        console.error('Erro ao buscar os pontos da API', error);
      }
    };

    fetchMarkers();
  }, []);

  return (
    <View style={estilos.container}>
      <Cabecalho titulo="Localizador" />
      <MapView style={{width: "100%", height: "100%"}} initialRegion={location}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
          >
            <View style={estilos.marcadorContainer}>
              <Image 
                source={{ uri: marker.imageUrl || "https://cdn.pixabay.com/photo/2014/04/03/10/03/google-309740_960_720.png" }}
                style={estilos.MapMarkerImage}
              />
              <Text style={{ color: 'black', fontSize: 20 }}>{marker.localizacao || "Sem título"}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080a0c',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  marcadorContainer: {
    width: 90,
    height: 70,
    backgroundColor: 'gray',
    flexDirection: 'column',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center'
  },
  MapMarkerImage: {
    width: 40,
    height: 65,
    resizeMode: 'cover'
  }
});
