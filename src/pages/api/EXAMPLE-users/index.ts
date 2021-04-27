import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Diego" },
    { id: 2, name: "Dani" },
    { id: 3, name: "Rafa" },
  ];

  return response.json(users);
};

// JWT (Storage)
// Next Auth (Social - não há necessidade de salvar token e independe de um backend)
// Cognito (AWS), Auth0 - (Providers de autenticação externos) => uma espécie de "authentication as a service"
