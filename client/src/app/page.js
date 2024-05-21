import Image from "next/image";

export default function Home() {
  const test=process.env.NEXT_PUBLIC_API_KEY;
  console.log(test)
  return (
   <main>
    Hey!
    </main>
  );
}
