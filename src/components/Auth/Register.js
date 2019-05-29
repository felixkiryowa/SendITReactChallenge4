import React from 'react';
import './auth.scss';

const Register = (
    {
        handleChange,
        handleSubmit,
        errors,
    }
) => {
	return (
		<section className="testimonial py-5" id="testimonial">
            <div className="container reg-container">
				<div className="row ">
					<div className="col-md-4 py-5 custom-card-color text-white text-center ">
						<div className=" ">
							<div className="card-body">
								<h2 className="py-3">Registration</h2>
								<p>Create An Account With Send-IT such that your able to create parcel orders</p>
							</div>
						</div>
					</div>
					<div className="col-md-8 py-5 border">
						<h4 className="pb-4">Please fill with your details</h4>
						<form onSubmit={handleSubmit}>
							<div className="form-row">
								<div className="form-group col-md-6">
									<input
										name="firstname"
                                        id="FirstName"
										placeholder="First Name"
										className="form-control"
										type="text"
                                        onChange={handleChange}
									/>
								</div>
								<div className="form-group col-md-6">
									<input 
                                    type="text" 
                                    className="form-control" 
                                    name="username" 
                                    placeholder="Username" 
                                    onChange={handleChange}
                                    />
								</div>
							</div>
							<div className="form-row">
								<div className="form-group col-md-6">
									<input
										name="lastname"
										placeholder="Last Name"
										className="form-control"
										required="required"
                                        onChange={handleChange}
										type="text"
									/>
								</div>
								<div className="form-group col-md-6">
									<input
										name="password"
										placeholder="Password"
										className="form-control"
										required="required"
                                        onChange={handleChange}
										type="password"
									/>
								</div>
							</div>
							<div className="form-row">
								<div className="form-group col-md-6">
									<input
										name="contact"
										placeholder="Mobile No."
										className="form-control"
										required="required"
                                        onChange={handleChange}
										type="text"
                                        maxLength="10"
									/>
                                    {
                                        errors.contact && (<
                                            div style={{ color: 'red' }}>{errors.contact}</div>)
                                    }
								</div>
								<div className="form-group col-md-6">
									<input
										name="confirmPassword"
										placeholder="Confirm Password"
										className="form-control"
										required="required"
                                        onChange={handleChange}
										type="password"
									/>
                                    {
                                        errors.confirmPassword && (<
                                        div style={{ color: 'red' }}>{errors.confirmPassword}</div>)
                                    }
								</div>
							</div>
							<div className="form-row">
								<div className="form-group col-md-6">
									<input
										name="useremail"
										placeholder="Email e.g daddyfelix56@gmail.com"
										className="form-control"
										required="required"
                                        onChange={handleChange}
										type="email"
									/>
								</div>
							</div>
                            <br/>
                            <br/>
							<div className="form-row">
                                <div className="form-group col-md-12">
                                    <button type="submit" className="btn  float-right reg-button">
                                        Sign Up
								    </button>
                                </div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
