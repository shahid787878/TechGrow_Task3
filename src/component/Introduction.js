// src/components/Introduction.js
import React from "react";

const Introduction = () => {
	return (
		<>
			<div className="container-fluid   w-100">
				<div className="row-fluid d-block p-5 d-md-flex w-100 bg-primary">
					<div className="text1">
					<h1>
						Your Photography
						Journey Begins Here
					</h1>
					<p>
						Discover the beauty
						through our lens...
					</p>
					<p>
						Capture moments, tell stories,
						and create memories that last a
						lifetime.
					</p>
					<button className="explore-button">
						Explore Now
					</button>
				</div>
				<div className="image P-2 rounded-5">
					<img 
						src=
"https://media.geeksforgeeks.org/wp-content/uploads/20240122102536/1-(3).jpg"
					className="img-fluid  d-md-block"	alt="Introduction"
					/>
				</div>
			</div></div>
			<div className="container-fluid	mt-1  w-100">
				<div className="row-fluid bg-danger p-5 d-block d-md-flex w-100 ">
					<span><h2>Buy Plans and Subscriptions</h2>
				<p>
					Unlock premium features and exclusive
					content with our subscription
					plans.
				</p></span>
				<div className="subscription-options d-block d-md-flex">
					{/* Placeholder content for subscription options */}
					<div className="subscription-option">
						<h3>Basic Plan</h3>
						<p>Access to a limited set of features</p>
						<p>$9.99/month</p>
						<button className="subscribe-button">
							Subscribe
						</button>
					</div>
					<div className="subscription-option">
						<h3>Pro Plan</h3>
						<p>
							Full access to all features
							and exclusive content
						</p>
						<p>$19.99/month</p>
						<button className="subscribe-button">
							Subscribe
						</button>
					</div>
				</div>
				</div>
			</div>
		</>
	);
};

export default Introduction;