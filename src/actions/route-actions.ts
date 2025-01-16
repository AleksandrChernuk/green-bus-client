import { IGetRoutesBody, IRouteResponse } from "@/types/route.types";

const BASE_URL = "https://greenbus-backend.onrender.com/api/v1";

export const getRoutes = async (body: IGetRoutesBody): Promise<IRouteResponse[]> => {
  const response = await fetch(`${BASE_URL}/routes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Error");
  }

  const data = await response.json();
  return data;
};
