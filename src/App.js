import React, {Component} from "react";
import "./antd.less";
import "./tailwind.css";
import { CardContainer } from "./components/card-container/card-container.component";
import {Navigation} from "./components/Navigation/navigation.component";
import {SearchBox} from "./components/SearchInput/searchbox.component"
class App extends Component{
  constructor(){
    super();

    this.state={
      members:[],
      images:[],
      searchField:''
    }
  }
  async componentDidMount(){
   await fetch("https://api.unsplash.com/search/photos?query=profile-woman&client_id=O0wkFUECnrEhDRZ0g1OoezjgvDchHESiOUEmXW5yy-Y&orientation=squarish")
    .then(response=>response.json())
    .then(images=>this/this.setState({images:images}));

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(users=>this.setState({members:users}));
    
  

  }
  handleSearchChange=e=>{
    this.setState({searchField:e.target.value});
    console.log(e);
  }
  render(){
    const{members,searchField}=this.state;
    const onSearch = value => console.log(value);
    const filteredMembers=members.filter(member=>member.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div>
        <Navigation/>
        <h1 className="font-Gilroy ml-32 mt-11 text-2xl text-Indepedence text-opacity-80">Bloggers Directory</h1>
        <SearchBox searchValue={onSearch} handleChange={this.handleSearchChange}/>
        <CardContainer images={this.state.images} members={filteredMembers} />
      </div>
    )
  }
};
export default App;