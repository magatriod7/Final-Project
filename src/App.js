/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Helloworld1 } from "./Helloworld1";
import { Resume } from "./Resume";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./Component/Mainpage/MainPage";
import { UserPage } from "./Component/Userpage/UserPage";

function App() {
  return (
    <div className="App">
      흠....
      <Routes className="routes">
        <Route path="/UserPage" element={<UserPage />} />
        <Route path="/*" element={<MainPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;

// 순서 1) state 구조 정하기
// 순서 2) state action과 action의 payload 정하기
// 순서 3) 각각의 리듀서를 combineReducers를 통해서 묶을 수 있음 이를 통해 만든 것이 루트리듀서
//
