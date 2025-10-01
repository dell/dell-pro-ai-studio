import {Footer, LastUpdated, Layout, Navbar} from 'nextra-theme-docs'
import {Banner, Head} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Image from 'next/image'
import DellLogo from 'content/assets/Dell_Technologies_logo.svg'

//https://github.com/shuding/nextra/tree/main/examples/docs
export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const banner = <Banner storageKey="v1.1">V1.1 is out now!</Banner>
const navbar = (
    <Navbar
logo={
  <div style={{ display: 'flex', alignItems: 'center' }}>
     <Image
      src={DellLogo}
      style={{
            width: "40%",
            height: "auto"
        }}
      alt="Logo"
    />
    <div
      style={{
        height: '1.5em',
        width: '1px',
        backgroundColor: '#ccc',
        margin: '0 12px'
      }}
    />
    <span style={{ fontWeight: 600, fontSize: '1em' }}>Dell Pro AI Studio</span>
  </div>
}

        // ... Your additional navbar options
        projectLink="https://github.com/dell/dvd-ai-pc-rag"
    />
)

const footer = <Footer>Dell Pro AI Studio {new Date().getFullYear()} ©</Footer>


export default async function RootLayout({children}) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
        <Head
            // ... Your additional head options
        >
            <link rel="shortcut icon" href="favicon.ico"/>
            <link rel="icon" href="favicon.ico"/>

            {/* Your additional tags should be passed as `children` of `<Head>` element */}
        </Head>
        <body>
        <Layout
            banner={banner}
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/dell/dvd-ai-pc-rag/tree/main"
            feedback={{
                content: null
            }}
            editLink = {null}
            footer={footer}
            lastUpdated = {<LastUpdated date={null} /> }
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}