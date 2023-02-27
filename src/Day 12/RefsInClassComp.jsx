import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
class RefsInClassComp extends Component {
    constructor(props) {
      super(props)
    //create ref
      this.inputRef = React.createRef()

        this.state ={
            open:false
        }
    }
   
    //access and add focus to it
    componentDidMount(){
        this.inputRef.current.focus();
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
           
            <form>
                <div className='center'>
                    Login Form
                </div>
                <div className='center'>
                    <label >User Name </label>
                    <input type="text" name="" id=""  ref={ this.inputRef} />
                    {/* Attach ref to element */}
                </div>
                <div className='center'>
                    <label >Password </label>
                    <input type="password" name="" id="" />
                </div>
                <div className='center'>
                   <button type='submit'> Submit</button>
                </div>
                {/* <div>
                     <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                </div> */}

                <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Posts
      </Button>
      <Dialog open={this.state.open} onClose={handleClose}>
        <DialogTitle>Add New Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <div className='center'>
                    Login Form
                </div>
                <div className='center'>
                    <label >User Name </label>
                    <input type="text" name="" id=""  ref={ this.inputRef} />
                    {/* Attach ref to element */}
                </div>
                <div className='center'>
                    <label >Password </label>
                    <input type="password" name="" id="" />
                </div>
                <div className='center'>
                   <button type='submit'> Submit</button>
                </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>

            </form>
           
        );
    }
}

export default RefsInClassComp;