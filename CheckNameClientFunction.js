define("Usrr1Page", ["BusinessRuleModule","BaseFiltersGenerateModule", "ConfigurationEnums", "ServiceHelper"], function(BusinessRuleModule, BaseFiltersGenerateModule, Enums, ServiceHelper) {
	return {
		entitySchemaName: "Usrr",
		details: /**SCHEMA_DETAILS*/{
	"UsrSchema1Detail69119b6f": {
		"schemaName": "UsrSchema1Detail",
		"entitySchemaName": "UsrSubObr",
		"filter": {
			"detailColumn": "Usrr",
			"masterColumn": "Id"
		}
	},
	"AccountContactsDetailV2be8c7b54": {
		"schemaName": "AccountContactsDetailV2",
		"entitySchemaName": "Contact",
		"filter": {
			"detailColumn": "Usrr",
			"masterColumn": "Id"
		}
	}
}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
	{
		"operation": "insert",
		"name": "MainContactButton",
		"values": {
			"itemType": 5,
			"caption": {
				"bindTo": "Resources.Strings.InfoActionCaption"
			},
			"click": {
				"bindTo": "BottonInfoClick"
			},
			"style": "green"
		},
		"parentName": "LeftContainer",
		"propertyName": "items",
		"index": 7
	},
	{
		"operation": "insert",
		"name": "UsrName6df73295-c330-4932-8781-5a2bb5d5e6f6",
		"values": {
			"layout": {
				"colSpan": 24,
				"rowSpan": 1,
				"column": 0,
				"row": 0,
				"layoutName": "ProfileContainer"
			},
			"bindTo": "UsrName"
		},
		"parentName": "ProfileContainer",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "UsrDATEanswer70457b1b-648b-481e-8127-d16def268ddc",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 0,
				"row": 0,
				"layoutName": "Header"
			},
			"bindTo": "UsrDATEanswer"
		},
		"parentName": "Header",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "UsrDATEdecision1b788f80-b339-40cd-98e0-c122647291d9",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 12,
				"row": 0,
				"layoutName": "Header"
			},
			"bindTo": "UsrDATEdecision"
		},
		"parentName": "Header",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "Tabe9df1047TabLabel",
		"values": {
			"caption": "Раздел2",
			"items": []
		},
		"parentName": "Tabs",
		"propertyName": "tabs",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "Tabe9df1047TabLabelGroup2c8c0c0a",
		"values": {
			"caption": {
				"bindTo": "Resources.Strings.Tabe9df1047TabLabelGroup2c8c0c0aGroupCaption"
			},
			"itemType": 15,
			"markerValue": "added-group",
			"items": []
		},
		"parentName": "Tabe9df1047TabLabel",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "Tabe9df1047TabLabelGridLayout59b06939",
		"values": {
			"itemType": 0,
			"items": []
		},
		"parentName": "Tabe9df1047TabLabelGroup2c8c0c0a",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "UsrOneColumna35e00e5-9a04-4085-b1f8-38d62652c33d",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 0,
				"row": 0,
				"layoutName": "Tabe9df1047TabLabelGridLayout59b06939"
			},
			"labelConfig": {},
			"enabled": true,
			"bindTo": "UsrColumnA"
		},
		"parentName": "Tabe9df1047TabLabelGridLayout59b06939",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "UsrColumnBc9dfa5b3-55c6-401b-977b-fa8b531890f4",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 0,
				"row": 1,
				"layoutName": "Tabe9df1047TabLabelGridLayout59b06939"
			},
			"labelConfig": {},
			"enabled": true,
			"bindTo": "UsrColumnB"
		},
		"parentName": "Tabe9df1047TabLabelGridLayout59b06939",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "UsrResultddc638c1-4918-4fad-88e4-5422dc86beea",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 0,
				"row": 2,
				"layoutName": "Tabe9df1047TabLabelGridLayout59b06939"
			},
			"labelConfig": {},
			"enabled": false,
			"bindTo": "UsrResult"
		},
		"parentName": "Tabe9df1047TabLabelGridLayout59b06939",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "Tabe9df1047TabLabelGroupdba56b88",
		"values": {
			"caption": {
				"bindTo": "Resources.Strings.Tabe9df1047TabLabelGroupdba56b88GroupCaption"
			},
			"itemType": 15,
			"markerValue": "added-group",
			"items": []
		},
		"parentName": "Tabe9df1047TabLabel",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "Tabe9df1047TabLabelGridLayoutef4caeef",
		"values": {
			"itemType": 0,
			"items": []
		},
		"parentName": "Tabe9df1047TabLabelGroupdba56b88",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "UsrEmployee9ed8e01a-9bcc-4db4-a16a-1beeadcd0522",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 0,
				"row": 0,
				"layoutName": "Tabe9df1047TabLabelGridLayoutef4caeef"
			},
			"labelConfig": {},
			"enabled": true,
			"contentType": 5,
			"bindTo": "UsrEmployee"
		},
		"parentName": "Tabe9df1047TabLabelGridLayoutef4caeef",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "UsrAccount6041e739-71a7-48f0-86a2-5b4d6ed3b274",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 0,
				"row": 1,
				"layoutName": "Tabe9df1047TabLabelGridLayoutef4caeef"
			},
			"labelConfig": {},
			"enabled": true,
			"contentType": 3,
			"bindTo": "UsrAccount"
		},
		"parentName": "Tabe9df1047TabLabelGridLayoutef4caeef",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "UsrContact39c3cbc0-7ac1-4cdc-82e1-64eb8b61302b",
		"values": {
			"layout": {
				"colSpan": 12,
				"rowSpan": 1,
				"column": 0,
				"row": 2,
				"layoutName": "Tabe9df1047TabLabelGridLayoutef4caeef"
			},
			"labelConfig": {},
			"enabled": true,
			"contentType": 3,
			"bindTo": "UsrContact"
		},
		"parentName": "Tabe9df1047TabLabelGridLayoutef4caeef",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "AccountContactsDetailV2be8c7b54",
		"values": {
			"itemType": 2,
			"markerValue": "added-detail"
		},
		"parentName": "Tabe9df1047TabLabel",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "UsrSchema1Detail69119b6f",
		"values": {
			"itemType": 2,
			"markerValue": "added-detail"
		},
		"parentName": "Tabe9df1047TabLabel",
		"propertyName": "items",
		"index": 3
	}
]/**SCHEMA_DIFF*/,
		methods: {
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
		},
		rules: {
			/*"UsrContact":{
				AutocompleteAlternativeNameByName:{
					ruleType: BusinessRuleModule.enums.RuleType.AUTOCOMPLETE,
					attribute: "UsrAccount",
					autocompleteType: BusinessRuleModule.enums.AutocompleteType.ASIS
				}
			}*/
		}
	};
});
