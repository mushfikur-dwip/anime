const handleData = () => {
  fetch("https://nekos.best/api/v2/neko")
    .then((response) => response.json())
    .then((data) => displayData(data));
};

const imgLoad = document.getElementById("fetchImg");

const displayData = (photos) => {
//   console.log(photos.results[0].url);
  const div = document.createElement("img");
  div.classList.add(
    "h-screen",
    "w-screen",
    "transition-all",
    "duration-300",
    "rounded-lg",
    "blur-xs",
    "hover:blur-none"
  );
  div.id = "imgFit";
  div.src = photos.results[0].url;
  imgLoad.appendChild(div);
};
handleData();
