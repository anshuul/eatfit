import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout/Layout'
import "../styles/global.css";
import { RecoilRoot } from "recoil"

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  ) 

}

export default MyApp
