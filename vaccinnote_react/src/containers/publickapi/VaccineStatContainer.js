import React, { useState, useEffect } from "react";
import axios from "axios";
import VaccineStatComponent from "../../components/publicapi/VaccineStatComponent";
function VaccineStatContainer() {
  const [data, setData] = useState("");
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://coroname.me/today");
        if (response.status === 200) {
          const result = response.data.confirm_num;
          console.log(result);
          setData(result);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return <VaccineStatComponent data={data} />;
}
export default VaccineStatContainer;
