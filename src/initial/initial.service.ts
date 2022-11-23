import http from "../api/http.commons";

export const get = async (): Promise<any> => {
  try {
    console.log("Chegou aqui");
    const response = await http.get("/entries");
    console.log({ response });
    return response.data;
  } catch (e) {}
};
