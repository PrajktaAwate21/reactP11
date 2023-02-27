import React, { Component } from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
 class Create extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[],
         userid :'',
         title :'',
         body :''
      }
    }
   async componentDidMount(){
       const response=await axios.get("https://jsonplaceholder.typicode.com/posts")
       const test=response.data
       console.log(test)
       this.setState({
         data: test
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
    const handleClickOpen = () => {
      this.setState({
          open:true
      })
     
    };
    const handleClose = () => {
      this.setState({
          open:false
      })
    };
    return (
        <>
        <Button variant="outlined" onClick={handleClickOpen}>
        Add New Posts
      </Button>
            <dialog open={this.state.open} onClose={handleClose}>
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
                <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
            </dialog>
          
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          
            <StyledTableCell align="right">UserId</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">Body</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.user.map((row) => (
            <StyledTableRow key={row.id}>
    
              <StyledTableCell align="right">{user.userid}</StyledTableCell>
              <StyledTableCell align="right">{user.title}</StyledTableCell>
              <StyledTableCell align="right">{user.body}</StyledTableCell>
             <EditIcon sx={{ m: 0.7 }} />
             <DeleteIcon sx={{ m: 0.7 }} onclick={()=> this.handledelete(row.id)} />
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

 
      
  </>
    )
      }
    }
export default Create













// <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
          
//             <StyledTableCell align="right">UserId</StyledTableCell>
//             <StyledTableCell align="right">Title</StyledTableCell>
//             <StyledTableCell align="right">Body</StyledTableCell>
//             <StyledTableCell align="right">Actions</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {this.state.user.map((row) => (
//             <StyledTableRow key={row.id}>
    
//               <StyledTableCell align="right">{user.userid}</StyledTableCell>
//               <StyledTableCell align="right">{user.title}</StyledTableCell>
//               <StyledTableCell align="right">{user.body}</StyledTableCell>
//              <EditIcon sx={{ m: 0.7 }} />
//              <DeleteIcon sx={{ m: 0.7 }} onclick={()=> this.handledelete(row.id)} />
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
