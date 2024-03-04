import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import person from "../assets/person.avif";

// validationSchema

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
  const [profileData, setProfileData] = useState([]);

  const handleSubmit = async (values, actions) => {
    const id = Math.floor(Math.random() * 100);
    try {
      const response = await fetch(
        "https://mdqualityapps.in/API/profile_screen/development/update_profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            firstName: values.firstName,
            lastName: values.lastName,
            mobile: values.mobileNumber,
            secondaryMobile: values.secondaryMobileNumber,
            email: values.email,
            userAddress: values.address,
            profileId: id,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update profile");
      }
      setIsSubmitted(true);

      console.log("Profile updated successfully");
      actions.setSubmitting(false);
      actions.resetForm();
      alert("submitted");
      fetchdata();
    } catch (error) {
      console.error("Error updating profile:", error);
      actions.setSubmitting(false);
    }
  };

  useEffect(() => {
    const PostData = async () => {
      try {
        const response = await fetch(
          "https://mdqualityapps.in/API/profile_screen/development/get_profile",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              profileId: "1",
            }),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    PostData();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await fetch(
        "https://mdqualityapps.in/API/profile_screen/development/get_profile",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch profile data");
      }
      const data = await response.json();
      setProfileData(data);
      console.log("Profile data fetched successfully:", data);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="w-full h-auto bg-[#1e293b] flex justify-around items-center">
        <div className="">
          <img
            src={person}
            alt="person-img"
            className="w-3/4 h-1/2 rounded-lg object-cover"
          />
        </div>
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
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="w-[500px]">
                <div className="p-2">
                  {/* <!-- Contact Form --> */}
                  <div className="rounded-sm  shadow-default ">
                    <div className=" px-6.5">
                      <h3 className=" text-3xl font-bold text-white  sm:text-2xl">
                        Edit Profile
                      </h3>
                    </div>

                    <div className="mt-5">
                      <div className="w-full mb-4.5">
                        <label className="mb-2 block text-white ">
                          First Name
                        </label>
                        <Field
                          type="text"
                          placeholder="Enter your first name"
                          name="firstName"
                          className="w-full rounded bg-white py-3 px-5 font-medium outline-none transition border-black "
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                      <div className="w-full mb-4.5">
                        <label className="mb-2 block text-white ">
                          Last Name
                        </label>
                        <Field
                          type="text"
                          name="lastName"
                          placeholder="Enter your Last name"
                          className="w-full rounded bg-white py-3 px-5 font-medium outline-none transition border-black "
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="text-red-600"
                        />
                      </div>

                      <div className="mb-2">
                        <label className="mb-2 block text-white ">
                          Mobile Number
                        </label>
                        <Field
                          type="number"
                          name="mobileNumber"
                          placeholder="Enter your Mobile Number"
                          className="w-full rounded bg-white py-3 px-5 font-medium outline-none transition border-black "
                        />
                        <ErrorMessage
                          name="mobileNumber"
                          component="div"
                          className="text-red-600"
                        />
                      </div>

                      <div className="mb-2">
                        <label className="mb-2 block text-white ">
                          secondary Number{" "}
                          <span className="text-xs">(optional)</span>
                        </label>
                        <Field
                          type="number"
                          name="secondaryMobileNumber"
                          placeholder="Enter your Secondary Number"
                          className="w-full rounded bg-white py-3 px-5 font-medium outline-none transition border-black "
                        />
                      </div>

                      <div className="w-full mb-2">
                        <label className="mb-2 block text-white ">Email</label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter your Email"
                          className="w-full rounded bg-white py-3 px-5 font-medium outline-none transition border-black "
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-600"
                        />
                      </div>

                      <div className="mb-2">
                        <label className="mb-2 block text-white ">
                          Address
                        </label>
                        <Field
                          rows={2}
                          name="address"
                          placeholder="Type your message"
                          className="w-full rounded bg-white py-3 px-5 font-medium outline-none transition border-black "
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
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="flex justify-center gap-5 items-center bg-[#1e293b] h-[500px]">
        <div className="flex justify-center items-center bg-[#1e293b] h-[500px]">
          <table className="text-white border border-white">
            <thead>
              <tr>
                <th className="border border-white">First Name</th>
                <th className="border border-white">Last Name</th>
                <th className="border border-white">Mobile Number</th>
                <th className="border border-white">Secondary Mobile Number</th>
                <th className="border border-white">Email</th>
                <th className="border border-white">Address</th>
              </tr>
            </thead>
            <tbody>
              {profileData &&
                profileData.data &&
                profileData.data.map((profile, index) => (
                  <tr key={index}>
                    <td className="border border-white">{profile.firstName}</td>
                    <td className="border border-white">{profile.lastName}</td>
                    <td className="border border-white">{profile.mobile}</td>
                    <td className="border border-white">
                      {profile.secondaryMobile}
                    </td>
                    <td className="border border-white">{profile.email}</td>
                    <td className="border border-white">
                      {profile.userAddress}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Customer;
