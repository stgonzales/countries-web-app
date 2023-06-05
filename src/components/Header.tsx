import { Container } from ".";

export default function Header() {
  return (
    <header className="shadow bg-white dark:bg-dark-blue-100">
      <Container>
        <div className="flex items-center justify-between py-[30px] lg:py-6">
          <h1 className='text-sm lg:text-2xl font-extrabold'>Where is the world?</h1>
          {/* //TODO toggle element need to be client side and decoupled */}
          <div className="flex items-center gap-2">
            <svg className="w-[14px] h-[13px] md:w-[15px] md:h-[14px] stroke-dark-blue-300 fill-none dark:fill-white dark:stroke-none" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.84257 9.052C6.73486 9.052 4.21543 6.74226 4.21543 3.89457C4.21543 2.82024 4.57343 1.82526 5.18514 1C2.75229 1.75612 1 3.86498 1 6.35045C1 9.47079 3.75943 12 7.16286 12C9.87429 12 12.1757 10.3945 13 8.16362C12.1 8.72383 11.0129 9.052 9.84257 9.052Z"/></svg>
            <p className='text-xs lg:text-base font-semibold'>Dark Mode</p>
          </div>
        </div>
      </Container>
    </header>
  )
}