const JobPosts = require('../Model/JobPost');

exports.createJobPost = async (req, res) => {
    try{
        const {company_name, role, location, desc, skillsRequired, experienceRequired, questionary, applicationDeadline, createdBy} = req.body;

        if(!company_name || !role || !location || !desc || !skillsRequired || !experienceRequired || !applicationDeadline|| !createdBy){
            return res.status(400).json({
                success: false,
                message: 'Incomplete Data'
            })
        }

        const jobData = await JobPosts.create({
            company_name: company_name,
            desc: desc,
            questionary: questionary,
            role: role,
            location: location,
            skillsRequired: skillsRequired,
            experienceRequired: experienceRequired,
            applicationDeadline: applicationDeadline,
            createdBy: createdBy
        })

        return res.status(200).json({
            success: true,
            message: "Job Post Created",
            data: jobData
        })
    }catch(e){
        console.log(e.message);
        return res.status(500).json({
            sucess: false,
            message: 'Internal Server Issue',
            error: e.message
        })
    }
}

exports.getAllJobPosts = async (req, res) => {
    try{
        const data = await JobPosts.find();

        return res.status(200).json({
            success: true,
            message: "All Job Posts reterived Successfully",
            data: data
        })
    }catch(e){
        console.log(e.message);
        res.status(500).json({
            success: false,
            message: 'Internal Server Issue',
            error: e.message
        })
    }
}

exports.getJobByID = async(req, res) => {
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