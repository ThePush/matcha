import { useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";

const OnBoarding = () => {
    const state = useLocation();
    const [formData, setFormData] = useState({
        user_id: "",
        first_name: "",
        last_name: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        show_gender: false,
        gender_identity: "man",
        gender_interest: "woman",
        email: "",
        about: "",
        url: "",
        matches: [],
    });

    const handleSubmit = () => {
        console.log("submitted");
    };
    const handleChange = (e) => {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        const name = e.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    
    console.log("state", state);
    return (
        <>
            <Nav minimal={true} setShowModal={() => {}} showModal={false} />

            <div className="onboarding">
                <h2>Create account</h2>
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">First name</label>
                        <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder="First name"
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange}
                        />

                        <label>Birthday</label>
                        <div className="multiple-input-container">
                            <input
                                id="dob_day"
                                type="number"
                                name="dob_day"
                                placeholder="DD"
                                required={true}
                                value={formData.dob_day}
                                onChange={handleChange}
                                min="1"
                                max="31"
                            />
                            <input
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder="MM"
                                required={true}
                                value={formData.dob_month}
                                onChange={handleChange}
                                min="1"
                                max="12"
                            />
                            <input
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder="YYYY"
                                required={true}
                                value={formData.dob_year}
                                onChange={handleChange}
                                min="1900"
                                max="2005"
                            />
                        </div>

                        <label>Gender</label>
                        <div className="multiple-input-container">
                            <input
                                id="man-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="man"
                                onChange={handleChange}
                                checked={formData.gender_identity === "man"}
                            />
                            <label htmlFor="man-gender-identity">Man</label>
                            <input
                                id="woman-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="woman"
                                onChange={handleChange}
                                checked={formData.gender_identity === "woman"}
                            />
                            <label htmlFor="woman-gender-identity">Woman</label>
                            <input
                                id="more-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="more"
                                onChange={handleChange}
                                checked={formData.gender_identity === "more"}
                            />
                            <label htmlFor="more-gender-identity">More</label>
                        </div>
                        <label htmlFor="show-gender">
                            Show gender on my profile
                        </label>
                        <div className="multiple-input-container">
                            <input
                                id="show-gender"
                                type="checkbox"
                                name="show_gender"
                                onChange={handleChange}
                                checked={formData.show_gender}
                            />
                        </div>

                        <label>Show me</label>
                        <div className="multiple-input-container">
                            <input
                                id="man-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="man"
                                onChange={handleChange}
                                checked={formData.gender_interest === "man"}
                            />
                            <label htmlFor="man-gender-interest">Man</label>
                            <input
                                id="woman-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="woman"
                                onChange={handleChange}
                                checked={formData.gender_interest === "woman"}
                            />
                            <label htmlFor="woman-gender-interest">Woman</label>
                            <input
                                id="everyone-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="everyone"
                                onChange={handleChange}
                                checked={
                                    formData.gender_interest === "everyone"
                                }
                            />
                            <label htmlFor="everyone-gender-interest">
                                Everyone
                            </label>
                        </div>

                        <label htmlFor="about">About me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            placeholder="I like long walks..."
                            required={true}
                            value={formData.about}
                            onChange={handleChange}
                        />
                        <input type="submit" value="Submit" />
                    </section>

                    <section>
                        <label htmlFor="profile-picture">Profile picture</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="profile-picture-container">
                            <img src={formData.url} alt="profile pic preview" />
                        </div>
                    </section>
                </form>
            </div>
        </>
    );
};

export default OnBoarding;
