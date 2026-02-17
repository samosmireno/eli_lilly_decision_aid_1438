interface HeaderProps {
  title: string;
  centered?: boolean;
}

export function Header({ title, centered = false }: HeaderProps) {
  return (
    <header className="flex min-h-24 items-center border-b border-black bg-white">
      <h1
        className={`mx-auto w-full max-w-7xl px-4 text-2xl font-bold sm:px-8 sm:text-3xl md:text-4xl 2xl:max-w-360 ${centered ? "text-center" : "text-center lg:text-left"}`}
      >
        {title}
      </h1>
    </header>
  );
}
