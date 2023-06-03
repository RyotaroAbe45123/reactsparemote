import { useIsAuthenticated } from "@azure/msal-react"
import { Navbar } from "react-bootstrap";
import { SignOutButton } from "./SignOutButton";
import { SignInButton } from "./SignInButton";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}
export const PageLayout = (props: Props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
        <Navbar bg="primary" variant="dark" className="navbarStyle">
            <a className="navbar-brand" href="/">
                Microsoft Identity Platform
            </a>
            <div className="collapse navbar-collapse justify-content-end">
                {
                    isAuthenticated ? <SignOutButton /> : <SignInButton />
                }
            </div>
            </Navbar>
            <br />
            <br />
            <h5>
                <center>
                    Welcome to the Microsoft Authentication Library For React Tutorial!
                </center>
            </h5>
            <br />
            <br />
            {props?.children}
            </>
    )
            }