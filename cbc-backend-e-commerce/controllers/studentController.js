import Student from "../models/student.js";

export function getStudents(req,res){
        Student .find().then(
            (students)=>{
                res.json(
                    students
                )
            }

        ).catch(
            ()=>{

            }

        );
    }


export function createStudent(req, res) {

    if(req.user == null){
        res.status(401).json(
            {
                message: "Please login and try again"
            }
        )
        return
    }

    if(req.user.role != "admin"){
        res.status(403).json({
            message: "You must be an admin to create a student"
        })
         return
    }

    const student = new Student({
        name: req.body.name,
        age: req.body.age,
        city: req.body.city
    });

    student.save().then(
        () => {
            res.json({
                message: "Student saved successfully"
            });
        }
    ).catch(
        () => {
            res.json({
                message: "Failed to create student"
            });
        }
    );
}


