import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "../../../models/user";


export async function POST(req,res){
    const { user_name, user_phone, user_email, user_nationalId, user_pass } = await req.json();
    await connectDB();
    await User.create({ user_name, user_phone, user_email, user_nationalId, user_pass });
    return NextResponse.json({ massage:"create new user successfully!"},{status:'201'})
}

export async function GET(){
    await connectDB();
    const users = await User.find();
    return NextResponse.json({users}) 
}