import classes from "./EmailForm.module.css";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "emailjs-com";
import useInput from "./hooks/use-input";
import { Prompt } from "react-router-dom";

const isNotEmpty = (value) => value.trim() !== "";
const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

const EmailForm = () => {
  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: titleReset,
  } = useInput(isNotEmpty);

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(isValidEmail);

  const {
    value: msgValue,
    isValid: msgIsValid,
    hasError: msgHasError,
    valueChangeHandler: msgChangeHandler,
    inputBlurHandler: msgBlurHandler,
    reset: msgReset,
  } = useInput(isNotEmpty);

  const resetForm = () => {
    msgReset();
    emailReset();
    nameReset();
    titleReset();
  };

  let formIsValid = false;

  if (msgIsValid && emailIsValid && nameIsValid && titleIsValid) {
    formIsValid = true;
  }

  let isEntering = false;
  if (msgIsValid || emailIsValid || nameIsValid || titleIsValid) {
    isEntering = true;
  }

  const sendEmail = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    emailjs
      .sendForm(
        "service_s0qwpyo",
        "template_2nidp11",
        event.target,
        "4WMj0VWAjt_ek4WUc"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    resetForm();
  };

  const titleNameClasses = titleHasError ? "invalid" : "valid";
  const nameNameClasses = nameHasError ? "invalid" : "valid";
  const emailNameClasses = emailHasError ? "invalid" : "valid";

  return (
    <div className={classes.main_img}>
      <div className={classes.main}>
        <form id="email_form" className={classes.email} onSubmit={sendEmail}>
          <Prompt message="Are you sure you want to leave? All your entered data will be lost!" when={isEntering} />
          <div className={classes.title}>
            Want to send me a position offer? <br />
            Or just some email
          </div>
          <div className={classes[titleNameClasses]}>
            {titleHasError && (
              <p className={classes.error_text}>Please enter a title!!</p>
            )}
            <input
              type="text"
              name="title"
              placeholder=" title"
              value={titleValue}
              onChange={titleChangeHandler}
              onBlur={titleBlurHandler}
            ></input>
          </div>
          <div className={classes[nameNameClasses]}>
            {nameHasError && (
              <p className={classes.error_text}>Please enter your name!!</p>
            )}
            <input
              type="text"
              name="name"
              placeholder=" your name"
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            ></input>
          </div>
          <div className={classes[emailNameClasses]}>
            {emailHasError && (
              <p className={classes.error_text}>Please enter valid E-Mail!!</p>
            )}
            <input
              type="text"
              name="user_email"
              placeholder=" your email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            ></input>
          </div>
          <div>
            {msgHasError && (
              <p className={classes.error_text}>Please enter your message!!</p>
            )}
            <textarea
              name="message"
              placeholder=" enter your message "
              value={msgValue}
              onChange={msgChangeHandler}
              onBlur={msgBlurHandler}
            ></textarea>
          </div>
          <button disabled={!formIsValid} type="submit" onClick={()=>isEntering = false}>
            Send <SendIcon />
          </button>
        </form>
      </div>
    </div>
  );
};
export default EmailForm;
