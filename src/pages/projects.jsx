import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAppartogo from '@/images/logos/appartogo.svg'
import logoChessGame from '@/images/logos/chess-game.svg'
import logoTopNews from '@/images/logos/newspaper.svg'
import logoMoneyTrail from '@/images/logos/money-coin.svg'
import logoSushiTakeout from '@/images/logos/sushi.svg'
import logoOldPortfolio from '@/images/logos/portfolio-sami-avatar.png'
import logoYear1Project from '@/images/logos/year1project.svg'
import logoYear2Project from '@/images/logos/year2project.svg'
import logoYear3Project from '@/images/logos/year3project.svg'
import { SubSimpleLayout } from '@/components/SubSimpleLayout'

const projects = [
  {
    name: 'Money Trail',
    description: 'Stocks and Expenses tracker. (in-progress)',
    technologies: 'React • NodeJS • MongoDB • JWT Auth',
    link: {
      href: 'https://samitamerarar.github.io/money-trail/',
      label: 'github-pages',
    },
    logo: logoMoneyTrail,
  },
  {
    name: 'Sushi Takeout',
    description: 'Realtime sushi orders tracker.',
    technologies: 'EJS • NodeJS • MongoDB • Socket.IO',
    link: { href: 'https://sushi-takeout.samiarar.com/', label: 'nginx' },
    logo: logoSushiTakeout,
  },
  {
    name: 'Chess Game',
    description: 'Simple 2-Player Chess.',
    technologies: 'Angular • NodeJS • Socket.IO',
    link: { href: 'https://chess-game-angular.samiarar.com/', label: 'nginx' },
    logo: logoChessGame,
  },
  {
    name: 'Top News',
    description: 'News w/ Search feature.',
    technologies: 'React • NodeJS • NewsAPI',
    link: {
      href: 'https://samitamerarar.github.io/top-news/',
      label: 'github-pages',
    },
    logo: logoTopNews,
  },
  {
    name: 'my old portfolio',
    description: '-',
    technologies: 'HTML • CSS • Javascript',
    link: {
      href: 'https://samitamerarar.github.io/top-news/',
      label: 'github-pages',
    },
    logo: logoOldPortfolio,
  },
]

const academicProjects = [
  {
    name: 'Industry-sponsored project: Appartogo',
    description: 'Apartments for rent — search platform.',
    technologies: '.NET Core • C# • React',
    link: { href: 'https://appartogo.com', label: 'company website' },
    logo: logoAppartogo,
  },
  {
    name: '3rd Year Project',
    description: 'Cross-platform drawing game.',
    technologies: 'Kotlin • C# • NodeJS • MongoDB',
    link: {
      href: 'https://github.com/samitamerarar/Year-3-Project_WPF_and_Android-Project',
      label: 'github',
    },
    logo: logoYear3Project,
  },
  {
    name: '2nd Year Project',
    description: '3D Racing & Crossword games.',
    technologies: 'Angular • Typescript • NodeJS • MongoDB',
    link: {
      href: 'https://github.com/samitamerarar/Year-2-Project_MEAN_Stack-Project',
      label: 'github',
    },
    logo: logoYear2Project,
  },
  {
    name: '1st Year Project',
    description: 'Robot.',
    technologies: 'C • C++',
    link: {
      href: 'https://github.com/samitamerarar/Year-1-Project_Programming_AVR_Robot-Project',
      label: 'github',
    },
    logo: logoYear1Project,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Sami Arar</title>
        <meta name="description" content="My projects." />
      </Head>
      <SimpleLayout
        title="Projects"
        intro="Displayed here is a compilation of personal projects, predominantly executed during my academic journey at the university. Hosted using AWS Services."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target="_blank">
                  {project.name}
                </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative mt-3 flex text-sm font-light text-zinc-400 dark:text-zinc-200">
                {project.technologies}
              </p>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>

      <SubSimpleLayout
        title="Academic projects"
        intro="Projects undertaken within the university program."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {academicProjects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target="_blank">
                  {project.name}
                </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative mt-3 flex text-sm font-light text-zinc-400 dark:text-zinc-200">
                {project.technologies}
              </p>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SubSimpleLayout>
    </>
  )
}
