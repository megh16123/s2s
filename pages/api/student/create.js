import dbConnect from "../../../utils/dbconn";
dbConnect();

export default async (req, res)=> {
    res.json({test:"Test"})
  }
  