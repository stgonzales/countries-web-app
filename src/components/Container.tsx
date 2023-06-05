export default function Container({children}: {children: React.ReactNode}) {
  return <div className="w-full max-w-[343px] md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">{children}</div>
}