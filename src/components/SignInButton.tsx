import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { Dropdown, DropdownButton } from "react-bootstrap";

export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType: string) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch((e) => {console.log(e)});
        } else if (loginType === "redirect") {
            instance.loginRedirect(loginRequest).catch((e) => {console.log(e)});
        }
    }

    return (
        <DropdownButton
            variant="secondary"
            className="ml-auto"
            drop="start"
            title="Sign In"
        >
            <Dropdown.Item as="button" onClick={() => handleLogin("popup")} >
                Sign in using Popup
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleLogin("redirect")}>
                Sign in use Redirect
            </Dropdown.Item>
        </DropdownButton>
    )
}