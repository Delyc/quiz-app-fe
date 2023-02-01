import SideBar from "../sidebar/SideBar";

const Hero = () => {
    return ( 
    <>
    <section className="bg-slate-50 w-full h-screen relative">
        <SideBar />
        <section className="overflow-y-auto h-[35rem] absolute flex flex-col gap-10 top-40 w-3/4 left-[19rem]">
        <div className="hero-image flex flex-col gap-10 py-10 px-20 w-full h-[25rem] rounded-3xl absolute ">
<div>
<h1 className="text-white text-6xl font-bold">Tech World:</h1>
<h1 className="text-white text-6xl font-bold">When is the next One:</h1>
</div>

<div className="flex gap-10">
    <div className="flex flex-col items-center gap-2">
        <h1 className="text-white  text-4xl">10</h1>
        <p className="text-lg text-white/70">Quiz</p>
    </div>

    <div className="flex flex-col items-center gap-2">
        <h1 className="text-white  text-4xl">110</h1>
        <p className="text-lg text-white/70">Questions</p>
    </div>

    <div className="flex flex-col items-center gap-2">
        <h1 className="text-white text-4xl">250</h1>
        <p className="text-lg text-white/70">Users</p>
    </div>
</div>


<div className="flex gap-10">
<button className="text-white text-lg bg-[#618CFB] rounded-lg py-3 px-8">Register</button>
<button className="text-[#618CFB] font-bold text-lg bg-white rounded-lg py-3 px-8">Register</button>
            <button className="text-[#618CFB] font-bold text-lg bg-white rounded-lg py-3 px-8">Register</button>
        </div>
        </div>

        <ul className="px-10 flex  gap-10 items-center border rounded-lg  w-full h-14 top-[28rem] absolute">
<li>Quiz</li>
<li>Quiz</li>

        </ul>

        </section>
    </section>
    </>
     );
}
 
export default Hero;