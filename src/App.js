import React, { Suspense } from "react";
import {Route, Switch } from "react-router-dom";

import UserListPage from "./components/views/userListPage/userListPage.js";

function App(){
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
           <Route exact path="/" component={UserListPage} />

          </Switch>
      </div>
    </Suspense>
  )

}

export default App; 