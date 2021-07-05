// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Image from 'next/image';

export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}
