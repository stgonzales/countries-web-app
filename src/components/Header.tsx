import { Container, ToggleTheme } from ".";

export default function Header() {
  return (
    <header className="shadow bg-white dark:bg-dark-blue-100">
      <Container>
        <div className="flex items-center justify-between py-[30px] lg:py-6">
          <h1 className='text-sm lg:text-2xl font-extrabold'>Where is the world?</h1>
          <ToggleTheme/>
        </div>
      </Container>
    </header>
  )
}