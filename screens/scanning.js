import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { getDatabase, ref, set, onValue, update } from 'firebase/database';
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default function Barcoding() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user.uid;
  const name = user.displayName;
  const email = user.email;

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  function writeUserData (userID, points){
    const db = getDatabase();
    const dbRef = ref(getDatabase());
    const updatePoints = 0;
    get(child(dbRef, `users/${userID}$`)).then((snapshot) => {
      if(snapshot.exists()){
        updatePoints += snapshot.val();
        update(ref(db, 'users/' + userID), {
          username: name,
          email : email,
          loyalty: points+updatePoints
        });
      }
      else{
        alert("no data exists");
        set(ref(db, 'users/' + userID), {
          username: name,
          email : email,
          loyalty: points
        });
      }
    })
    
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    writeUserData(uid, data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
