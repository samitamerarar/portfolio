import Head from 'next/head';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import { getAllArticles } from '@/lib/getAllArticles';
import { formatDate } from '@/lib/formatDate';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

function Article({ article, lang, i18n }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date, lang)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>{i18n('article_readarticle')}</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date, lang)}
      </Card.Eyebrow>
    </article>
  );
}

export default function ArticlesIndex({ articles }) {
  const { t } = useTranslation('articles');
  const lang = useTranslation().i18n.language;

  return (
    <>
      <Head>
        <title>{t('head_title', { name: 'Sami Arar' })}</title>
        <meta name="description" content={t('head_content')} />
      </Head>
      <SimpleLayout title={t('simplelayout_title')} intro={t('head_content')}>
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article
                key={article.slug}
                article={article}
                lang={lang === 'fr' ? 'fr-CA' : 'en-US'}
                i18n={t}
              />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  );
}

// using SSG (Static Site Generation) for i18n on that page only
export async function getStaticProps({ locale }) {
  const articles = (await getAllArticles()).map(
    ({ component, ...meta }) => meta
  );
  return {
    props: {
      articles,
      ...(await serverSideTranslations(locale, ['articles'])),
    },
  };
}
