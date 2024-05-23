import { db } from "@/dbconfig/firebase"; // Assuming you only need db here
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";

export async function POST(req) {
  try {
    const { username, email, password, fullname, location, dateofbirth } = await req.json();

    // Validate input fields
    if (!username || !email || !password || !fullname || !location || !dateofbirth) {
      return NextResponse.json({ message: "Invalid input", status: 400 });
    }

    // Validate email format (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Invalid email format", status: 400 });
    }

    // Validate password length (minimum 6 characters for example)
    if (password.length < 6) {
      return NextResponse.json({ message: "Password must be at least 6 characters long", status: 400 });
    }

    // Validate date of birth (basic validation to check if it's a valid date)
    if (isNaN(Date.parse(dateofbirth))) {
      return NextResponse.json({ message: "Invalid date of birth", status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Add the new user to Firestore
    const docRef = await addDoc(collection(db, "Users"), {
      username,
      email,
      password: hashedPassword,
      fullname,
      location,
      dateofbirth
    });

    // Get the generated ID
    const id = docRef.id;

    // Update the document with the generated ID
    await updateDoc(doc(db, "Users", id), { id });

    return NextResponse.json({ message: "Registration successful", status: 200 });

  } catch (error) {
    console.error("Error registering new user:", error);
    return NextResponse.json({ message: "Registration failed", status: 500 });
  }
}
