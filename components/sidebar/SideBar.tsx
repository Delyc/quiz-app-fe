import { SideBarItem } from "./SideBarItem";
import Link from "next/link";
import Image from "next/image";
import profile from '../../public/assets/profile.jpg'
const SideBar = () => {

    return ( 

      <>

      <section className="flex ">
      <section className="bg-[#2A348E] w-64 h-screen px-12 py-20">
        <ul className="flex flex-col gap-5">
      {SideBarItem.map((items, index) => {
        return(
          <li key={index} className="text-white">
            <Link href={items.path} className="flex gap-3 items-center">
              {items.icon}
              {items.title}</Link>

          </li>
        )
      })}
      </ul>
      </section>

      <section className="flex items-center h-fit justify-between w-full pt-10 pb-5 px-16 bg-white shadown-xl">
        <h1 className="text-5xl text-blue-600 font-bold">Tech<span className="text-3xl text-gray-500">House</span></h1>
        <input className=" h-12 w-1/2 py-5 px-10 rounded-lg border border-gray-200 outline-none" placeholder="Search for Quiz" />

        <div className="flex items-center gap-2 ">
          <p>Delyce T</p>
         <Image className="rounded-full w-12 h-12" src={profile} alt="profile" />

        </div>

      </section>

      </section>
     
      </>

     );
}
 
export default SideBar;