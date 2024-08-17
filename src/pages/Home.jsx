import Layout from "../layout/Layout.jsx";
import Navbar from "../components/Navbar.jsx";

import { faGear, faStar, faPlay} from '@fortawesome/free-solid-svg-icons';
import ItemMenu from "../components/ItemMenu.jsx";


const Home = () => {

    const navigation = [
        { title: "Jugar", icon: faPlay, url: "/play"},
        { title: "Configuraciones", icon: faGear, url: "/options"},
        { title: "Puntuaciones", icon: faStar, url: "/highest-scores"},
    ]

    return (
        <Layout>
            <Navbar/>
            <div className="p-8">
                <h3 className="text-center text-xl font-bold">Bienvenido!</h3>
                <div className="flex justify-center flex-wrap gap-4 h-full items-center pt-12">
                    {
                        navigation?.map((itemNav, index) => (
                            <ItemMenu
                                key={index}
                                icon={itemNav.icon}
                                tile={itemNav.title}
                                url={itemNav.url}
                            />
                        ))
                    }
                </div>
            </div>
            
        </Layout>
    );
}

export default Home;
