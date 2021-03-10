import Layout from "../Components/Layout/index";
import Feed from '../Components/Feed/index';
import Suggestions from '../Components/Suggestions/index';

function Index({ posts }) {
    return (
        <Layout>
            <Feed posts={posts}></Feed>
            <Suggestions />
        </Layout>
    )
};
export async function getServerSideProps(context) {
    const data = [
          {
            id: 1,
            author: {
              id: 1,
              avatar:
                'https://p16-va.tiktokcdn.com/img/musically-maliva-obj/1658913186824198~c5_100x100.jpeg',
              name: 'Lucas Nhimi',
              username: 'lucasnhimi',
            },
            description: '',
            tags: [{ title: '#youtube' }, { title: '//#endregionclone' }],
            songName: 'WAP (feat. Megan Thee Stallion) - Cardi B',
            videoUrl:
              'https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/9e43b502f31648eba3b611ffef7f67b8/?a=1988&br=3988&bt=1994&cd=0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=3&er=&expire=1615428705&l=202103102011390101890370221F3E1875&lr=tiktok_m&mime_type=video_mp4&pl=0&policy=2&qs=0&rc=aml2PHJqPGk8MzMzODczM0ApOTg3OzU3N2Q0N2lpODk6aGc1MTI2ZW5kZi1gLS0yMTZzczVhM2AxX18tYDJeNjE1NGM6Yw%3D%3D&signature=f4eb998e3ef6c1ce1889338fe6480a52&tk=tt_webid_v2&vl=&vr=',
            likes: 650,
            comments: 10,
            replies: 50,
          },
          {
            id: 2,
            author: {
              id: 1,
              avatar:
                'https://p16-va.tiktokcdn.com/img/musically-maliva-obj/1658913186824198~c5_100x100.jpeg',
              name: 'Lucas Nhimi',
              username: 'lucasnhimi',
            },
            description: 'Vídeo teste para clone de interface',
            tags: [{ title: '#youtube' }, { title: '#clone' }],
            songName: 'Tampa Curhat Beat - TampaCurhat',
            videoUrl:
              'https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/973f0f0629434a22b43908482b00de14/?a=1988&br=4454&bt=2227&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1615427983&l=20210310195919010190209216333CC781&lr=tiktok_m&mime_type=video_mp4&pl=0&policy=2&qs=0&rc=M2V3eXZ3PGR2MzMzNTczM0ApaTNlaDQ4N2VoNzg5MzVnOGcuNWBuLS02NWRgLS1hMTZzc2JfLmA0NjFiM2I0MV9jXy86Yw%3D%3D&signature=82502dfff0c8addc873f8fb550b8a469&tk=tt_webid_v2&vl=&vr=',
            likes: 650,
            comments: 10,
            replies: 50,
          },
        ];
    
    return {
        props: {
            posts: data,
        },
    };
};

export default Index;