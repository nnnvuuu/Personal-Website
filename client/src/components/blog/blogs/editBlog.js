import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
// }));


const editBlog = (props) => {

  // const classes = useStyles();
 

  
  const handleEdit = e =>{

  }


  
  
  return (
    <div>
           <Button
           variant="contained"
           color="secondary"
           className={props.classes.button}
           startIcon={<EditIcon />}
           onClick={()=> handleEdit(props.postID)}
         >
           Edit
         </Button>
         
    </div>
  );
};

export default editBlog;