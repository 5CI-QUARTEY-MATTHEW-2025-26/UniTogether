import MyFooter from "./components/Assets/MyFooter";
import MyHeader from "./components/Assets/MyHeader";
import Unamed  from "./components/Unamed";
import TypingEffect from "./components/Effects/TypingEffect";

export default function Home() {
  return (
    <div className="">
      <Unamed />
      <MyHeader />
     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-FCF6F5 p-8 pb-20 gap-16 sm:p-20">

      <TypingEffect text="L'università inizia da una buona casa — e dalle persone giuste con cui viverla." speed={60} />
     </div>
      <MyFooter />
    </div>
  );

}
