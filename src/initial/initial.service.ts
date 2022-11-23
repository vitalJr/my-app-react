import http from "../api/http.commons";

export const get = async (): Promise<any> => {
  try {
    console.log("Chegou aqui");
    const response = await http.get("/entries");
    console.log({ response });
    return response.data;
  } catch (e) {}
};

export const testFetch = (): any => {
  try {
    fetch("https://api.publicapis.org/entries", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log({ data });
        return data;
      });

    return [];
  } catch (error) {}
};
