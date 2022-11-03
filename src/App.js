
import {initializeApp} from 'firebase/app';
import {fetchAndActivate, getRemoteConfig} from "firebase/remote-config";
import {getValue} from "firebase/remote-config";
import { useState } from 'react';



const firebaseConfig = {
  apiKey: "AIzaSyCt2xoDPa70fRDAYmMbbDOFAz6aEH-ndoQ",
  authDomain: "remoteconfig-3b020.firebaseapp.com",
  projectId: "remoteconfig-3b020",
  storageBucket: "remoteconfig-3b020.appspot.com",
  messagingSenderId: "345890051574",
  appId: "1:345890051574:web:b5f7d557e701d83244e3d7",
  measurementId: "G-N9G25FCBMF"
};
const app = initializeApp(firebaseConfig);
const remoteConfig = getRemoteConfig(app);

remoteConfig.settings.minimumFetchIntervalMillis = 15000;




function App() {
  
  const [greeting, setGreeting] = useState();
  
  fetchAndActivate(remoteConfig).then(() => {
    setGreeting(getValue(remoteConfig, "greeting").asString());

  }).catch((error) => {

  });

  return (
    <div className="App">
      <header className="App-header">
       
        <p>{greeting}</p>
         <h1>Sahana Sucks</h1>
  
      </header>
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
//     </div>
//   );
// }

// export default App;
