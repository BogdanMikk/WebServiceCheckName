save: function(parameter) {
	if (!parameter) {this.checkField()}
	else {this.callParent(arguments)}
	},
	//Проверка на одинаковые названия
	checkField: function(){

		var Page = this;
		var val = this.get("UsrName");
		var bool;
		if (this.isAddMode()) {
		 bool = true;
		}
		if(!bool){
			var recordid = this.get("Id");
		}
		var PageArg = arguments;
		var serviceData = {
			UsrName: val.toString(),
			Id: recordid
		};
		ServiceHelper.callService("UsrValidationName", "Validate",
			function(response) {
				var names = response.ValidateResult;
				if(names.length <= "1"){
					this.showInformationDialog("Сохранение возможно");
					this.save(true);
				}
				else{
					this.showInformationDialog("Уже есть записи с названием " + val + " у пользователей " + names);
				}
			}, serviceData, this);
	},
