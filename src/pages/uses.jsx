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
        <title>{t('title', { name: 'Sami Arar' })}</title>
        <meta
          name="description"
          content="The softwares I depend on and the gadgets I adore."
        />
      </Head>
      <SimpleLayout
        title="The software and the gadgets I depend on."
        intro="My preferred tools for staying productive."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation 1">
            <Tool title="Custom-Built Windows PC (AMD Ryzen™ 7, 2023)">
              What’s better than a robust gaming PC for software development!
            </Tool>
            <Tool title="Any 34-inch 1440p widescreen monitor">
              It simplifies my workspace and keeps my desk clean.
            </Tool>
            <Tool title="Logitech G915 TKL">My go-to Windows Keyboard.</Tool>
          </ToolsSection>
          <ToolsSection title="Workstation 2">
            <Tool title="Apple MacBook Air (M2, 2022)">
              The M2 and macOS provides everything essential for a smooth and
              efficient development experience, optimal performance and
              convenience.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              If I had to live with just one text editor, it would be Visual
              Studio Code, it’s free and brimming with extensions.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              Best tool I’ve encountered for design and collaboration.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Obsidian">
              A remarkable note-taking app that significantly enhances my
              organizational efficiency.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Other recommendations">
            <Tool title="Handbrake">
              For video compression with a guarantee of maintaining picture
              quality.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  );
}
