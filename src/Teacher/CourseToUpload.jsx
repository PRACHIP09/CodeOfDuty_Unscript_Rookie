import React,{useState} from 'react';
import { Grid ,
    TextField ,
    InputAdornment,
    FormHelperText,
    Button, } from '@mui/material';
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import DescriptionIcon from '@mui/icons-material/Description';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EditIcon from '@mui/icons-material/Edit';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import Validation from './TeacherValidation';
import {useHistory} from 'react-router-dom';

const CourseToUpload = () => {
    const history = useHistory();
    const [values, setValues] = useState({
        name: "",
        price: "",
        videos: "",
        description: "",
        level: "",
        notes: "",
      });
    const [errors, setErrors] = useState({});
    const [notValid, setCorrectData] = useState(true);
    const handleChanges = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
      console.log(values);
    };


  return (
  <div style={{paddingLeft:"6vh" ,paddingTop:"2vh" , paddingRight:"1vh"}}>
      <Grid spacing={3}>
                
                <div style={{padding:"0 0 20px 0" , fontSize:"1.5rem" , textAlign:"left" , color:"#141b37"}}>
                Upload New Courses
                </div>
                {/* for name*/}
                <Grid container spacing={3} style={{paddingBottom:"2vh"}}>
                    <Grid item md={8} sm={8} xs={8}>
                    <TextField
                    id="outlined-basic"
                    label="Course Name"
                    color="primary"
                    type="text"
                    error={errors.name}
                    name="name"
                    variant="outlined"
                    value={values.name}
                    fullWidth
                    autoComplete='off'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PermContactCalendarIcon color="primary"/>
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleChanges}
                    />
                    {errors.name ? (
                    <FormHelperText error>{errors.name}</FormHelperText>
                    ) : (
                    <FormHelperText style={{ visibility: "hidden" }}>
                      ..
                    </FormHelperText>
                    )}
                    </Grid>
                </Grid>
                {/*for description*/}
                <Grid container spacing={3} style={{paddingBottom:"2vh"}}>
                   <Grid item md={8} sm={8} xs={8}>
                   <TextField
                    id="outlined-basic"
                    label="Description"
                    color="primary"
                    type="text"
                    error={errors.description}
                    name="description"
                    variant="outlined"
                    value={values.description}
                    fullWidth
                    autoComplete='off'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EditIcon color="primary"/>
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleChanges}
                  />
                  {errors.description ? (
                    <FormHelperText error>{errors.description}</FormHelperText>
                  ) : (
                    <FormHelperText style={{ visibility: "hidden" }}>
                      ..
                    </FormHelperText>
                  )}
                  </Grid> 
                </Grid>
                {/*for price*/}
                <Grid container spacing={3} style={{paddingBottom:"2vh"}}>
                   <Grid item md={8} sm={8} xs={8}>
                   <TextField
                    id="outlined-basic"
                    label="Price"
                    color="primary"
                    type="text"
                    error={errors.price}
                    name="price"
                    variant="outlined"
                    value={values.price}
                    fullWidth
                    autoComplete='off'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <AttachMoneyIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleChanges}
                  />
                  {errors.price ? (
                    <FormHelperText error>{errors.price}</FormHelperText>
                  ) : (
                    <FormHelperText style={{ visibility: "hidden" }}>
                      ..
                    </FormHelperText>
                  )}
                  </Grid> 
                </Grid>
                {/*for video*/}
                <Grid container spacing={3} style={{paddingBottom:"2vh"}}>
                   <Grid item md={8} sm={8} xs={8}>
                   <TextField
                    id="outlined-basic"
                    label="Video"
                    color="primary"
                    type="text"
                    error={errors.video}
                    name="video"
                    variant="outlined"
                    value={values.video}
                    fullWidth
                    autoComplete='off'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <VideoLibraryIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleChanges}
                  />
                 {errors.video ? (
                    <FormHelperText error>{errors.video}</FormHelperText>
                  ) : (
                    <FormHelperText style={{ visibility: "hidden" }}>
                      ..
                    </FormHelperText>
                  )}
                  </Grid> 
                </Grid>
                {/*for level*/}
                <Grid container spacing={3} style={{paddingBottom:"2vh"}}>
                   <Grid item md={8} sm={8} xs={8}>
                   <TextField
                    id="outlined-basic"
                    label="Course Level"
                    color="primary"
                    type="text"
                    error={errors.level}
                    name="level"
                    variant="outlined"
                    value={values.level}
                    fullWidth
                    autoComplete='off'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <BeenhereIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleChanges}
                  />
                  {errors.level ? (
                    <FormHelperText error>{errors.level}</FormHelperText>
                  ) : (
                    <FormHelperText style={{ visibility: "hidden" }}>
                      ..
                    </FormHelperText>
                  )}
                  </Grid> 
                </Grid>
                {/*for notes*/}
                <Grid container spacing={3} style={{paddingBottom:"2vh"}}>
                   <Grid item md={8} sm={8} xs={8}>
                   <TextField
                    id="outlined-basic"
                    label="Notes"
                    color="primary"
                    type="text"
                    error={errors.notes}
                    name="notes"
                    variant="outlined"
                    value={values.notes}
                    fullWidth
                    autoComplete='off'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <DescriptionIcon color="primary"/>
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleChanges}
                  />
                 {errors.notes ? (
                    <FormHelperText error>{errors.notes}</FormHelperText>
                  ) : (
                    <FormHelperText style={{ visibility: "hidden" }}>
                      ..
                    </FormHelperText>
                  )}
                  </Grid> 
                </Grid>
                <Button
                    style={{ marginRight:"20vh", textAlign:"center" , width:"40vh" , fontSize:"1rem"}}
                    variant="contained"
                    onClick={() => {
                      setErrors(Validation(values));
                    }}
                  >Add</Button>
            </Grid>
  </div>
  );
};

export default CourseToUpload;
