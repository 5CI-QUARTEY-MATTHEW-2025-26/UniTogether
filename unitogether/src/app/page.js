import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import Unamed  from "./components/Unamed";
export default function Home() {
  return (
    <div className="">
      <Unamed />
      <MyHeader />
     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-FCF6F5 p-8 pb-20 gap-16 sm:p-20">

      <p> cioa mondo</p>
     </div>
      <MyFooter />
    </div>
  );
}