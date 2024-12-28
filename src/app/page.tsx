import LogIn from "@/components/logIn";

export default function Home() {
  return (
    <div className="lg:grid grid-cols-2">
      <div className="bg-sidebar min-h-screen flex justify-center items-center">
        <div className="bg-white rounded-md h-[30rem] max-w-2xl w-[25rem] flex items-center justify-center">
          <LogIn />
        </div>
      </div>
      <div></div>
    </div>
  );
}
