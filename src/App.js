import React from 'react';
import './App.css';
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Header from "./Header/Header";



class App extends React.Component {
    render(){
  return (
      <div className="App">
            <Header />
             <Main />
            <Footer />
        </div>
       );
    }
}

export default App;