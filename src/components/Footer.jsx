import Link from 'next/link';
import { Container } from '@/components/Container';
import { useTranslation } from 'next-i18next';

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  );
}

function Footer() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {lang === 'fr' ? (
                  <>
                    <NavLink href="/">Accueil</NavLink>
                    <NavLink href="/about">À Propos</NavLink>
                    <NavLink href="/projects">Projets</NavLink>
                    <NavLink href="/uses">Utilisations</NavLink>
                  </>
                ) : (
                  <>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/projects">Projects</NavLink>
                    <NavLink href="/uses">Uses</NavLink>
                  </>
                )}
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                🛠️ Next.js ➕ Tailwind CSS, 🚀 Vercel
              </p>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                {lang === 'fr'
                  ? `© ${new Date().getFullYear()} Sami Arar. Tous droits réservés.`
                  : `© ${new Date().getFullYear()} Sami Arar. All rights reserved.`}
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
}

export default Footer;
