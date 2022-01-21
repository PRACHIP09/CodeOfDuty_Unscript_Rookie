const Validation = (value) => {
    console.log(value);

    let errors={};

    // course name
    if(!value.name ){
         errors.name="Name is required"
     }
     else{
         errors.name=''
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