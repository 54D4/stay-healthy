export const getDeta = async (data) => {
  const url = `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${data}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a0ca215217msh615dbc58d664594p161c12jsn346d064150b0",
      "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};
