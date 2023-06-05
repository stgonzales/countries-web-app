import Link from 'next/link';
import Image from 'next/image';
import { BorderCountry, Container } from '@/components'
import { getAllCountries, getCountryDetails, getMappedCountryCodes } from '@/helpers';

export async function generateStaticParams() {
  const countries = await getAllCountries()
 
  return countries.map((country: any) => ({
    country: country.name.common
  }));
}

export default async function Country({ params }: { params: { country: string } }) {

  const countryCodeMap = await getMappedCountryCodes()

  const countryDetails = await getCountryDetails(params.country)

  const nativeName = countryDetails.name.nativeName ? Object.entries(countryDetails.name.nativeName).map((nn) => nn[1].common).join(', ') : '-';
  const currencies = countryDetails.currencies ? Object.entries(countryDetails.currencies).map((c) => c[1].name).join(', ') : '-';
  const languages = countryDetails.languages ? Object.entries(countryDetails.languages).map((l) => l[1]).join(', ') : '-';
  
  return (
    <main className='px-4 pt-6 lg:px-20 lg:pt-12 flex flex-col gap-8'>
      <Container>
        <div className='flex flex-col gap-16 md:gap-20'>
          <Link href='/' className='w-[104px] h-8 bg-white dark:bg-dark-blue-100 rounded-sm flex items-center gap-2 px-6 py-[6px]'>
            <svg className='w-[18px] h-[18px] fill-dark-blue-300 dark:fill-white' viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.81802 0.696699L6.87868 1.75736L3.3785 5.25754H16.7428L16.7428 6.74246H3.3785L6.87868 10.2426L5.81802 11.3033L0.514719 6L5.81802 0.696699Z"/></svg>
            Back
          </Link>
          <div className='mx-auto max-w-xs md:max-w-7xl md:w-full md:h-full flex flex-col gap-11 items-center lg:justify-between lg:flex-row lg:items-center mb-[60px] md:mb-0'>
          <Image src={countryDetails.flags.svg} alt={countryDetails.flags.alt} width={320} height={230} className='rounded-lg md:w-full lg:max-w-[560px] aspect-auto'/>
          <div className='w-full flex flex-col gap-[68px] lg:max-w-[574px]'>
            <div className='w-full flex flex-col gap-4 md:gap-6'>
              <div>
                <h1 className='text-[22px] font-extrabold'>{countryDetails.name.common}</h1>
              </div>
              <div className='flex flex-col gap-8 md:flex-row md:justify-between'>
                <div className='text-sm leading-8'>
                  <div className='flex gap-1'>
                    <p className='font-semibold whitespace-nowrap'>Native Name:</p>
                    <p className='font-light whitespace-nowrap'>{nativeName}</p>
                  </div>
                  <div className='flex gap-1'>
                    <p className='font-semibold whitespace-nowrap'>Population:</p>
                    <p className='font-light whitespace-nowrap'>{countryDetails.population.toLocaleString()}</p>
                  </div>
                  <div className='flex gap-1'>
                    <p className='font-semibold whitespace-nowrap'>Region:</p>
                    <p className='font-light whitespace-nowrap'>{countryDetails.region}</p>
                  </div>
                  <div className='flex gap-1'>
                    <p className='font-semibold whitespace-nowrap'>Sub Region:</p>
                    <p className='font-light whitespace-nowrap'>{countryDetails.subregion}</p>
                  </div>
                  <div className='flex gap-1'>
                    <p className='font-semibold whitespace-nowrap'>Capital:</p>
                    <p className='font-light whitespace-nowrap'>{countryDetails.capital}</p>
                  </div>
                </div>
                <div className='text-sm leading-8'>
                  <div className='flex gap-1'>
                    <p className='font-semibold whitespace-nowrap'>Top Level Domain:</p>
                    <p className='font-light whitespace-nowrap'>{countryDetails.tld}</p>
                  </div>
                  <div className='flex gap-1'>
                    <p className='font-semibold whitespace-nowrap'>Currencies:</p>
                    <p className='font-light whitespace-nowrap'>{currencies}</p>
                  </div>
                  <div className='flex gap-1'>
                    <p className='font-semibold whitespace-nowrap'>Languages:</p>
                    <p className='font-light whitespace-nowrap'>{languages}</p>
                  </div>
                </div>
              </div>
          </div>
          <div className='flex flex-col md:flex-row gap-4'>
            <p className='text-base font-semibold whitespace-nowrap'>Border Countries:</p>
            <div className='flex flex-wrap gap-[10px]'>
              {countryDetails.borders && countryDetails.borders.map((border, i) => {
                if(!countryCodeMap[border]) return null
                return <BorderCountry key={i} code={countryCodeMap[border]}/>
              })}
              </div>
            </div>
          </div>
        </div>
        </div>
      </Container>
    </main>
  )
}