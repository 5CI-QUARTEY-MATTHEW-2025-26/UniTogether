import MyFooter from "./components/Assets/MyFooter";
import MyHeader from "./components/Assets/MyHeader";
import Unamed  from "./components/Unamed";
import TypingEffect from "./components/Effects/TypingEffect";

export default function Home() {
  return (
    <div className="">
      <MyHeader />
      <div className="text-black dark:text-(--cherry-red) font-bold text-3xl items-center justify-items-center bg-FCF6F5 md:text-7xl ">
          <p><span className="text-(--cherry-red) dark:text-cherry ">Uni</span>Together</p>
      </div>
     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-FCF6F5 p-8 pb-20 gap-16 sm:p-20">
      <TypingEffect text="L'università inizia da una buona casa — e dalle persone giuste con cui viverla." speed={60} className="text-center" />
     </div>
      <MyFooter />
    </div>
  );

}
