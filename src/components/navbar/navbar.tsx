import { useHistory } from "react-router-dom";
import { Menubar } from 'primereact/menubar';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
    const history = useHistory();
    const items = [
        {
            label: 'Counter',
            icon: 'pi pi-fw pi-th-large',
            command: () => history.push('/counter')
        },
        {
            label: 'Users',
            icon: 'pi pi-fw pi-user',
            command: () => history.push('/users')
        }
    ];
    const start = <img alt="logo" src={logo} height="40"></img>;
    return (
        <div className="container">
            <Menubar model={items} start={start}/>
        </div>
    )
}

export default Navbar
