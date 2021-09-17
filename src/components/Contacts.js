import React ,{ useState } from 'react'
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";


const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_OSSfadyZgDYyJiFdfQC7j";

    const onSubmit = (data, r) => {
      sendEmail(
        serviceID,
        templateID,
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          description: data.description
        },
        userID
      );
      r.target.reset();
    };

   const sendEmail = (serviceID, templateID, variables, userID) => {
     emailjs
       .send(serviceID, templateID, variables, userID)
       .then(() => {
         setSuccessMessage(
           "Form sent successfully! I'll contact you as soon as possible."
         );
       })
       .catch((err) => console.error(`Something went wrong ${err}`));
   };
    return (
      <div className="contacts" id="contacts">
        <div className="text-center">
          <h1>Contact Me</h1>
          <p>
            Please fill out the form and describe your project needs and i will
            contact you as soon as possible
          </p>
          <span className="success-message">{successMessage}</span>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row ">
              <div className="col-md-6 col-xs-12">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  {...register("name", {
                    required: "Please enter your Name",
                    maxLength: {
                      value: 20,
                      message:
                        "Please enter a name with fewer than 20 characters",
                    },
                  })}
                />
                {errors.name && (
                  <span className="error-message">{errors.name.message} </span>
                )}
                <input
                  type="text"
                  // label="email"
                  className="form-control"
                  placeholder="Email"
                  {...register("email", {
                    required: "Please enter your Email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid Email",
                    },
                  })}
                />
                {errors.email && (
                  <span className="error-message">{errors.email.message} </span>
                )}
                <input
                  type="text"
                  // label="phone"
                  className="form-control"
                  placeholder="Phone number"
                  {...register("phone", {
                    required: "Please enter your Phone Number",
                  })}
                />
                {errors.phone && (
                  <span className="error-message">{errors.phone.message} </span>
                )}
              </div>
              <div className="col-md-6 col-xs-12">
                <textarea
                  type="text"
                  // label="description"
                  className="form-control"
                  placeholder="Write your short Message"
                  {...register("description", {
                    required: "Please describe shortly your project needs...",
                  })}
                ></textarea>
                {errors.description && (
                  <span className="error-message">
                    {errors.description.message}
                  </span>
                )}
                <button className="btn-main-offer contact-btn" type="submit">
                  Contact Me
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Contacts
