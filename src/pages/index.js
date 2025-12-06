import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Create full technical books using AI + Specs + Docusaurus.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Reading the Book 📖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="AI Spec-Driven Book"
      description="Learn how to create books using AI + Specs + Docusaurus">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.mainSection}>
          <div className="container">
            <h2>Why This Book?</h2>
            <p>
              Learn how to write structured specs, generate content using AI, and
              deploy a Docusaurus book to GitHub Pages — all step by step.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

