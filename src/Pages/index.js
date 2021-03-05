import Layout from "../Components/Layout/index";
import Feed from '../Components/Feed/index';
import Suggestions from '../Components/Suggestions/index'

function Index({ posts = [] }) {
    return (
        <Layout>
            <Feed posts={posts}></Feed>
        </Layout>
    )
};

export default Index;