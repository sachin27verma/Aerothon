import { db } from "@/dbconfig/firebase"; // Assuming you only need db here
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { addDoc, collection } from "firebase/firestore";

export async function POST (req) {
    try {

        //TODO: validation of form and adding more field accrording to registr form

        const { username, email, password } = await req.json();
        if (!username || !email || !password) {
            return NextResponse.json({ message: "Invalid input", status: 400 });
        }
        // console.log("test start");
        const hashedPassword = await bcrypt.hash(password, 10);
        await addDoc(collection(db, "Users"), {
            username,
            email,
            password: hashedPassword,
        });

        // console.log("test end");
        return NextResponse.json({ message: "Registration successful", status: 200 });

    } catch (error) {
        console.log("Error registering new user: " + error);


        return NextResponse.json({ message: "Registration failed", status: 500 });
    }
}
