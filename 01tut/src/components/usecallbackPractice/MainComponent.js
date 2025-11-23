import React, { useState, useCallback } from "react";
import ButtonComponent from "./ButtonComponent";
import CounterComponent from "./CounterComponent";

function MainComponent() {
  const [teachers, setTeachers] = useState(25);
  const [students, setStudents] = useState(50);

  const incrementTeachers = useCallback(() => {
    return setTeachers(teachers + 50);
  }, [teachers]);

  //   const incrementStudents = () => {
  //     return setStudents(students + 50);
  //   };

  const incrementStudents = useCallback(() => {
    return setStudents(students + 50);
  }, [students]);

  //   const incrementTeachers = () => {
  //     return setTeachers(teachers + 25);
  //   };

  return (
    <div>
      <h1>PerformanceOptimisation Example</h1>
      <CounterComponent text="teachers" count={teachers} />
      <ButtonComponent handleClick={incrementTeachers}>
        Increment Teachers
      </ButtonComponent>
      <CounterComponent text="students" count={students} />
      <ButtonComponent handleClick={incrementStudents}>
        Increment Students
      </ButtonComponent>
    </div>
  );
}

export default React.memo(MainComponent);
