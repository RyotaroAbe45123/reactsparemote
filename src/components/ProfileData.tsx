type Props = {
    graphData: {
        givenName: string,
        surname: string,
        userPrincipalName: string,
        id: string
    }
}

export const ProfileData = (props: Props) => {
    return (
        <div id="profile-div">
            <p>
                <strong>First Name: </strong> {props?.graphData.givenName}
            </p>
            <p>
                <strong>Last Name: </strong> {props?.graphData.surname}
            </p>
            <p>
                <strong>Email: </strong> {props?.graphData.userPrincipalName}
            </p>
            <p>
                <strong>Id: </strong> {props?.graphData.id}
            </p>
        </div>
    )
    }