import React from 'react'

class Users extends React.Component {
  render() {
  	const { params } = this.props.match
  	return(
  	<div>
  	<br />
    <h2> <b>Users:</b> {params.id} </h2>
    <h2> <b>Name:</b> XXXXXX </h2>
    <p> <b>***</b>It helps in display all users as well as particular user's profile or account.</p>
    <p>For Example: <br /> try to append 1 or 2 or any number in url, like "users/1"</p>
    </div>
    )
  }
}

export default Users