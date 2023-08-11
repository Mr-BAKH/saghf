import connectDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";


export async function PUT(req,{ params }){
    const { id } = params;
    const {user_name, user_email, user_phone, user_pass} = await req.json()
    await connectDB()
    await User.findByIdAndUpdate(id, {user_name, user_phone, user_email, user_pass})
    return NextResponse.json({ massage:"user Updated successfully!"},{status:'200'})

}