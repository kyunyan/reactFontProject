import React, { Suspense } from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";

import UserListPage from "./components/views/userListPage/userListPage.js";

function App(){
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
       <BrowserRouter>
        <Switch>
           <Route exact path="/" component={UserListPage} />

          </Switch>
       </BrowserRouter>
      </div>
    </Suspense>
  )

}

export default App; 