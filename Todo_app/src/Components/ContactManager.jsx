import {Component} from 'react';
import './style.css'


export class Todo extends Component{

    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            todoData:[],
            editIndex:null
        }
    }



    handleInputChangeName(e){
        this.setState({name:e.target.value})
    }    

    handleInputChangeEmail(e){
        this.setState({email:e.target.value})
    }    

    handleSubmit(){
        if (this.state.name.length>0 && this.state.email.length>0){
        this.setState({todoData:[...this.state.todoData,{name:this.state.name, email:this.state.email}],name:'',email:''});
    }else{
        alert('Enter Details')
    }
}

    componentDidMount(){
        const data=localStorage.getItem('todo')
        if (data){
        this.setState({todoData:JSON.parse(data)})
        }else{
            this.setState({todoData:[]})
        }
    }
    componentDidUpdate(prevProp, prevState){
        if(prevState.todoData.length!==this.state.todoData.length){
        localStorage.setItem('todo',JSON.stringify(this.state.todoData))
        }else if(prevState.editIndex!==this.state.editIndex){
            localStorage.setItem('todo',JSON.stringify(this.state.todoData))
        }
    }

    handleUpdate(){
        const{editIndex,name,email,todoData}=this.state;

    
        if (name.length>0 && email.length>0){
        const updatedData=[...todoData]
        updatedData.splice(editIndex,1,{name,email})
        this.setState({todoData:updatedData, editIndex:null, name:'', email:''})
    }else{
        alert('Enter Details')
    }}

    handleEdit(index){
        console.log('delete',index)
        // this.setState({editIndex:index, name:this.state.todoData[index].name})
        // this.setState({editIndex:index, email:this.state.todoData[index].email})

            // Calling setState() twice in a row like that can cause issues — React batches updates asynchronously. like above
        const contact=this.state.todoData[index];
        this.setState({
            editIndex:index,
            name:contact.name,
            email:contact.email
        })
    }

    handleDelete(index){
        // console.log('delete',index)
        this.state.todoData.splice(index,1)
        this.setState({todoData:this.state.todoData})
    }


    render(){
        // console.log(this.state.todoData,this.state.editIndex)
        return<>
        <div>
            <h1>Contact Manager</h1>
            <div>
                <input type="text" placeholder='Enter Contact Name' onChange={(e)=>this.handleInputChangeName(e)} value={this.state.name} />
                <input type="text" placeholder='Enter Contact Email' onChange={(e)=>this.handleInputChangeEmail(e)} value={this.state.email} />
                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
                {this.state.editIndex===null?<button type='submit' onClick={()=>this.handleSubmit()}>Add</button>: <button onClick={()=>this.handleUpdate()}>Update</button>}
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th className='action'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                            {/* <td>Balu</td>
                            <td>@gmail</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td> */}
                            {
                                this.state.todoData.map((contact, index)=> <tr key={index}> 
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td><button onClick={()=>this.handleEdit(index)}>Edit</button></td>
                                    <td><button onClick={()=>this.handleDelete(index)}>Delete</button></td>
                                </tr> )
                            }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    }
}