import React, { useEffect, useState } from "react";

export default function App6() {
  return (
    <div className="App">
      <GetChuckJokes />
    </div>
  );
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

const ApiFacade = () => {
  // makeOptions creates the headers and optional body for post or put
  const makeOptions = (method, body) => {
    const opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    };
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };

  const getData = async url => {
    const options = makeOptions("GET"); //True add's the token to the request
    const response = await fetch(url, options).then(handleHttpErrors);
    return response;
  };

  return { getData };
};

function GetChuckJokes() {
  const [data, setData] = useState(
    "Click the button to see a chuck norris joke."
  );
  const [error, setError] = useState("");
  const { getData } = ApiFacade();
  const [joke, setJoke] = useState({});

  const onClickHandler = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.log("ERROR:", error);
        //Is it a servererror (code 4xx or 5xx)
        if (error.fullError) {
          error.fullError.then(e => {
            if (e.msg) {
              setError(error.status + ":" + e.msg);
            } else {
              setError(error.status + ": " + "Something bad happend");
            }
          });
        } else {
          // or is it a networerror (wrong host or sceme)
          setError("There was a network error");
        }
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://icanhazdadjoke.com", {
        headers: {
          //Accept: "text/plain"
          Accept: "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          setJoke(data);
        })
        .catch(error => {
          console.log("ERROR:", error);
          //Is it a servererror (code 4xx or 5xx)
          if (error.fullError) {
            error.fullError.then(e => {
              if (e.msg) {
                setError(error.status + ":" + e.msg);
              } else {
                setError(error.status + ": " + "Something bad happend");
              }
            });
          } else {
            // or is it a networerror (wrong host or sceme)
            setError("There was a network error");
          }
        });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Your chuck joke : {data.value}</p>
      <button onClick={onClickHandler}>Get random joke</button>
      <p>Other random joke : {joke.joke}</p>
    </div>
  );
}
