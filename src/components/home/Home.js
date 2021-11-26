import Layout from "../Layout";
import HomeElements from "./HomeElements";
const Home = () => {
    return (
        <Layout title="Home" className="container-fluid mt-5 bg-dark text-white">
            {HomeElements()}
        </Layout>
    )
}

export default Home;