
export default function Layout(props) {
    return(
        <div className="Login">
            <input className="Input1" type='text' value={props.dataDetails.username}  name='Username' placeholder='Username' onChange={(e) => {props.changeDataDetails(e.target.value)}}/>
            <input className="Input2" type='text' value={props.dataDetails.password}  name='Password' placeholder='Password' onChange={(e) => {props.changeDataPassword(e.target.value)}}/>
            <button className="button-login" onClick={props.checking}>LOGIN</button>
        </div>
    )
}