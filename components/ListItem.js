function ListItem({user}){
    return(
    <>
    <tr className="whiteBG">
                     <td><img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" width='50' /></td>
                     <td >{user.name}</td>
                     <td>{user.phone}</td>
                     <td>{user.email}</td>
    </tr>
    </>
    );
}

export default ListItem;