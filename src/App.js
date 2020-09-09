import React from "react";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ImagePost from "./components/ImagePost";
import Default from "./components/default";
import Home from "./components/home";

function App() {
  const data = [
    {
      img: "../img/img-1.jpg",
      comments: [
        {
          body: ` comment 1 Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub echo park actually green juice sriracha paleo. 
      Brooklyn srirachasemiotics DIY coloring book mixtape craft beer sartorial hella blue
    bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore.
    Unicorn lumbersexual master cleanse blog hella VHS vaporware
    sartorial church-key cardigan single-origin coffee lo-fi organic
    asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore,
    ethical helvetica photo booth gentrify.`,
          name: `james`,
        },
      ],
      id: 1,
    },
    {
      img: "../img/img-2.jpg",
      comments: [
        {
          body: ` comment 2 Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub echo park actually green juice sriracha paleo. 
  Brooklyn srirachasemiotics DIY coloring book mixtape craft beer sartorial hella blue
bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore.
Unicorn lumbersexual master cleanse blog hella VHS vaporware
sartorial church-key cardigan single-origin coffee lo-fi organic
asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore,
ethical helvetica photo booth gentrify.`,
          name: `john`,
        },
      ],
      id: 2,
    },
    {
      img: "../img/img-3.jpg",
      comments: [
        {
          body: ` comment 3 Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub echo park actually green juice sriracha paleo. 
  Brooklyn srirachasemiotics DIY coloring book mixtape craft beer sartorial hella blue
bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore.
Unicorn lumbersexual master cleanse blog hella VHS vaporware
sartorial church-key cardigan single-origin coffee lo-fi organic
asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore,
ethical helvetica photo booth gentrify.`,
          name: `jane`,
        },
      ],
      id: 3,
    },
    {
      img: "../img/img-4.jpg",
      comments: [
        {
          body: ` comment 4 Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub echo park actually green juice sriracha paleo. 
  Brooklyn srirachasemiotics DIY coloring book mixtape craft beer sartorial hella blue
bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore.
Unicorn lumbersexual master cleanse blog hella VHS vaporware
sartorial church-key cardigan single-origin coffee lo-fi organic
asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore,
ethical helvetica photo booth gentrify.`,
          name: `jean`,
        },
      ],
      id: 4,
    },
    {
      img: "../img/img-5.jpg",
      comments: [
        {
          body: ` comment 5 Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub echo park actually green juice sriracha paleo. 
  Brooklyn srirachasemiotics DIY coloring book mixtape craft beer sartorial hella blue
bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore.
Unicorn lumbersexual master cleanse blog hella VHS vaporware
sartorial church-key cardigan single-origin coffee lo-fi organic
asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore,
ethical helvetica photo booth gentrify.`,
          name: `gill`,
        },
      ],
      id: 5,
    },
    {
      img: "../img/img-6.jpg",
      comments: [
        {
          body: ` comment 6 Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub echo park actually green juice sriracha paleo. 
  Brooklyn srirachasemiotics DIY coloring book mixtape craft beer sartorial hella blue
bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore.
Unicorn lumbersexual master cleanse blog hella VHS vaporware
sartorial church-key cardigan single-origin coffee lo-fi organic
asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore,
ethical helvetica photo booth gentrify.`,
          name: `gait`,
        },
      ],
      id: 6,
    },
    {
      img: "../img/img-7.jpg",
      comments: [
        {
          body: ` comment 7 Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub echo park actually green juice sriracha paleo. 
  Brooklyn srirachasemiotics DIY coloring book mixtape craft beer sartorial hella blue
bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore.
Unicorn lumbersexual master cleanse blog hella VHS vaporware
sartorial church-key cardigan single-origin coffee lo-fi organic
asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore,
ethical helvetica photo booth gentrify.`,
          name: `goae`,
        },
      ],
      id: 7,
    },
    {
      img: "../img/img-8.jpg",
      comments: [
        {
          body: ` comment 8 Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub echo park actually green juice sriracha paleo. 
  Brooklyn srirachasemiotics DIY coloring book mixtape craft beer sartorial hella blue
bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore.
Unicorn lumbersexual master cleanse blog hella VHS vaporware
sartorial church-key cardigan single-origin coffee lo-fi organic
asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore,
ethical helvetica photo booth gentrify.`,
          name: `gina`,
        },
      ],
      id: 8,
    },
    {
      img: "../img/img-2.jpg",
      comments: [
        {
          body: ` comment 2 Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub echo park actually green juice sriracha paleo. 
  Brooklyn srirachasemiotics DIY coloring book mixtape craft beer sartorial hella blue
bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore.
Unicorn lumbersexual master cleanse blog hella VHS vaporware
sartorial church-key cardigan single-origin coffee lo-fi organic
asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore,
ethical helvetica photo booth gentrify.`,
          name: `john`,
        },
      ],
      id: 9,
    },
  ];

  //const [data, setdata] = useState(data);

  const [state, setState] = useState(data[0]);

  const clickHandler = (x) => {
    setState((prevState) => {
      if (x !== null) {
        return (prevState = data[x]);
      }
    });
  };

  const prevHandler = (x) => {
    console.log("you  clicked the prev image");

    setState((prevState) => {
      const newState = [...data];
      if (x === 1 || x < 2) {
        return (prevState = newState[0]);
      } else {
        return (prevState = newState[--x]);
      }
    });

    console.log(x--);
  };

  const nextHandler = (x) => {
    console.log("you clicked the next image");

    setState((prevState) => {
      //const newState = [...data];
      if (x === 8) {
        return (prevState = data[0]);
      } else {
        return (prevState = data[x++]);
      }
    });
    console.log(x);
  };

  const formHandler = (e) => {
    let textarea = document.getElementById("comment");
    let name = document.getElementById("name");
    const newcomments = [...state.comments];
    newcomments.push({ body: textarea.value, name: name.value });

    setState((prevState) => {
      return {
        img: prevState.img,
        comments: [...newcomments],
        id: prevState.id,
      };
    });
    textarea.value = "";
    name.value= "";
    console.log(textarea.value);
    console.log(name.value);
    console.log(state.comments);
  };

  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home myData={state} data={data} clickHandler={clickHandler} />
        </Route>
        <Route path="/imagepost">
          <ImagePost
            myData={state}
            data={data}
            prevHandler={prevHandler}
            nextHandler={nextHandler}
            formHandler={formHandler}
          />
        </Route>
        <Route>
          <Default />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
