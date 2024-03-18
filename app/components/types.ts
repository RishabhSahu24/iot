// DeviceInfo.tsx
export interface Device {
    id: number;
    mac_id: string;
    createdat: string;
  }
  
  // ChartContainer.tsx
  export interface SensorData {
    device_id: number;
    pin: number;
    sensor_type: string;
    interval_start_time: string;
    average_value: number;
  }
  
  // ChartContainer.tsx
  export interface ReadingData {
    [key: string]: SensorData[];
  }
  
  // CurrentValue.tsx
  export interface CurrentSensorData {
    id: number;
    device_id: number;
    sensor_type: string;
    pin: number;
    value: string;
    date: string;
    hour: number;
    minutes: number;
    createdat: string;
  }
  
  // CurrentValue.tsx
  export interface CurrentDataReading {
    [key: string]: CurrentSensorData;
  }
  
  // For Chart
  export interface ChartData {
    device_id: number;
    pin: number;
    sensor_type: string;
    interval_start_time: string;
    average_value: number;
  }
  
  export interface ChartReadingData {
    [key: string]: ChartData[];
  }
  
  export interface Props {
    data: ChartReadingData;
    chartType: String;
  }