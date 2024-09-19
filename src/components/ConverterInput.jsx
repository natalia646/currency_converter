import { useEffect, useState } from "react";
import fetchConverter from "../functions/fetchConverterData";

function ConverterInput() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConverter().then((data) => {
      if (!data) {
        setData([]), setLoading(true);
      }
      setData(data), setLoading(false);
      console.log(data)
    });
  }, []);

//   if (loading) {
//     return <></>;
//   }
//   if (!data) {
//     return [];
//   }

  return <div>

  </div>;
}
export default ConverterInput