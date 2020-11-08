// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"

// La cartella "api" è speciale perchè i file al suo interno non 
// esportano componenti react
// in sostanza questo è un endpoint rest


export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
