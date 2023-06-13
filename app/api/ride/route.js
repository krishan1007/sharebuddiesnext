import { connectToDB } from "@utils/database";
import Ride from "@models/ride";

export const GET  = async (request) =>{
    try {
        await connectToDB();
        const rides = await Ride.find({}).populate('creator');

        return new Response(JSON.stringify(rides),{status:200});

    } catch (error) {
         return new Response("Failed to fetch all rides",{status:500});
    }
}
