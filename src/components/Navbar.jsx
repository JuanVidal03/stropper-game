import senaLogo from "../assets/logoSena.png";


const Navbar = () => {
    return (
        <div className="bg-green-600 p-4 flex justify-between items-center">
            <figure className="w-[50px] bg-white rounded-full p-2">
                <img src={senaLogo} alt="" />
            </figure>           
            <div>
                <h1 className="text-3xl text-white font-bold">Stropper</h1>
            </div>
        </div>
    );
}

export default Navbar;
