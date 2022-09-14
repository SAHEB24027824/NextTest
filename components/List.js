import ListItem from "./ListItem";


function List({users , searchTxt}) {

  searchTxt=searchTxt.toLowerCase();
  let filteredUser = users.filter(user=>{
    if(user.name.toLowerCase().includes(searchTxt)||user.phone.toLowerCase().includes(searchTxt)||user.email.toLowerCase().includes(searchTxt)){
      return user;
    }
  })

  return (
    <>
      <div className="row p-4">
        <div className="col">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {
              filteredUser.length>0 ?
              filteredUser.map(user=>{
                return(
                  <ListItem key={user.id} user={user}/>
                )
              })
              :
              <tr><td>No User Found ...</td></tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default List;
