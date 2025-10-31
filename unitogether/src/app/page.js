import MyFooter from "./components/Assets/MyFooter";
import MyHeader from "./components/Assets/MyHeader";
import TypingEffect from "./components/Effects/TypingEffect";
import ScrollStack, { ScrollStackItem } from "./components/Assets/ScrollStack";
import Serach  from "./components/Search";

export default function Home() {
  return (
    <div className="mt-5">
      <MyHeader />
      <div className="flex flex-col items-center relative">
        <div className="text-black dark:text-white font-bold text-3xl items-center justify-items-center bg-FCF6F5 md:text-7xl ">
          <p><span className="text-(--cherry-red)">Uni</span>Together</p>
        </div>
      </div>
     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center  bg-FCF6F5 p-8 pb-20 gap-16 sm:p-20">
      <TypingEffect text="L'università inizia da una buona casa — e dalle persone giuste con cui viverla." speed={60} className="text-center" />
      <a
        href="/unitogether!.pdf"
        download
        className="mb-4 px-6 py-2 rounded-lg bg-(--cherry-red) text-white font-bold shadow hover:bg-[#e026a3] transition-colors"
      >
        Scarica PDF educazione civica
      </a>
     </div>





    


    <ScrollStack useWindowScroll={true} itemDistance={40} itemStackDistance={10} stackPosition="20%" baseScale={0.95} rotationAmount={0} blurAmount={0}>
      <ScrollStackItem itemClassName="bg-[#ff29b6] text-white font-bold">
        <h2>Backgrounds</h2>
        <div className="w-full h-32 flex items-center justify-center">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
      </ScrollStackItem>
      <ScrollStackItem itemClassName="bg-[#5a29ff] text-white font-bold flex items-center justify-center text-3xl">
        All on React Bits!
      </ScrollStackItem>
      <ScrollStackItem itemClassName="bg-[#ff29b6] text-white font-bold">
        <h2>Backgrounds</h2>
        <div className="w-full h-32 flex items-center justify-center">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
      </ScrollStackItem>
    </ScrollStack>

      <MyFooter />
    </div>
  );

}
