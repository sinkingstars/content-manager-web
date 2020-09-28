import React from 'react';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
// import "./common/template/adminlte-dependencies"

function App() {
  return (

    <div className="wrapper">
    <Header/>
    <Menu/>
    <Content/>
    <Footer/>
    </div>
   
  );
}

export default App;
