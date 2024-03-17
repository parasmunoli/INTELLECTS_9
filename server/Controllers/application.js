const  mongoose = require('mongoose');
const Application = require('../Model/Application');

exports.submitApplication = async (req, res) => {
    try{
        const {fname, lname, email, phone, address, resume, coverPage, } = req.body;

        if(!fname|| !lname|| !email || !phone|| !address|| !resume){
            return res.status(400).json({
                success: false,
                message: 'Missing fields'
            })
        }

        const data = await Application.create({
            fname: fname,
            lname: lname,
            email: email,
            phone: phone,
            address: address,
            resume: resume,
            coverPage: coverPage,
        })

        return res.status(200).json({
            success: true,
            message: 'Applicaation Submitted Successfully',
            data: data
        })

    }catch(e){
        console.log(e.message);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: e.message
        })
    }
}

exports.getApplicationByID = async(req, res) => {
    try{
        const { id } = req.body;
        const data = await JobPosts.findById(id);

        if(!data){
            return res.status(404).json({
                success: false,
                message: 'Requested Data not available'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'JOB ID fetched successfully',
            data: data
        })
    }catch(e){
        console.log(e.message);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Issue',
            error: e.message
        })
    }
}

exports.deleteApplication = async (req, res) => {
    try{
        const {applicationID} = req.body;
        if(!applicationID){
            return res.status(400).json({
                success: false,
                message: 'Incomplete Data',
            })
        }
        const data = await Application.findByIdAndDelete(applicationID)
        return res.status(200).json({
            success: true,
            message: 'Job Application Deleted',
            data: data
        })
    }catch(e){
        console.log(e.message);
        return res.status(500).json({
            success: false,
            message: 'Something went Wrong',
            error: e.message
        })
    }
}