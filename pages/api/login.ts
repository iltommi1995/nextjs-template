// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"
import { redirect } from "next/dist/next-server/server/api-utils";
import jwt from 'jsonwebtoken';
// La cartella "api" è speciale perchè i file al suo interno non 
// esportano componenti react
// in sostanza questo è un endpoint rest

const KEY = 'asdafgwsfasfsdgwgwgedgfs'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if(!req.body) {
    res.statusCode = 404
    res.end('Error')
    return
  }
  const {username, password} = req.body;

  res.json({
    token: jwt.sign({
      username,
      admin:  username === 'admin' && password === 'admin' ||
              username === 'duckfiction' && password === 'samot'
    }, KEY)
  })
  //res.statusCode = 200
  //res.json({ name: 'John Doe' })
}
