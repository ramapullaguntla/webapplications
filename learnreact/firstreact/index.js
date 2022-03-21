

function Header() {
    return (
        <header className="nav-header">            
               <img src='./images/react-icon-small.png' className="showImage"></img>
               <h1>ReactFacts</h1>
               <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>ContactUs</li>
                </ul>
            
        </header>
    )
}


function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons to like react</h1>
            <ul className="mainContentItems">
                <li>It is declarative</li>
                <li>It is Composable</li>
            </ul>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))