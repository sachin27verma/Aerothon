import { db } from "@/dbconfig/firebase"; // Assuming you only need db here
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { collection, query, where, getDocs } from "firebase/firestore";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ message: "Invalid input", status: 400 });
    }

    // Query Firestore for the user with the provided email
    const userQuery = query(
      collection(db, "Users"),
      where("email", "==", email)
    );
    // console.log(userQuery)
    const userSnapshot = await getDocs(userQuery);
    // console.log(userSnapshot.filters)

    if (userSnapshot.empty) {
      return NextResponse.json({ message: "User not found", status: 404 });
    }

    // Assuming email is unique, get the first matching document
    const userDoc = userSnapshot.docs[0];
    // console.log(userDoc)
    const user = userDoc.data();
    console.log(user);

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: "Invalid password", status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, "sercretkey", {
      expiresIn: "1h",
    });

    // Return success response with the token
    return NextResponse.json({
      message: "Login successful",
      token,
      status: 200,
    });
  } catch (error) {
    console.log("Error while login: " + error);
    return NextResponse.json({ message: "Login failed", status: 500 });
  }
}
