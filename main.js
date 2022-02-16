var studentsName=[];
console.log("test")
function submit(){
    console.log("called")
    var name1=document.getElementById("student1").value;
    var name2=document.getElementById("student2").value;
    var name3=document.getElementById("student3").value;
    var name4=document.getElementById("student4").value;
   console.log("called")
   console.log(name1)
    studentsName.push(name1);
    studentsName.push(name2);
    studentsName.push(name3);
    studentsName.push(name4);
    console.log(studentsName);
    document.getElementById("displayName").innerHTML=studentsName;
    document.getElementById("submit").style.display=none;
    document.getElementById("sort").style.display=inline-block;
}
function sorting(){
    studentsName.sort();
    document.getElementById("displayName").innerHTML=studentsName;

}