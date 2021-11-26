import { useEffect } from "react";
import Menu from "./Menu";


const Layout = ({ title = 'Title', className, children }) => {
    useEffect(() => {
        document.title = title;
    }, [])
    return (
        <div>
            <div className='mb-3'>
                <Menu />
            </div>
            <div className={className}>{children}</div>
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-auto">

                            <span>BeStable &#169; 2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Layout;