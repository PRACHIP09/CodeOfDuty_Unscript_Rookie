const Validation = (value) => {
    console.log(value);

    let errors={};
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    const numberRegex=/^[0-9]+$/
    // course name
    if(!value.name ){
         errors.name="Name is required"
     }
     else{
         errors.course=''
     }
     if(!value.course ){
        errors.course="Name is required"
    }
    else{
        errors.course=''
    }
    if(!value.lectno ){
        errors.lectno="Lecture No is required"
    }
    else{
        errors.lectno=''
    }
     // email
    if(!value.email){
        errors.email="Email is required"
     }else if(!emailRegex.test(value.email)){
        errors.email='Email is invalid'
     }
     else{
         errors.email=''
     }
     // phone Number
   
    if(!numberRegex.test(value.phone)){
        errors.phone="Invalid Phone Number"
    }else if(value.phone.length!==10){
        errors.phone="Invalid Phone Number"
    } else{
        errors.phone=''
    }
    // description
    if(!value.description){
       errors.description="Description is required"
    }
    else{
        errors.description=''
    }

    // leevl
    if(!value.level){
        errors.level="Course Level is required"
    }
    else{
        errors.level=''
    }

    // video
    if(!value.notes){
        errors.notes="Notes is required"
    }
    else{
        errors.notes=''
    }

    // price
   
    if(!value.price){
        errors.price="Course Price is required"
    }else{
        errors.price=''
    }

    //division
    if(!value.video)
    {
        errors.video = "Video is required"
    }else{
        errors.video=''
    }

    return errors
    
        
};

export default Validation