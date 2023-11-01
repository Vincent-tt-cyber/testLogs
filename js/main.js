const mainURL = "https://jsonplaceholder.typicode.com/comments";
let page = 0;
let limit = 50;
const getDataFromServer = async () => {
  await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`)
    .then((res) => res.json())
    .then((data) => renderContent(data));
};

const renderContent = async (content) => {
  const contentContainer = await document.querySelector(".content");

  content.map((item) => {
    const contentItem = document.createElement("div");
    contentItem.className = "content__item";
    contentItem.textContent = item.name;
    contentContainer.appendChild(contentItem);
  });
};

window.addEventListener("scroll", () => {
  const documentRect = document.documentElement.getBoundingClientRect();
  if (documentRect.bottom < document.documentElement.clientHeight + 150) {
    console.log("Done");
    page++;
    getDataFromServer();
  }
});

getDataFromServer();
