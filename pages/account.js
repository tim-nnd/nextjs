import Image from 'next/image'
import styles from './page.module.css'
import NextScript from 'next/script'

export default function Home() {
  return (
    <main className={styles.main}>
      <NextScript id="functions" dangerouslySetInnerHTML={{
          __html: `
          function handleResponse() {
            var urlTextElement = document.getElementById('urlText');
            urlTextElement.innerHTML = "Current url with params " + window.location.href
        
            return true
          }
          `,
        }}
        />
      <div className={styles.description}>
        <p>
          Account Page
        </p>
        <p id="urlText">URL Text</p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs-tim-nnd.vercel.app/account/delete"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Delete <span>-&gt;</span>
          </h2>
        </a>

        <a
          href="https://nextjs-tim-nnd.vercel.app/order"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Order <span>-&gt;</span>
          </h2>
        </a>
      </div>
    </main>
  )
}
