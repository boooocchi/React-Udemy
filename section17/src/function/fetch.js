const fetchURL = async function (url) {
  const responce = await fetch(url);
  const data = await responce.json();

  return data;
};
export default fetchURL;
