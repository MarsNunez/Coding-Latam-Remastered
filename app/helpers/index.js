export const returnTitle = (slug) => {
  let newTitle = "";
  for (let i = 0; i < slug.length; i++) {
    if (slug[i] == "-") {
      newTitle += " ";
    } else {
      newTitle += slug[i];
    }
  }
  return newTitle.charAt(0).toUpperCase() + newTitle.slice(1);
};
