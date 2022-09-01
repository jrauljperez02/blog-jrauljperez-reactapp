import React,{ useState ,useRef} from 'react'
import classes from './Checkout.module.css'

const isEmpty = (value) => value.trim() === '';

const UserForm = () => {

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    email: true,
    message: true,
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef  = useRef();


  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredMessageIsValid = !isEmpty(enteredMessage);

    setFormInputsValidity({
      name :  enteredNameIsValid,
      email: enteredEmailIsValid,
      message: enteredMessageIsValid
    })

    const formIsValid = 
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredMessageIsValid

    if(!formIsValid){
      return;
    }
  };


  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;
  const emailControlClasses = `${classes.control} ${
    formInputsValidity.email ? '' : classes.invalid
  }`;
  const messageCodeControlClasses = `${classes.control} ${
    formInputsValidity.message ? '' : classes.invalid
  }`;
 


  return (
    <form className={classes.form} onSubmit={confirmHandler}>

      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>

      <div className={emailControlClasses}>
        <label htmlFor='name'>Your email</label>
        <input type='text' id='email' ref={emailInputRef} />
        {!formInputsValidity.email && <p>Please enter a valid email!</p>}
      </div>

      <div className={messageCodeControlClasses}>
        <label htmlFor='name'>Your message</label>
        <input type='text' id='message' ref={messageInputRef} />
        {!formInputsValidity.message && <p>Please enter a valid message!</p>}
      </div>

      <div className={classes.actions}>
        
        <button className={classes.submit}>Confirm</button>
      </div>

    </form>
  )
}

export default UserForm