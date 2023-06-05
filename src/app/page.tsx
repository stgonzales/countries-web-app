import { Card, Container, Filter, Search } from '@/components'
import { getAllCountries } from '@/helpers';

export default async function Home() {
  const countryDetails = await getAllCountries()

  return (
    <main className='px-4 pt-6 lg:px-20 lg:pt-12 flex flex-col gap-8'>
      <Container>
        <div className='flex flex-col lg:flex-row gap-10 lg:justify-between'>
          <Search />
          <Filter />
        </div>
      </Container>
      <Container>
        <div id='cards-wrapper' className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-[74px] md:flex-wrap mb-16'>
          {countryDetails.map((details, i) => {
            if(!details.capital) return null
            return <Card key={i} {...details}/>
          })}
        </div>
      </Container>
    </main>
  )
}
