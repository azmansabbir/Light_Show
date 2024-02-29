var date = new Date();
var vccd = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours()).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);
const testConfig =
{
      "Project": "Ideega UI Automation",
      "Env":"Main",
      "Language":"",
      "elementFinderURL":"https://colorlib.com/etc/regform/colorlib-regform-36/",
      //Mail COnfigurations
      "FromMailaddress": "udgo.sabbir@gmail.com",
      "FromAddressPassword": "",
      "ToMailAddress": ["sabbir.of@gmail.com"],
      "TeamsWebhookURL": "https://transportedlabs.webhook.office.com/webhookb2/206ce64b-f174-4a37-8334-25e1a767dbcc@fee95589-ad46-417d-9636-8b4078359ad9/IncomingWebhook/5923e8a6e6934ed2af2b4a16db2bb98f/a6b92662-3ec5-443a-8d4e-10db06594a3c",
      "MailServiceProvider": "Gmail",
      "MailNotification": "yes",
      "TeamsNotification": "yes",
      "Githubreportlink": ""
}

module.exports = { testConfig }