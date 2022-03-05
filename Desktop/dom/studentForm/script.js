       // create div element
       const newDiv = document.createElement("div");
       //create paragraph 
       const para = document.createElement("p");
       para.setAttribute("id", "p1");
       const newContent = document.createTextNode("Student-Form");
       para.appendChild(newContent);
       
       newDiv.appendChild(para);
       newDiv.setAttribute("id", "divId");
 
       document.getElementsByTagName("body")[0].appendChild(newDiv);
 
 
       //create form element
       var form = document.createElement("form");
       form.setAttribute("id", "f1");
       document.getElementsByTagName("div")[0].appendChild(form);
 
 
       //for input full Name
       var FN = document.createElement("input");
       FN.setAttribute("type", "text");
       FN.setAttribute("placeholder", "Full Name");
       FN.setAttribute("id", "fname");
       form.appendChild(document.createTextNode("Full Name"));
        
       form.appendChild(FN);
       form.appendChild(document.createElement("br"));
 
 
       //for date of birth input
       var DOB = document.createElement("input");
       DOB.setAttribute("type", "date");
       DOB.setAttribute("placeholder", "DOB");
       DOB.setAttribute("id", "dob");
       form.appendChild(document.createTextNode("date of Birth"));
       form.appendChild(DOB);
 
       form.appendChild(document.createElement("br"));
 
 
       // for email  input
       var ID = document.createElement("input");
       ID.setAttribute("type", "email");
       ID.setAttribute("placeholder", "xyz@gmail.com");
       ID.setAttribute("id", "id");
       form.appendChild(document.createTextNode("Email"));
 
       form.appendChild(ID);
       form.appendChild(document.createElement("br"));
 
 
       //for mobile no input
       var mobNo = document.createElement("input");
       mobNo.setAttribute("type", "number");
       mobNo.setAttribute("placeholder", "+91");
       mobNo.setAttribute("id", "mobNo");
       form.appendChild(document.createTextNode("mobile number"));
 
       form.appendChild(mobNo);
       form.appendChild(document.createElement("br"));
 
 
       // for submit button 
       var s = document.createElement("input");
       s.setAttribute("type", "submit");
       s.setAttribute("value", "Submit");
       s.setAttribute("id", "submit");
       form.appendChild(s);
 
       
 
       const text = localStorage.getItem("StudentJson");
       obj = JSON.parse(text);
       
      
        /// add event listener for submit   
 
       document.addEventListener("DOMContentLoaded", () => {
         document.getElementById("submit").addEventListener("click", addStudent);
       });
       
       const addStudent = (ev) => {        // prevent auto submmition
         ev.preventDefault();
         
         /// array of object for input value
         let stdArray = [];
         let stdObj = {
           fullName: document.getElementById("fname").value,
           DOB: document.getElementById("dob").value,
           Email: document.getElementById("id").value,
           mob: document.getElementById("mobNo").value,
         };
         stdArray.push(stdObj);
 
         // for JSON file stringfy method
         const myJson = JSON.stringify(stdArray);
         localStorage.setItem("StudentJson", myJson);
 
         const text = localStorage.getItem("StudentJson");
         obj = JSON.parse(text);
 
         
 
         // insert data into tabel through insretTable function pasing stdArray
 
         insertTable(stdArray);  
        document.getElementById('f1').reset();     
 
         
       };
 
       // Css styling using Js DOM
       // *** attribute   variable for array of input id for css styling ***
 
       var arrayOfId = [
         document.getElementById("fname"),
         document.getElementById("dob"),
         document.getElementById("id"),
         document.getElementById("mobNo")
       ];
       arrayOfId.forEach(indexarry => indexarry.style.color='green');
 
       document.getElementById("submit").style.backgroundColor = "#05f7c7";
 
       newDiv.style.cssText = "text-align : center;";
 
       document.getElementById("p1").style.cssText =
         "color:red; font-size:25px; text-align :center;background-color:#9FF8F1; border:5px;  ";
       // document.getElementById('fname').style.cssText="border: 2px solid red; margin:5px; ";
       // document.getElementById('dob').style.cssText="border: 2px solid red; margin:5px; ";
       // document.getElementById('id').style.cssText="border: 2px solid red; margin:5px; ";
       // document.getElementById('mobNo').style.cssText="border: 2px solid red; margin:5px; ";
       // document.getElementById('f1').style.cssText="background-color: lightgreen;width: 300px; border: 1px solid lightgray; padding: 110px; text-align:center;margin: 0 auto; width:250px;";
       document.getElementById("divId").style.cssText =
         "background-color: lightgreen;width: 300px; border: 1px solid lightgray; padding: 80px; text-align:center;margin: 0 auto; width:250px;border-radius:4px";
 
      arrayOfId.forEach((input) =>(input.style.cssText =  "border: 2px solid red; margin:5px;width:100%;")); 
       
       
      //   *************             *************           ********
 
 
       // new div for table header
         let newDiv1=document.createElement('div');
             newDiv1.id = 'div1';
         document.getElementsByTagName('body')[0].appendChild(newDiv1);
       
         let headers=['full-name','dob','email','mobNo'];
         let table = document.createElement('table');
         let tbody = document.createElement('tbody')
             table.setAttribute('id','tab')
         let header = document.createElement('th');
            
         headers.forEach(headerText => {
                 let td =document.createElement('td')
                 let textNode = document.createTextNode(headerText);
                 td.appendChild(textNode);
                 header.appendChild(td)    
                 table.appendChild(header);
                 newDiv1.appendChild(table);               
             })
             table.setAttribute('border','2')
 
 
 
         /// inserTable()  function declaration    
 
          const insertTable =(stdArray)=>{
                          stdArray.forEach((emp)=> {
                          let row = document.createElement('tr');
                          
                  Object.values(emp).forEach(text => {
                         let cell = document.createElement('td');
                         let textNode = document.createTextNode(text);
                         cell.appendChild(textNode);
                         row.appendChild(cell);
                         
                  })
 
                     let del=document.createElement('button') ;
                     del.setAttribute('name','delete')  
                     del.style.backgroundColor='#fc4242';               
                     /// delete button
                     del.innerHTML='delete'
                     del.addEventListener('click',() =>{
                          
                         row.remove();
                     })
 
                      let edit=document.createElement('button') ;////// edit button
                      edit.setAttribute('name','edit')
                      edit.style.backgroundColor='#66FF99';               
                      edit.innerHTML='edit'
                      edit.addEventListener('click',() =>{
                            if(edit.textContent=='done')
                            {
                             edit.textContent='edit'
                             for(let i=0;i<=3;i++){
                             let currRowContent=row.children[i].value;
                             let currRow=document.createElement('td');
                             currRow.textContent=currRowContent;
                             row.replaceChild(currRow, row.children[i]);
                             }
 
                            }else
                            {
                             edit.textContent='done'
                             for(let i=0;i<=3;i++){
 
                             let  currRowContent = row.children[i].textContent;
                             let currIput= document.createElement('input');
                             currIput.type=text;
                             currIput.value=currRowContent;
                             
                             const row1= row.children[i];
                             row.replaceChild(currIput, row1);
                             }
                         }
                     })
                     row.appendChild(del)
                     row.appendChild(edit)
                     tbody.appendChild(row);
                     table.appendChild(tbody);
                 })
                
             }
                 
             
              
             
          
                   
                      
                     
                         
                 
                       
                     
                          
                    