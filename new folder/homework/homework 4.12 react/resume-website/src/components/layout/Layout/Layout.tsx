import Detail from '../detail/Detail';
import Skill from '../skill/Skill';
import Header from '../header/Header';
import './Layout.css';

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Header />
            </header>

            <aside>
                <Detail />
            </aside>

            <main>
                <Skill />
            </main>
        </div>
    )
}

export default Layout;