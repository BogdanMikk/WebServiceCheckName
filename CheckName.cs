 using System.CodeDom.Compiler;
 using System.ServiceModel;
 using System.ServiceModel.Web;
 using System.ServiceModel.Activation;
 using System.Web;
 using Terrasoft;
 using Terrasoft.Common;
 using Terrasoft.Core;
 using Terrasoft.Core.DB;
 using Terrasoft.Core.Entities;
 using Terrasoft.Core.Store;
 using Terrasoft.Core.Scheduler;
 using Terrasoft.Core.Factories;
 using Terrasoft.Mail.Sender;
 using Terrasoft.UI.WebControls.Utilities.Json.Converters;
 using System;
 using System.IO;
 using System.Data;
 using System.Net;
 using System.Collections.Generic;
 using System.Linq;
 using System.Text;
 using System.Runtime.Serialization;

namespace Terrasoft.Configuration{
	
	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class UsrValidationName
	{
		[OperationContract]
		[WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped,
		ResponseFormat = WebMessageFormat.Json)]
        public string Validate(string UsrName, Guid UsrEmployeeId, Guid Id)
        {
        	try{
        		var userConnection = (UserConnection)HttpContext.Current.Session["UserConnection"];
        	List<string> names = new List<string>();
        	int count = 0;
        	string val = "none";
        	Guid emp = Guid.Empty;
        	emp = UsrEmployeeId; //сотрудник
        	val = UsrName; //название
            	Select selectQuery  = new Select(userConnection)
                    .Column("UsrName")
                    .Column("Name")
                    .From("Usrr")
                    .InnerJoin("Contact").On("Contact", "Id").IsEqual("Usrr", "UsrEmployeeId")
                    .Where("UsrName").IsEqual(new QueryParameter(val))
                    .And("Usrr", "Id").IsNotEqual(new QueryParameter(Id)) as Select;
                    //INNER JOIN Contact ON Contact.Id = Usrr.UsrEmployeeID ----- SQL query
					using (DBExecutor dbExecutor = userConnection.EnsureDBConnection())
					{
					    using (IDataReader reader = selectQuery .ExecuteReader(dbExecutor))
					    {
					        while (reader.Read())
					        {
					        	names.Add(reader.GetString(1));
					        }
					        string ArrayNames = string.Join(",", names.ToArray());
					        return ArrayNames;
					    }
					}
        	}
        	catch(Exception ex){
        		return ex.Message;
        	}
        }
    }
}
