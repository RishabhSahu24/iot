"use client";

import React, { useEffect, useState } from "react";
import { Device } from "./types";

const DeviceInfo = () => {
  const [data, setData] = useState<Device | null>(null);
  const deviceId = 1;

  useEffect(() => {
    fetch(`/api/devices?id=${deviceId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [deviceId]);

  return (
    <div>
      <h1 className="text-center text-2xl mt-10">{`Displaying sensor data for Device ${
        data ? data.id : ""
      } with MAC ID: ${data ? data.mac_id : ""}`}</h1>
    </div>
  );
};

export default DeviceInfo;
