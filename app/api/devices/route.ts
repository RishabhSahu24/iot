import { NextResponse } from "next/server";
import devices from "../../models/devices";

export async function GET(req: any) { 
  try {
    const { id } = req.query || {}; 
    if (!id) {
      console.log('No id provided in the request');
      return NextResponse.json({ message: 'No id provided in the request' });
    }

    const deviceInfo = await devices.findOne({
      where: {
        id: parseInt(id, 10)
      }
    });

    if (!deviceInfo) {
      console.log(`No device found with id ${id}`);
      return NextResponse.json({ message: `No device found with id ${id}` });
    }

    return NextResponse.json(deviceInfo);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Error fetching data:", error });
  }
}
