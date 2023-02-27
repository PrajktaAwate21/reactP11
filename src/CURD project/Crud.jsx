
import * as React from 'react';
 
import axios from 'axios'

// use material Ui table
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// use Button MUi
import Button from '@mui/material/Button';

// use TextFeild MUI
import TextField from '@mui/material/TextField';

// use DialogBox MUI
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// Use Delete Icon
import DeleteIcon from '@mui/icons-material/Delete';
// use editIcon
import EditIcon from '@mui/icons-material/Edit';
// import { type } from '@testing-library/user-event/dist/type';

//  MUI use fo Table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


// crete class comp

export class Crud extends React.Component {

  // Data fetch krnyasathi constructor use
  constructor() {
    super()

    this.state = {
      data1: [],  // data empty
      userId: "",
      title: "",
      body: "", // emty dilog
      open: false  // first button of nntr
    }
  }
  //  data fetch 

  async componentDidMount() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(result)
    this.setState({
      data1: result.data   // not empty data mla data pahije ...Data key chi value ahe
    })
  }

  handlebtn = () => {
    this.setState({ open: true })  // form open honyasathi
  }

  // jeve object mdla data get kraycha asel teva key use krto
  // & state change krnar
  handleuserId = (e) => {
    this.setState({ userId: e.target.value })
  }
  handletitle = (e) => {
    this.setState({ title: e.target.value })
  }
  handlebody = (e) => {
    this.setState({ body: e.target.value })
  }

  // submit sathi

  handlesubmit = () => {
    const result1 = axios('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",  // react post method
      body: JSON.stringify({
        userId: this.state.userId,
        title: this.state.title,
        body: this.state.body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    this.setState({ open: false })
    console.log(this.state.userId, this.state.title, this.state.body)
  }

  //  delete sathi
  async handledelete(id) {
    let text = "do you want to delete"
    if (window.confirm(text) == true) {
      const respond = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      console.log(respond)

    } else {
      text = "Exit..."
    }
  }

  render() {
    return (
      <div className='container'>
        <Button variant="outlined" onClick={this.handlebtn} className='my-3' style={{ marginLeft: '85%' }}>Add post</Button>
        <Dialog
          open={this.state.open}
          onClose={() => this.setState(false)}>
          <DialogTitle>Fill Up</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              id="name"
              label="userId"
              type="text"
              fullWidth
              variant="standard"
              value={this.state.userId}  // ---> varti emty first value
              onChange={this.handleuserId}  //---> data change hot asto
            />
            <TextField
              autoFocus
              margin='dense'
              id="name"
              label="title"
              type="text"
              fullWidth
              variant="standard"
              value={this.state.title}
              onChange={this.handletitle}
            />
            <TextField
              autoFocus
              margin='dense'
              id="name"
              label="body"
              type="text"
              fullWidth
              variant="standard"
              value={this.state.body}
              onChange={this.handlebody}
            />
          </DialogContent>
          <DialogActions>

            <button onClick={() => this.setState({ open: false })}>cancle</button>
            {/* flase  close */}
            <button onClick={() => this.handlesubmit()}>submit</button>
          </DialogActions>


        </Dialog>

        <div>

          {/* using ui table */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">User_Id</StyledTableCell>
                  <StyledTableCell align="center">Title</StyledTableCell>
                  <StyledTableCell align="center">Body</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.data1.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell align="center">{row.userId}</StyledTableCell>
                    <StyledTableCell align="center">{row.title}</StyledTableCell>
                    <StyledTableCell align="center">{row.body}</StyledTableCell>
                    <EditIcon sx={{ m: 0.7 }} />
                    <DeleteIcon sx={{ m: 0.7 }} onClick={() => this.handledelete(row.id)} />
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </div>
      </div>
    )
  }
}

export default Crud




