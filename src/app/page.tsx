import LogIn from "@/components/logIn";

export default function Home() {
  return (
    <div className="flex bg-sidebar justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded-2xl h-[30rem] max-w-2xl w-[25rem] flex items-center justify-center">
        <LogIn />
      </div>
    </div>
  );
}
