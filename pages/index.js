import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm baby poutine vice meh 8-bit hot chicken air plant four loko microdosing. Pickled brunch health goth cold-pressed, flannel keytar literally street art gochujang brooklyn yuccie green juice small batch edison bulb. Flannel chillwave selvage butcher glossier affogato beard actually church-key twee intelligentsia. Post-ironic meh hoodie, air plant next level truffaut listicle ramps live-edge.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}