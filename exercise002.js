import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = (apiEndPoint) => {
  fetch(apiEndPoint)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

fetchData(jsonTypicode);

const fetchData2 = async (api) => {
  try {
    const response = await fetch(api);
    const text = await response.json();
    console.log(text);
  }
  catch (e) {
    console.log(e);
  }
}

fetchData2(jsonTypicode);
