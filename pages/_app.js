import Layout from '../comps/Layout'
import '../styles/globals.css'

// per rendere dei componenti utilizzabili in tutte le pagine creo un
// componente che li racchiude tutti
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
