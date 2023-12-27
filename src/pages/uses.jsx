import Head from 'next/head';

import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['uses'])),
    },
  };
}

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Uses() {
  const { t } = useTranslation('uses');
  return (
    <>
      <Head>
        <title>{t('head_title', { name: 'Sami Arar' })}</title>
        <meta name="description" content={t('head_content')} />
      </Head>
      <SimpleLayout
        title={t('simplelayout_title')}
        intro={t('simplelayout_intro')}
      >
        <div className="space-y-20">
          <ToolsSection title={t('toolssection1_title')}>
            <Tool title={t('toolssection1_tool1_title')}>
              {t('toolssection1_tool1_content')}
            </Tool>
            <Tool title={t('toolssection1_tool2_title')}>
              {t('toolssection1_tool2_content')}
            </Tool>
            <Tool title={t('toolssection1_tool3_title')}>
              {t('toolssection1_tool3_content')}
            </Tool>
          </ToolsSection>
          <ToolsSection title={t('toolssection2_title')}>
            <Tool title={t('toolssection2_tool1_title')}>
              {t('toolssection2_tool1_content')}
            </Tool>
          </ToolsSection>
          <ToolsSection title={t('toolssection3_title')}>
            <Tool title={t('toolssection3_tool1_title')}>
              {t('toolssection3_tool1_content')}
            </Tool>
          </ToolsSection>
          <ToolsSection title={t('toolssection4_title')}>
            <Tool title={t('toolssection4_tool1_title')}>
              {t('toolssection4_tool1_content')}
            </Tool>
          </ToolsSection>
          <ToolsSection title={t('toolssection5_title')}>
            <Tool title={t('toolssection5_tool1_title')}>
              {t('toolssection5_tool1_content')}
            </Tool>
          </ToolsSection>
          <ToolsSection title={t('toolssection6_title')}>
            <Tool title={t('toolssection6_tool1_title')}>
              {t('toolssection6_tool1_content')}
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  );
}
