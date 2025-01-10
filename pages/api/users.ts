import type { NextApiRequest, NextApiResponse } from 'next';

let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const newUser = { id: Date.now(), ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
  } else if (req.method === 'PUT') {
    const { id, ...rest } = req.body;
    users = users.map((user) => (user.id === id ? { id, ...rest } : user));
    res.status(200).json({ message: 'Updated' });
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    users = users.filter((user) => user.id !== parseInt(id));
    res.status(200).json({ message: 'Deleted' });
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
