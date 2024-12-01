const Header = ({ headerImage }) => {
    return (
        <div>
            < img src={headerImage} alt="Header background" className="h-48 w-full object-cover object-center" />
        </div >
    )
}

export default Header;