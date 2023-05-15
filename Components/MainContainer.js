import Head from "next/head";
import Link from "next/link";
import A from "/Components/A";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={'next_js' + keywords}></meta>
                <title>Home page</title>
            </Head>
            <div className="navbar">
                <A href={"/"} text = "Home Page" />
                <A href={"/users"} text = "Users" />   
            </div>
            <div>
                {children}
            </div>
            <style>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                `}
            </style>
        </>
    );
};

export default MainContainer;