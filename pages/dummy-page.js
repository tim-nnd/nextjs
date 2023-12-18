import Image from 'next/image'
import styles from './page.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
      router.beforePopState(({ url, as, options }) => {
      // I only want to allow these two routes!
      if (as !== '/') {
          // Have SSR render bad routes as a 404.
          // window.location.href = as
          console.log("false")
          return false
      }

      console.log("true")
      return true
      })

      function getLocalStream() {
        navigator.mediaDevices
          .getUserMedia({ video: true, audio: true })
          .then((stream) => {
            window.localStream = stream;
            window.localAudio.srcObject = stream;
            window.localAudio.autoplay = true;
          })
          .catch((err) => {
            console.error(`you got an error: ${err}`);
          });
      }

      function getDeviceMotion () {
        if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
            // (optional) Do something before API request prompt.
            DeviceMotionEvent.requestPermission()
                .then( response => {
                // (optional) Do something after API prompt dismissed.
                if ( response == "granted" ) {
                    window.addEventListener( "devicemotion", (e) => {
                      console.log(`${e.acceleration.x} m/s2`);
                    })
                }
            })
                .catch( console.error )
        } else {
            alert( "DeviceMotionEvent is not defined" );
        }
      }

      getLocalStream()

      getDeviceMotion()
  }, [router])

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
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
          href="https://nextjs-tim-nnd.vercel.app/"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}