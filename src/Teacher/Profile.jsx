import React,{useState} from 'react';
import { Grid ,
    TextField ,
    InputAdornment,
    FormHelperText,
    Button, } from '@mui/material';
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Validation from './TeacherValidation';
import {useHistory} from 'react-router-dom';
import profile from '../Images/profile.png';
const Profile = () => {
    const history = useHistory();
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
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
                <div>
                <img src={profile} alt="profile" style={{height:"10vh", width:"10vh" , marginRight:"85%" , marginBottom:"3vh"}}/>
                </div>
                <div style={{padding:"0 0 20px 0" , fontSize:"1.5rem" , textAlign:"left" , color:"#141b37"}}>
                Profile
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
                    label="Phone Number"
                    color="primary"
                    type="text"
                    error={errors.phone}
                    name="phone"
                    variant="outlined"
                    value={values.phone}
                    fullWidth
                    autoComplete='off'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LocalPhoneIcon color="primary"/>
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleChanges}
                  />
                  {errors.phone ? (
                    <FormHelperText error>{errors.phone}</FormHelperText>
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
                    label="Email"
                    color="primary"
                    type="text"
                    error={errors.email}
                    name="email"
                    variant="outlined"
                    value={values.email}
                    fullWidth
                    autoComplete='off'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleChanges}
                  />
                  {errors.email ? (
                    <FormHelperText error>{errors.email}</FormHelperText>
                  ) : (
                    <FormHelperText style={{ visibility: "hidden" }}>
                      ..
                    </FormHelperText>
                  )}
                  </Grid> 
                </Grid>
                <Button
                    style={{ marginRight:"20vh", textAlign:"center" , width:"40vh" , fontSize:"1.1rem"}}
                    variant="contained"
                    onClick={() => {
                      setErrors(Validation(values));
                    }}
                  >Update</Button>
            </Grid>
  </div>
  );
};

export default Profile;
