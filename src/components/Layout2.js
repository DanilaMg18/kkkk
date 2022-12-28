import { Outlet, Link } from "react-router-dom"

export default function Layout2() {
    return(
        <div>
            <header>
                <nav>
                    <Link to='/'>Главная</Link>
                    <Link to='/contacts'>Контакты</Link>
                    <Link to='/new'>Создать пост</Link>
                    <Link to='posts'>Посты</Link>
                </nav>
            </header>
            <Outlet/>
            <footer>Я футер!!!!!</footer>
        </div>
        

    )
}