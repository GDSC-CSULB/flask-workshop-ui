fetch("http://127.0.0.1:5000/courses")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    displayResponse(data);
  })
  .catch((error) => console.error(error));

displayResponse = (res) => {
  const courseDiv = document.querySelector("#courses");

  res.forEach(course => {
    const courseElement = document.createElement('li');
    courseElement.innerText= `${course.department} ${course.number} - ${course.name} (${course.units} units)`

    if (course.desc) {
      courseElement.innerText = courseElement.innerText + `\n${course.desc}`
    }

    courseDiv.append(courseElement);
  });
};
