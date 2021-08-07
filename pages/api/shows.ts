import { getShows } from "lib/Show";
import { NextApiHandler } from "next";

const handler : NextApiHandler = async (req, res) => {
    const shows = await getShows();
    res.status(200).json(shows);
};

export default handler;