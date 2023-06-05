import Link from "next/link";

export default function BorderCountry({ code }: {code: string}) {
  return (
    <Link href={`/${code}`}>
      <div className='bg-white px-7 py-1 dark:bg-dark-blue-100 flex items-center justify-center shadow-md rounded-sm cursor-pointer'>
        <p className='font-light text-xs'>{code}</p>
      </div>
    </Link> 
  )
}