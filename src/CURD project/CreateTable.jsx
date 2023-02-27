import React, { Component } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DialogContent, DialogTitle, TextField } from '@mui/material';


class CreateTable extends Component {
    constructor(props){
        super(props)
        this.state={
            data1:[],
            userid:' ',
            title:' ',
            body:' '
        }
    }
    
    componentDidMount=async()=>{
       
         let result = await axios .get('https://jsonplaceholder.typicode.com/posts')
         console.log(result)
         this.setState({
            data1 :result.data
         })
    }
        handleuserid(e){
            this.setState({userid:e.target.value})
        }
        handletitle(e){
            this.setState({title:e.target.value})
        }
        handlebody(e){
            this.setState({body:e.target.value})
        }
    render() {
        const {post} = this.state.data1
        return (<>
          <button variant="outlined" onClick={this.handlebtn} className='my-3' style={{marginLeft: '85%'}}>
            ADD POST
          </button>
            <dialog open={this.state.open} onClose={() =>this.setState(false)}>
                <DialogTitle>Fill Up</DialogTitle>
                <DialogContent>
                    <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    label="User id"
                    type={'text'}
                    fullWidth
                    variant='standard'
                    value={this.state.userid}
                    onChange={this.handleuserid}
                    />
                    <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    label="Title"
                    type={'text'}
                    fullWidth
                    variant='standard'
                    value={this.state.title}
                    onChange={this.handletitle}
                    />
                    <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    label="User id"
                    type={'text'}
                    fullWidth
                    variant='standard'
                    value={this.state.body}
                    onChange={this.handlebody}
                    />
                </DialogContent>
            </dialog>
            <div>
                 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
        
            <StyledTableCell align="right">UserId</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">Body</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {this.state.data1.map((row)=>(
              <StyledTableRow key={row.id}>
                <TableCell align="right">{row.UserId}</TableCell>
              <TableCell align="right">{row.Title}</TableCell>
              <TableCell align="right">{row.Body}</TableCell>
              <EditIcon sx={{ m: 0.7}} />
              <DeleteIcon sx={{ m: 0.7}} onclick={()=> this.handledelete(row.id)} />
              </StyledTableRow>
             
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
            </>
        );
    }
}

export default CreateTable;