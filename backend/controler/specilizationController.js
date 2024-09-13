const specializationServices=require("../service/specilizationService");

const getSpecialization= async(req,res)=>{
    try {
        const data= await specializationServices.getSpecialization()
        console.log(data);
        res.status(200.).json({data, msg:'sucesfully specilizaton'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message});
    }
    

}

const getdoctor = async (req, res) =>  {
    
    try {
        const { specializationId } = req.query;
        console.log(req.query);
        
        console.log("id",specializationId);
    if (!specializationId) {
        return res.status(400).json({ success: false, message: "Specialization ID is required." });
        
    }

     const data = await specializationServices.getDoctorsBySpecializationId(specializationId);
        res.status(200).json({ data, msg: 'sucesfully doctor' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
            }


}

module.exports = {getSpecialization, getdoctor}