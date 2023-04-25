import { useRef, useContext } from "react";
import NotificationContext from "../../store/notification-context";
import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const emailInputRef = useRef("");
  const notificationCtx = useContext(NotificationContext);

  async function registrationHandler(event) {
    try {
      event.preventDefault();
      notificationCtx.showNotification({
        title: "Signing Up...",
        message: "Registrating for newsletter...",
        status: "pending",
      });
      const enteredEmail = emailInputRef.current.value;
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email: enteredEmail }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok === false) {
        // ! ERROR OCCURED
        notificationCtx.showNotification({
          title: "Error!",
          message: "Something went wrong !!",
          status: "error",
        });
        return;
      }
      notificationCtx.showNotification({
        title: "Success!",
        message: "Successfully registered for newsletter",
        status: "success",
      });
    } catch (error) {
      notificationCtx.showNotification({
        title: "Error!",
        message: error.message || "Something went wrong !!",
        status: "error",
      });
    }
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
