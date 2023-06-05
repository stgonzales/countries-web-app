import Link from "next/link";
import Image from "next/image";
import { Country } from "@/types";

export default function Card(props: Country) {
  return (
    <Link href={`${props.name.common}`}>
      <div className="min-w-[264px] min-h-[336px] shadow rounded-md bg-white dark:bg-dark-blue-100">
        <div className="relative rounded-t-lg overflow-hidden mb-6">
          <Image src={props.flags.png} alt={props.flags.alt || `${props.name.common} flag`} width={320} height={230} className="aspect-video"/>
        </div>
        <div className="pl-6 pb-[46px]">
        <h2 className="text-lg font-extrabold mb-4">{props.name.common}</h2>
        <div className='flex gap-1'>
          <p className='font-semibold'>Population:</p>
          <p className='font-light'>{props.population.toLocaleString()}</p>
        </div>
        <div className='flex gap-1'>
          <p className='font-semibold'>Region:</p>
          <p className='font-light'>{props.region}</p>
        </div>
        <div className='flex gap-1'>
          <p className='font-semibold'>Capital:</p>
          <div className="flex gap-1">
            {props.capital.map( (c, i) => <p key={i} className='font-light'>{c}</p>)}
          </div>
        </div>
        </div>
      </div>
    </Link>
  )
}