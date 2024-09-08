import { useNavigate } from "react-router-dom";

export function Coursecard ({course}) {

    const navigate = useNavigate() ; 

    return (
      <>
        <div className="border-solid border-2 border-sky-300 grid grid-row-2 rounded-lg items-center">
          <div className="flex items-center flex-col">
            <div className="font-family-Lora">
              <h1> {course.courseName}</h1>
            </div>

            <div>
              <h3> {course.coursePrice}</h3>
            </div>
            <div>
              <h5> {course.courseDescription}</h5>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <button 
              onClick={() => {
                navigate(`/allcourse/${course._id}`);
              }}
              className="rounded-full border-2 solid p-2 bg-skyblue-500"
            >
              {" "}
              Veiw Details{" "}
            </button>
          </div>
        </div>
      </>
    );
  
}