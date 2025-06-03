import { Container } from '@/components/Container';

export function SubSimpleLayout({ title, intro, intro2, subintro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h2 className="text-3xl tracking-tight text-zinc-800 dark:text-zinc-200 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          {intro + ' '}
          {intro2 && <span className="line-through">{intro2}</span>}
        </p>
        {subintro && (
          <p className="mt-2 text-sm font-bold text-zinc-500 dark:text-zinc-400">
            {subintro && <span>{subintro}</span>}
          </p>
        )}
      </header>
      <div className="mt-12 sm:mt-16">{children}</div>
    </Container>
  );
}
