

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
    return (
        <div className="W-full h-screen flex justify-center items-center">
            <div className="w-[400px] h-[600px] rounded-xl shadow-2xl bg-gray-200 relative overflow-hidden">
                {children}
            </div>
        </div>
    );
}

export default Layout;
