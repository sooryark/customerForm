import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  mobileNumber: Yup.string().required("Mobile number is required"),
  secondaryMobileNumber: Yup.string(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  address: Yup.string().required("Address is required"),
});

const Customer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        mobileNumber: "",
        secondaryMobileNumber: "",
        address: "",
        email: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        setIsSubmitted(true);
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {() => (
        <Form>
          <div className="w-screen  h-screen flex items-center justify-center p-5 overflow-auto bg-[#98ABEE]">
            <div className="rounded-xl shadow-lg bg-white rounded-sm border border-stroke shadow-default w-[80%] md:w-[50%] ">
              <div className="">
                <div className="flex flex-col gap-5 p-2">
                  {/* <!-- Contact Form --> */}
                  <div className="rounded-sm  shadow-default ">
                    <div className=" px-6.5">
                      <h3 className="text-center text-xl font-bold text-[#0C359E]  sm:text-2xl">
                        Add Customer
                      </h3>
                    </div>

                    <div className="p-4">
                      <div className="w-full mb-4.5">
                        <label className="mb-2 block text-black ">
                          First Name
                        </label>
                        <Field
                          type="text"
                          placeholder="Enter your first name"
                          name="firstName"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition border-black "
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                      <div className="w-full mb-4.5">
                        <label className="mb-2 block text-black ">
                          Last Name
                        </label>
                        <Field
                          type="text"
                          name="lastName"
                          placeholder="Enter your first name"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition border-black "
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="text-red-600"
                        />
                      </div>

                      <div className="mb-2">
                        <label className="mb-2 block text-black ">
                          Mobile Number
                        </label>
                        <Field
                          type="number"
                          name="mobileNumber"
                          placeholder="Enter your email address"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition border-black "
                        />
                        <ErrorMessage
                          name="mobileNumber"
                          component="div"
                          className="text-red-600"
                        />
                      </div>

                      <div className="mb-2">
                        <label className="mb-2 block text-black ">
                          secondary Number{" "}
                          <span className="text-xs">(optional)</span>
                        </label>
                        <Field
                          type="number"
                          name="secondaryMobileNumber"
                          placeholder="Enter your email address"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition border-black "
                        />
                      </div>

                      <div className="w-full mb-2">
                        <label className="mb-2 block text-black ">Email</label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter your Email"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition border-black "
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-600"
                        />
                      </div>

                      <div className="mb-2">
                        <label className="mb-2 block text-black ">
                          Address
                        </label>
                        <Field
                          rows={2}
                          name="address"
                          placeholder="Type your message"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition border-black "
                        ></Field>
                        <ErrorMessage
                          name="address"
                          component="div"
                          className="text-red-600"
                        />
                      </div>

                      <button
                        type="submit"
                        className="flex w-full justify-center text-white rounded bg-primary p-3 mt-5 font-medium bg-[#0C359E]"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Customer;
