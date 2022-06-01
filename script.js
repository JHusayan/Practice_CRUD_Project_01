var app = new function(){
    this.element= document.getElementById('registries');
    this.registries=[]
    /*Refresh Function*/
    this.FetchAll = function(){
        var data='';
        if(this.registries.length>0){
            for(i=0;i<this.registries.length;i++){
                data+="<tr>";
                data+="<td>"+(i+1)+". "+this.registries[i]+'</td>';
                data+='<td><button onclick="app.Edit('+i+')" class="btn btn-warning">Edit</button></td> ';
                data+='<td><button onclick="app.Delete('+i+')" class="btn btn-danger">Delete</button></td>';
                data+='</tr>'
            }

        }
        this.Count(this.registries.length);
        return this.element.innerHTML = data;

    };
    /*Create Function*/
    this.Add = function(){
        element = document.getElementById('add-reg');
        var registry = element.value;
        if(registry){
            this.registries.push(registry.trim());
            element.value='';
            this.FetchAll();
        }

    };
    /*Update Function*/
    this.Edit = function(item){
        element = document.getElementById('edit-reg');
        element.value = this.registries[item]
        document.getElementById('edit-box').style.display = "block";
        self=this;
        document.getElementById('save-edit').onsubmit = function(){
            var registry = element.value;
            if(registry){
                self.registries.splice(item, 1, registry.trim());
                self.FetchAll();
                CloseInput();
            }
        }
    };
    /*Delete Function*/
    this.Delete = function(item){
        this.registries.splice(item, 1);
        this.FetchAll();

    };
    /*Display Function*/
    this.Count = function(data){
        var element = document.getElementById('counter');
        var name= 'Registries';
        if(data){
            if(data == 1){
                name = 'Registry';
            }
            element.innerHTML = data+' '+name;
        }
        else{
            element.innerHTML = 'No '+ name;
        }
    };
}
app.FetchAll();
function CloseInput(){
    document.getElementById('edit-box').style.display ='none';
}