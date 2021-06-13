import React from 'react'
import { Route, Switch } from 'react-router';
import BukuBaru from 'screens/BukuBaru';
import Homepage from 'screens/Homepage';
import SemuaBuku from 'screens/SemuaBuku';
import DetilBuku from 'screens/DetilBuku';

function App() {
  return (
    <div className="bg-gray-dark">
      <Switch>
        <Route exact path="/">
          <Homepage></Homepage>
        </Route>
        <Route exact path="/about">Laman About</Route>
        <Route exact path="/buku-baru">
          <BukuBaru></BukuBaru>
        </Route>
        <Route exact path="/semua-buku">
          <SemuaBuku></SemuaBuku>
        </Route>
        <Route exact path="/detail/:id">
          <DetilBuku></DetilBuku>
        </Route>
        <Route exact path="/detail">Data Not Found</Route>
      </Switch>
    </div>
  );
}

export default App;
