# INTELLECTS_9 

## API ENDPOINTS

### Authentication API`s
* `https://intellects-9.onrender.com/api/v1/auth/login` is used for logging in existing user.

{

    "email": "test123@gmail.com",
    "password": "test@123"
}


* `https://intellects-9.onrender.com/api/v1/auth/signup` is used for signing up new user.

{
    
    "firstName": "XYZ",
    "lastName": "ABC",
    "email": "test125@gmail.com",
    "password": "test@125",
    "confirmPassword": "test@125",
    "phone": "1234567890",
    "otp": "YPKE"
}
* `https://intellects-9.onrender.com/api/v1/auth/sendotp` is used for sending otp to the user to complete sign up process.

{

    "email": "test123@gmail.com"
}
* `POST`-`https://intellects-9.onrender.com/api/v1/auth/updateUser` updates user profile.

{

    "userId": "65f679fa99bd7cbb3d0ff04c",
    "updateFields": {
        "firstName": "John",
        "lastName": "Doe",
        "middleName": "William",
        "phone": 1234567890,
        "resetPasswordExpires": "2024-03-17T12:00:00.000Z",
        "experiences": [
            {
                "companyName": "ABC Company",
                "role": "Software Engineer",
                "startDate": "2020-01-01T00:00:00.000Z",
                "endDate": "2022-12-31T00:00:00.000Z",
                "additionalDesc": "Worked on XYZ project"
            }
        ],
        "education": [
            {
                "qualification": "Bachelor's Degree",
                "grade": "A+",
                "startDate": "2016-09-01T00:00:00.000Z",
                "endDate": "2020-05-31T00:00:00.000Z"
            }
        ],
        "gender": "Male",
        "dateOfBirth": "1995-06-15",
        "about": "I'm a passionate software engineer with a focus on web development.",
        "skills": [
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB"
        ]
    }
}

### Job Post's API's
* `POST`-`https://intellects-9.onrender.com/api/v1/jobs/create` is used to create a new job post.

{

    "company_name": "test",
    "role": "SWE",
    "location": "India",
    "desc": "This is test job for testing",
    "skillsRequired": "test",
    "experienceRequired": "10+ years",
    "questionary": [],
    "applicationDeadline": "1710621727",
    "createdBy": "65f5a8589bc9632047dbe41a"
}
* `GET`-`https://intellects-9.onrender.com/api/v1/jobs/all` is used to fetch all jobs posted on platform.

* `GET`-`https://intellects-9.onrender.com/api/v1/jobs/jobID` is used to find and fetch a particular job based on unique job id.

{

    "id": "65f604d279fba3679b6476bd"
}
* `POST`-`https://intellects-9.onrender.com/api/v1/jobs/delete` deletes a particular job post.

{

    "id": "65f60449ca01ae76f33f0095"
}

### Job Application API's
* `POST`-`https://intellects-9.onrender.com/api/v1/application/submit` is used to submit a job application for a particular job

{

    "fname": "test",
    "lname": "test2",
    "email": "test123@gmail.com",
    "phone": "1234567890",
    "address": {
        "city": "Indore",
        "state": "MP",
        "country": "India"
    },
    "resume": "https://res.cloudinary.com/dflgxjjm7/image/upload/v1710646394/HackHive/fiyfukwfm4mvn11gvgfw.pdf"
}
* `POST`-`https://intellects-9.onrender.com/api/v1/application/delete` is used to delete a particular job application

{

    "applicationID": "65f66b5fe51e9e0ffc07d672"
}