import logo from '../img/logo.png';

function PrincipalPage() {

    return (
        <div>
            <header className="header">
                <div className="title_logo">
                    <h2 className="titlehome">HealMind</h2>
                    <img src={logo} alt="" className="logohome" />
                </div>
            </header>
        </div>
    )
}

export default PrincipalPage

