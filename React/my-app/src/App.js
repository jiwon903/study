
import './App.css';
import React from 'react';
import 학력 from './component/학력';
import 이력 from './component/이력';
import 자격증 from './component/자격증';


function App() {
  return (
    <>
      <학력 school="동국대학교" grade="A" />
      <이력 />
      <자격증 />
    </>

  );
}
export default App;