import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500
         dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 
        0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Sami Arar</title>
        <meta
          name="description"
          content="I’m Sami Arar. I live in Montreal Metropolitan Area."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Sami Arar. I live in Montreal Metropolitan Area.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I discovered my passion for coding during my physics classes in
                school. Intrigued by the world of programming, my journey began
                with embedded programming using C++. As I delved deeper into the
                realm of technology, I found joy in creating full-stack
                applications, particularly with web frameworks like React.
              </p>
              <p>
                My curiosity led me to explore the intersection of technology,
                business and finance, where I gained expertise in Salesforce,
                Netsuite, and Amazon Web Services. Today, I specialize in
                developing and optimizing business systems, leveraging my skills
                to navigate the intricate landscape of financial and business
                technologies.
              </p>
              <p>
                In addition to my proficiency in Salesforce, Netsuite, and AWS,
                I’ve embraced the versatility of Python in my toolkit. This
                broad spectrum of skills allows me to tackle diverse challenges,
                from building robust applications to crafting efficient
                solutions that drive business success.
              </p>
              <p>
                As I continue to evolve in this dynamic field, my journey
                reflects a commitment to learning and adapting to the
                ever-changing technological landscape, including the strategic
                use of OpenAI to amplify my capabilities.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/samitamerarar"
                icon={GitHubIcon}
                className="mt-4"
              >
                My GitHub
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/samitamerarar"
                icon={LinkedInIcon}
                className="mt-4"
              >
                My LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:sami.t.arar@hotmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                sami.t.arar@hotmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
