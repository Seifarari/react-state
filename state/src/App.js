
import './App.css';
import photo from 'C:/Users/Admin/OneDrive/Bureau/gomycode/react-state/state/src/components/me.jpg'
import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Seif Allah Arari",
        bio: "GO MY CODE STUDENT",
        imgSrc: photo,
        profession: "Web developer"
      },
      time: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: this.state.time+1}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  state = {

    Person: {
      fullName: "Seif Allah Arari",
      bio: "GO MY CODE STUDENT ",
      imgSrc: photo,
      profession: "Web Developer"
    },

    shows: false
  };

  toggle = () => this.setState({ ...this.state, shows: !this.state.shows })

  render() {
    return (
      <>
        {this.state.shows && (
          <div className="App" style={{backgroundColor:"white"}} >
             <img src={this.state.Person.imgSrc} style={{ width: 350, paddingTop: 50}} className="photo" alt="" />
            <div className="fullName" style={{fontSize: 35, color:'black' }}> {this.state.Person.fullName}</div>
            <div className="bio" style={{ color: "skyblue", fontSize: 27 }}>{this.state.Person.bio}</div>
            <div className="profession" style={{  fontSize: 40,   textDecoration: "underline ", color:'rgb(200, 150, 105)'}}>{this.state.Person.profession}</div>
            <h6 style={{color:'white'}}>The last component was mounted since : {this.state.time}s</h6>
          </div>
        )}
        <button  onClick={this.toggle} className="btn" >My profile </button>
      </>
    )
  }
}
export default App;
