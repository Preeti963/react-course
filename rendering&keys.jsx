//Rendering list
// in react we use array map() data to Create UI

// const items = ["react","Js","Django"];

// {items.map(item =>(
//     <li>{item}</li>
// ))}

//key
//each list item needs a unique key
const items = ["react","Js","Django"];

{items.map(item =>(
    <li key ={index}>{item}</li>
))}
//rendering Objects
const courses = [
  { id: 1, name: "React" },
  { id: 2, name: "Django" },
  { id: 3, name: "Python" }
];
<ul>
  {courses.map(course => (
    <li key={course.id}>{course.name}</li>
  ))}
</ul>
//Conditional Rendering with Lists
{courses.length === 0 ? (
  <p>No courses available</p>
) : (
  <ul>
    {courses.map(course => (
      <li key={course.id}>{course.name}</li>
    ))}
  </ul>
)}
