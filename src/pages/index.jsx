import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import clsx from 'clsx';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import image1 from '@/images/photos/image-1.jpg';
import image2 from '@/images/photos/image-2.jpg';
import image3 from '@/images/photos/ai-generated-3.png';
import logoStingray from '@/images/logos/stingray.svg';
import logoMatrox from '@/images/logos/matrox.svg';
import logoPrattWhitney from '@/images/logos/prattwhitney.svg';
import logoSF from '@/images/logos/salesforce.com_logo.svg';
import logoAWS from '@/images/logos/Amazon_Web_Services_Logo.svg';
import logoNS from '@/images/logos/netsuite.svg';
// import { generateRssFeed } from '@/lib/generateRssFeed';
import { getAllArticles } from '@/lib/getAllArticles';
import { formatDate } from '@/lib/formatDate';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 
        1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Article({ article, lang, i18n }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date, lang)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>{i18n('article_readarticle')}</Card.Cta>
    </Card>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props} target="_blank">
      <Icon
        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 
      dark:group-hover:fill-zinc-300"
      />
    </Link>
  );
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 
          bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 
          focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 dark:border-zinc-700 
          dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-cyan-400 
          dark:focus:ring-cyan-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  );
}

function Resume() {
  const { t } = useTranslation('index');

  const handleDownload = async () => {
    try {
      const isConfirmed = window.confirm(`${t('resume_div_bouton')}?`);
      if (isConfirmed) {
        const url = `/${t('resume_filename')}_public.pdf`;
        const response = await fetch(url);
        const blob = await response.blob();

        // create an <a></a> tag
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.target = '_blank';
        link.download = `${t('resume_filename')}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  let resume = [
    {
      company: 'Stingray Group Inc.',
      title: t('resume_role4_title'),
      logo: logoStingray,
      start: t('resume_role4_start'),
      end: {
        label: t('resume_role4_end'),
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Stingray Group Inc.',
      title: t('resume_role3_title'),
      logo: logoStingray,
      start: t('resume_role3_start'),
      end: t('resume_role3_end'),
    },
    {
      company: 'Matrox Electronic Systems Ltd.',
      title: t('resume_role2_title'),
      logo: logoMatrox,
      start: t('resume_role2_start'),
      end: t('resume_role2_end'),
    },
    {
      company: 'Pratt & Whitney Canada',
      title: t('resume_role1_title'),
      logo: logoPrattWhitney,
      start: t('resume_role1_start'),
      end: t('resume_role1_end'),
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-3 dark:border-zinc-700/40 sm:p-6">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">{t('resume_div_h2')}</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div
              className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full
             shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
            >
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="w-[135px] text-xs text-zinc-500 dark:text-zinc-400 sm:w-auto">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        variant="secondary"
        className="group mt-6 w-full"
        onClick={handleDownload}
      >
        {t('resume_div_bouton')}
        <ArrowDownIcon
          className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 
        dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
        />
      </Button>
    </div>
  );
}

function Photos() {
  const { t } = useTranslation('index');
  const images = [
    { src: image1 },
    { src: image2 },
    { src: image3, title: t('photos_image3_title') },
  ];
  let rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
              { 'hidden md:block ': imageIndex >= 2 } // on mobile, hide the third and subsequent images
            )}
          >
            <Image
              src={image.src}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {image.title && (
              <div className="absolute inset-0 flex items-end">
                <div className="w-full bg-black bg-opacity-40 p-4">
                  <p className="text-center text-white">{image.title}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home({ articles }) {
  const { t } = useTranslation('index');
  const lang = useTranslation().i18n.language;

  return (
    <>
      <Head>
        <title>Sami Arar</title>
        <meta name="description" content={t('head_content')} />
      </Head>
      <Container className="relative mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {t('container_div1_h1', { name: 'Sami' })}
          </h1>
          <p className="mt-6 mb-2 text-base text-zinc-600 dark:text-zinc-400">
            {t('head_content')}
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              {t('container_div1_span1')}
            </span>
            <div className="flex gap-3">
              <Image src={logoSF} alt="sf" className="h-9 w-auto md:h-12" />
              <Image src={logoAWS} alt="aws" className="h-8 w-auto md:h-10" />
              <Image src={logoNS} alt="ns" className="h-10 w-auto md:h-14" />
            </div>
          </div>
          <div className="mt-4 flex gap-6">
            <SocialLink
              href="https://github.com/samitamerarar"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/samitamerarar"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article
                key={article.slug}
                article={article}
                lang={lang === 'fr' ? 'fr-CA' : 'en-US'}
                i18n={t}
              />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <Resume />
          </div>
        </div>
      </Container>
      {/* <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-1">
          <div className="space-y-10">
            <Resume />
          </div>
        </div>
      </Container> */}
    </>
  );
}

export async function getStaticProps({ locale }) {
  if (process.env.NODE_ENV === 'production') {
    // await generateRssFeed();
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['index'])),
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  };
}
