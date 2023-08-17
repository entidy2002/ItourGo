import "~/styles/globals.css";

import { MyAppProps } from "~/layout/types";
import { Layouts } from "~/layout/Layouts";
function App({ Component, pageProps }: MyAppProps, { session }: any) {
  const Layout = Layouts[Component.Layout] ?? ((page: any) => page);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default App;
